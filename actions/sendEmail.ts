"use server";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "skphat789@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
    console.log("sent email", data);
  } catch (error) {
    console.log(error);
  }
}
