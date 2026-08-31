"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import { sendEmail } from "@/app/actions/sendEmail";
import styles from "./ContactPage.module.css";

interface DayHours {
  id: number;
  name: string;
  hours: string[];
  closed?: boolean;
}

const DAYS: DayHours[] = [
  { id: 1, name: "Lun", hours: ["8h–12h", "14h–18h"] },
  { id: 2, name: "Mar", hours: ["8h–12h", "14h–18h"] },
  { id: 3, name: "Mer", hours: ["8h–12h"] },
  { id: 4, name: "Jeu", hours: ["8h–12h", "14h–19h"] },
  { id: 5, name: "Ven", hours: ["8h–12h", "14h–18h"] },
  { id: 6, name: "Sam", hours: ["8h–12h"], closed: true },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { motif: "rdv" },
  });

  const todayId = useMemo(() => {
    const jsDay = new Date().getDay();
    return jsDay >= 1 && jsDay <= 6 ? jsDay : null;
  }, []);

  const [serverError, setServerError] = React.useState("");

  // const onSubmit = async (data: ContactFormData) => {
  //   try {
  //     setServerError('');
  //     await sendEmail(data);
  //     reset();
  //   } catch (err) {
  //     console.error(err);
  //     setServerError("Une erreur est survenue, merci de réessayer ou d'appeler le cabinet.");
  //   }
  // };

  // Simulation d'envoie de formulaire => Commenter la fonction et décommenter la fonction précédente pour restituir l'envoie!
  const onSubmit = async (data: ContactFormData) => {
    // TODO: réactiver l'envoi réel une fois nodemailer configuré
    // await sendEmail(data);

    console.log(
      "Données du formulaire (envoi désactivé pour le moment) :",
      data,
    );
    reset();
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <section className={styles.formSection} id="contact">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Demande non urgente</p>
            <h2 className={styles.h2}>Contacter le cabinet</h2>
          </div>

          {!isSubmitSuccessful && (
            <div className={styles.formShell}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="nom">
                      Nom
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="nom"
                      placeholder="Dupont"
                      {...register("nom")}
                    />
                    {errors.nom && (
                      <p
                        className={`${styles.formError} ${styles.formErrorShow}`}
                      >
                        {errors.nom.message}
                      </p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="prenom">
                      Prénom
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="prenom"
                      placeholder="Marie"
                      {...register("prenom")}
                    />
                    {errors.prenom && (
                      <p
                        className={`${styles.formError} ${styles.formErrorShow}`}
                      >
                        {errors.prenom.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      E-mail
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      id="email"
                      placeholder="marie.dupont@email.fr"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p
                        className={`${styles.formError} ${styles.formErrorShow}`}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="telephone">
                      Téléphone
                    </label>
                    <input
                      className={styles.input}
                      type="tel"
                      id="telephone"
                      placeholder="06 00 00 00 00"
                      {...register("telephone")}
                    />
                    {errors.telephone && (
                      <p
                        className={`${styles.formError} ${styles.formErrorShow}`}
                      >
                        {errors.telephone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label}>Motif de la demande</label>
                    <div className={styles.radioGroup}>
                      {[
                        { value: "rdv", label: "Demande de rendez-vous" },
                        {
                          value: "renouvellement",
                          label: "Renouvellement d'ordonnance",
                        },
                        { value: "dossier", label: "Dossier médical" },
                        { value: "autre", label: "Autre question" },
                      ].map((opt) => (
                        <label className={styles.radioOpt} key={opt.value}>
                          <input
                            type="radio"
                            value={opt.value}
                            {...register("motif")}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className={styles.textarea}
                      id="message"
                      placeholder="Décrivez brièvement l'objet de votre demande (sans détail médical)."
                      {...register("message")}
                    />
                    {errors.message && (
                      <p
                        className={`${styles.formError} ${styles.formErrorShow}`}
                      >
                        {errors.message.message}
                      </p>
                    )}
                    <p className={styles.formHint}>
                      Merci de ne pas indiquer de symptômes, traitements ou
                      informations médicales dans ce message : ce formulaire
                      sert uniquement à la prise de contact administrative. Pour
                      toute question médicale, contactez le secrétariat par
                      téléphone au [téléphone].
                    </p>
                  </div>
                </div>

                {/* Honeypot anti-bot, invisible pour les humains */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                >
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

                <div className={styles.consent}>
                  <input
                    type="checkbox"
                    id="consent"
                    {...register("consent")}
                  />
                  <p>
                    J'accepte que ces informations soient utilisées par le
                    cabinet pour traiter ma demande, conformément à notre{" "}
                    <Link
                      href="/confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </p>
                </div>
                {errors.consent && (
                  <p className={`${styles.formError} ${styles.formErrorShow}`}>
                    {errors.consent.message}
                  </p>
                )}

                {serverError && (
                  <p className={`${styles.formError} ${styles.formErrorShow}`}>
                    {serverError}
                  </p>
                )}

                <div className={styles.formFoot}>
                  <p className={styles.urgenceNote}>
                    En cas d'urgence médicale, n'utilisez pas ce formulaire et
                    appelez le{" "}
                    <span className={styles.emergency}>15 (SAMU)</span> ou
                    rendez-vous aux urgences les plus proches.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.btn} ${styles.btnPrimary}`}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {isSubmitSuccessful && !serverError && (
            <div className={`${styles.successBox} ${styles.successBoxShow}`}>
              <p className={styles.sTitle}>Message envoyé</p>
              <p>
                Le secrétariat vous répond sous 48 heures ouvrées. Pour une
                urgence, appelez directement le cabinet au [téléphone].
              </p>
            </div>
          )}
        </section>

        {/* <footer className={styles.footer}>
          <div className={styles.footRow}>
            <span>Dr [X] — Médecin généraliste — RPPS [RPPS]</span>
            <span className={styles.emergency}>Urgence vitale : appelez le 15</span>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
