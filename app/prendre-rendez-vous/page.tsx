import Navbar from '@/components/Navbar/Nabvar';
import styles from './RendezVous.module.css';

export default function RendezVousPage() {
  return (
    <div className={styles.page}>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Prendre rendez-vous
        </h1>

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
          
            href="https://www.doctolib.fr/TON-IDENTIFIANT"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          <a>
            Ouvrir la prise de rendez-vous dans un nouvel onglet
          </a>
        </p>
      </div>
    </div>
  );
}