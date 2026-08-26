import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Identité & contact */}
        <div>
          <p className="font-display font-semibold text-xl text-white mb-1">
            Dr. [X]
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-4">
            Médecine du sport — Dunkerque
          </p>
          <address className="not-italic text-sm leading-relaxed space-y-1">
            <p>[Adresse du cabinet]</p>
            <p>[Code postal] Dunkerque</p>
            <p>[Téléphone]</p>
            <p>[Email]</p>
          </address>
        </div>

        {/* Horaires */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-4">
            Horaires
          </p>
          <ul className="text-sm leading-relaxed space-y-1">
            <li>Lundi – Vendredi : [horaires]</li>
            <li>Samedi : [horaires ou "Fermé"]</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>

        {/* Navigation rapide */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-4">
            Navigation
          </p>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Navigation du footer">
            <Link href="/interventions" className="hover:text-white transition-colors">
              Domaines d'intervention
            </Link>
            <Link href="/a-propos" className="hover:text-white transition-colors">
              Le praticien
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/prendre-rendez-vous" className="hover:text-white transition-colors">
              Prendre rendez-vous
            </Link>
          </nav>
        </div>

        {/* Informations professionnelles */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-4">
            Informations professionnelles
          </p>
          <ul className="text-sm leading-relaxed space-y-1">
            <li>RPPS : [numéro RPPS]</li>
            <li>Inscrit au Conseil de l'Ordre des Médecins [département]</li>
            <li>[Diplômes / affiliations si pertinent]</li>
          </ul>
        </div>
      </div>

      {/* Barre légale */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Dr. [X]. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}