'use client';

import React, { useEffect, useMemo, useState, type JSX } from 'react';
import Link from 'next/link';
import styles from './ContactPage.module.css';

type Motif = 'rdv' | 'renouvellement' | 'dossier' | 'autre';

interface DayHours {
  id: number; // 1 = lundi ... 6 = samedi, aligné sur Date.getDay()
  name: string;
  hours: string[];
  closed?: boolean;
}

const DAYS: DayHours[] = [
  { id: 1, name: 'Lun', hours: ['8h–12h', '14h–18h'] },
  { id: 2, name: 'Mar', hours: ['8h–12h', '14h–18h'] },
  { id: 3, name: 'Mer', hours: ['8h–12h'] },
  { id: 4, name: 'Jeu', hours: ['8h–12h', '14h–19h'] },
  { id: 5, name: 'Ven', hours: ['8h–12h', '14h–18h'] },
  { id: 6, name: 'Sam', hours: ['8h–12h'], closed: true },
];

interface FormState {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  motif: Motif;
  message: string;
  consent: boolean;
}

const initialForm: FormState = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  motif: 'rdv',
  message: '',
  consent: false,
};

export default function ContactPage(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialForm);
  const [msgError, setMsgError] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Jour courant mis en évidence sur la carte de rendez-vous (1 = lundi ... 6 = samedi)
  const todayId = useMemo(() => {
    const jsDay = new Date().getDay(); // 0 = dimanche ... 6 = samedi
    return jsDay >= 1 && jsDay <= 6 ? jsDay : null;
  }, []);

  useEffect(() => {
    if (form.message.trim().length >= 5) setMsgError(false);
  }, [form.message]);

  useEffect(() => {
    if (form.consent) setConsentError(false);
  }, [form.consent]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const messageValid = form.message.trim().length >= 5;
    const consentValid = form.consent;

    setMsgError(!messageValid);
    setConsentError(!consentValid);

    if (!messageValid || !consentValid) return;

    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <Link href="/" className={styles.brandMark}>
              <div className={styles.cross} />
              <div className={styles.brandName}>Dr [X]</div>
            </Link>
            <nav className={styles.nav}>
              <a href="#horaires">Horaires</a>
              <a href="#infos">Infos pratiques</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Cabinet de médecine générale — Dunkerque</p>
          <h1 className={styles.h1}>
            Prendre <em>rendez-vous</em>
            <br />
            ou poser une question
          </h1>
          <p className={styles.heroSub}>
            Consultations sur rendez-vous et créneaux d'urgence réservés chaque matin. Le
            formulaire ci-dessous est réservé aux demandes non urgentes — le cabinet répond
            sous 48 heures ouvrées.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Écrire au cabinet
            </a>
            <a href="tel:+33328000000" className={`${styles.btn} ${styles.btnGhost}`}>
              Appeler — 03 28 00 00 00
            </a>
          </div>
        </section>

        <section className={styles.cardSection} id="horaires">
          <div className={styles.apptCard}>
            <div className={styles.apptInner}>
              <div className={styles.apptTop}>
                <div>
                  <p className={styles.apptLabel}>Carte de rendez-vous</p>
                  <p className={styles.apptTitle}>Heures d'ouverture</p>
                </div>
                <p className={styles.apptLabel}>Sans rendez-vous : lun. et jeu. 8h–9h</p>
              </div>

              <div className={styles.apptGrid}>
                {DAYS.map((day) => (
                  <div
                    key={day.id}
                    className={[
                      styles.day,
                      day.closed ? styles.dayOff : '',
                      day.id === todayId ? styles.dayToday : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div className={styles.dayName}>{day.name}</div>
                    <div className={styles.dayHours}>
                      {day.hours.map((h, i) => (
                        <React.Fragment key={i}>
                          {h}
                          {i < day.hours.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.apptFoot}>
                <span>Fermé le dimanche et les jours fériés.</span>
                <span className={styles.stamp}>Cabinet du Dr Laurent</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.infoSection} id="infos">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Comment nous trouver</p>
            <h2 className={styles.h2}>Infos pratiques</h2>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoCell}>
              <p className={styles.icLabel}>Adresse</p>
              <p className={styles.icValue}>
                14 rue de la Digue
                <br />
                59140 Dunkerque
              </p>
            </div>
            <div className={styles.infoCell}>
              <p className={styles.icLabel}>Téléphone</p>
              <p className={styles.icValue}>
                <a href="tel:+33328000000">03 28 00 00 00</a>
                <br />
                Secrétariat 8h–18h
              </p>
            </div>
            <div className={styles.infoCell}>
              <p className={styles.icLabel}>Accès</p>
              <p className={styles.icValue}>
                Parking cabinet
                <br />
                Arrêt bus L3 « Digue »
              </p>
            </div>
          </div>
        </section>

        <section className={styles.formSection} id="contact">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Demande non urgente</p>
            <h2 className={styles.h2}>Contacter le cabinet</h2>
          </div>

          {!submitted && (
            <div className={styles.formShell}>
              <form onSubmit={handleSubmit} noValidate>
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
                      value={form.nom}
                      onChange={(e) => updateField('nom', e.target.value)}
                    />
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
                      value={form.prenom}
                      onChange={(e) => updateField('prenom', e.target.value)}
                    />
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
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                    />
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
                      value={form.telephone}
                      onChange={(e) => updateField('telephone', e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label}>Motif de la demande</label>
                    <div className={styles.radioGroup}>
                      {(
                        [
                          { value: 'rdv', label: 'Demande de rendez-vous' },
                          { value: 'renouvellement', label: "Renouvellement d'ordonnance" },
                          { value: 'dossier', label: 'Dossier médical' },
                          { value: 'autre', label: 'Autre question' },
                        ] as { value: Motif; label: string }[]
                      ).map((opt) => (
                        <label className={styles.radioOpt} key={opt.value}>
                          <input
                            type="radio"
                            name="motif"
                            value={opt.value}
                            checked={form.motif === opt.value}
                            onChange={() => updateField('motif', opt.value)}
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
                      placeholder="Décrivez brièvement votre demande."
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                    />
                    <p
                      className={`${styles.formError} ${
                        msgError ? styles.formErrorShow : ''
                      }`}
                    >
                      Merci de préciser votre demande en quelques mots.
                    </p>
                  </div>
                </div>

                <div className={styles.consent}>
                  <input
                    type="checkbox"
                    id="consent"
                    checked={form.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                  />
                  <p>
                    J'accepte que ces informations soient utilisées par le cabinet pour
                    traiter ma demande, conformément à la réglementation sur la protection
                    des données.
                  </p>
                </div>
                <p
                  className={`${styles.formError} ${
                    consentError ? styles.formErrorShow : ''
                  }`}
                >
                  Merci de cocher cette case pour envoyer votre message.
                </p>

                <div className={styles.formFoot}>
                  <p className={styles.urgenceNote}>
                    En cas d'urgence médicale, n'utilisez pas ce formulaire : appelez le <span
                  className={`${styles.emergency}`}
                >15 (SAMU)</span> ou rendez-vous aux urgences les plus proches.
                  </p>
                  <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <div className={`${styles.successBox} ${styles.successBoxShow}`}>
              <p className={styles.sTitle}>Message envoyé</p>
              <p>
                Le secrétariat vous répond sous 48 heures ouvrées. Pour une urgence, appelez
                directement le cabinet au 03 28 00 00 00.
              </p>
            </div>
          )}
        </section>

        <footer className={styles.footer}>
          <div className={styles.footRow}>
            <span>Dr Camille Laurent — Médecin généraliste — RPPS 000000000</span>
            <span className={styles.emergency}>Urgence vitale : appelez le 15</span>
          </div>
        </footer>
      </div>
    </div>
  );
}