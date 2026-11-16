"use client";

import React from 'react';
import Link from 'next/link';

function Recyklaceskartace() {
  const duvody = [
    {
      icon: "🌿",
      title: "Jistota bezpečí",
      desc: "Máte jistotu, že díky skartaci nedojde k úniku citlivých informací.",
    },
    {
      icon: "🌿",
      title: "Doklad o skartaci",
      desc: "Po provedení likvidace obdržíte oficiální doklad o proběhlé skartaci.",
    },
    {
      icon: "🌿",
      title: "Ekologická likvidace",
      desc: "Budete se aktivně podílet na ekologické likvidaci papírového odpadu.",
    },
    {
      icon: "🌿",
      title: "Bez starostí",
      desc: "Nemáte žádné starosti s náročnou dopravou a skladováním dokumentů určených ke skartaci.",
    },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/skartace.webp" 
          alt="Skartace veškerých dokumentů" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-4xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-3xl w-full">
            
            {/* Hlavní nadpis v barvě brand-accent */}
            <h1 className="font-display text-3xl md:text-[42px] font-bold text-brand-accent tracking-tight mb-3 uppercase leading-tight">
              Skartace veškerých dokumentů
            </h1>
            
            {/* Podnadpis */}
            <p className="text-base md:text-lg font-medium text-brand-dark/90 uppercase tracking-wide">
              Bezpečná a ekologická likvidace pro firmy i instituce
            </p>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvod a podrobnosti o skartaci */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Profesionální likvidace písemností pod dozorem
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed text-left md:text-center">
            <p>
              Naše společnost provádí skartaci veškerých dokumentů pro firmy, finanční instituce, orgány státní správy, advokátní kanceláře a další subjekty.
            </p>
            <p>
              Skartace probíhá pod přísným dozorem našich dlouholetých pracovníků. Výsledkem skartovaných dokumentů je jemná papírová drť, přičemž velikost jednotlivých částeček drtě není větší než <strong>2 mm</strong>.
            </p>
            <p className="text-sm md:text-base text-brand-dark/90 font-medium bg-brand-secondary/40 p-4 rounded-xl border border-brand-secondary">
              💡 <em>Materiály ke skartaci můžete jednoduše připravit do běžných pytlů nebo krabic.</em>
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE: Proč likvidovat dokumenty skartací (Karty) */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              Proč likvidovat dokumenty skartací?
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Hlavní výhody a přínosy naší skartovací služby.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {duvody.map((item, index) => (
              <div 
                key={index} 
                className="bg-brand-primary p-7 rounded-2xl shadow-md border border-brand-secondary flex flex-col justify-start"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEKCE: Výzva k akci (CTA) s telefonem */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Máte zájem o naše skartovací služby?
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg mb-6">
            Pokud by Vás naše nabídka oslovila, rádi Vám poskytneme bližší informace. <strong>Stálým zákazníkům nabízíme individuální ceny.</strong>
          </p>
          
          {/* Zvýrazněné telefonní číslo */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">Podmínky skartace domluvte na telefonu:</p>
            <a 
              href="tel:+420482720511" 
              className="font-display text-2xl md:text-3xl font-bold text-brand-accent hover:underline"
            >
              +420 482 720 511
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Kontaktujte nás
            </Link>
            
          </div>
        </div>
      </section>

    </div>
  );
}

export default Recyklaceskartace;