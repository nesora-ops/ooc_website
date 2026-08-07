"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormFeedback } from "@/components/forms/form-feedback";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";
import { consentField, emailField, phoneField, requiredText } from "@/lib/forms/schemas";
import { useWeb3Form } from "@/lib/forms/use-web3-form";

// Fields per source doc, "For Employers → Application form".
const schema = z.object({
  organisationName: requiredText("Organisation name"),
  industry: requiredText("Industry"),
  employeeCount: requiredText("Employee count"),
  locations: requiredText("Locations / cities"),
  scope: z.enum(["Entire organisation", "Specific locations or divisions"], {
    message: "Select the scope of certification.",
  }),
  contactName: requiredText("Contact name"),
  designation: requiredText("Designation"),
  workEmail: emailField,
  phone: phoneField,
  referralSource: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  consent: consentField,
});

type FormValues = z.input<typeof schema>;

export function EmployerApplicationForm() {
  const { state, submit } = useWeb3Form("OOC — Certification application");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      organisationName: "",
      industry: "",
      employeeCount: "",
      locations: "",
      contactName: "",
      designation: "",
      workEmail: "",
      phone: "",
      referralSource: "",
      notes: "",
      consent: false,
    },
  });

  if (state.status === "success" || state.status === "not-connected") {
    return (
      <FormFeedback
        status={state.status}
        title="Thank you — your application is with us."
        message={
          <>
            Our programme team will review your details and respond within{" "}
            <Placeholder>response time</Placeholder> with your eligibility confirmation, quotation,
            and proposed assessment plan. In the meantime, you can read how the assessment works on
            our certification page.
            {state.status === "not-connected" && (
              <p className="mt-3 italic">
                Form submission is not yet connected — your details were validated but not sent.
              </p>
            )}
          </>
        }
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((values) => submit(values))} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="organisationName"
            render={({ field }) => (
              <FormItem>
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employeeCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee count</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locations / cities</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scope"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Scope of certification</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select scope" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Entire organisation">Entire organisation</SelectItem>
                    <SelectItem value="Specific locations or divisions">
                      Specific locations or divisions
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workEmail"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="referralSource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anything you&apos;d like us to know?</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-3">
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

        {state.status === "error" && (
          <FormFeedback status="error" message={state.message ?? "Please try again."} />
        )}

        <Button type="submit" size="lg" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? "Submitting…" : "Submit application"}
        </Button>
      </form>
    </Form>
  );
}
