"use server";

import { commissionSchema } from "@/lib/validations/commission-schema";
import { getResendClient } from "@/lib/email/resend";

type SubmitCommissionResult = {
  success: boolean;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitCommission(
  values: unknown,
): Promise<SubmitCommissionResult> {
  const parsed = commissionSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form and correct the highlighted fields.",
    };
  }

  const data = parsed.data;

  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!recipient || !sender) {
    console.error("Commission email environment variables are not configured.");

    return {
      success: false,
      message: "The enquiry could not be sent. Please try again later.",
    };
  }

  const referenceLinks = data.referenceLinks
    ?.split(/\r?\n/)
    .map((link) => link.trim())
    .filter(Boolean);

  const referenceLinksHtml =
    referenceLinks && referenceLinks.length > 0
      ? referenceLinks
          .map(
            (link) =>
              `<li><a href="${escapeHtml(link)}">${escapeHtml(link)}</a></li>`,
          )
          .join("")
      : "<li>No reference links provided.</li>";

  const fields = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Furniture type", data.furnitureType],
    ["Ownership", data.ownership],
    ["Material", data.material],
    ["Dimensions", data.dimensions || "Not provided"],
    ["Preferred style", data.style || "Not specified"],
    ["Colour preferences", data.colours || "Not specified"],
    ["Location", data.location],
    ["Budget", data.budget || "Not provided"],
  ];

  const detailsHtml = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #e5e5e5;font-weight:bold;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:8px;border-bottom:1px solid #e5e5e5;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join("");

  try {
    const resend = getResendClient();

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `New furniture commission enquiry — ${data.fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#252525;line-height:1.6;">
          <h2>New Furniture Commission Enquiry</h2>

          <h3>Contact and Project Details</h3>

          <table style="width:100%;border-collapse:collapse;">
            ${detailsHtml}
          </table>

          <h3>Project Description</h3>
          <p style="white-space:pre-wrap;">
            ${escapeHtml(data.description)}
          </p>

          <h3>Reference Images / Inspiration</h3>
          <ul>
            ${referenceLinksHtml}
          </ul>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />

          <p>
            You can reply directly to this email to contact
            ${escapeHtml(data.fullName)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend commission email error:", error);

      return {
        success: false,
        message: "We couldn't send your enquiry. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Your commission enquiry has been sent. Thank you for getting in touch!",
    };
  } catch (error) {
    console.error("Commission submission error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your enquiry. Please try again.",
    };
  }
}
