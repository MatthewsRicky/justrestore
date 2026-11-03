"use server";

import { workshopSchema } from "@/lib/validations/workshop-schema";
import { getResendClient } from "@/lib/email/resend";

type SubmitWorkshopResult = {
  success: boolean;
  message: string;
};

const workshopLabels: Record<string, string> = {
  "scheduled-workshop": "Scheduled group workshop",
  "private-masterclass": "Private masterclass",
};

const experienceLabels: Record<string, string> = {
  beginner: "Beginner",
  "some-experience": "Some experience",
  experienced: "Experienced",
};

const flexibilityLabels: Record<string, string> = {
  "specific-date": "Specific date",
  flexible: "Flexible",
  "not-sure": "Not sure yet",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitWorkshop(
  values: unknown,
): Promise<SubmitWorkshopResult> {
  const parsed = workshopSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check your details and try again.",
    };
  }

  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!recipient || !sender) {
    console.error("Workshop email environment variables are missing.");

    return {
      success: false,
      message: "The enquiry service is temporarily unavailable.",
    };
  }

  const data = parsed.data;

  try {
    const resend = getResendClient();

    const name = escapeHtml(data.fullName);
    const email = escapeHtml(data.email);
    const phone = escapeHtml(data.phone || "Not provided");
    const date = escapeHtml(data.preferredDate || "Not specified");
    const requirements = escapeHtml(
      data.requirements || "No additional requirements.",
    ).replace(/\n/g, "<br />");

    const workshopType = workshopLabels[data.workshopType];
    const flexibility = flexibilityLabels[data.dateFlexibility];
    const experience = experienceLabels[data.experience];

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `${workshopType} enquiry — ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #292522;">
          <h2>New JustRestore workshop enquiry</h2>

          <h3>Contact details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <h3>Workshop details</h3>
          <p><strong>Enquiry:</strong> ${workshopType}</p>
          <p><strong>Preferred date:</strong> ${date}</p>
          <p><strong>Date flexibility:</strong> ${flexibility}</p>
          <p><strong>Participants:</strong> ${data.participants}</p>
          <p><strong>Experience:</strong> ${experience}</p>

          <h3>Additional information</h3>
          <p style="line-height: 1.7;">${requirements}</p>
        </div>
      `,
      text: `
New JustRestore workshop enquiry

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Workshop type: ${workshopType}
Preferred date: ${data.preferredDate || "Not specified"}
Date flexibility: ${flexibility}
Participants: ${data.participants}
Experience: ${experience}

Additional information:
${data.requirements || "None provided."}
      `,
    });

    if (error) {
      console.error("Resend workshop email error:", error);

      return {
        success: false,
        message: "We couldn't send your enquiry. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your workshop enquiry has been sent.",
    };
  } catch (error) {
    console.error("Workshop submission failed:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again shortly.",
    };
  }
}
