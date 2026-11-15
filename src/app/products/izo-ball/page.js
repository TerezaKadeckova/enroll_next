"use client";

import React, { useState } from 'react';

export default function IzoballPage() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Jaká je spotřeba IZO-BALLu při přípravě polystyrenbetonu?",
      a: "Spotřeba IZO-BALLu je přibližně 1:1 k výslednému požadovanému objemu směsi. Důvodem je mezerovitost mezi kuličkami, kterou vyplní cementový tmel a písek. Příklad: Pro vrstvu 20 cm v místnosti 5 × 5 m (objem 5 m³) spotřebujete přibližně 5 m³ IZO-BALLu (s tolerancí cca 10 %)."
    },
    {
      q: "Jak probíhá jednoduchá příprava a míchání?",
      a: "Nejprve smísíte vodu s cementem na cementové mléko, do kterého postupně přidáváte předepsané množství IZO-BALLu a písku. Míchání musí být dostatečně dlouhé, aby se mikrovlákno na kuličkách dokonale obalilo cementem. Díky unikátní úpravě kuličky při míchání „neplavou“."
    },
    {
      q: "Lze polystyrenbeton z IZO-BALLu použít v dotačních programech?",
      a: "Ano, lehčený polystyrenbeton připravený z IZO-BALLu je ideálním podkladním a vyrovnávacím izolačním materiálem, který pomáhá splnit tepelně-technické požadavky v programu Nová zelená úsporám (NZÚ)."
    },
    {
      q: "Kde všude lze IZO-BALL zakoupit?",
      a: "IZO-BALL zakoupíte v široké síti prodejen stavebnin po celé ČR, přímo v našem sídle v Nové Vsi u Liberce, nebo si můžete objednat hotovou směs u smluvních betonáren (např. ZAPA beton, Frischbeton, Cemex, Holcim, TBG). V případě potřeby vám zajistíme dopávku materiálu přímo před váš dům."
    }
  ];

  // Data pro recepturu a dávkování polystyrenbetonu
  const dosageData = [
    { density: "200 kg/m³", usage: "Tepelně izolační výplně, nepochozí střechy", izoball: "1000 l", cement: "120 kg", water: "100 l", sand: "30 kg", strength: "0,2 MPa", lambda: "0,057 W/mK" },
    { density: "350 kg/m³", usage: "Nenosné podklady, výplně stropů", izoball: "1000 l", cement: "220 kg", water: "120 l", sand: "40 kg", strength: "0,3 MPa", lambda: "0,086 W/mK" },
    { density: "500 kg/m³", usage: "Bazény, klenby, pochozí střechy", izoball: "1000 l", cement: "280 kg", water: "120 l", sand: "100 kg", strength: "0,5 MPa", lambda: "0,140 W/mK" },
    { density: "700 kg/m³", usage: "Obytné místnosti, pochozí střechy", izoball: "1000 l", cement: "280 kg", water: "120 l", sand: "300 kg", strength: "0,9 MPa", lambda: "0,177 W/mK" },
    { density: "900 kg/m³", usage: "Obytné místnosti, technické prostory", izoball: "1000 l", cement: "260 kg", water: "150 l", sand: "540 kg", strength: "1,8 MPa", lambda: "0,235 W/mK" }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/izo-ball.webp" 
          alt="Směs IZO-BALL pro polystyrenbeton" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
            IZO-BALL
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
            Jedinečná směs pro snadnou přípravu POLYSTYRENBETONU
          </p>
          <p className="text-base md:text-lg font-normal text-gray-200 uppercase tracking-wider">
            Vyroben ze 100% recyklovaného polystyrenu • s patentovaným mikrovláknem
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
            „NAŠE RECYKLACE VYTVÁŘÍ PEVNÝ ZÁKLAD“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text uprostřed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Co dělá IZO-BALL unikátním materiálem na trhu?
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>IZO-BALL</strong> jsou polystyrénové kuličky ošetřené speciální pojivovou složkou – <strong>celulózovým mikrovláknem</strong> přichyceným ke každé jednotlivé kuličce. Toto mikrovlákno zajistí dokonalé spojení kuliček s cementem, vodou a pískem.Celulózové mikrovláno absorbuje enormní množství vody, které tak zabezpečí spolehlivý průběh hydratace betonu.
            </p>
            <p>
              Je jediným výrobkem na trhu v ČR, který zaručuje, že polystyrenové kuličky při míchání <strong>„neplavou“</strong>, cementové mléko se drží na povrchu kuliček a materiál se snadno zpracovává i čerpá.
            </p>
          </div>
          
          <div className="pt-4 flex justify-center">
            <a 
              href="#davkovani" 
              className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              Receptury a dávkování
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
              src="/images/izoball2.webp" 
              alt="Příprava IZO-BALL" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Výhody při míchání a přípravě
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Kuličky k sobě natáhnou cementové mléko a neplavou na hladině.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Eliminuje lidskou chybu v případě nechtěného přelití vodou.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Slouží pro přípravu lehkých betonů s libovolnou objemovou hmotností.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Rychlou a snadnou přípravu zvládne svépomocí opravdu každý.</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Přednosti při pokládce a čerpání
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Směs se velmi snadno tvaruje, rozhrnuje a rozprostírá.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Možnost pokládky ručně nebo pomocí betonářského čerpadla.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Voda se při čerpání nevymáčkne, beton hadicí skvěle proudí.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Drží v sobě vlhkost pro dokonalou a žádoucí hydrataci betonu.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Pokládka polystyrenbetonu" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 5. SEKCE: Vlastnosti a garance (Stylizované karty) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Hlavní vlastnosti a servis IZO-BALL
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Spolehlivé vlastnosti prověřené tisíci realizacemi po celé České republice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-brand-primary p-6 rounded-xl border border-brand-secondary shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-brand-accent text-3xl mb-3">💧</div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Po položení směsi</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                IZO-BALL ve směsi stále drží vodu, čímž eliminuje její vypadnutí a výrazně přispívá k lepší hydrataci betonu.
              </p>
            </div>
          </div>

          <div className="bg-brand-primary p-6 rounded-xl border border-brand-secondary shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-brand-accent text-3xl mb-3">⚙️</div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Snadné čerpání</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Voda se při čerpání nevymáčkne. Díky mikrovláknu beton plynule proudí hadicí i při velmi nízkých objemových hmotnostech.
              </p>
            </div>
          </div>

          <div className="bg-brand-primary p-6 rounded-xl border border-brand-secondary shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-brand-accent text-3xl mb-3">📦</div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Praktické balení</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Dodáváno v pevných a snadno manipulovatelných PE pytlích o objemu 0,25 m³ (4 pytle = 1 m³ výsledné směsi).
              </p>
            </div>
          </div>

          <div className="bg-brand-primary p-6 rounded-xl border border-brand-secondary shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-brand-accent text-3xl mb-3">🚚</div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Doprava do 48 hodin</h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Garantujeme rychlé dodání jakéhokoliv množství kamkoliv po ČR do 48 hodin od objednání díky trvalým skladovým zásobám.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEKCE: Dávkovací tabulka pro polystyrenbeton */}
      <section id="davkovani" className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Dávkování pro přípravu POLYSTYRENBETONU
          </h2>
          <p className="text-brand-dark/80 text-base md:text-lg max-w-3xl mx-auto">
            Orientační poměry složek pro 1 m³ (1000 litrů) hotové betonové směsi dle požadované pevnosti a využití.
          </p>
        </div>

        <div className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white font-display text-sm md:text-base">
                  <th className="py-4 px-4 md:px-6 font-semibold">Objemová hmotnost</th>
                  <th className="py-4 px-4 md:px-6 font-semibold">Příklady použití</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">IZO-BALL</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">Cement</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">Voda</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">Písek</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">Pevnost</th>
                  <th className="py-4 px-4 md:px-6 font-semibold text-center">Tepelná vodivost (λ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-secondary text-sm md:text-base">
                {dosageData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-brand-primary" : "bg-brand-secondary/10"}
                  >
                    <td className="py-4 px-4 md:px-6 font-bold text-brand-dark shrink-0">{row.density}</td>
                    <td className="py-4 px-4 md:px-6 text-brand-dark/80">{row.usage}</td>
                    <td className="py-4 px-4 md:px-6 text-center text-brand-dark/90 font-medium">{row.izoball}</td>
                    <td className="py-4 px-4 md:px-6 text-center text-brand-dark/90 font-medium">{row.cement}</td>
                    <td className="py-4 px-4 md:px-6 text-center text-brand-dark/90 font-medium">{row.water}</td>
                    <td className="py-4 px-4 md:px-6 text-center text-brand-dark/90 font-medium">{row.sand}</td>
                    <td className="py-4 px-4 md:px-6 text-center font-semibold text-brand-dark">{row.strength}</td>
                    <td className="py-4 px-4 md:px-6 text-center text-brand-accent font-bold">{row.lambda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-brand-dark/60 mt-3 text-center italic">
          * Potřebnou objemovou hmotnost doporučujeme zvolit po konzultaci s odborníkem v oboru stavebnictví.
        </p>
      </section>

      {/* 7. SEKCE: Často kladené dotazy (FAQ) */}
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

      {/* 8. SEKCE: Ke stažení technických podkladů */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-primary p-8 md:p-12 rounded-xl shadow-md border border-brand-secondary flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Dokumenty a letáky ke stažení
            </h2>
            <p className="text-brand-dark/80 text-base md:text-lg">
              Stáhněte si detailní návod na přípravu polystyrenbetonu a produktový leták v PDF.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="/documents/izoball-navod.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-accent text-brand-dark font-bold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
              Stáhnout návod na přípravu (PDF)
            </a>
            <a
              href="/documents/izoball-letak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors"
            >
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
              Stáhnout produktový leták (PDF)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}