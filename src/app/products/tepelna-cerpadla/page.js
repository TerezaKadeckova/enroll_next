"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Tepelnacerpadla() {
  // Stav pro modální okno fotogalerie
  const [activeImage, setActiveImage] = useState(null);

  // Seznam fotek čerpadel ze složky public/images/cerpadla
  const galleryImages = [
    { src: "/images/cerpadla/EVI1.webp", alt: "Invertorové tepelné čerpadlo KOLANT EVI 1" },
    { src: "/images/cerpadla/EVI2.webp", alt: "Invertorové tepelné čerpadlo KOLANT EVI 2" },
    { src: "/images/cerpadla/EVI3.webp", alt: "Invertorové tepelné čerpadlo KOLANT EVI 3" },
    { src: "/images/cerpadla/EVI1118Grey.webp", alt: "Tepelné čerpadlo KOLANT EVI Grey" },
    { src: "/images/cerpadla/9K11KInner.webp", alt: "Tepelné čerpadlo KOLANT 9kW" },
    { src: "/images/cerpadla/16KInner.webp", alt: "Tepelné čerpadlo KOLANT 16kW" },
  ];

  const techParams = [
    { model: "RJ85 / RJ-110H", powerHeat: "8.59 kW / 1.87 kW", powerCool: "7.2 kW / 2.73 kW", powerSupply: "230V / 50–60Hz", refrigerant: "R32" },
    { model: "RJ-150H / RJ-180H", powerHeat: "14.7 kW / 3.31 kW", powerCool: "9.8 kW / 3.77 kW", powerSupply: "400V / 50–60Hz", refrigerant: "R32" },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
    {/* 1. SEKCE: Hero sekce se stylovým podkresem textů */}
<section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
  <img 
    src="/images/cerpadla/EVI1.webp" 
    alt="Tepelná čerpadla KOLANT" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  {/* Jemné celkové ztmavení pozadí */}
  <div className="absolute bg-black/20 inset-0 z-10"></div>
  
  <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center gap-3">
    
    {/* 1. Řádek: Hlavní nadpis */}
    <div className="bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/10 inline-block">
      <h1 className="font-display text-2xl md:text-[42px] font-bold text-brand-accent tracking-tight uppercase leading-tight">
        Tepelná čerpadla KOLANT
      </h1>
    </div>

    {/* 2. Řádek: Podnadpis */}
    <div className="bg-slate-900/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl shadow-lg border border-white/10 inline-block">
      <p className="text-base md:text-xl font-medium text-white uppercase tracking-wide">
        Komplexní řešení pro vytápění, chlazení a ohřev TUV
      </p>
    </div>

    {/* 3. Řádek: Doplňkový text */}
    <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/10 inline-block">
      <p className="text-xs md:text-sm font-normal text-gray-200 uppercase tracking-wider">
        Špičková EVI technologie • spolehlivý provoz až do -35 °C • invertorové kompresory Mitsubishi
      </p>
    </div>

  </div>
</section>

      {/* 2. SEKCE: Úvod a zastoupení */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-accent leading-tight">
            Přímý dovoz a prověřená kvalita
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed text-left md:text-center">
            <p>
              Společnost <strong>ENROLL</strong> je přímým dovozcem tepelných čerpadel a má výhradní obchodní zastoupení čínského výrobce <strong>KOLANT</strong>, který patří mezi střední až větší firmy. Velikost firmy vytváří dostatek finančních zdrojů pro vlastní vývoj a sledování nejnovějších trendů ve vývoji tepelných čerpadel. Tepelná čerpadla KOLANT tak drží krok se světovou špičkou.
            </p>
            <p>
              Tepelná čerpadla KOLANT mají automatickou regulaci výkonu v závislosti na vnější teplotě a teplotě vody v akumulační nádrži nebo v topném systému. Výstup na ovládání pomocí Wi-Fi je samozřejmostí.
            </p>
            <p>
              V našem vzorovém pasivním domě vytápíme přes akumulační nádrž – teplota vody v akumulační nádrži je tedy hodnotou, která funkci čerpadla aktivuje nebo ukončuje.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE: Zvýrazněná cenová nabídka */}
      <section className="w-full bg-brand-secondary py-12 border-t border-b border-brand-secondary shadow-sm">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-dark">
            Akční nabídka vybraného modelu
          </h3>
          <p className="text-lg md:text-xl text-brand-dark/90 leading-relaxed">
            Tepelné čerpadlo <strong>KOLANT RJ85/N8-BPEEVI 9 kW</strong> s COP 4,6 (7 / 35 °C) nabízíme za orientační cenu cca <span className="text-brand-accent font-bold">65.000,- Kč</span>.
          </p>
          <p className="text-sm md:text-base text-brand-dark/70 italic">
            * Doporučujeme cenu předem konzultovat.
          </p>
        </div>
      </section>

      {/* 4. SEKCE: Hlavní vlastnosti a technologie EVI (Pozadí secondary, bez rámečku fotky, zelené nadpisy) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
            Hlavní vlastnosti a technologie EVI
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Invertorové tepelné čerpadlo KOLANT EVI s technologií vstřikování par pro extrémně chladné oblasti.
          </p>
        </div>

        {/* Hlavní box s pozadím brand-secondary */}
        <div className="bg-brand-secondary rounded-3xl shadow-xl border border-brand-secondary p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Levá strana: Velký obrázek EVI3bg.png zcela bez rámečku */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full h-[380px] md:h-[480px] relative flex items-center justify-center p-4">
                <img 
                  src="/images/cerpadla/EVI3bg.png" 
                  alt="Tepelné čerpadlo KOLANT EVI 3" 
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Pravá strana: Vlastnosti s ikonami a zelenými nadpisy */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              
              {/* Položka 1 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">🌡️</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Výkon v mrazech i chlazení
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Zařízení slouží jako komplexní řešení pro celoroční regulaci teploty (vytápění, chlazení i ohřev TUV). Účinně vytápí i při venkovní teplotě <strong>-35 °C</strong> a chladí až do +45 °C.
                </p>
              </div>

              {/* Položka 2 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Technologie EVI a úspora
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Invertorový kompresor s přídavným vstřikováním par zvyšuje topný výkon v zimě bez nutnosti elektrického přídavného topení. Dodává 4 až 5 kW tepla při spotřebě pouhé 1 kW elektřiny.
                </p>
              </div>

              {/* Položka 3 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Chytrá mobilní aplikace
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Pomocí GPRS/GSM modulu a aplikace můžete čerpadlo vzdáleně ovládat, sledovat provozní data v reálném čase a přijímat chybová hlášení.
                </p>
              </div>

              {/* Položka 4 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Maximální bezpečnost
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Důsledné oddělení vody a elektřiny (deskový/trubkový výměník) eliminuje riziko úniku oxidu uhelnatého či toxických plynů.
                </p>
              </div>

              {/* Položka 5 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Flexibilní připojení soustav
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Zařízení lze kombinovat s radiátory, podlahovým vytápěním s nízkými náklady i fankojily (Fan-coil) pro zimní vytápění a letní chlazení.
                </p>
              </div>

              {/* Položka 6 */}
              <div className="flex flex-col items-start">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="font-display text-lg font-bold text-brand-accent mb-1">
                  Ochranné funkce
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed">
                  Systém disponuje ochranou proti tlaku, přetížení, vysoké výstupní teplotě, spínači průtoku vody a automatickou zimní protinamrazovou ochranou.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. SEKCE: Technické parametry a ke stažení */}
      <section id="technicke-parametry" className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-2">
              Technická data a specifikace
            </h2>
            <p className="text-brand-dark/80 text-lg">
              Vybrané modely invertorových tepelných čerpadel KOLANT EVI.
            </p>
          </div>

          <a
            href="/documents/KOLANT_EVI_DC.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors shrink-0"
          >
            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
            Stáhnout produktový katalog (PDF)
          </a>
        </div>

        <div className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white font-display text-sm md:text-base">
                  <th className="py-4 px-6 font-semibold">Model</th>
                  <th className="py-4 px-6 font-semibold">Topný výkon / Příkon (A7/W35)</th>
                  <th className="py-4 px-6 font-semibold">Chladicí výkon / Příkon (A35/W7)</th>
                  <th className="py-4 px-6 font-semibold">Napájení</th>
                  <th className="py-4 px-6 font-semibold">Chladivo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-secondary text-sm md:text-base">
                {techParams.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-brand-primary" : "bg-brand-secondary/10"}
                  >
                    <td className="py-4 px-6 font-medium text-brand-dark">{row.model}</td>
                    <td className="py-4 px-6 text-brand-dark/80">{row.powerHeat}</td>
                    <td className="py-4 px-6 text-brand-dark/80">{row.powerCool}</td>
                    <td className="py-4 px-6 text-brand-dark/80">{row.powerSupply}</td>
                    <td className="py-4 px-6 text-brand-dark/80">{row.refrigerant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-brand-primary p-6 rounded-xl border border-brand-secondary text-sm md:text-base text-brand-dark/90 space-y-2">
          <p><strong>Rozsah provozních teplot:</strong> -30 °C až +43 °C</p>
          <p><strong>Maximální výstupní teplota vody:</strong> až 60 °C</p>
          <p><strong>Kompresor:</strong> Špičkový invertorový kompresor značky Mitsubishi</p>
        </div>
      </section>

      {/* 6. SEKCE: Fotogalerie čerpadel s modálním oknem */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 border-t border-brand-secondary">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Fotogalerie tepelných čerpadel
          </h2>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setActiveImage(img)}
              className="group relative h-72 rounded-xl overflow-hidden shadow-md border border-brand-secondary bg-white flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* MODÁLNÍ OKNO PRO ZVĚTŠENÍ OBRÁZKU */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-brand-accent transition-colors p-2"
              aria-label="Zavřít"
            >
              ✕
            </button>
            
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-brand-secondary bg-white p-2"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}