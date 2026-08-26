import Link from 'next/link';
import styles from '../LegalPage.module.css';

export const metadata = {
  title: 'Mentions légales — Dr [X]',
  description: 'Mentions légales du site du cabinet du Dr [X], médecine et chirurgie du sport à Dunkerque.',
};

export default function MentionsLegalesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <Link href="/" className={styles.brandMark}>
              <div className={styles.cross} />
              <div className={styles.brandName}>Dr [X]</div>
            </Link>
          </div>
        </header>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Informations légales</p>
          <h1 className={styles.h1}>Mentions légales</h1>
          <p className={styles.updated}>Dernière mise à jour : <span className={styles.placeholder}>[date]</span></p>
        </section>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Éditeur du site</h2>
            <p className={styles.p}>
              Le présent site est édité par <span className={styles.placeholder}>Dr [Nom Prénom]</span>,
              médecin inscrit au Conseil de l'Ordre des médecins sous le numéro RPPS{' '}
              <span className={styles.placeholder}>[numéro RPPS]</span>, exerçant à titre{' '}
              <span className={styles.placeholder}>[libéral / dans le cadre de la structure X]</span>.
            </p>
            <ul className={styles.ul}>
              <li>Adresse du cabinet : <span className={styles.placeholder}>[adresse complète]</span></li>
              <li>Téléphone : <span className={styles.placeholder}>[numéro]</span></li>
              <li>E-mail : <span className={styles.placeholder}>[adresse e-mail]</span></li>
              <li>Numéro SIRET : <span className={styles.placeholder}>[SIRET]</span></li>
              <li>Directeur de la publication : <span className={styles.placeholder}>[Nom Prénom]</span></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>2. Hébergement du site</h2>
            <p className={styles.p}>Le site est hébergé par :</p>
            <ul className={styles.ul}>
              <li>Raison sociale : <span className={styles.placeholder}>[nom de l'hébergeur]</span></li>
              <li>Adresse : <span className={styles.placeholder}>[adresse de l'hébergeur]</span></li>
              <li>Téléphone : <span className={styles.placeholder}>[téléphone de l'hébergeur]</span></li>
            </ul>
            <div className={styles.note}>
              Un cabinet médical doit héberger toute donnée de santé auprès d'un hébergeur
              certifié HDS (Hébergeur de Données de Santé). Vérifiez que votre hébergeur web
              dispose de cette certification si le site collecte des données de santé, ou
              utilisez un hébergeur HDS distinct pour ces données.
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Conception et développement</h2>
            <p className={styles.p}>
              Conception graphique et développement : <span className={styles.placeholder}>[nom du prestataire, ou « le cabinet »]</span>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Propriété intellectuelle</h2>
            <p className={styles.p}>
              L'ensemble des éléments présents sur ce site (textes, images, logos, mise en
              page, structure) est protégé au titre du droit d'auteur et du droit des marques.
              Toute reproduction, représentation, modification, publication ou adaptation,
              totale ou partielle, sans l'autorisation écrite préalable de l'éditeur, est
              interdite.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>5. Nature des informations publiées</h2>
            <p className={styles.p}>
              Les informations diffusées sur ce site ont une vocation générale et informative.
              Elles ne sauraient se substituer à une consultation médicale, à un diagnostic ou
              à un avis personnalisé. En cas de doute sur votre état de santé, consultez un
              professionnel de santé.
            </p>
            <p className={styles.p}>
              Conformément aux recommandations du Conseil national de l'Ordre des médecins, ce
              site respecte les règles de déontologie médicale applicables à la communication
              des médecins.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>6. Données personnelles</h2>
            <p className={styles.p}>
              Le traitement des données personnelles collectées via ce site (formulaire de
              contact, prise de rendez-vous) est détaillé dans notre{' '}
              <Link href="/confidentialite">politique de confidentialité</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>7. Liens hypertextes</h2>
            <p className={styles.p}>
              Ce site peut contenir des liens vers d'autres sites. L'éditeur n'exerce aucun
              contrôle sur ces sites tiers et décline toute responsabilité quant à leur
              contenu.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>8. Droit applicable</h2>
            <p className={styles.p}>
              Le présent site est soumis au droit français. En cas de litige, et à défaut de
              résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>9. Contact</h2>
            <p className={styles.p}>
              Pour toute question relative à ces mentions légales, vous pouvez nous contacter à
              l'adresse <span className={styles.placeholder}>[e-mail de contact]</span> ou via
              notre <Link href="/contact">page de contact</Link>.
            </p>
          </section>
        </article>

        <footer className={styles.footer}>
          <div className={styles.footRow}>
            <span>Dr [X] — Médecine et chirurgie du sport — RPPS [RPS]</span>
            <span className={styles.emergency}>Urgence vitale : appelez le 15</span>
          </div>
        </footer>
      </div>
    </div>
  );
}