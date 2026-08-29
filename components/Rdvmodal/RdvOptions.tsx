'use client';

import Link from 'next/link';
import { Building2, CalendarCheck, Smartphone, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import styles from './RdvOptions.module.css';

type RdvOptionsProps = {
  /** Numéro affiché et cliquable (format libre, ex: "02 97 00 00 00") */
  cabinetPhone?: string;
  /** Adresse optionnelle affichée sous le numéro */
  cabinetAddress?: string;
  /** Lien externe Maiia */
  maiiaUrl?: string;
  /** Appelé au clic sur "Doctolib" (ex: afficher l'iframe sur la même page) */
  onSelectDoctolib: () => void;
};

const ACCENTS = {
  cabinet: '#C96A3C',
  doctolib: '#1D5D5A',
  maiia: '#2C6E49',
} as const;

export default function RdvOptions({
  cabinetPhone = '02 97 00 00 00',
  cabinetAddress = '',
  maiiaUrl = 'https://www.maiia.com',
  onSelectDoctolib,
}: RdvOptionsProps) {
  const handleMaiia = () => {
    window.open(maiiaUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.optionsList}>
      {/* Cabinet */}
      <div className={styles.optionCard} style={{ '--accent': ACCENTS.cabinet } as React.CSSProperties}>
        <span className={styles.optionIcon}>
          <Building2 size={20} />
        </span>
        <span className={styles.optionText}>
          <span className={styles.optionLabel}>Au cabinet</span>
          {cabinetAddress && <span className={styles.optionDescription}>{cabinetAddress}</span>}
          <span className={styles.cabinetActions}>
            <a href={`tel:${cabinetPhone.replace(/\s/g, '')}`} className={styles.optionLink}>
              <Phone size={13} />
              {cabinetPhone}
            </a>
            <Link href="/contact" className={styles.contactButton}>
              <MessageSquare size={13} />
              Contacter le cabinet
            </Link>
          </span>
        </span>
      </div>

      {/* Doctolib */}
      <button
        className={styles.optionCard}
        style={{ '--accent': ACCENTS.doctolib } as React.CSSProperties}
        onClick={onSelectDoctolib}
      >
        <span className={styles.optionIcon}>
          <CalendarCheck size={20} />
        </span>
        <span className={styles.optionText}>
          <span className={styles.optionLabel}>Doctolib</span>
          <span className={styles.optionDescription}>Réservez un créneau en ligne, 24h/24.</span>
        </span>
        <ArrowUpRight size={18} className={styles.optionArrow} />
      </button>

      {/* Maiia */}
      <button
        className={styles.optionCard}
        style={{ '--accent': ACCENTS.maiia } as React.CSSProperties}
        onClick={handleMaiia}
      >
        <span className={styles.optionIcon}>
          <Smartphone size={20} />
        </span>
        <span className={styles.optionText}>
          <span className={styles.optionLabel}>Maiia</span>
          <span className={styles.optionDescription}>Réservez via l'application Maiia.</span>
        </span>
        <ArrowUpRight size={18} className={styles.optionArrow} />
      </button>
    </div>
  );
}