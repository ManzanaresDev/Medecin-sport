import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        {/* Identité & contact */}
        <div className={styles.column}>
          <p className={styles.brand}>
            Dr. [X]
          </p>

          <p className={styles.subtitle}>
            Médecine du sport — Dunkerque
          </p>

          <address className={styles.address}>
            <p>[Adresse du cabinet]</p>
            <p>[Code postal] Dunkerque</p>
            <p>[Téléphone]</p>
            <p>[Email]</p>
          </address>
        </div>

        {/* Horaires */}
        <div className={styles.column}>
          <p className={styles.heading}>
            Horaires
          </p>

          <ul className={styles.list}>
            <li>Lundi – Vendredi : [horaires]</li>
            <li>Samedi : [horaires ou "Fermé"]</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>

        {/* Navigation rapide */}
        <div className={styles.column}>
          <p className={styles.heading}>
            Navigation
          </p>

          <nav
            className={styles.navigation}
            aria-label="Navigation du footer"
          >
            <Link href="/interventions">
              Domaines d'intervention
            </Link>

            <Link href="/a-propos">
              Le praticien
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/prendre-rendez-vous">
              Prendre rendez-vous
            </Link>
          </nav>
        </div>

        {/* Informations professionnelles */}
        <div className={styles.column}>
          <p className={styles.heading}>
            Informations professionnelles
          </p>

          <ul className={styles.list}>
            <li>RPPS : [numéro RPPS]</li>
            <li>
              Inscrit au Conseil de l'Ordre des Médecins [département]
            </li>
            <li>
              [Diplômes / affiliations si pertinent]
            </li>
          </ul>
        </div>
      </div>

      {/* Barre légale */}
      <div className={styles.legal}>
        <div className={styles.legalContent}>
          <p>
            © {new Date().getFullYear()} Dr. [X]. Tous droits réservés.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/legal/mentions-legales">
              Mentions légales
            </Link>

            <Link href="/legal/politique-confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}