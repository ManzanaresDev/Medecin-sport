// app/interventions/[slug]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { interventions, getInterventionBySlug } from '@/data/interventions';
import styles from './InterventionDetail.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return interventions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const intervention = getInterventionBySlug(slug);
  if (!intervention) return {};
  return {
    title: `${intervention.titre} — Dr [X]`,
    description: intervention.resume,
  };
}

export default async function InterventionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const intervention = getInterventionBySlug(slug);

  if (!intervention) {
    notFound();
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
            <Link href="/interventions" className={styles.backLink}>
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
              Toutes les interventions
            </Link>
          </div>
        </header>

<section className={styles.hero}>
  <div className={styles.heroImage}>
    {intervention.image ? (
      <img src={intervention.image} alt={intervention.titre} />
    ) : (
      <div className={styles.heroImagePlaceholder} />
    )}
  </div>
  <div className={styles.heroContent}>
    <p className={styles.eyebrow}>{intervention.categorie} — Fiche pathologie</p>
    <h1 className={styles.h1}>{intervention.titre}</h1>
    <p className={styles.heroSub}>{intervention.resume}</p>
  </div>
</section>

        <article className={styles.article}>
          {intervention.sections.map((section) => (
            <section className={styles.section} key={section.titre}>
              <h2 className={styles.h2}>{section.titre}</h2>
              {section.paragraphes.map((paragraphe, i) => (
                <p className={styles.p} key={i}>{paragraphe}</p>
              ))}
            </section>
          ))}

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Une question sur cette pathologie ou besoin d'une consultation ? Prenez
              rendez-vous directement en ligne.
            </p>
            <Link href="/prendre-rendez-vous" className={styles.btn}>
              <CalendarDays className="w-4 h-4" strokeWidth={2} />
              Prendre rendez-vous
            </Link>
          </div>
        </article>

        <footer className={styles.footer}>
          <div className={styles.footRow}>
            <span>Dr [X] — Médecine et chirurgie du sport — RPPS [RPPS]</span>
            <span className={styles.emergency}>Urgence vitale : appelez le 15</span>
          </div>
        </footer>
      </div>
    </div>
  );
}