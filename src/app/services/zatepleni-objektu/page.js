"use client";

import React from 'react';
import Link from 'next/link';

function Zatepleniobjektu() {
  const slozeni = [
    {
      step: "01",
      title: "Dřevěný vyrovnávací rošt",
      desc: "Rošt z latí 40 × 60 mm (nebo jiný rozměr dle potřeby stavby).",
    },
    {
      step: "02",
      title: "Zákryt deskou AGEPAN",
      desc: "Kvalitní dřevovláknitá deska AGEPAN v tloušťce 40 mm.",
    },
    {
      step: "03",
      title: "Zafoukání přírodní izolace",
      desc: "Vzniklý prostor je následně zafoukán izolací z přírodního vlákna TEMPELAN nebo EN-TEX.",
    },
    {
      step: "04",
      title: "Finální vrstva",
      desc: "Perlinka s difúzně otevřeným lepidlem a finální silikátová stěrka.",
    },
  ];

  const vlastnosti = [
    {
      icon: "🌿",
      title: "100% přírodní materiály",
      desc: "Difúzně otevřený systém složený výhradně z přírodních materiálů s výhodnější cenou díky nezávislosti na ropě.",
    },
    {
      icon: "🌿",
      title: "Nulové náklady na opravu",
      desc: "Žádné skryté vady ani náklady na dodatečné opravy omítky pod zateplovacím systémem.",
    },
    {
      icon: "🌿",
      title: "Rychlá a jednoduchá instalace",
      desc: "Bez tepelných mostů – desky AGEPAN jsou pevně spojovány osvědčeným systémem pero-drážka.",
    },
    {
      icon: "🌿",
      title: "O 40 % lepší vlastnosti",
      desc: "V dané tloušťce izolace má systém o 40 % lepší tepelně izolační vlastnosti oproti energeticky náročným minerálním vláknům.",
    },
    {
      icon: "🌿",
      title: "Enormně dlouhá životnost",
      desc: "Vysoká odolnost, špičková kvalita zpracování a příznivá pořizovací cena.",
    },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/realizace.webp" 
          alt="Zateplení objektů ENROLL" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-4xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-3xl w-full">
            
            {/* Hlavní nadpis v barvě brand-accent */}
            <h1 className="font-display text-3xl md:text-[42px] font-bold text-brand-accent tracking-tight mb-3 uppercase leading-tight">
              Vlastní zateplovací systém ENROLL
            </h1>
            
            {/* Podnadpis */}
            <p className="text-base md:text-lg font-medium text-brand-dark/90 uppercase tracking-wide">
              Respektujeme fyzikální zákony a přírodní materiály
            </p>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvod */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Zateplení obvodových stěn s úctou k přírodě
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed text-left md:text-center">
            <p>
              Společnost <strong>ENROLL</strong> důsledně dodržuje fyzikální a přírodní zákony, které se týkají zateplování budov. Současně s tím preferujeme používání přírodních materiálů, které již ve fázi výroby nepoškozují životní prostředí a nezatěžují ho emisemi ani vysokou spotřebou energie.
            </p>
            <p>
              ENROLL vyvinul vlastní zateplovací systém obvodových stěn, který předává dalším stavebním firmám. Tento systém se vymyká dnešním „rychlo“ metodám, které nerespektují přírodní zákony.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE: Složení systému */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Složení zateplovacího systému
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Pečlivě navržená skladba vrstev pro maximální funkčnost a životnost stavby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slozeni.map((item, index) => (
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

      {/* 4. SEKCE: Vlastnosti systému (na pozadí brand-secondary) */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              Vlastnosti a přednosti systému
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Proč je náš systém ideální volbou pro váš dům.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vlastnosti.map((item, index) => (
              <div 
                key={index} 
                className="bg-brand-primary p-8 rounded-2xl shadow-sm border border-brand-secondary/80 flex flex-col justify-start"
              >
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

      {/* 5. SEKCE: Výzva k akci (CTA) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Máte zájem o náš zateplovací systém?
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg mb-8">
            Rádi vám poskytneme bližší informace, technické podklady nebo připravíme nabídku pro váš projekt.
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

export default Zatepleniobjektu;