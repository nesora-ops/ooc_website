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
import { consentField, emailField, optionalPhoneField, requiredText } from "@/lib/forms/schemas";
import { useWeb3Form } from "@/lib/forms/use-web3-form";

const enquiryTypes = [
  "Certification",
  "Partnership",
  "Job seeker question",
  "Media",
  "Other",
] as const;

// Fields per source doc, "Contact → Enquiry form".
const schema = z.object({
  name: requiredText("Name"),
  email: emailField,
  phone: optionalPhoneField,
  enquiryType: z.enum(enquiryTypes, { message: "Select an enquiry type." }),
  message: requiredText("Message"),
  consent: consentField,
});

type FormValues = z.input<typeof schema>;

export function ContactForm() {
  const { state, submit } = useWeb3Form("OOC — Contact enquiry");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", consent: false },
  });

  if (state.status === "success" || state.status === "not-connected") {
    return (
      <FormFeedback
        status={state.status}
        title="Thank you — your message is on its way."
        message={
          <>
            A member of the team will come back to you within{" "}
            <Placeholder>response time</Placeholder>. If your question is about certification, you
            may find an immediate answer on our certification page.
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
      <form
        onSubmit={form.handleSubmit((values) => submit(values))}
        className="space-y-6 !rounded-none !border-0 !bg-transparent !p-0 !shadow-none"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="enquiryType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enquiry type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {enquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
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
          {state.status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </form>
    </Form>
  );
}
