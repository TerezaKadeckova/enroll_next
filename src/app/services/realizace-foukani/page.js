"use client";

import React from 'react';
import Link from 'next/link';

function Realizacefoukaniizolace() {
  const nabidka = [
    {
      
      title: "Zateplení horizontálních konstrukcí",
      desc: "Půdy, stropy, trámové stropy (otevřené plochy i záklopy).",
    },
    {
      
      title: "Zateplení šikmých střech a podkroví",
      desc: "Vyplnění dutin v mansardách a střešních pláštích.",
    },
    {
      
      title: "Izolace dutin obvodových stěn",
      desc: "Dvouplášťové zdivo, montované dřevostavby a sádrokartonové příčky.",
    },
    {
      
      title: "Akustické a protipožární nástřiky",
      desc: "Speciální aplikace materiálů pro zvýšení bezpečnosti a útlum hluku.",
    },
  ];

  const vyhody = [
    {
      icon: "🌿",
      title: "Bez tepelných mostů",
      desc: "Souvislá izolační vrstva vyplní i ty nejmenší mezery a dutiny.",
    },
    {
      icon: "🌿",
      title: "Rychlost realizace",
      desc: "Většinu rodinných domů zvládneme zaizolovat během jediného dne.",
    },
    {
      icon: "🌿",
      title: "Bez nepořádku a zbytků",
      desc: "Materiál se přivádí v hadicích přímo na místo určení, na stavbě nevzniká žádný stavební odpad ani odřezky.",
    },
    {
      icon: "🌿",
      title: "Ekologický a zdravý materiál",
      desc: "Využíváme ověřené materiály s dlouhou životností, které regulují vlhkost.",
    },
  ];

  const postup = [
    {
      step: "01",
      title: "Poptávka a konzultace",
      desc: "Ozvete se nám, nezávazně probereme vaše potřeby a navrhneme nejvhodnější materiál i tloušťku vrstvy.",
    },
    {
      step: "02",
      title: "Zaměření a cenová nabídka",
      desc: "Připravíme přesnou kalkulaci na míru vašemu objektu.",
    },
    {
      step: "03",
      title: "Samotná realizace",
      desc: "Přijedeme s aplikačním strojem TAJFUN, materiál zafoukáme rychle a čistě bez nutnosti složitých stavebních úprav.",
    },
    {
      step: "04",
      title: "Předání díla",
      desc: "Zkontrolujeme výsledek a zanecháme po sobě uklizený prostor.",
    },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/realizace.webp" 
          alt="Realizace foukání izolace" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-4xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-3xl w-full">
            
            {/* Hlavní nadpis v barvě brand-accent */}
            <h1 className="font-display text-3xl md:text-[42px] font-bold text-brand-accent tracking-tight mb-3 uppercase leading-tight">
              Realizace foukání izolace
            </h1>
            
            {/* Podnadpis */}
            <p className="text-base md:text-lg font-medium text-brand-dark/90 uppercase tracking-wide">
              Rychlé, čisté a bezodpadové zateplení domů foukanou izolací
            </p>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvodní text */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Rychlé, čisté a bezodpadové zateplení domů foukanou izolací
          </h2>
          <p className="text-base md:text-[18px] text-brand-dark/80 leading-relaxed">
            Přemýšlíte, jak efektivně zateplit starší dům, novostavbu, těžko přístupnou půdu nebo strop? Foukaná izolace představuje moderní, ekologické a vysoce účinné řešení. Materiál se dostane do každého koutu bez spár a tepelných mostů, takže ušetříte za vytápění a zlepšíte vnitřní klima vašeho domova. O vše se postaráme za vás – od prvotní konzultace až po samotnou realizaci.
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Co nabízíme */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Co nabízíme
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Komplexní zateplení konstrukcí všech typů staveb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nabidka.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-primary p-7 rounded-2xl shadow-md border border-brand-secondary flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEKCE: Výhody */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              Hlavní výhody foukané izolace
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Proč zvolit foukanou izolaci od společnosti ENROLL.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vyhody.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-dark/85 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEKCE: Jak to probíhá */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Jak to probíhá
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Od první konzultace po čisté předání díla ve čtyřech jednoduchých krocích.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {postup.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-primary p-7 rounded-2xl shadow-md border border-brand-secondary relative flex flex-col justify-start"
            >
              <span className="font-display text-4xl font-bold text-brand-accent/30 mb-3 block">
                {item.step}
              </span>
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SEKCE: Výzva k akci (CTA) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Chcete nezávazně spočítat zateplení vašeho domu?
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg mb-8">
            Ozvěte se nám – rádi s vámi probereme možnosti zateplení a připravíme kalkulaci přímo na míru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Nezávazná poptávka
            </Link>
           
          </div>
        </div>
      </section>

    </div>
  );
}

export default Realizacefoukaniizolace;