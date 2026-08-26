import Navbar from "@/components/Navbar/Nabvar";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { interventions } from "@/data/interventions";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="relative">
        <div className="hero -z-10" />

        <section className="flex items-center min-h-[420px] md:min-h-[520px] pb-10">
          <div className="ml-auto w-full max-w-xl px-6 md:px-16 text-white text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-orange-400 mb-4">
              Chirurgie orthopedique &amp; medecine du sport
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] mb-6">
              Medecine et chirurgie du sport a Dunkerque
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Diagnostic, traitement et suivi des blessures sportives, du sportif
              amateur au sportif de haut niveau.
            </p>
            <Link
              href="/prendre-rendez-vous"
              className="inline-flex items-center gap-2 w-fit bg-[#1B71E1] hover:bg-[#1560c4] text-white font-mono text-base uppercase tracking-wide px-5 py-2.5 rounded-md transition-colors"
            >
              <CalendarDays className="w-4 h-4" strokeWidth={2} />
              Prendre rendez-vous
            </Link>
          </div>
        </section>

        <section className="specialites relative z-10 -mt-6 md:-mt-10 bg-white/70 py-24 px-6 md:px-16">
          <p className="font-mono text-xs uppercase tracking-widest text-green-700 mb-4">
            Domaines d'intervention
          </p>
          <h2 className="font-display text-3xl font-semibold text-green-900 mb-10">
            Toutes les interventions
          </h2>

          <div className="grid gap-px bg-green-900/10 border border-green-900/10 md:grid-cols-2">
            {interventions.map((item) => (
              <Link
                key={item.slug}
                href={`/interventions/${item.slug}`}
                className="group block bg-white/80 hover:bg-white p-7 transition-colors"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-green-700 mb-2.5">
                  Fiche pathologie
                </p>
                <h3 className="font-display text-xl font-semibold text-green-950 mb-2.5">
                  {item.titre}
                </h3>
                <p className="text-sm leading-relaxed text-green-950/70 mb-4">
                  {item.resume}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#1B71E1]">
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* <section className="rassurance py-24 px-6 md:px-16 bg-green-950/5"> */}
        {/* Diplomes, annees d'experience, affiliations */}
      {/* </section> */}
    </>
  );
}