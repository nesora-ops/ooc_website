"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormFeedback } from "@/components/forms/form-feedback";
import { Button } from "@/components/ui/button";
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
import { emailField, requiredText } from "@/lib/forms/schemas";
import { useWeb3Form } from "@/lib/forms/use-web3-form";

// Fields per source doc, "News & Press → Media enquiry form".
const schema = z.object({
  name: requiredText("Name"),
  outlet: requiredText("Publication / outlet"),
  email: emailField,
  deadline: z.string().trim().optional(),
  enquiry: requiredText("Enquiry"),
});

type FormValues = z.input<typeof schema>;

export function MediaEnquiryForm() {
  const { state, submit } = useWeb3Form("OOC — Media enquiry");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", outlet: "", email: "", deadline: "", enquiry: "" },
  });

  if (state.status === "success" || state.status === "not-connected") {
    return (
      <FormFeedback
        status={state.status}
        title="Thank you — we have your enquiry."
        message={
          <>
            If you&apos;ve indicated a deadline, we&apos;ll prioritise accordingly.
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
            name="outlet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publication / outlet</FormLabel>
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
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deadline (optional)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="enquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enquiry</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {state.status === "error" && (
          <FormFeedback status="error" message={state.message ?? "Please try again."} />
        )}

        <Button type="submit" size="lg" disabled={state.status === "submitting"}>
          {state.status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
      </form>
    </Form>
  );
}
