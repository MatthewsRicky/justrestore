import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Your name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),

  enquiryType: z.enum([
    "general",
    "collaboration",
    "press",
    "partnership",
    "other",
  ]),

  message: z
    .string()
    .trim()
    .min(10, "Please provide a little more detail.")
    .max(5000, "Your message is too long."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
