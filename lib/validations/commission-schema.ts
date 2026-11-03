import { z } from "zod";

export const commissionSchema = z.object({
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

  phone: z.string().trim().max(30, "Phone number is too long.").optional(),

  furnitureType: z
    .string()
    .trim()
    .min(2, "Please describe the furniture piece."),

  ownership: z.enum(["already-own", "planning-to-purchase", "other"], {
    error: "Please select an option.",
  }),

  material: z.enum(["wood", "metal", "mdf", "glass", "mixed", "not-sure"], {
    error: "Please select a material.",
  }),

  dimensions: z
    .string()
    .trim()
    .max(200, "Please shorten the dimensions.")
    .optional(),

  style: z.string().trim().max(500, "Please shorten your style description."),

  colours: z
    .string()
    .trim()
    .max(300, "Please shorten your colour preferences.")
    .optional(),

  location: z.string().trim().min(2, "Please enter your location."),

  budget: z
    .string()
    .trim()
    .max(100, "Please shorten your budget description.")
    .optional(),

  description: z
    .string()
    .trim()
    .min(10, "Please provide a little more detail about your project.")
    .max(5000, "Your description is too long."),

  referenceLinks: z
    .string()
    .trim()
    .max(2000, "Please limit your reference links to 2,000 characters.")
    .optional()
    .refine(
      (value) => {
        if (!value) return true;

        const links = value
          .split(/\r?\n/)
          .map((link) => link.trim())
          .filter(Boolean);

        return links.every((link) => {
          try {
            const url = new URL(link);
            return url.protocol === "https:" || url.protocol === "http:";
          } catch {
            return false;
          }
        });
      },
      {
        message: "Please enter valid HTTP or HTTPS links, one per line.",
      },
    ),
});

export type CommissionFormValues = z.infer<typeof commissionSchema>;
