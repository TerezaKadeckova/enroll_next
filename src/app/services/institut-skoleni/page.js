"use client";

import React from 'react';
import Link from 'next/link';

function Instituteskoleni() {
  const oblastiSkoleni = [
    {
     
      title: "Přírodní izolační materiály",
      desc: "Odborná školení zaměřená na vlastnosti a správnou aplikaci dřevovláknitých, konopných, lněných a dalších ekologických izolací.",
    },
    {
      
      title: "Skladby a konstrukční řešení",
      desc: "Školení pro projektanty a stavebníky zaměřená na difúzně otevřené systémy stěn, střech a stropů bez tepelných mostů.",
    },
    {
      
      title: "Praktická aplikace foukaných izolací",
      desc: "Zaučení v oblasti zpracování a foukání přírodních materiálů, jako je celulóza, dřevovlákno či polystyren.",
    },
    {
      
      title: "Videa a osvěta v oboru",
      desc: "Poznejte materiály do hloubky dříve, než se rozhodnete stavět. Na našem YouTube kanálu testujeme vlastnosti materiálů a vyvracíme mýty o stavebnictví.",

    },
  ];

  const cinnostInstitutu = [
    {
      step: "01",
      title: "Osvěta v oboru",
      desc: "Institut přírodních izolací byl založen za účelem šíření osvěty a vzdělávání pro odborníky i širokou veřejnost.",
    },
    {
      step: "02",
      title: "Odborné kurzy a školení",
      desc: "Pořádáme teoretická i praktická školení pro stavební firmy, realizační týmy, architekty i stavebníky svépomocí.",
    },
    {
      step: "03",
      title: "Certifikované postupy",
      desc: "Seznamujeme účastníky s ověřenými technickými řešeními a skladbami prověřenými v praxi.",
    },
    {
      step: "04",
      title: "Odborné poradenství",
      desc: "Poskytujeme konzultace a sdílíme dlouholeté zkušenosti z oblasti ekologického a udržitelného stavitelství.",
    },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany, logem vlevo a textem na střed */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/osveta_myty.webp" 
          alt="Institut a školení přírodních izolací" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-5xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] w-full flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo institutu v levém rohu */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/images/logo_institut.webp" 
                alt="Logo Institut přírodních izolací" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Textová část uvnitř karty - změněno na text-center */}
            <div className="flex-grow text-center">
              {/* Hlavní nadpis v barvě brand-accent */}
              <h1 className="font-display text-2xl md:text-[38px] font-bold text-brand-accent tracking-tight mb-2 uppercase leading-tight">
                Institut a školení
              </h1>
              
              {/* Podnadpis */}
              <p className="text-sm md:text-base font-medium text-brand-dark/90 uppercase tracking-wide">
                Vzdělávání v oblasti udržitelného stavebnictví a přírodních materiálů
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvod */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Založili jsme Institut přírodních izolací pro osvětu v oboru
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed text-left md:text-center">
            <p>
              Za účelem osvěty v oboru pro odborníky a širokou veřejnost jsme založili <strong>Institut přírodních izolací</strong>. Ve stavebnictví dostávají stále větší přednost přírodní tepelně izolační materiály a ekologické stavební systémy, které dokážou vytvořit trvale udržitelné a zdravé bydlení.
            </p>
            <p>
              Prostřednictvím našich odborných kurzů, školení a oficiálních webových stránek předáváme teoretické znalosti i praktické zkušenosti dál. Navštivte náš specializovaný web <a href="https://institut-prirodnich-izolaci.cz/" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold underline hover:opacity-80">institut-prirodnich-izolaci.cz</a> a zjistěte více.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE: Činnost institutu */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Činnost a zaměření institutu
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Jak pomáháme rozvíjet moderní ekologické stavitelství.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cinnostInstitutu.map((item, index) => (
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

      {/* 4. SEKCE: Oblasti školení (na pozadí brand-secondary) */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              Témata našich odborných školení
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Vyberte si oblast, ve které se chcete profesně posunout nebo získat jistotu pro svůj stavební projekt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oblastiSkoleni.map((item, index) => (
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

      {/* 5. SEKCE: Výzva k akci (CTA) s odkazem na web */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Navštivte oficiální stránky institutu
          </h2>
          
          
         {/* Odkaz na externí web s logem */}
          <div className="mb-8">
            <a 
              href="https://institut-prirodnich-izolaci.cz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 font-display text-xl md:text-2xl font-bold text-brand-accent hover:underline"
            >
              <img 
                src="/images/logo_institut.webp" 
                alt="Logo Institut přírodních izolací" 
                className="h-10 md:h-12 w-auto object-contain bg-white/10 p-1 rounded-lg"
              />
              <span>Institut přírodních izolací</span>
            </a>
          </div>

        
        </div>
      </section>

    </div>
  );
}

export default Instituteskoleni;