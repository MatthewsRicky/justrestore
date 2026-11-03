"use server";

import { contactSchema } from "@/lib/validations/contact-schema";
import { getResendClient } from "@/lib/email/resend";

type SubmitContactResult = {
  success: boolean;
  message: string;
};

const enquiryLabels: Record<string, string> = {
  general: "General enquiry",
  collaboration: "Collaboration",
  press: "Press",
  partnership: "Partnership",
  other: "Other",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContact(
  values: unknown,
): Promise<SubmitContactResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check your details and try again.",
    };
  }

  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!recipient || !sender) {
    console.error("Contact email environment variables are missing.");

    return {
      success: false,
      message: "The enquiry service is temporarily unavailable.",
    };
  }

  const data = parsed.data;

  try {
    const resend = getResendClient();

    const safeName = escapeHtml(data.fullName);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone || "Not provided");
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    const enquiryLabel = enquiryLabels[data.enquiryType];

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `${enquiryLabel} — ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #292522;">
          <h2>New JustRestore enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Enquiry type:</strong> ${enquiryLabel}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3>Message</h3>
          <p style="line-height: 1.7;">${safeMessage}</p>
        </div>
      `,
      text: `
New JustRestore enquiry

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Enquiry type: ${enquiryLabel}

Message:
${data.message}
      `,
    });

    if (error) {
      console.error("Resend contact email error:", error);

      return {
        success: false,
        message: "We couldn't send your enquiry. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your enquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact submission failed:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again shortly.",
    };
  }
}
