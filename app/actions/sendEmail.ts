"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { contactSchema } from "@/lib/contactSchema";
import { rateLimit } from "@/lib/rateLimit";

const motifLabels: Record<string, string> = {
  rdv: "Demande de rendez-vous",
  renouvellement: "Renouvellement d'ordonnance",
  dossier: "Dossier médical",
  autre: "Autre question",
};

export async function sendEmail(data: unknown) {
  // validation côté serveur
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Données invalides");
  }

  const { nom, prenom, email, telephone, motif, message, website } = result.data;

  // honeypot
  if (website?.trim()) {
    return;
  }

  // rate limit
  const ip = (await headers()).get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip, 3000)) {
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">

                <tr>
                  <td style="padding: 28px 30px; background-color: #0f172a;">
                    <p style="margin:0; color:#ffffff; font-size: 15px; font-weight: 700;">
                      Cabinet du Dr [X] — Nouvelle demande
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 24px 30px 8px 30px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eef0f3;">
                          <p style="margin:0 0 4px 0; color:#94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Motif</p>
                          <p style="margin:0; color:#0f172a; font-size: 15px; font-weight: 600;">${motifLabels[motif] ?? motif}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eef0f3;">
                          <p style="margin:0 0 4px 0; color:#94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Nom / Prénom</p>
                          <p style="margin:0; color:#0f172a; font-size: 15px; font-weight: 600;">${prenom} ${nom}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eef0f3;">
                          <p style="margin:0 0 4px 0; color:#94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">E-mail</p>
                          <p style="margin:0;"><a href="mailto:${email}" style="color:#2563c4; font-size: 15px; font-weight: 600; text-decoration:none;">${email}</a></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #eef0f3;">
                          <p style="margin:0 0 4px 0; color:#94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Téléphone</p>
                          <p style="margin:0; color:#0f172a; font-size: 15px; font-weight: 600;">${telephone || "Non renseigné"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 0 4px 0;">
                          <p style="margin:0 0 8px 0; color:#94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Message</p>
                          <p style="margin:0; color:#334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 20px 30px 30px 30px;">
                    <a href="mailto:${email}" style="display:inline-block; padding: 12px 26px; background:#2563c4; border-radius: 10px; color:#ffffff; font-size: 14px; font-weight: 700; text-decoration:none;">
                      Répondre à ${prenom}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 16px 30px; background-color: #f8fafc; border-top: 1px solid #eef0f3;">
                    <p style="margin:0; color:#94a3b8; font-size: 11px;">
                      Message envoyé automatiquement depuis le formulaire de contact du site
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `CABINET DR [X] — Nouvelle demande de ${prenom} ${nom}`,
    html: emailHtml,
    replyTo: email,
  });
}