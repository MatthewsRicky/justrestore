import { z } from "zod";

export const workshopSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name.").max(100),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),

  phone: z.string().trim().max(30).optional().or(z.literal("")),

  workshopType: z.enum(["scheduled-workshop", "private-masterclass"]),

  preferredDate: z.string().optional(),

  dateFlexibility: z.enum(["specific-date", "flexible", "not-sure"]),

  participants: z.number().int().min(1).max(30),

  experience: z.enum(["beginner", "some-experience", "experienced"]),

  requirements: z
    .string()
    .trim()
    .max(3000, "Please keep your message under 3,000 characters.")
    .optional()
    .or(z.literal("")),
});

export type WorkshopFormValues = z.infer<typeof workshopSchema>;
