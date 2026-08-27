import Link from 'next/link';
import styles from '../LegalPage.module.css';

export const metadata = {
  title: 'Politique de confidentialité — Dr [X]',
  description: "Politique de confidentialité et de protection des données personnelles du cabinet du Dr [X].",
};

export default function ConfidentialitePage() {
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
          <p className={styles.eyebrow}>Vie privée &amp; RGPD</p>
          <h1 className={styles.h1}>Politique de confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : <span className={styles.placeholder}>[date]</span></p>
        </section>

        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.h2}>1. Responsable du traitement</h2>
            <p className={styles.p}>
              Le responsable du traitement des données collectées sur ce site est{' '}
              <span className={styles.placeholder}>Dr [Nom Prénom]</span>, exerçant au{' '}
              <span className={styles.placeholder}>[adresse du cabinet]</span>, joignable à
              l'adresse <span className={styles.placeholder}>[e-mail de contact]</span>.
            </p>
          </section>

<section className={styles.section}>
  <h2 className={styles.h2}>2. Données collectées</h2>
  <p className={styles.p}>Selon les formulaires que vous utilisez, nous collectons :</p>

  <h3 className={styles.h3}>Formulaire de contact</h3>
  <ul className={styles.ul}>
    <li>Nom et prénom</li>
    <li>Adresse e-mail et/ou numéro de téléphone</li>
    <li>Motif administratif de la demande (rendez-vous, renouvellement d'ordonnance, dossier médical, autre question) — cette catégorisation n'implique la transmission d'aucun détail médical</li>
    <li>Contenu du message, dont nous demandons expressément qu'il ne comporte aucune information de santé (symptômes, traitements, diagnostics)</li>
    <li>Adresse IP, collectée temporairement à des fins de limitation du nombre de requêtes (protection anti-spam)</li>
  </ul>

  <div className={styles.note}>
    Le formulaire de contact de ce site n'a pas vocation à recueillir des données de
    santé. Nous invitons les patients à ne transmettre aucune information médicale
    via ce canal et à privilégier un contact téléphonique avec le secrétariat pour
    toute question relevant du soin.
  </div>

  <h3 className={styles.h3}>Prise de rendez-vous en ligne</h3>
  <ul className={styles.ul}>
    <li>Nom, prénom, coordonnées</li>
    <li>Motif de consultation (donnée pouvant relever de la santé)</li>
    <li>Date et créneau choisis</li>
  </ul>
  <div className={styles.note}>
    Ces informations concernent uniquement un éventuel module de prise de
    rendez-vous en ligne distinct du formulaire de contact. Si un tel module est
    mis en place, il fait l'objet d'un hébergement et de garanties spécifiques
    décrits à la section 7.
  </div>
</section>

          <section className={styles.section}>
            <h2 className={styles.h2}>3. Finalités du traitement</h2>
            <ul className={styles.ul}>
              <li>Traiter vos demandes de rendez-vous et de contact</li>
              <li>Assurer le suivi administratif de votre dossier de patientèle</li>
              <li>Répondre à vos questions</li>
              <li>Respecter nos obligations légales et déontologiques</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>4. Base légale</h2>
            <p className={styles.p}>Les traitements reposent selon les cas sur :</p>
            <ul className={styles.ul}>
              <li>l'exécution de mesures précontractuelles ou du suivi de soins (prise de rendez-vous, dossier médical) ;</li>
              <li>votre consentement explicite, notamment via la case à cocher du formulaire de contact ;</li>
              <li>le respect d'obligations légales auxquelles le praticien est soumis (conservation du dossier médical).</li>
            </ul>
          </section>

<section className={styles.section}>
  <h2 className={styles.h2}>5. Durée de conservation</h2>
  <ul className={styles.ul}>
    <li>Messages issus du formulaire de contact non suivis d'une prise en charge : <span className={styles.placeholder}>[durée, ex. 1 an]</span></li>
    <li>Adresse IP utilisée pour la limitation de requêtes : donnée non persistée, conservée uniquement en mémoire serveur le temps de la session applicative, et effacée à chaque redémarrage du serveur (aucun stockage en base de données)</li>
    <li>Dossier médical de patientèle : durée légale de 20 ans à compter de la dernière consultation (article R1112-7 du Code de la santé publique), délai pouvant être prolongé dans certains cas</li>
    <li>Données de prise de rendez-vous : durée de la relation de soin, puis archivage conformément à la réglementation applicable</li>
  </ul>
</section>

<section className={styles.section}>
  <h2 className={styles.h2}>6. Destinataires des données</h2>
  <p className={styles.p}>
    Vos données sont destinées exclusivement au praticien et, le cas échéant, à son
    personnel de secrétariat soumis à une obligation de confidentialité. Elles ne
    sont ni vendues, ni cédées à des tiers à des fins commerciales.
  </p>
  <p className={styles.p}>
    Le formulaire de contact transmet votre message par e-mail via les services
    Google (Gmail/Google Workspace), qui agit en tant que sous-traitant technique
    pour l'acheminement de cet e-mail. Aucune donnée de santé n'étant collectée par
    ce formulaire, ce traitement ne concerne que des données de contact
    administratives.
  </p>
  <p className={styles.p}>
    Certains prestataires techniques (hébergeur du site, solution de prise de
    rendez-vous en ligne, le cas échéant) peuvent avoir accès aux données dans la
    stricte mesure nécessaire à la fourniture de leur service, dans le cadre
    d'engagements contractuels de confidentialité conformes au RGPD.
  </p>
</section>

          <section className={styles.section}>
            <h2 className={styles.h2}>7. Hébergement des données de santé</h2>
            <p className={styles.p}>
              Les données de santé sont hébergées par{' '}
              <span className={styles.placeholder}>[nom de l'hébergeur HDS]</span>, certifié
              Hébergeur de Données de Santé (HDS), conformément à l'article L1111-8 du Code de
              la santé publique.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>8. Vos droits</h2>
            <p className={styles.p}>Conformément au RGPD, vous disposez des droits suivants sur vos données :</p>
            <ul className={styles.ul}>
              <li>droit d'accès à vos données ;</li>
              <li>droit de rectification des données inexactes ;</li>
              <li>droit d'effacement, dans les limites des obligations légales de conservation du dossier médical ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit d'opposition, pour motif légitime ;</li>
              <li>droit à la portabilité des données que vous avez fournies.</li>
            </ul>
            <p className={styles.p}>
              Pour exercer ces droits, contactez-nous à l'adresse{' '}
              <span className={styles.placeholder}>[e-mail de contact]</span> ou par courrier à{' '}
              <span className={styles.placeholder}>[adresse postale]</span>, en joignant un
              justificatif d'identité.
            </p>
            <p className={styles.p}>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
              respectés, vous pouvez adresser une réclamation à la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>9. Sécurité des données</h2>
            <p className={styles.p}>
              Des mesures techniques et organisationnelles sont mises en œuvre pour protéger
              vos données contre tout accès non autorisé, perte, altération ou divulgation
              (connexion sécurisée, accès restreint, hébergement conforme).
            </p>
          </section>

<section className={styles.section}>
  <h2 className={styles.h2}>10. Cookies</h2>
  <p className={styles.p}>
    Ce site n'utilise aucun cookie de mesure d'audience ni de traceur publicitaire.
    Seuls des cookies strictement nécessaires au fonctionnement technique du site
    peuvent être déposés, le cas échéant, sans requérir de consentement préalable
    conformément à la réglementation applicable.
  </p>
</section>

          <section className={styles.section}>
            <h2 className={styles.h2}>11. Modifications</h2>
            <p className={styles.p}>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date
              de dernière mise à jour figure en haut de cette page.
            </p>
          </section>
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