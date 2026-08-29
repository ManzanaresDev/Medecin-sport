import Link from 'next/link';
import styles from './AProposPage.module.css';

export const metadata = {
  title: 'Dr. [Nom] — Parcours et spécialités',
  description:
    'Découvrez le parcours, les spécialités, la formation et les affiliations du Dr [Nom], chirurgien orthopédiste spécialisé en traumatologie du sport.',
};

const FORMATION = [
  {
    period: '[Année]',
    title: 'Diplôme de médecine',
    place: '[Université / Faculté]',
    description: 'Formation médicale et clinique.',
  },
  {
    period: '[Année]',
    title: 'Spécialisation en chirurgie orthopédique',
    place: '[Université / Institut]',
    description: 'Formation spécialisée en chirurgie orthopédique et traumatologie.',
  },
  {
    period: '[Année]',
    title: 'Formation complémentaire en traumatologie du sport',
    place: '[Établissement / Institut]',
    description:
      'Approfondissement de la prise en charge des pathologies et traumatismes liés à la pratique sportive.',
  },
];

const EXPERIENCE = [
  {
    period: '[20XX–20XX]',
    title: 'Chirurgien orthopédiste',
    place: '[Établissement]',
    description:
      'Prise en charge chirurgicale et non chirurgicale des pathologies de l’appareil locomoteur.',
  },
  {
    period: '[20XX–Aujourd’hui]',
    title: 'Chirurgien orthopédiste — Traumatologie du sport',
    place: '[Cabinet / Clinique / Hôpital]',
    description:
      'Consultations, suivi des patients sportifs et prise en charge des traumatismes et pathologies orthopédiques.',
  },
];

const SPECIALITES = [
  'Traumatologie du sport',
  'Chirurgie orthopédique',
  'Pathologies articulaires',
  'Lésions ligamentaires',
  'Pathologies tendineuses',
  'Prise en charge des sportifs',
];

const AFFILIATIONS = [
  {
    title: '[Société savante]',
    description: 'Membre / adhérent',
  },
  {
    title: '[Fédération sportive]',
    description: 'Médecin partenaire / membre',
  },
  {
    title: '[Établissement partenaire]',
    description: 'Collaboration médicale',
  },
];

export default function AProposPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>

        <main>
          {/* HERO */}
          <section className={styles.hero}>
            <p className={styles.eyebrow}>À propos du praticien</p>

            <h1 className={styles.h1}>
              Une pratique tournée vers le mouvement,{' '}
              <em>la précision et la récupération.</em>
            </h1>

            <p className={styles.heroSub}>
              Dr [Nom], chirurgien orthopédiste spécialisé en traumatologie du
              sport, accompagne ses patients dans la prise en charge des
              pathologies et traumatismes de l’appareil locomoteur.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/contact#contact"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="/contact"
                className={`${styles.btn} ${styles.btnGhost}`}
              >
                Contacter le cabinet
              </Link>
            </div>
          </section>

          {/* SIGNATURE CARD */}
          <section className={styles.profileSection}>
            <div className={styles.profileCard}>
              <div className={styles.profileVisual}>
                <div className={styles.monogram} aria-hidden="true">
                  Dr
                </div>
              </div>

              <div className={styles.profileContent}>
                <p className={styles.cardLabel}>Pratique médicale</p>

                <h2 className={styles.cardTitle}>
                  Chirurgie orthopédique
                  <br />
                  <span>& traumatologie du sport</span>
                </h2>

                <p className={styles.cardText}>
                  Une approche centrée sur le diagnostic, la compréhension du
                  patient et la recherche d’une prise en charge adaptée à son
                  activité et à ses objectifs.
                </p>

                <div className={styles.cardMeta}>
                  <div>
                    <span>Exercice</span>
                    <strong>[Ville / Établissement]</strong>
                  </div>

                  <div>
                    <span>RPPS</span>
                    <strong>[RPPS]</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SPECIALITES */}
          <section className={styles.section}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Domaines d’expertise</p>
              <h2 className={styles.h2}>Spécialités</h2>
            </div>

            <div className={styles.specialtyGrid}>
              {SPECIALITES.map((specialite, index) => (
                <div className={styles.specialty} key={specialite}>
                  <span className={styles.specialtyNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span>{specialite}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PARCOURS */}
          <section className={styles.section}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Parcours professionnel</p>
              <h2 className={styles.h2}>Formation & expérience</h2>
            </div>

            <div className={styles.timeline}>
              {FORMATION.map((item) => (
                <article className={styles.timelineItem} key={`${item.period}-${item.title}`}>
                  <div className={styles.timelinePeriod}>{item.period}</div>

                  <div className={styles.timelineContent}>
                    <h3>{item.title}</h3>
                    <p className={styles.timelinePlace}>{item.place}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}

              <div className={styles.timelineDivider} />

              {EXPERIENCE.map((item) => (
                <article className={styles.timelineItem} key={`${item.period}-${item.title}`}>
                  <div className={styles.timelinePeriod}>{item.period}</div>

                  <div className={styles.timelineContent}>
                    <h3>{item.title}</h3>
                    <p className={styles.timelinePlace}>{item.place}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* APPROCHE */}
          <section className={styles.approachSection}>
            <div className={styles.approachGrid}>
              <div>
                <p className={styles.eyebrow}>L’approche</p>

                <h2 className={styles.approachTitle}>
                  Comprendre la blessure.
                  <br />
                  <em>Accompagner le retour au mouvement.</em>
                </h2>
              </div>

              <div className={styles.approachText}>
                <p>
                  Chaque situation nécessite une évaluation précise du
                  contexte, des symptômes et des objectifs du patient.
                </p>

                <p>
                  La décision thérapeutique est discutée avec le patient afin
                  de privilégier, lorsque cela est possible, une prise en
                  charge adaptée à son mode de vie et à son niveau d’activité.
                </p>

                <p>
                  Pour les patients sportifs, l’objectif est également
                  d’intégrer les contraintes liées à la pratique et au projet
                  de reprise.
                </p>
              </div>
            </div>
          </section>

          {/* AFFILIATIONS */}
          <section className={styles.section}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Réseau professionnel</p>
              <h2 className={styles.h2}>Affiliations & collaborations</h2>
            </div>

            <div className={styles.affiliationGrid}>
              {AFFILIATIONS.map((item) => (
                <div className={styles.affiliation} key={item.title}>
                  <span className={styles.affiliationMark}>+</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaInner}>
              <div>
                <p className={styles.eyebrow}>Consultation</p>

                <h2 className={styles.ctaTitle}>
                  Une question ou une demande de rendez-vous ?
                </h2>

                <p className={styles.ctaText}>
                  Le secrétariat est disponible pour vous orienter et répondre
                  à vos demandes administratives.
                </p>
              </div>

              <Link
                href="/contact#contact"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                Contacter le cabinet
              </Link>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footRow}>
            <span>
              Dr [Nom] — Chirurgien orthopédiste — RPPS [RPPS]
            </span>

            <span className={styles.emergency}>
              Urgence vitale : appelez le 15
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}