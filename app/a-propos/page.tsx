// app/a-propos/page.tsx
export const metadata = {
  title: 'Dr. [Nom] — Parcours et spécialités',
};

export default function AProposPage() {
  return (
    <section>
      <h1>Dr. [Nom]</h1>
      <p>Chirurgien orthopédiste, spécialisé en traumatologie du sport.</p>

      <h2>Formation</h2>
      <ul>
        <li>Diplôme, université, année</li>
        <li>Spécialisation, institut, année</li>
      </ul>

      <h2>Expérience</h2>
      <ul>
        <li>Poste, établissement, années</li>
      </ul>

      <h2>Affiliations</h2>
      <ul>
        <li>Fédérations sportives, sociétés savantes, hôpitaux partenaires</li>
      </ul>
    </section>
  );
}
