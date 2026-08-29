'use client';

import { useState } from 'react';
import RdvOptions from '@/components/Rdvmodal/RdvOptions';
import styles from './Prendre-rendez-vous.module.css';

export default function RendezVousPage() {
  const [showDoctolib, setShowDoctolib] = useState(false);

  return (
    <div className={styles.page}>

      <div className={styles.content}>
        <h1 className={styles.title}>Prendre rendez-vous</h1>

        {!showDoctolib ? (
          // Options affichées directement, sans bouton ni modal intermédiaire
          <div className={styles.choiceWrapper}>
            <p className={styles.choiceText}>Choisissez votre mode de réservation préféré.</p>
            <RdvOptions
              cabinetPhone="[téléphone]"
              cabinetAddress="[adresse]"
              maiiaUrl="https://www.maiia.com/votre-praticien"
              onSelectDoctolib={() => setShowDoctolib(true)}
            />
          </div>
        ) : (
          // Doctolib choisi : on affiche l'iframe sur cette même page
          <>
            <div className={`${styles.glassPanel} ${styles.iframeContainer}`}>
              <iframe
                src="https://www.doctolib.fr/iframe/TON-IDENTIFIANT" // ⚠️ remplace par ton URL exacte fournie par Doctolib
                title="Prise de rendez-vous Doctolib"
                allow="payment" // si le praticien propose la téléconsultation avec paiement en ligne
                className={styles.iframe}
              />
            </div>

            <p className={styles.linkWrapper}>
              Vous ne trouvez pas de créneau ?{' '}
              <a
                href="https://www.doctolib.fr/TON-IDENTIFIANT"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Ouvrir la prise de rendez-vous dans un nouvel onglet
              </a>
            </p>

            <button className={styles.backButton} onClick={() => setShowDoctolib(false)}>
              ← Choisir un autre mode de rendez-vous
            </button>
          </>
        )}
      </div>
    </div>
  );
}