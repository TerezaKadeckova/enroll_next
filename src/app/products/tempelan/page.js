"use client";

import React, { useState } from 'react';

export default function TempelanPage() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Jak dlouho se TEMPELAN v Česku vyrábí?",
      a: "TEMPELAN byla úplně první foukaná celulózová izolace vyráběná v ČR již od roku 1991. Za více než 30 let existence byla úspěšně aplikována do desítek tisíc staveb."
    },
    {
      q: "Lze na TEMPELAN získat dotaci z programu Nová zelená úsporám?",
      a: "Ano, izolace TEMPELAN plně vyhovuje všem požadavkům dotačních programů Nová zelená úsporám (NZÚ) pro efektivní a úsporné zateplení budov."
    },
    {
      q: "Do jakých staveb je izolace vhodná?",
      a: "TEMPELAN je vhodný pro všechny typy staveb – od běžných rodinných domů, novostaveb, nízkoenergetických a pasivních domů až po rekonstrukce, bytové domy, výrobní haly či školy."
    },
    {
      q: "Jak probíhá zafoukání a jak dlouho trvá?",
      a: "Zafoukávání se provádí pomocí speciálních fukárů (např. stroje TAJFUN nebo KRENDL). Aplikace je mimořádně rychlá – běžný dům o rozloze 100 m² je kompletně zateplen za jediný den bez nutnosti složitých příprav."
    }
  ];

  const techParams = [
    { label: "Součinitel tepelné vodivosti (λ)", value: "0,0365 – 0,0396 W·m⁻¹·K⁻¹" },
    { label: "Klasifikace reakce na oheň", value: "Třída B - s1, d0 (nesnadno hořlavý)" },
    { label: "Šíření plamene po povrchu", value: "0,00 mm/min (nedochází k šíření)" },
    { label: "Objemová hmotnost (volné foukání)", value: "30 – 55 kg/m³" },
    { label: "Objemová hmotnost (tlakové foukání)", value: "65 kg/m³" },
    { label: "Plánovaná sesedavost (volná plocha)", value: "Cca 5 % až max 20 %" },
    { label: "Sesedavost v šikminách a příčkách", value: "0 % (při správném nahutnění)" },
    { label: "Evropské technické schválení (ETA)", value: "ETA-13/0159 (TZÚS Praha s.p.)" },
    { label: "Hmotnost a rozměr jednoho balení", value: "12,5 kg (balík 60 × 40 × 33 cm)" },
    { label: "Další ekologické vlastnosti", value: "Není toxický, bez formaldehydu, nedráždí pokožku" }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/tempelan.webp" 
          alt="Izolace Tempelan" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
            TEMPELAN
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
            Foukaná ekologická přírodní tepelná a akustická celulózová izolace
          </p>
          <p className="text-base md:text-lg font-normal text-gray-200 uppercase tracking-wider">
            nesedá • nehoří • nenasákne vlhkost
          </p>
        </div>
      </section>

      {/* 2. SEKCE: Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE JE PROSPĚŠNÁ PRO CELOU SPOLEČNOST“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE DRŽÍ VÁŠ BYT V TEPLE“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text s obrázkem */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
              Hlavní přednosti izolace TEMPELAN
            </h2>
            <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
              <p>
                TEMPELAN je vysoce kvalitní foukaná celulózová izolace vyrobená z čistého, tříděného recyklovaného novinového papíru s přírodním ošetřením proti plísním, škůdcům a ohni.
              </p>
              <p>
                Díky své struktuře a aplikaci foukáním dokonale vyplní každý detail konstrukce bez vzniku tepelných mostů. Skvěle izoluje proti chladu v zimě i horku v létě a vyniká mimořádnou akustickou izolací.
              </p>
              <p>
                Na dotek je TEMPELAN heboučká celulózová vata šedé barvy. Neobsahuje žádné pichlavé částice a manipulace s ním je stejně příjemná jako s buničitou vatou pro lékařské použití.
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#technicke-parametry" 
                className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
              >
                Technické specifikace
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl border-4 border-brand-primary bg-brand-primary">
            <img 
              src="/images/tempelan_balik.webp" 
              alt="Tempelan balíky" 
              className="w-full h-auto object-cover"
            />
          </div>
          
        </div>
      </section>

      {/* 4. SEKCE: Full-bleed mřížka 2x2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          
          {/* 1. blok: Obrázek */}
          <div className="w-full h-[350px] md:h-[450px] overflow-hidden relative">
            <img 
              src="/images/tempelan-aplikace.webp" 
              alt="Aplikace Tempelanu" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Proč zvolit TEMPELAN?
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Přírodní ochrana proti ohni, plísním a hlodavcům.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>O 40 % lepší tepelně-izolační vlastnosti než minerální vaty.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Materiál přirozeně dýchá a zabraňuje kondenzaci vlhkosti.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Splňuje požadavky dotačních programů (Nová zelená úsporám).</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Rychlá aplikace bez nepořádku
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Běžný dům o ploše 100 m² zateplíme za jediný den.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Foukaná izolace dokonale vyplní těžko dostupné dutiny.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Nevyžaduje náročný úklid ani složité přípravné práce.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Aplikace je možná přímo na záklop nebo trámy.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[350px] md:h-[450px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Detail struktury izolace" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 5. SEKCE: Kde a kam lze TEMPELAN použít */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Použití a oblasti aplikace
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            TEMPELAN se univerzálně přizpůsobí jakékoliv konstrukci bez jakýchkoliv spár či mezer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl">🏠</span> Kam izolaci aplikujeme?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark/80">
              <li className="flex items-center gap-2">Půdní prostory</li>
              <li className="flex items-center gap-2">Šikmé střechy</li>
              <li className="flex items-center gap-2">Obvodové stěny domů</li>
              <li className="flex items-center gap-2">Vnitřní příčky</li>
              <li className="flex items-center gap-2">Stropní konstrukce</li>
              <li className="flex items-center gap-2">Rovné nepochozí plochy</li>
            </ul>
          </div>

          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl">🏗️</span> Pro jaké stavby je vhodný?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark/80">
              <li className="flex items-center gap-2">Rodinné domy</li>
              <li className="flex items-center gap-2">Novostavby & rekonstrukce</li>
              <li className="flex items-center gap-2">Nízkoenergetické & pasivní domy</li>
              <li className="flex items-center gap-2">Bytové domy</li>
              <li className="flex items-center gap-2">Výrobní haly</li>
              <li className="flex items-center gap-2">Školy a veřejné budovy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. SEKCE: Často kladené dotazy (FAQ) */}
      <section className="w-full bg-brand-secondary/20 py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-center text-brand-dark mb-12">
            Často kladené dotazy
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-brand-primary rounded-lg shadow-sm border border-brand-secondary overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left font-display font-semibold text-lg md:text-xl text-brand-dark flex justify-between items-center hover:text-brand-accent transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-2xl ml-4 font-normal">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-brand-dark/80 text-base leading-relaxed border-t border-brand-secondary pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEKCE: Technické parametry a ke stažení */}
      <section id="technicke-parametry" className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-2">
              Technické informace a parametry
            </h2>
            <p className="text-brand-dark/80 text-lg">
              Certifikované vlastnosti foukané celulózové izolace TEMPELAN.
            </p>
          </div>

          <a
            href="/documents/tempelan-letak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors shrink-0"
          >
            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
            Stáhnout leták & technické specifikace (PDF)
          </a>
        </div>

        <div className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white font-display text-sm md:text-base">
                  <th className="py-4 px-6 font-semibold">Technická vlastnost</th>
                  <th className="py-4 px-6 font-semibold">Hodnota a specifikace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-secondary text-sm md:text-base">
                {techParams.map((param, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-brand-primary" : "bg-brand-secondary/10"}
                  >
                    <td className="py-4 px-6 font-medium text-brand-dark">{param.label}</td>
                    <td className="py-4 px-6 text-brand-dark/80">{param.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}