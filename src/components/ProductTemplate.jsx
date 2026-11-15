import React from 'react';
import Link from 'next/link';

export default function ProductTemplate({
  category = "Izolační materiál",
  title,
  subtitle,
  description,
  image,
  highlights = [],
  benefits = [],
  applications = [],
  specs = [],
  documents = []
}) {
  return (
    <div className="w-full bg-brand-light text-brand-dark">
      
      {/* 1. ÚVODNÍ HERO SEKCE PRODUKTU */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Levý sloupec: Texty */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-secondary text-brand-dark">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              {category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl font-semibold text-brand-accent">
                {subtitle}
              </p>
            )}

            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed">
              {description}
            </p>

            {/* Rychlé parametry (štítky) */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-brand-primary p-3 rounded-xl border border-brand-secondary">
                    <div className="text-xs text-brand-dark/60 uppercase font-semibold">{item.label}</div>
                    <div className="text-base font-bold text-brand-dark mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tlačítka */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                Nezávazná poptávka
              </Link>
              <a
                href="#parametry"
                className="bg-brand-secondary hover:bg-brand-secondary/80 text-brand-dark font-bold px-7 py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                Technické parametry
              </a>
            </div>
          </div>

          {/* Pravý sloupec: Obrázek produktu */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-brand-secondary shadow-xl shadow-brand-shadow/70 bg-brand-primary aspect-[4/3]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. HLAVNÍ VÝHODY (KARTY) */}
      {benefits.length > 0 && (
        <section className="w-full bg-brand-primary py-16 border-y border-brand-secondary/60">
          <div className="max-w-[1400px] mx-auto px-6 space-y-10">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Proč zvolit tento materiál</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1">Hlavní přednosti a vlastnosti</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-brand-light p-6 rounded-2xl border border-brand-secondary space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-brand-dark/80 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. OBLASTI POUŽITÍ A TECHNICKÉ PARAMETRY */}
      <section id="parametry" className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Oblasti použití */}
          {applications.length > 0 && (
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Kde se aplikuje</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Oblasti použití</h2>
              <div className="space-y-3">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-brand-primary border border-brand-secondary">
                    <span className="text-brand-accent font-bold mt-0.5">&rarr;</span>
                    <div>
                      <h4 className="font-bold text-base">{app.title}</h4>
                      {app.desc && <p className="text-sm text-brand-dark/75 mt-1">{app.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabulka parametrů */}
          {specs.length > 0 && (
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">Specifikace</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Technické parametry</h2>
              <div className="bg-brand-primary rounded-2xl border border-brand-secondary overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {specs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-brand-secondary/60 last:border-none">
                        <td className="py-3.5 px-5 text-sm font-medium text-brand-dark/80">{spec.name}</td>
                        <td className="py-3.5 px-5 text-sm font-bold text-brand-dark text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. DOKUMENTY KE STAŽENÍ */}
      {documents.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 pb-16">
          <div className="bg-brand-secondary/40 rounded-3xl p-6 sm:p-10 border border-brand-secondary space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">Dokumenty a certifikáty ke stažení</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-brand-primary border border-brand-secondary hover:border-brand-accent transition-colors group"
                >
                  <span className="text-sm font-semibold group-hover:text-brand-accent transition-colors">{doc.name}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-secondary text-brand-dark">PDF</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA BANNER */}
      <section className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="bg-brand-dark text-brand-light rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Máte zájem o zateplení tímto materiálem?</h2>
            <p className="text-brand-light/80 text-sm sm:text-base">
              Rádi vám zdarma připravíme nezávaznou cenovou kalkulaci a navrhneme ideální tloušťku izolace.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-8 py-4 rounded-xl shadow-lg transition-all shrink-0 text-sm sm:text-base"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>

    </div>
  );
}