export interface InterventionSection {
  titre: string;
  paragraphes: string[];
}

export interface Intervention {
  slug: string;
  titre: string;
  resume: string;
  categorie: string;
  image?: string; // chemin vers l'image, ex: '/images/interventions/lca.jpg'
  sections: InterventionSection[];
}

export const interventions: Intervention[] = [
  {
    slug: 'rupture-ligament-croise-anterieur',
    titre: 'Rupture du ligament croisé antérieur (LCA)',
    image: '/images/interventions/lca.jpg',
    resume:
      "Reconstruction chirurgicale du LCA suite à une déchirure, fréquente chez les sportifs pratiquant des sports pivots (football, ski, basketball).",
    categorie: 'Genou',
    sections: [
      {
        titre: "Qu'est-ce que la rupture du LCA ?",
        paragraphes: [
          "Le ligament croisé antérieur (LCA) est l'un des ligaments centraux du genou. Il stabilise l'articulation lors des mouvements de rotation et de changement de direction.",
          "Sa rupture survient le plus souvent lors d'un mouvement de pivot, d'une réception de saut mal contrôlée ou d'un choc direct, en particulier dans les sports pivots-contact comme le football, le ski, le handball ou le basketball.",
        ],
      },
      {
        titre: 'Symptômes',
        paragraphes: [
          "La rupture s'accompagne fréquemment d'une sensation de craquement au moment du traumatisme, suivie d'un gonflement rapide du genou et d'une instabilité à la marche ou lors des changements de direction.",
        ],
      },
      {
        titre: 'Diagnostic',
        paragraphes: [
          "L'examen clinique, complété par une IRM, permet de confirmer la rupture et d'évaluer les lésions associées (ménisque, cartilage, autres ligaments).",
        ],
      },
      {
        titre: 'Prise en charge',
        paragraphes: [
          "Chez le sportif souhaitant reprendre une activité avec pivots, la reconstruction chirurgicale du ligament est le plus souvent recommandée. L'intervention consiste à remplacer le ligament rompu par une greffe, le plus souvent prélevée sur le patient lui-même (tendons ischio-jambiers ou tendon rotulien).",
          "Une rééducation encadrée est indispensable après l'intervention, avec une reprise progressive de l'appui, puis de la course, et enfin des sports pivots, généralement sur une période de 6 à 9 mois.",
        ],
      },
    ],
  },
  {
    slug: 'tendinopathie-coiffe-rotateurs',
    titre: 'Tendinopathie de la coiffe des rotateurs',
    resume:
      "Inflammation ou lésion des tendons de l'épaule, courante chez les sportifs pratiquant des sports de lancer ou de raquette.",
          image: '/images/interventions/rcf.jpg',
    categorie: 'Épaule',
    sections: [
      {
        titre: "Qu'est-ce que la tendinopathie de la coiffe des rotateurs ?",
        paragraphes: [
          "La coiffe des rotateurs regroupe quatre muscles et leurs tendons qui stabilisent et mobilisent l'épaule. Une sollicitation répétée, notamment lors de gestes au-dessus de la tête, peut entraîner une inflammation ou une usure progressive de ces tendons.",
          "Cette pathologie touche fréquemment les sportifs pratiquant le tennis, le handball, la natation ou le lancer, ainsi que certaines professions à gestes répétitifs.",
        ],
      },
      {
        titre: 'Symptômes',
        paragraphes: [
          "Douleur à l'épaule, souvent lors des mouvements au-dessus de la tête, parfois accompagnée d'une gêne nocturne et d'une diminution de la force ou de l'amplitude de mouvement.",
        ],
      },
      {
        titre: 'Diagnostic',
        paragraphes: [
          "L'examen clinique oriente le diagnostic, confirmé si besoin par une échographie ou une IRM permettant d'évaluer l'état des tendons (inflammation simple, tendinopathie ou rupture partielle/complète).",
        ],
      },
      {
        titre: 'Prise en charge',
        paragraphes: [
          "Le traitement initial est le plus souvent conservateur : repos relatif, rééducation ciblée sur le renforcement de la coiffe et la correction des gestes sportifs, associée si besoin à des anti-inflammatoires ou des infiltrations.",
          "En cas d'échec du traitement médical ou de rupture tendineuse significative, une prise en charge chirurgicale peut être envisagée, suivie d'une rééducation progressive.",
        ],
      },
    ],
  },
];

export function getInterventionBySlug(slug: string): Intervention | undefined {
  return interventions.find((item) => item.slug === slug);
}