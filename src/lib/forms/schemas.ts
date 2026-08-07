import { z } from "zod";

export const requiredText = (label: string) =>
  z.string().trim().min(1, `${label} is required.`);

export const emailField = z
  .string()
  .trim()
  .min(1, "Email is required.")
  .email("Enter a valid email address.");

export const phoneField = z.string().trim().min(1, "Phone number is required.");

export const optionalPhoneField = z.string().trim().optional();

export const consentField = z.boolean().refine((value) => value === true, {
  message: "You must agree to the Privacy Policy to continue.",
});
