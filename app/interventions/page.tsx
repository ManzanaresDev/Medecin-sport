// app/interventions/page.tsx
import Link from 'next/link';
import { interventions } from '@/data/interventions';

export const metadata = {
  title: 'Interventions courantes — Médecine du Sport',
  description: 'Liste des pathologies et interventions sportives les plus fréquentes.',
};

export default function InterventionsPage() {
  return (
    <section>
      <h1>Interventions et pathologies courantes</h1>
      <ul>
        {interventions.map((item) => (
          <li key={item.slug}>
            <Link href={`/interventions/${item.slug}`}>
              <h2>{item.titre}</h2>
              <p>{item.resume}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
