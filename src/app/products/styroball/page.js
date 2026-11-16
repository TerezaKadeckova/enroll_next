"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function StyroballPage() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Lze na STYROBALL získat dotaci z programu Nová zelená úsporám?",
      a: "Ano, tepelná izolace STYROBALL plně vyhovuje požadavkům pro efektivní zateplení v rámci dotačních programů Nová zelená úsporám (NZÚ)."
    },
    {
      q: "Jak se STYROBALL vyrábí a co je zač?",
      a: "STYROBALL je tepelná a akustická izolace z běžného kuličkového stabilizovaného polystyrénu. Skládá se z jednotlivých polystyrénových kuliček do velikosti cca 6 mm a polystyrénových mikročástic (vyrobeno ze 100% recyklovaného obalového polystyrénu) zcela bez použití pojiv."
    },
    {
      q: "Jaké jsou hlavní výhody pokládky?",
      a: "Chová se jako „suchá tekutá hmota“, „nemá rozměr“ (nemusí se řezat ani tvarově přizpůsobovat, nezůstávají neupotřebitelné zbytky) a při montáži nekouše, takže není potřeba speciálních ochranných pomůcek."
    },
    {
      q: "Jak dlouho se v Česku vyrábí?",
      a: "Zásypová hmota z kuliček EPS STYROBALL patřila mezi vůbec první izolace tohoto typu, které se v ČR začaly vyrábět již v roce 1992. Od té doby byla úspěšně použita v tisících staveb."
    }
  ];

  const techParams = [
    { label: "Součinitel tepelné vodivosti (λ)", value: "0,042 W·m⁻¹·K⁻¹" },
    { label: "Objemová hmotnost", value: "15 – 20 kg/m³" },
    { label: "Faktor difúzního odporu (μ)", value: "≤ 1,5" },
    { label: "Mezní teplota použití", value: "80 °C" },
    { label: "Třída reakce na oheň", value: "Třída F (samozhášivá, prostorově stabilizovaná)" },
    { label: "Sesedavost", value: "≤ 1,0 % (nesedá v šikminách ani ve svislých stěnách)" },
    { label: "Tepelný odpor (při vrstvě 10 cm)", value: "R = 2,38 m²·K/W" },
    { label: "Balení", value: "PE pytle o objemu 0,25 m³ (1 pytel = 0,25 m³)" }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
   {/* 1. SEKCE: Hero sekce 50/50 (Text vlevo, čistá fotka vpravo) */}
<section className="w-full bg-[var(--color-brand-light)] border-b border-brand-secondary overflow-hidden">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[55vh] md:min-h-[65vh]">
    
    {/* Levá polovina: Text na čistém světlém podkladu */}
    <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:py-16 lg:pr-12 text-left">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs md:text-sm font-semibold uppercase tracking-wider w-fit mb-5">
        <span>Izolační materiál</span>
      </div>

      <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
        STYROBALL
      </h1>

      <p className="text-lg md:text-2xl font-medium text-brand-dark mb-4 leading-snug">
        Tepelná izolace z pěnového, kuličkového, stabilizovaného expandovaného polystyrénu
      </p>

      <p className="text-sm md:text-base font-medium text-brand-dark/70 uppercase tracking-wider mb-8">
        „Nejdostupnější forma zateplení“ • nesedá • nesaje vodu
      </p>

    </div>

    {/* Pravá polovina: Fotografie bez překryvů a ztmavení */}
    <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-full w-full">
      <img 
        src="/images/styroball.webp" 
        alt="Izolace Styroball" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>

      {/* 2. SEKCE: Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NEJDOSTUPNĚJŠÍ FORMA ZATEPLENÍ“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE DRŽÍ VÁŠ BYT V TEPLE“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text uprostřed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Synonymum pro nejsnazší pokládku
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>STYROBALL</strong> je synonymum pro nejsnazší a finančně nejméně náročnou pokládku tepelně izolačního materiálu pro váš dům! To vše při lepších tepelně izolačních vlastnostech, než mohou nabídnout skelné a minerální vaty.
            </p>
            <p>
              Zásypová hmota se skládá z jednotlivých polystyrénových kuliček (do velikosti cca 6 mm) a mikročástic, které jsou vyrobeny ze 100% recyklovaného obalového polystyrénu technologií bez použití pojiv. Chová se jako „suchá tekutá hmota“.
            </p>
          </div>

          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Je vhodná do staveb s extrémní vnitřní vlhkostí.
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>STYROBALL</strong> je jediná tepelná izolace, která je vhodná pro izolování zemědělských staveb a staveb s EXTRÉMNÍ VNITŘNÍ VLHKOSTÍ. Konírny, drůbežárny, prasečáky, kravíny. . . . .
            </p>
            <p>
              Díky kuličkové struktuře je extrémní vlhko odvětráno mimo stavbu BEZ RIZIKA KONDENZACE, ale TEPLO ZŮSTÁVÁ v objektu.
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
              src="/images/styroballbalik.webp" 
              alt="Balení Styroball" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-secondary)] text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Hlavní přednosti STYROBALLu
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-brand-dark">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Nejlevnější izolační materiál na aplikaci s výbornými vlastnostmi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Nesaje vodu – vhodný i do objektů s vysokou vlhkostí.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Nevyžaduje parozábranu, dýchá, odvádí vlhkost a nesesedá.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Zdravotně nezávadný, neobsahuje formaldehyd, odolný proti škůdcům.</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-primary p-10 md:p-16 flex flex-col justify-center">
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
                <span>Tlaková aplikace vyplní těžko dostupné dutiny a nerovnosti.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Dokonalá eliminace tepelných mostů a kondenzace.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Čistá aplikace bez nutnosti náročného úklidu či zbytků.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Aplikace Styroballu" 
              className="w-full h-full object-cover object-center"
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
            STYROBALL dokonale „zateče“ do složitých tvarů konstrukcí a zabrání tepelným ztrátám.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl">🏠</span> Kam izolaci aplikujeme?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark/80">
              <li className="flex items-center gap-2">Střechy a krovů</li>
              <li className="flex items-center gap-2">Podkroví a podlahy</li>
              <li className="flex items-center gap-2">Vnitřní příčky</li>
              <li className="flex items-center gap-2">Nádrže teplé vody</li>
              <li className="flex items-center gap-2">Stropní konstrukce panelových domů</li>
              <li className="flex items-center gap-2">Svislé stěny plechových hal</li>
            </ul>
          </div>

          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl">🏗️</span> Pro jaké stavby je vhodný?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark/80">
              <li className="flex items-center gap-2">Obytné objekty & průmyslové stavby</li>
              <li className="flex items-center gap-2">Objekty se zvýšenou vlhkostí</li>
              <li className="flex items-center gap-2">Sauny, bazény, zemědělské objekty</li>
              <li className="flex items-center gap-2">Klimatizační šachty</li>
              <li className="flex items-center gap-2">Hospodářské objekty</li>
              <li className="flex items-center gap-2">Běžné domy i rekonstrukce</li>
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
              Parametry zásypové hmoty z kuliček EPS STYROBALL.
            </p>
          </div>

          <a
            href="/documents/styroball-letak.pdf"
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