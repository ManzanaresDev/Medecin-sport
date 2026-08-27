import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  prenom: z.string().min(2, "Le prénom est requis"),
  email: z.string().email("E-mail invalide"),
  telephone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  motif: z.enum(["rdv", "renouvellement", "dossier", "autre"]),
  message: z.string().min(5, "Merci de préciser votre demande en quelques mots."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Merci de cocher cette case pour envoyer votre message.",
    }),
  }),
  website: z.string().optional(), // honeypot anti-bot
});

export type ContactFormData = z.infer<typeof contactSchema>;