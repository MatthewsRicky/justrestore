"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  workshopSchema,
  type WorkshopFormValues,
} from "@/lib/validations/workshop-schema";
import { submitWorkshop } from "@/app/actions/submit-workshop";

const fieldClassName =
  "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-terracotta";

const labelClassName =
  "mb-2 block text-xs uppercase tracking-[0.14em] text-ink";

export default function WorkshopEnquiryForm() {
  const [submission, setSubmission] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WorkshopFormValues>({
    resolver: zodResolver(workshopSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      workshopType: "scheduled-workshop",
      preferredDate: "",
      dateFlexibility: "flexible",
      participants: 1,
      experience: "beginner",
      requirements: "",
    },
  });

  const workshopType = watch("workshopType");

  async function onSubmit(values: WorkshopFormValues) {
    setSubmission(null);

    const result = await submitWorkshop(values);

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
        <div className="sm:col-span-2">
          <label htmlFor="workshopType" className={labelClassName}>
            What are you interested in?
          </label>

          <select
            id="workshopType"
            {...register("workshopType")}
            className={fieldClassName}
          >
            <option value="scheduled-workshop">
              A scheduled group workshop
            </option>
            <option value="private-masterclass">A private masterclass</option>
          </select>

          <p className="mt-2 text-xs leading-6 text-muted">
            {workshopType === "private-masterclass"
              ? "Arrange a personalised session for yourself or a group."
              : "Ask about upcoming workshops, availability or group bookings."}
          </p>
        </div>

        <div>
          <label htmlFor="workshop-fullName" className={labelClassName}>
            Your name
          </label>

          <input
            id="workshop-fullName"
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
          <label htmlFor="workshop-email" className={labelClassName}>
            Email address
          </label>

          <input
            id="workshop-email"
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
          <label htmlFor="workshop-phone" className={labelClassName}>
            Phone number{" "}
            <span className="normal-case text-muted">(optional)</span>
          </label>

          <input
            id="workshop-phone"
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
          <label htmlFor="workshop-participants" className={labelClassName}>
            Number of participants
          </label>

          <input
            id="workshop-participants"
            type="number"
            min={1}
            max={30}
            {...register("participants", { valueAsNumber: true })}
            className={fieldClassName}
            aria-invalid={!!errors.participants}
          />

          {errors.participants && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.participants.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="workshop-date" className={labelClassName}>
            Preferred date{" "}
            <span className="normal-case text-muted">(optional)</span>
          </label>

          <input
            id="workshop-date"
            type="date"
            {...register("preferredDate")}
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="workshop-flexibility" className={labelClassName}>
            Date flexibility
          </label>

          <select
            id="workshop-flexibility"
            {...register("dateFlexibility")}
            className={fieldClassName}
          >
            <option value="specific-date">I have a specific date</option>
            <option value="flexible">I'm flexible</option>
            <option value="not-sure">I'm not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="workshop-experience" className={labelClassName}>
            Your painting experience
          </label>

          <select
            id="workshop-experience"
            {...register("experience")}
            className={fieldClassName}
          >
            <option value="beginner">I'm a complete beginner</option>
            <option value="some-experience">I've tried it before</option>
            <option value="experienced">I have some experience</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="workshop-requirements" className={labelClassName}>
            Anything else you'd like me to know?
            <span className="normal-case text-muted"> (optional)</span>
          </label>

          <textarea
            id="workshop-requirements"
            rows={6}
            placeholder="Tell me about your plans, group, preferred techniques or any questions..."
            {...register("requirements")}
            className={`${fieldClassName} resize-y`}
            aria-invalid={!!errors.requirements}
          />

          {errors.requirements && (
            <p className="mt-2 text-sm text-terracotta">
              {errors.requirements.message}
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
        {isSubmitting ? "Sending enquiry..." : "Send workshop enquiry"}
      </button>
    </form>
  );
}
