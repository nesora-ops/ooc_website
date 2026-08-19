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
import { Textarea } from "@/components/ui/textarea";
import { consentField, emailField, phoneField, requiredText } from "@/lib/forms/schemas";
import { useFormSubmit } from "@/lib/forms/use-form-submit";

// Fields per source doc, "Channel Partners → Partner application form".
const schema = z.object({
  firmName: requiredText("Firm name"),
  partnerType: requiredText("Partner type"),
  yearsInPractice: requiredText("Years in practice"),
  clientBase: requiredText("Approximate client base"),
  locationsServed: requiredText("Locations served"),
  contactName: requiredText("Contact name"),
  designation: requiredText("Designation"),
  workEmail: emailField,
  phone: phoneField,
  motivation: requiredText("This field"), // label reads "Why partnership interests you"
  consent: consentField,
});

type FormValues = z.input<typeof schema>;

const textFields = [
  { name: "firmName", label: "Firm name" },
  { name: "partnerType", label: "Partner type" },
  { name: "yearsInPractice", label: "Years in practice" },
  { name: "clientBase", label: "Approximate client base" },
  { name: "locationsServed", label: "Locations served" },
  { name: "contactName", label: "Contact name" },
  { name: "designation", label: "Designation" },
] as const;

export function PartnerApplicationForm() {
  const { state, submit } = useFormSubmit("partner");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firmName: "",
      partnerType: "",
      yearsInPractice: "",
      clientBase: "",
      locationsServed: "",
      contactName: "",
      designation: "",
      workEmail: "",
      phone: "",
      motivation: "",
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
            The partnerships team will review your details and respond within{" "}
            <Placeholder>response time</Placeholder>. We look forward to learning more about your
            practice.
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
          {textFields.map((f) => (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{f.label}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
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
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why partnership interests you</FormLabel>
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
