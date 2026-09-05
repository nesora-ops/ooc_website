"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";

import { FormFeedback } from "@/components/forms/form-feedback";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox } from "@/components/ui/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/lib/data/countries";
import { INDUSTRIES, OTHER_INDUSTRY } from "@/lib/data/industries";
import { consentField, emailField, requiredText } from "@/lib/forms/schemas";
import { useFormSubmit } from "@/lib/forms/use-form-submit";
import { cn } from "@/lib/utils";

// Field-for-field mirror of CertifyDB's organisation registration form
// (Code/app/register/page.tsx), including its three-step shape, so an
// application raised here carries exactly the same data as one raised inside
// the platform. The password is sent on to CertifyDB, which creates the
// Supabase Auth account; the organisation itself is only created once an admin
// transfers the application from the enquiries console.
const employeeSizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const countryOptions = [...COUNTRIES, "Other"];

const schema = z
  .object({
    orgName: requiredText("Organisation name"),
    industry: requiredText("Industry"),
    industryOther: z.string().trim().optional(),
    employees: requiredText("Employee count"),
    country: requiredText("Country"),
    countryOther: z.string().trim().optional(),
    city: requiredText("City"),
    address: requiredText("Address"),
    website: z.string().trim().optional(),
    contactName: requiredText("Full name"),
    contactTitle: requiredText("Job title"),
    contactEmail: emailField,
    // Validated with the same library that renders the input, so the rule and
    // the country selector can never drift apart.
    contactPhone: z
      .string()
      .trim()
      .min(1, "Phone number is required.")
      .refine((value) => isValidPhoneNumber(value), "Enter a valid phone number."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
    termsAccepted: consentField,
  })
  .refine((values) => values.industry !== OTHER_INDUSTRY || !!values.industryOther?.trim(), {
    message: "Please specify your industry.",
    path: ["industryOther"],
  })
  .refine((values) => values.country !== "Other" || !!values.countryOther?.trim(), {
    message: "Please specify your country.",
    path: ["countryOther"],
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type FormValues = z.input<typeof schema>;

const STEPS = [
  { number: 1, label: "Organisation" },
  { number: 2, label: "Admin Contact" },
  { number: 3, label: "Security" },
] as const;

// Which fields each step owns. Advancing runs zod over just these, so a later
// step's empty fields never block an earlier one.
const STEP_FIELDS: Record<number, (keyof FormValues)[]> = {
  1: ["orgName", "industry", "employees", "country", "city", "address"],
  2: ["contactName", "contactTitle", "contactEmail", "contactPhone"],
  3: ["password", "confirmPassword", "termsAccepted"],
};

export function EmployerApplicationForm() {
  const { state, submit } = useFormSubmit("certification");
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      orgName: "",
      industry: "",
      industryOther: "",
      employees: "",
      country: "",
      countryOther: "",
      city: "",
      address: "",
      website: "",
      contactName: "",
      contactTitle: "",
      contactEmail: "",
      contactPhone: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const industry = useWatch({ control: form.control, name: "industry" });
  const country = useWatch({ control: form.control, name: "country" });

  /**
   * Per-step gate. Field-level rules go through zod so errors render in the
   * same FormMessage slots as the rest of the form; the cross-field rules are
   * checked by hand because zod skips object-level refinements while any other
   * field in the object is still empty.
   */
  async function validateStep(current: number) {
    let valid = await form.trigger(STEP_FIELDS[current], { shouldFocus: true });
    const values = form.getValues();

    if (current === 1) {
      if (values.industry === OTHER_INDUSTRY && !values.industryOther?.trim()) {
        form.setError("industryOther", { message: "Please specify your industry." });
        valid = false;
      }
      if (values.country === "Other" && !values.countryOther?.trim()) {
        form.setError("countryOther", { message: "Please specify your country." });
        valid = false;
      }
    }

    if (current === 3 && values.password !== values.confirmPassword) {
      form.setError("confirmPassword", { message: "Passwords do not match." });
      valid = false;
    }

    return valid;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!(await validateStep(step))) return;
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    await form.handleSubmit(async (values) => {
      const result = await submit(values);
      // CertifyDB rejects an address that already has an auth account. That is
      // a step 2 problem, so send the applicant back to the field they have to
      // change rather than stranding them on the security step.
      if (result.status === "error" && /email/i.test(result.message ?? "")) setStep(2);
    })();
  }

  if (state.status === "success" || state.status === "not-connected") {
    return (
      <FormFeedback
        status={state.status}
        title="Thank you. Your application is with us."
        message={
          <>
            Our programme team will review your details and respond within{" "}
            <Placeholder>response time</Placeholder> with your eligibility confirmation, quotation,
            and proposed assessment plan. In the meantime, you can read how the assessment works on
            our certification page.
            {state.status === "not-connected" && (
              <p className="mt-3 italic">
                Form submission is not yet connected. Your details were validated but not sent.
              </p>
            )}
          </>
        }
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <ol className="flex items-center gap-2 sm:gap-4" aria-label="Application progress">
          {STEPS.map((s, index) => {
            const reached = step >= s.number;
            return (
              <li key={s.number} className="flex flex-1 items-center gap-2 sm:gap-3">
                <span
                  aria-current={step === s.number ? "step" : undefined}
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors",
                    reached ? "bg-teal text-white" : "bg-muted text-muted-foreground"
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "hidden text-sm font-medium sm:block",
                    reached ? "text-navy-ink" : "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className={cn(
                      "h-px flex-1 transition-colors",
                      step > s.number ? "bg-teal" : "bg-border"
                    )}
                  />
                )}
              </li>
            );
          })}
        </ol>

        {step === 1 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="orgName"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Organisation name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Combobox
                      options={INDUSTRIES}
                      value={field.value}
                      onChange={field.onChange}
                      searchPlaceholder="Search industry..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {industry === OTHER_INDUSTRY && (
              <FormField
                control={form.control}
                name="industryOther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your industry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="employees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee count</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {employeeSizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Combobox
                      options={countryOptions}
                      value={field.value}
                      onChange={field.onChange}
                      searchPlaceholder="Search country..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {country === "Other" && (
              <FormField
                control={form.control}
                name="countryOther"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specify country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Website (optional)</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    {/* The library ships its own markup, so the OOC input shell
                        is applied to the wrapper and the inner field is made
                        transparent rather than restyled piece by piece. */}
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={field.value}
                      onChange={(value) => field.onChange(value ?? "")}
                      onBlur={field.onBlur}
                      className={cn(
                        "flex h-12 w-full items-center gap-2 rounded-xl border border-input bg-white/80 px-4 transition-[border-color,box-shadow]",
                        "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
                        "[&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:text-base [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:md:text-sm",
                        "[&_.PhoneInputCountrySelect]:cursor-pointer [&_.PhoneInputCountryIcon]:shadow-none"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        className="pr-11"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted-foreground transition-colors hover:text-teal"
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" aria-hidden />
                        ) : (
                          <Eye className="size-4" aria-hidden />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirm ? "text" : "password"}
                        autoComplete="new-password"
                        className="pr-11"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((prev) => !prev)}
                        aria-label={showConfirm ? "Hide password" : "Show password"}
                        className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted-foreground transition-colors hover:text-teal"
                      >
                        {showConfirm ? (
                          <EyeOff className="size-4" aria-hidden />
                        ) : (
                          <Eye className="size-4" aria-hidden />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start gap-3 sm:col-span-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1">
                    <FormLabel className="font-normal">
                      I agree to the processing of this information in accordance with the Privacy
                      Policy.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
        )}

        {state.status === "error" && (
          <FormFeedback status="error" message={state.message ?? "Please try again."} />
        )}

        <div className="flex flex-wrap items-center gap-3">
          {step > 1 && (
            <Button type="button" size="lg" variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          <Button type="submit" size="lg" disabled={state.status === "submitting"}>
            {step < 3
              ? "Continue"
              : state.status === "submitting"
                ? "Submitting…"
                : "Submit application"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
