// data/interventions.ts
export type Intervention = {
  slug: string;
  titre: string;
  resume: string;
  description: string;
  dureeConvalescence?: string;
  categorie: 'genou' | 'epaule' | 'cheville' | 'hanche' | 'dos';
};

export const interventions: Intervention[] = [
  {
    slug: 'rupture-ligament-croise-anterieur',
    titre: 'Rupture du ligament croisé antérieur (LCA)',
    resume:
      "Reconstruction chirurgicale du LCA suite à une déchirure, fréquente chez les sportifs pratiquant des sports pivots (football, ski, basketball).",
    description:
      "Description complète : diagnostic, technique chirurgicale (ligamentoplastie), rééducation post-opératoire...",
    dureeConvalescence: '6 à 9 mois avant reprise du sport',
    categorie: 'genou',
  },
  {
    slug: 'tendinopathie-epaule',
    titre: "Tendinopathie de la coiffe des rotateurs",
    resume:
      "Inflammation ou lésion des tendons de l'épaule, courante chez les sportifs pratiquant des sports de lancer ou de raquette.",
    description: "Description complète du traitement, chirurgical ou non...",
    dureeConvalescence: '3 à 6 mois',
    categorie: 'epaule',
  },
  // Ajouter les autres interventions courantes ici
];