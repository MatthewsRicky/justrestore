"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  commissionSchema,
  type CommissionFormValues,
} from "@/lib/validations/commission-schema";

import { submitCommission } from "@/app/actions/submit-commission";

const inputClasses =
  "w-full border border-ink/20 bg-transparent px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-terracotta";

const labelClasses = "mb-2 block text-sm font-medium text-ink";

const errorClasses = "mt-1 text-sm text-red-700";

type FieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div>
      <label className={labelClasses}>
        {label}
        {required && <span className="ml-1 text-terracotta">*</span>}
      </label>

      {children}

      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
}

export default function CommissionForm() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommissionFormValues>({
    resolver: zodResolver(commissionSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      furnitureType: "",
      ownership: "already-own",
      material: "not-sure",
      dimensions: "",
      style: "",
      colours: "",
      location: "",
      budget: "",
      description: "",
      referenceLinks: "",
    },
  });

  const onSubmit: SubmitHandler<CommissionFormValues> = async (values) => {
    setSubmissionMessage("");
    setIsSuccess(false);

    const result = await submitCommission(values);

    setSubmissionMessage(result.message);
    setIsSuccess(result.success);

    if (result.success) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Contact details */}
      <section className="space-y-6">
        <div>
          <p className="editorial-label">01 / Your details</p>
          <h3 className="mt-2 font-display text-2xl text-ink">
            Let's get acquainted.
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full name" required error={errors.fullName?.message}>
            <input
              {...register("fullName")}
              className={inputClasses}
              placeholder="Your name"
              autoComplete="name"
            />
          </Field>

          <Field label="Email address" required error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              className={inputClasses}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </Field>

          <Field label="Phone number" error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              className={inputClasses}
              placeholder="Your phone number"
              autoComplete="tel"
            />
          </Field>

          <Field
            label="Your location"
            required
            error={errors.location?.message}
          >
            <input
              {...register("location")}
              className={inputClasses}
              placeholder="City and country"
              autoComplete="address-level2"
            />
          </Field>
        </div>
      </section>

      {/* Furniture details */}
      <section className="space-y-6">
        <div>
          <p className="editorial-label">02 / The piece</p>
          <h3 className="mt-2 font-display text-2xl text-ink">
            Tell me about your furniture.
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            Whether it's a treasured heirloom, a recent purchase, or something
            you're still looking for, let's start with the details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="What kind of furniture is it?"
            required
            error={errors.furnitureType?.message}
          >
            <input
              {...register("furnitureType")}
              className={inputClasses}
              placeholder="e.g. Sideboard, dresser, dining table"
            />
          </Field>

          <Field
            label="Do you already own the piece?"
            required
            error={errors.ownership?.message}
          >
            <select {...register("ownership")} className={inputClasses}>
              <option value="already-own">Yes, I already own it</option>
              <option value="planning-to-purchase">
                I'm planning to purchase it
              </option>
              <option value="other">Other</option>
            </select>
          </Field>

          <Field
            label="What is it made of?"
            required
            error={errors.material?.message}
          >
            <select {...register("material")} className={inputClasses}>
              <option value="not-sure">I'm not sure</option>
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="mdf">MDF</option>
              <option value="glass">Glass</option>
              <option value="mixed">A combination of materials</option>
            </select>
          </Field>

          <Field
            label="Approximate dimensions"
            error={errors.dimensions?.message}
          >
            <input
              {...register("dimensions")}
              className={inputClasses}
              placeholder="e.g. 150cm wide × 80cm high"
            />
          </Field>
        </div>
      </section>

      {/* Creative direction */}
      <section className="space-y-6">
        <div>
          <p className="editorial-label">03 / The creative direction</p>
          <h3 className="mt-2 font-display text-2xl text-ink">
            What do you have in mind?
          </h3>
        </div>

        <Field
          label="Describe your preferred style or look"
          error={errors.style?.message}
        >
          <textarea
            {...register("style")}
            rows={3}
            className={inputClasses}
            placeholder="Tell me about the look, mood, or finish you're imagining..."
          />
        </Field>

        <Field label="Colour preferences" error={errors.colours?.message}>
          <input
            {...register("colours")}
            className={inputClasses}
            placeholder="Any favourite colours or colours you'd like to avoid?"
          />
        </Field>

        <Field
          label="Reference images or inspiration links"
          error={errors.referenceLinks?.message}
        >
          <textarea
            {...register("referenceLinks")}
            rows={3}
            className={inputClasses}
            placeholder={
              "Paste image, Pinterest, or inspiration links here — one per line."
            }
          />

          <p className="mt-2 text-xs leading-6 text-muted">
            You can also send photographs of your furniture separately through
            WhatsApp after your initial enquiry. You don't need to upload
            anything here.
          </p>
        </Field>
      </section>

      {/* Project details */}
      <section className="space-y-6">
        <div>
          <p className="editorial-label">04 / Project details</p>
          <h3 className="mt-2 font-display text-2xl text-ink">
            Let's talk about the project.
          </h3>
        </div>

        <Field label="Approximate budget" error={errors.budget?.message}>
          <input
            {...register("budget")}
            className={inputClasses}
            placeholder="Optional — include an amount and currency if known"
          />
        </Field>

        <Field
          label="Tell me more about your project"
          required
          error={errors.description?.message}
        >
          <textarea
            {...register("description")}
            rows={6}
            className={inputClasses}
            placeholder="What would you like transformed? Is there a story behind the piece? Are there any particular details or requirements I should know about?"
          />
        </Field>
      </section>

      {/* Submission */}
      <div className="border-t border-ink/15 pt-8">
        {submissionMessage && (
          <p
            role="status"
            className={`mb-6 text-sm leading-6 ${
              isSuccess ? "text-green-800" : "text-red-700"
            }`}
          >
            {submissionMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm text-ivory transition-colors hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending enquiry..." : "Send commission enquiry"}
        </button>

        <p className="mt-4 text-xs leading-6 text-muted">
          This is an initial enquiry, not a confirmed booking. Sabah will review
          your project and get in touch to discuss the next steps.
        </p>
      </div>
    </form>
  );
}
