# Cabinet de Médecine du Sport — Site vitrine

Site vitrine développé avec [Next.js](https://nextjs.org) pour un cabinet de médecine et chirurgie du sport basé à Dunkerque. Il présente les domaines d'intervention du praticien, permet la prise de rendez-vous en ligne et propose un formulaire de contact sécurisé.

## Fonctionnalités

- **Page d'accueil** présentant le cabinet et ses spécialités
- **Fiches interventions** détaillées (diagnostic, symptômes, prise en charge) générées dynamiquement à partir d'une base de données locale (`data/interventions.ts`)
- **Prise de rendez-vous en ligne** via intégration Doctolib (iframe) et redirection Maiia
- **Formulaire de contact** avec :
  - validation des champs côté client et serveur ([Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/))
  - envoi d'email via [Nodemailer](https://nodemailer.com/)
  - protection anti-spam (champ honeypot + limitation de fréquence des requêtes)
- **Pages légales** : mentions légales et politique de confidentialité
- **Page "À propos"** du praticien

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev/)
- TypeScript
- CSS Modules
- [Zod](https://zod.dev/) pour la validation des schémas
- [React Hook Form](https://react-hook-form.com/) pour la gestion des formulaires
- [Nodemailer](https://nodemailer.com/) pour l'envoi d'emails
- [lucide-react](https://lucide.dev/) pour les icônes
- [ESLint](https://eslint.org/) pour le linting

## Structure du projet

```
├── app/
│   ├── a-propos/                 # Page à propos du praticien
│   ├── actions/
│   │   └── sendEmail.ts          # Server Action : envoi d'email du formulaire
│   ├── contact/                  # Page de contact
│   ├── interventions/
│   │   ├── [slug]/                # Page détail d'une intervention (route dynamique)
│   │   └── page.tsx               # Liste des interventions
│   ├── legal/                    # Mentions légales & politique de confidentialité
│   ├── prendre-rendez-vous/      # Page de prise de rendez-vous
│   ├── layout.tsx                # Layout global (Navbar + Footer)
│   └── page.tsx                  # Page d'accueil
├── components/
│   ├── Footer/
│   ├── Navbar/
│   └── Rdvmodal/                 # Composant de choix du mode de réservation
├── data/
│   └── interventions.ts          # Contenu des fiches interventions
├── lib/
│   ├── contactSchema.ts          # Schéma de validation Zod du formulaire de contact
│   └── rateLimit.ts              # Limitation de fréquence des requêtes (anti-spam)
└── public/
    └── images/                   # Images statiques (photos, illustrations d'interventions)
```

## Prérequis

- [Node.js](https://nodejs.org/) 18.18 ou supérieur
- npm (ou yarn / pnpm / bun)

## Installation

```bash
git clone https://github.com/<votre-utilisateur>/Medecin-sport.git
cd Medecin-sport
npm install
```

## Configuration

Le formulaire de contact utilise Nodemailer avec un compte Gmail pour l'envoi des emails. Copiez le fichier d'exemple et renseignez vos identifiants :

```bash
cp .env.exemple .env.local
```

```env
# EMAIL FORMULAIRE CONTACT
EMAIL_USER=ton-adresse@gmail.com
EMAIL_PASS=mot-de-passe-application-gmail
EMAIL_TO=secretariat@cabinet-dr-x.fr
```

> `EMAIL_PASS` doit être un [mot de passe d'application Gmail](https://support.google.com/accounts/answer/185833), pas le mot de passe habituel du compte.

Avant mise en production, pensez également à :
- remplacer l'URL de l'iframe Doctolib dans `app/prendre-rendez-vous/page.tsx` (`TON-IDENTIFIANT`) par l'identifiant fourni par Doctolib
- remplacer l'URL Maiia (`maiiaUrl`) par celle du praticien
- renseigner le nom du praticien, le téléphone et l'adresse du cabinet dans les composants concernés (`RdvOptions`, emails, pages légales)

## Lancer le projet en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat. La page se met à jour automatiquement à chaque modification.

## Scripts disponibles

| Commande        | Description                                  |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Lance le serveur de développement             |
| `npm run build` | Compile l'application pour la production      |
| `npm run start` | Démarre le serveur en mode production         |
| `npm run lint`  | Lance ESLint sur le projet                    |

## Déploiement

Le moyen le plus simple de déployer ce projet est d'utiliser la [plateforme Vercel](https://vercel.com/new), créatrice de Next.js. Pensez à renseigner les variables d'environnement (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) dans les paramètres du projet Vercel.

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## Licence

Projet privé — tous droits réservés.
