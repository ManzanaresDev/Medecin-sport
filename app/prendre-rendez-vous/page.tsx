// app/prendre-rendez-vous/page.tsx
export default function RendezVousPage() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <h1 className="mb-6 text-xl font-semibold text-slate-100">
        Prendre rendez-vous
      </h1>

      <div className="glass-panel overflow-hidden p-0">
        <iframe
          src="https://www.doctolib.fr/iframe/TON-IDENTIFIANT" // ⚠️ remplace par ton URL exacte fournie par Doctolib
          title="Prise de rendez-vous Doctolib"
          allow="payment" // si le practicien propose la téléconsultation avec paiement en ligne 
          style={{
            width: "100%",
            minHeight: "700px",
            border: 0,
          }}
        />
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        Vous ne trouvez pas de créneau ?{" "}
        
          href="https://www.doctolib.fr/TON-IDENTIFIANT"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-slate-300"
        <a>
          Ouvrir la prise de rendez-vous dans un nouvel onglet
        </a>
      </p>
    </div>
  );
}