"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact-schema";
import { submitContact } from "@/app/actions/submit-contact";

type SubmissionStatus = {
  success: boolean;
  message: string;
};

const fieldClassName =
  "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-terracotta";

const labelClassName =
  "mb-2 block text-xs uppercase tracking-[0.14em] text-ink";

export default function GeneralEnquiryForm() {
  const [submission, setSubmission] = useState<SubmissionStatus | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      enquiryType: "general",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmission(null);

    const result = await submitContact(values);

    setSubmission(result);

    if (result.success) {
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 max-w-3xl"
      noValidate
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClassName}>
            Your name
          </label>

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            {...register("fullName")}
            className={fieldClassName}
            aria-invalid={!!errors.fullName}
          />

          {errors.fullName && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...register("email")}
            className={fieldClassName}
            aria-invalid={!!errors.email}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone number{" "}
            <span className="normal-case text-muted">(optional)</span>
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            {...register("phone")}
            className={fieldClassName}
            aria-invalid={!!errors.phone}
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enquiryType" className={labelClassName}>
            What is this about?
          </label>

          <select
            id="enquiryType"
            {...register("enquiryType")}
            className={fieldClassName}
          >
            <option value="general">General enquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="press">Press enquiry</option>
            <option value="partnership">Partnership</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClassName}>
            Your message
          </label>

          <textarea
            id="message"
            rows={7}
            placeholder="Tell me a little about what you have in mind..."
            {...register("message")}
            className={`${fieldClassName} resize-y`}
            aria-invalid={!!errors.message}
          />

          {errors.message && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      {submission && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-6 border p-4 text-sm leading-6 ${
            submission.success
              ? "border-green-800/20 bg-green-800/5 text-green-900"
              : "border-terracotta/30 bg-terracotta/5 text-terracotta"
          }`}
        >
          {submission.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center justify-center bg-ink px-8 py-4 text-xs uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending enquiry..." : "Send enquiry"}
      </button>
    </form>
  );
}
