// app/interventions/[slug]/page.tsx
import { interventions } from '@/data/interventions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return interventions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = interventions.find((i) => i.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.titre} — Médecine du Sport`,
    description: item.resume,
  };
}

export default function InterventionPage({ params }: { params: { slug: string } }) {
  const item = interventions.find((i) => i.slug === params.slug);
  if (!item) notFound();

  return (
    <article>
      <h1>{item.titre}</h1>
      <p>{item.description}</p>
      {item.dureeConvalescence && (
        <p><strong>Convalescence estimée :</strong> {item.dureeConvalescence}</p>
      )}

      <aside className="disclaimer">
        Ces informations sont données à titre indicatif et ne remplacent pas
        une consultation médicale. Seul un examen clinique permet d'établir
        un diagnostic et un plan de traitement personnalisé.
      </aside>

      <a href="/prendre-rendez-vous">Prendre rendez-vous pour en discuter</a>
    </article>
  );
}
