"use client";

import React, { useState } from 'react';

export default function Entex() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Je izolace EN-TEX registrovaná v programu Nová zelená úsporám?",
      a: "Ano, izolace EN-TEX je plně registrována v dotačním programu Nová zelená úsporám (NZÚ) a splňuje veškeré požadavky pro získání dotace na zateplení."
    },
    {
      q: "Z čeho se EN-TEX vyrábí?",
      a: "EN-TEX je vyroben z mikro vláken přírodního původu (zejména z bavlny a čistých, zdravotně nezávadných textilních výrobků) z obnovitelných zdrojů. Je ošetřen ekologickými aditivy proti škůdcům, plísním a ohni."
    },
    {
      q: "Jaké jsou hlavní bezpečnostní a požární vlastnosti?",
      a: "Při kontaktu s ohněm EN-TEX nehoří a netaví se. Narozdíl od minerálních vláken zabraňuje proniknutí ohně do dalších částí stavby. Není toxický, neobsahuje formaldehyd a nezpůsobuje podráždění pokožky."
    },
    {
      q: "Jak probíhá aplikace izolace?",
      a: "Aplikace se provádí zafoukáním pomocí speciálních strojů TAJFUN (100% český výrobek). Běžný dům o rozloze 100 m² je zateplený za jediný den zcela čistě a bez nutnosti náročného úklidu."
    }
  ];

  const techParams = [
    { label: "Součinitel tepelné vodivosti (λ)", value: "0,0387 W/(m·K)" },
    { label: "Klasifikace reakce na oheň", value: "Třída E" },
    { label: "Faktor difúzního odporu (μ)", value: "< 2,0" },
    { label: "Součinitel zvukové pohltivosti", value: "αw = 1,00 (třída A)" },
    { label: "Kritický obsah vlhkosti", value: "75 %" },
    { label: "Obsah vlhkosti", value: "Max. 5 %" },
    { label: "Objemová hmotnost – volně foukaná (podlahy, stropy)", value: "30 – 65 kg/m³ (dle vrstvy)" },
    { label: "Objemová hmotnost v šikminách", value: "45 – 65 kg/m³" },
    { label: "Objemová hmotnost ve svislých dutinách", value: "Minimálně 65 kg/m³" },
    { label: "Balení", value: "Balíky 10 kg" },
    { label: "Evropské technické schválení (ETA)", value: "Číslo ETA-19/0457 (vydáno 27.01.2020 TZÚS Praha s.p.)" },
    { label: "European Assessment Document (EAD)", value: "Č. 040138-01-1201" }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/en-tex.webp"
          alt="Izolace EN-TEX" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
            EN-TEX
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
            Přírodní tepelná a akustická izolace z textilního vlákna
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
            „NÁŠ ČESKÝ PATENT“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE DRŽÍ VÁŠ BYT V TEPLE“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text přesunutý na střed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Ekologická izolace z textilního mikrovlákna
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>EN-TEX</strong> je vysoce účinná přírodní izolace vyrobená z čistých a zdravotně nezávadných textilních výrobků a bavlněných vláken z obnovitelných zdrojů. <strong>EN-TEX</strong> je vyráběn recyklací odpadních vláken z automobilového a textilních průmyslu. Šetří přírodní zdroje, energii a životní prostředí. Vrací na trh průmyslové odpady, které by jinak skončily na skládce.
            </p>
            <p>
              <strong>EN-TEX</strong> je patent firmy ENROLL CZ. Jsme první a jedinou firmou na světě, která tuto ekologickou tepelnou izolaci vyrábí. Vaše jeansy, pyžama a trika se vrací na trhu v podobě ekologické foukané izolace.
            </p>
            <p>
              Díky ekologickým aditivům je výrobek spolehlivě chráněn proti hlodavcům, hmyzu, plísním a před ohněm. Jako přírodní materiál v sobě navíc aktivně váže CO₂.
            </p>
            <p>
              Ve srovnání s izolacemi na bázi minerálních vláken má téměř o 40 % lepší tepelné vlastnosti a je cenově výhodnější.
            </p>
          </div>
          
          <div className="pt-4 flex justify-center">
            <a 
              href="#technicke-parametry" 
              className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              Technické specifikace
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
              src="/images/entexbalik.webp" 
              alt="Balík EN-TEX" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Hlavní přednosti EN-TEXu
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Registrovaný v programu Nová zelená úsporám.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Vyrobeno z čistého textilního mikrovlákna a bavlny.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Při ohni se netaví a zabraňuje šíření plamene.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>O 40 % lepší tepelné vlastnosti než minerální vaty.</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Výhody foukané aplikace
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Běžný dům o ploše 100 m² zateplený za jediný den.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Tlaková aplikace vyplní těžko dostupné dutiny bez spár.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Dokonalá eliminace tepelných mostů a kondenzace.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Čistá aplikace bez nutnosti náročného úklidu.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[350px] md:h-[450px] overflow-hidden relative">
            <img 
              src="/images/aplikace_svepomoci.webp" 
              alt="aplikace svépomocí" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 5. SEKCE: Použití a oblasti aplikace */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Použití a oblasti aplikace
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            EN-TEX je ideální pro všechny typy staveb a konstrukčních prvků.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl">🏠</span> Kam izolaci aplikujeme?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark/80">
              <li className="flex items-center gap-2">Střechy a podkroví</li>
              <li className="flex items-center gap-2">Stropní konstrukce</li>
              <li className="flex items-center gap-2">Obvodové stěny domů</li>
              <li className="flex items-center gap-2">Vnitřní příčky</li>
              <li className="flex items-center gap-2">Starší střešní konstrukce</li>
              <li className="flex items-center gap-2">Dutiny nových prvků</li>
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
              Certifikované vlastnosti izolačního materiálu EN-TEX.
            </p>
          </div>

          <a
            href="/documents/entex-letak.pdf"
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