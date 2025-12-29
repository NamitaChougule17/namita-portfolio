"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Initialize Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const message = formData.get("message");

  // ✅ Server-side validation
  if (!validateString(senderName, 100)) {
    return { error: "Invalid sender name" };
  }
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    // ✅ Send email via Resend API
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Resend default verified sender
      to: "namitac9817@gmail.com", // Replace with your email address
      subject: `📩 Message from ${senderName} via Contact Form`,
      replyTo: senderEmail as string,

      // ✅ Plain-text version for better deliverability
      text: `
      You received a new message from your portfolio contact form:

      👤 Name: ${senderName}
      📧 Email: ${senderEmail}

      💬 Message:
      ${message}
      `,

      // ✅ HTML/React version (for richer formatting)
      react: React.createElement(ContactFormEmail, {
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });

    console.log("✅ Email sent successfully:", data);
    return { data };
  } catch (error: unknown) {
    console.error("❌ Email send error:", error);
    return { error: getErrorMessage(error) };
  }
};
