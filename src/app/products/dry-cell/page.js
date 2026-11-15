"use client";

import React, { useState } from 'react';

export default function DrycellPage() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Kolik vody dokáže DRY-CELL® absorbovat?",
      a: "DRY-CELL® dokáže během několika minut absorbovat 8 až 9 litrů vody na 1 kg své hmotnosti. Při aplikaci 3 cm vrstvy (cca 3 kg/m²) pohltí 24 až 27 litrů vody z jednoho čtverečního metru."
    },
    {
      q: "Lze hmotu po nasáknutí použít opakovaně?",
      a: "Ano, po nasáknutí a následném vysušení na slunci nebo v sušárně lze DRY-CELL® použít opakovaně, pokud nebyl kontaminován nebezpečnými chemikáliemi či oleji."
    },
    {
      q: "Jak se DRY-CELL® ekologicky likviduje?",
      a: "Pokud obsahoval pouze čistou nebo povodňovou vodu bez nebezpečných látek, lze ho vyhodit do běžného odpadu, odvézt na skládku či kompost. Smíchaný se zeminou či bahnem slouží na zahrádce k udržování vlhkosti záhonů."
    },
    {
      q: "Dokáže pohlvat i jiné kapaliny než vodu?",
      a: "Ano, DRY-CELL® spolehlivě pohlcuje také oleje, jedy a další provozní kapaliny. Způsob likvidace takto kontaminované hmoty pak podléhá pravidlům pro daný typ látky."
    }
  ];

  const techParams = [
    { label: "Absorpční schopnost", value: "8 – 9 litrů vody na 1 kg hmoty" },
    { label: "Kapacita při vrstvě 3 cm", value: "24 – 27 litrů vody / m² (vrstva 3 kg/m²)" },
    { label: "Rychlost pohlcování", value: "Několik minut díky buněčné struktuře" },
    { label: "Materiálové složení", value: "Kompaktní hmota na bázi papírového mikrovlákna" },
    { label: "Ekologické vlastnosti", value: "100% ekologický, zdravotně nezávadný, kompostovatelný" },
    { label: "Možnost opakovaného použití", value: "Ano (po vysušení nasáklé hmoty)" },
    { label: "Praktická prověřenost", value: "Prověřeno praxí při povodních 2002, 2010 i 2013" }
  ];

  const stepsData = [
    { step: "1", title: "Rozbalení", desc: "Rozbalte balík a vysypte hmotu na postižené místo." },
    { step: "2", title: "Rozhrnutí", desc: "Rozhrňte hmotu (např. hráběmi) po podlaze ve vrstvě 3 – 5 cm." },
    { step: "3", title: "Nahrnutí ke zdem", desc: "Nahrňte DRY-CELL® až ke zdem, aby sál vlhkost ze zdiva i podlah." },
    { step: "4", title: "Absorpce", desc: "Nechte hmotu 1 až 2 hodiny intenzivně nasávat vodu." },
    { step: "5", title: "Prohrnování", desc: "Hmotu občas převraťte nebo přehrňte pro maximální využití kapacity." },
    { step: "6", title: "Odstranění a Opakování", desc: "Nasáklou hmotu odstraňte a proces dle potřeby opakujte (obvykle stačí 2×)." }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/drycell.webp" 
          alt="Vysoušecí hmota DRY-CELL" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
            DRY-CELL®
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
            Vysoušecí hmota pro rychlé vysušení zdí a podlah po povodních
          </p>
          <p className="text-base md:text-lg font-normal text-gray-200 uppercase tracking-wider">
            pohltí 8–9 l vody / kg • 100% ekologická • opakovaně použitelná
          </p>
        </div>
      </section>

      {/* 2. SEKCE: Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NEJRYCHLEJŠÍ A NEJLEVNĚJŠÍ VYSUŠENÍ PO POVODNÍCH“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE JE PROSPĚŠNÁ PRO CELOU SPOLEČNOST“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text uprostřed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Okamžitá pomoc při vytopení a povodních
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>DRY-CELL®</strong> představuje velmi kompaktní hmotu na bázi papírového mikrovlákna určenou pro bleskové a levné vysušení mokrých nebo zamáčených prostor po povodních a haváriích vody.
            </p>
            <p>
              Díky obrovské schopnosti vázat vodu a speciální buněčné struktuře pohlcenou vodu pevně drží, čímž zásadně urychluje vysoušecí proces i v místech, kde je čerpání vody technicky nemožné a vytírání hadry zdlouhavé. Spolehlivost byla prověřena praxí při velkých povodních v letech 2002, 2010 i 2013.
            </p>
          </div>
          
          <div className="pt-4 flex justify-center">
            <a 
              href="#postup-pouziti" 
              className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              Návod k použití
            </a>
          </div>
        </div>
      </section>

      {/* 4. SEKCE: Full-bleed mřížka 2x2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          
          {/* 1. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/drycell-aplikace.webp" 
              alt="Aplikace DRY-CELL" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Hlavní přednosti DRY-CELLu
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Absorbuje 8 až 9 litrů vody na 1 kg své hmotnosti během několika minut.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Buněčná struktura drží pohlcenou vodu bez okamžitého odkapávání.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Po vysušení jej lze použít opakovaně bez ztráty vlastností.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Absorbuje rovněž oleje, nebezpečné kapaliny a chemické náplně.</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Ekologické a Praktické výhody
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Zdravotně a ekologicky 100% nezávadná přírodní hmota.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Plně kompostovatelný materiál bez zátěže životního prostředí.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Lze použít na záhonech a zahrádkách k udržování půdní vlhkosti.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Snadná likvidace spojená s běžným odpadem nebo skládkou.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Detail hmoty DRY-CELL" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 5. SEKCE: Postup použití (Krokový návod 1-6) */}
      <section id="postup-pouziti" className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Jednoduchý postup použití
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Návod pro rychlé vysušení vytopených místností a zdiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsData.map((item, index) => (
            <div 
              key={index}
              className="bg-brand-primary p-6 rounded-xl border border-brand-secondary shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
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
              Specifikace vysoušecí hmoty DRY-CELL®.
            </p>
          </div>

          <a
            href="/documents/drycell-letak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors shrink-0"
          >
            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
            Stáhnout leták (PDF)
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