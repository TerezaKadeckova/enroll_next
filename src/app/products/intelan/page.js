"use client";

import React, { useState } from 'react';

export default function IntelanPage() {
  // Stav pro rozbalovací odpovědi v sekci FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // Stav pro modální okno galerie (drží aktuálně kliknutý obrázek)
  const [activeImage, setActiveImage] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Jak funguje nástřik proti kondenzaci vody?",
      a: "Již tenká vrstva o tloušťce 20 mm spolehlivě eliminuje tvorbu rosného bodu. Tím zcela zabraňuje odkapávání kondenzátu na pracovníky, stroje či zboží uvnitř haly a zároveň chrání ocelové konstrukce před korozí."
    },
    {
      q: "Jaké má INTELAN akustické vlastnosti?",
      a: "Ve vrstvě 30–40 mm pohlcuje zvuk na odraz z úctyhodných 99 %. Zásadním způsobem snižuje hladinu hluku ve výrobních halách a zabraňuje prostupu hluku ven skrze nosné konstrukce."
    },
    {
      q: "Na jaké podklady lze nástřik aplikovat?",
      a: "Nástřik INTELAN lze nanášet na jakýkoliv povrch a podklad – plechy, nosníky, traverzy, OSB desky, dřevo a další. Aplikaci lze provádět po celý rok dle tepelných podmínek v objektu."
    },
    {
      q: "Lze na INTELAN získat dotaci z programu Nová zelená úsporám?",
      a: "Ano, akustické, tepelné a protipožární nástřiky INTELAN plně vyhovují požadavkům dotačních programů pro modernizaci a úsporu energií v budovách (např. Nová zelená úsporám)."
    }
  ];

  const techParams = [
    { label: "Třída reakce na oheň", value: "B - s1" },
    { label: "Odkapávání hmot z podhledů a střech", value: "K odkapávání a odpadávání hořících i nehořících hmot NEDOCHÁZÍ" },
    { label: "Šíření plamene po povrchu", value: "0,00 mm/min (nedochází k šíření)" },
    { label: "Akustická pohltivost (vrstva 30–40 mm)", value: "Pohlcuje zvuk na odraz z 99 %" },
    { label: "Eliminace rosného bodu", value: "Zajištěna již při vrstvě 20 mm" },
    { label: "Zvýšení tepelného odporu (vrstva 50 mm)", value: "Zvýšení o 1,28 m²·K·W⁻¹" },
    { label: "Zdravotní nezávadnost", value: "Není toxický, bez formaldehydu, nedráždí pokožku" },
    { label: "Vlastnosti materiálu", value: "Není abrazivní, není korozivní" }
  ];

  // Pole 12 obrázků pro fotogalerii
  const galleryImages = [
    { src: "/images/intelan/interier1.webp", alt: "Ukázka aplikace Intelan 1" },
    { src: "/images/intelan/interier2.webp", alt: "Ukázka aplikace Intelan 2" },
    { src: "/images/intelan/interier3.webp", alt: "Ukázka aplikace Intelan 3" },
    { src: "/images/intelan/interier4.webp", alt: "Ukázka aplikace Intelan 4" },
    { src: "/images/intelan/interier5.webp", alt: "Ukázka aplikace Intelan 5" },
    { src: "/images/intelan/interier6.webp", alt: "Ukázka aplikace Intelan 6" },
    { src: "/images/intelan/interier7.webp", alt: "Ukázka aplikace Intelan 7" },
    { src: "/images/intelan/interier8.webp", alt: "Ukázka aplikace Intelan 8" },
    { src: "/images/intelan/interier9.webp", alt: "Ukázka aplikace Intelan 9" },
    { src: "/images/intelan/interier10.webp", alt: "Ukázka aplikace Intelan 10" },
    { src: "/images/intelan/interier11.webp", alt: "Ukázka aplikace Intelan 11" },
    { src: "/images/intelan/interier12.webp", alt: "Ukázka aplikace Intelan 12" },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
      
<section className="w-full bg-[var(--color-brand-light)] border-b border-brand-secondary overflow-hidden">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[55vh] md:min-h-[65vh]">
    
    {/* Levá polovina: Text na čistém světlém podkladu */}
    <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:py-16 lg:pr-12 text-left">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs md:text-sm font-semibold uppercase tracking-wider w-fit mb-5">
        <span>Akustický a protipožární nástřik</span>
      </div>

      <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
        INTELAN
      </h1>

      <p className="text-lg md:text-2xl font-medium text-brand-dark mb-4 leading-snug">
        Akustický a protipožární nástřik konstrukcí
      </p>

      <p className="text-sm md:text-base font-medium text-brand-dark/70 uppercase tracking-wider mb-8">
        „Řeší problémy s akustikou a kondenzací“ • nehoří • nesesedá
      </p>

    </div>

    {/* Pravá polovina: Fotografie bez překryvů a ztmavení */}
    <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-full w-full">
      <img 
        src="/images/intelans.webp" 
        alt="Akustický a protipožární nástřik Intelan" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>

      {/* 2. SEKCE: Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „ŘEŠÍ PROBLÉMY S AKUSTIKOU A KONDENZACÍ“
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
            Dokonalá akustická a protipožární ochrana objektů
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>INTELAN</strong> je špičkový stříkaný izolační systém, který vzniká nanesením materiálu TEMPELAN spolu s pojivem a lepidlem přímo na určený podklad. 
            </p>
            <p>
              Jednou aplikací tak vyřešíte hned tři kritické problémy moderních staveb: radikální snížení hluku, spolehlivou ochranu před kondenzací vody a zvýšení požární bezpečnosti ocelových či dřevěných konstrukcí.
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

      {/* VIDEO SEKCE: Vložené YouTube video */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-dark mb-2">
            Podívejte se na ukázku aplikace
          </h3>
          <p className="text-brand-dark/80 text-base">
            Oficiální video z aplikace akustické a protipožární izolace INTELAN.
          </p>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-brand-primary bg-black">
          <iframe
            src="https://www.youtube.com/embed/wHYSWE9Zv-E"
            title="INTELAN akustická a protipožární izolace"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.youtube.com/watch?v=wHYSWE9Zv-E"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-accent hover:underline inline-flex items-center gap-1"
          >
            <span>Otevřít video na YouTube (https://www.youtube.com/watch?v=wHYSWE9Zv-E)</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* 4. SEKCE: Full-bleed mřížka 2x2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          
          {/* 1. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/intelan-aplikace.webp" 
              alt="Aplikace nástřiku Intelan" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. blok: Tmavý panel */}
          <div className="w-full bg-[var(--color-brand-secondary)] text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Akustické a protipožární přednosti
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-brand-dark">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Ve vrstvě 30–40 mm pohlcuje zvuk na odraz z 99 %.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Zásadně snižuje prostup hluku ven a plní přísné hygienické limity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>U ocelových hal oddaluje moment zhroucení konstrukce při požáru.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Prodlužuje čas na bezpečnou záchranu osob a majetku.</span>
              </li>
            </ul>
          </div>

          {/* 3. blok: Zelený panel */}
          <div className="w-full bg-brand-accent text-brand-primary p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Eliminace kondenzace a koroze
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Již 20 mm nástřiku spolehlivě likviduje rosný bod.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Zabraňuje odkapávání kondenzátu na stroje, zboží i pracovníky.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Chrání ocelové konstrukce před korozí a prodlužuje životnost budovy.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>50 mm nástřik výrazně zvyšuje celkový tepelný odpor střechy.</span>
              </li>
            </ul>
          </div>

          {/* 4. blok: Obrázek */}
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Detail struktury nástřiku" 
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
            Nástřik lze aplikovat na jakýkoliv podklad (plech, traverzy, OSB desky, dřevo) po celý rok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Karta 1: Vhodné pro prostory */}
          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary text-left">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-6 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl"> Vhodné pro prostory</span> 
            </h3>
            <ul className="space-y-3 text-brand-dark/80 text-base">
              <li className="flex items-center gap-2">Výrobní a skladovací haly</li>
              <li className="flex items-center gap-2">Zemědělské stavby</li>
              <li className="flex items-center gap-2">Sportovní budovy a haly</li>
              <li className="flex items-center gap-2">Bowlingová centra</li>
              <li className="flex items-center gap-2">Restaurační zařízení a discosály</li>
              <li className="flex items-center gap-2">Komerční a volnočasové prostory</li>
            </ul>
          </div>

          {/* Karta 2: Hlavní přínosy pro provoz */}
          <div className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary text-left">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-6 pb-2 border-b border-brand-secondary flex items-center gap-3">
              <span className="text-brand-accent text-2xl"> Hlavní přínosy pro provoz</span>
            </h3>
            <ul className="space-y-3 text-brand-dark/80 text-base">
              <li className="flex items-center gap-2">Splnění hygienických limitů hluku</li>
              <li className="flex items-center gap-2">Konec kapek vody ze střechy</li>
              <li className="flex items-center gap-2">Zvýšená protipožární ochrana</li>
              <li className="flex items-center gap-2">Bez formaldehydu a toxických látek</li>
              <li className="flex items-center gap-2">Neabrazivní a nekorozivní složení</li>
              <li className="flex items-center gap-2">Rychlá celoroční realizace</li>
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
              Certifikované hodnoty protipožárního a akustického nástřiku INTELAN.
            </p>
          </div>

          <a
            href="/documents/intelan-letak.pdf"
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

      {/* 8. SEKCE: Ukázky aplikací izolace (Fotogalerie s modálním oknem) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 border-t border-brand-secondary">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Ukázky aplikací izolace
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Prohlédněte si fotogalerii reálných realizací akustických a protipožárních nástřiků INTELAN. (Kliknutím obrázek zvětšíte)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setActiveImage(img)}
              className="group relative h-64 rounded-xl overflow-hidden shadow-md border border-brand-secondary bg-brand-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-brand-secondary"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}