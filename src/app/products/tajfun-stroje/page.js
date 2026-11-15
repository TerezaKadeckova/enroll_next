"use client";

import React, { useState } from 'react';

export default function TajfunPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Jaké je elektrické napájení a jištění strojů TAJFUN?",
      a: "Stroje TAJFUN Klasik 230 V i TAJFUN UNI 230 V jsou vybaveny výkonným motorem s frekvenčním měničem na vstupní napětí 230 V / 50 Hz. Celkové zatížení v plném výkonu je sníženo na 16 A, takže stroj lze bez problémů zapojit v běžné domácnosti na kuchyňský či koupelnový rozvod."
    },
    {
      q: "Je v ceně stroje zahrnuto školení obsluhy?",
      a: "Ano! Naše společnost zajišťuje bezplatné školení foukání izolací a obsluhy stroje pro stavební i specializované aplikační firmy přímo v prostorách naší firmy v Nové Vsi u Liberce, kde po úspěšném proškolení vystavíme Certifikát."
    },
    {
      q: "Lze stroje snadno převážet v běžném autě?",
      a: "Ano. Stroj TAJFUN Klasik lze snadno rozložit na 2 části (základna + násypka) a model TAJFUN UNI na 3 části (základna + násypka + nástavec). Díky tomu lze stroje pohodlně přepravovat ve vozech typu pick-up, combi či v malých dodávkách."
    },
    {
      q: "Jak funguje dálkové ovládání strojů?",
      a: "Všechny stroje TAJFUN jsou již v základní výbavě dodávány s velmi výkonným bezdrátovým dálkovým ovládáním ve tvaru klíčenky (dosah antény až 200 metrů), které umožňuje nezávislé zapínání a vypínání čechradel i turbín."
    }
  ];

  const comparisonData = [
    { feature: "Druhy izolací, pro které je stroj především určen", klasik: "Celulózová izolace, Kuličkový polystyrén", uni: "Izolace ze skelných vláken, Izolace z čedičových vláken, Izolace z celulózy, Izolace z kuličkového polystyrenu, Izolace z rozvolněného polyuretanu, Izolace z rozvolněného polypropylenu, Izolace z konopných vláken, Izolace z ovčí vlny, Případně z jiných materiálů z měkkých poddajných shluků nebo granulek" },
    { feature: "Objem násypky", klasik: "310 dm3", uni: "310 dm3" },
    { feature: "Možnost použití nástavce nad násypku", klasik: "Ano, nástavec lze dokoupit", uni: "Nástavec je základní součástí stroje" },
    { feature: "Počet výkonných ventilátorů", klasik: "2", uni: "2" },
    { feature: "Max. příkon obou ventilátorů", klasik: "2 800 W", uni: "2 800 W" },
    { feature: "Příkon hlavního motoru", klasik: "1 100 W", uni: "1 500 W" },
    { feature: "Dálkové ovládání", klasik: "Ano, bezdrátové, klíčenka. Je základní výbavou stroje.", uni: "Ano, bezdrátové, klíčenka. Je základní výbavou stroje." },
    { feature: "Dosah antény", klasik: "cca 200 metrů", uni: "cca 200 metrů" },
    { feature: "Celkové rozměry bez kliky v mm (š x h x v)", klasik: "750 x 1 050 x 1 250", uni: "750 x 1 050 x 1 700" },
    { feature: "Hmotnost", klasik: "189 kg", uni: "226 kg" },
    { feature: "Průměr výstupní hubice", klasik: "75 mm (s možností redukce)", uni: "75 mm (s možností redukce)" },
    { feature: "Napájení", klasik: "230 V / 50 Hz, Digitální voltmetr", uni: "230 V / 50 Hz, Digitální voltmetr" },
    { feature: "Jištění", klasik: "16 A", uni: "16 A" },
    { feature: "Výkonnost zařízení", klasik: "Dopravní výkon zařízení je závislý na hustotě (objemové hmotnosti) foukaného materiálu", uni: "Dopravní výkon zařízení je závislý na hustotě (objemové hmotnosti) foukaného materiálu" },
    { feature: "Výkon stroje (suchý materiál)", klasik: "až 60 m3 nebo 750 kg celulózové izolace / hodinu s možností plynulé regulace výkonu", uni: "až 60 m3 nebo 750 kg izolantu / hodinu s možností plynulé regulace výkonu" },
    { feature: "Výkon stroje - délka hadice (vzdálenost od stroje) pro aplikaci", klasik: "Na vzdálenost běžně až 200 metrů nebo do výšky až 14 pater (42 metrů) - Ověřeno praxí", uni: "Na vzdálenost běžně až 200 metrů nebo do výšky až 14 pater (42 metrů) - Ověřeno praxí" },
    { feature: "Možnost rozložení stroje pro jeho snadnou přepravu", klasik: "Ano, na 2 části (základna + násypka)", uni: "Ano, na 3 části (základna + násypka + nástavec)" },
    { feature: "Manipulace se strojem", klasik: "Snadná manipulace jednou osobou, 4 pojezdová kolečka, 2 kolečka jsou vybavena brzdou", uni: "Snadná manipulace jednou osobou, 4 pojezdová kolečka, 2 kolečka jsou vybavena brzdou" },
    { feature: "Technická specifikace", klasik: "Stroj je vyroben převážně z dílů dodávaných EU. Veškeré míry stroje jsou v EVROPSKÝCH normách!!", uni: "Stroj je vyroben převážně z dílů dodávaných EU. Veškeré míry stroje jsou v EVROPSKÝCH normách!!" },
    { feature: "Cena", klasik: "Stroj je přibližně o třetinu levnější, než konkurenční zahraniční stroje při srovnání stejných parametrů a výkonnosti zařízení. Přesná cena na dotaz.", uni: "Stroj je přibližně o třetinu až o polovinu levnější, než konkurenční zahraniční stroje při srovnání stejných parametrů a výkonnosti zařízení. Přesná cena na dotaz." }
  ];

  const accessoriesData = [
    { title: "Vozík s nádrží (130 l)", desc: "Pro aplikaci TEMPELANu s vlhčením nebo INTELANu (provedení s hadicí i bez hadice)." },
    { title: "Stěnový srovnávač (Wallscruber)", desc: "Profesionální nástroj pro zarovnání a úpravu izolačních vrstev." },
    { title: "Nástavec na násypku", desc: "Horní nástavec pro snadné a bezpečné vkládání balíků izolace." },
    { title: "Aplikační tryska", desc: "Speciální tryska pro aplikaci materiálů s vlhčením (Tempelan, Intelan)." },
    { title: "Hadice a spojky", desc: "Kvalitní 2,5 palcové a 3 palcové hadice (6,35 nebo 7,62 cm), redukce a hadicové spojky." },
    { title: "Náhradní díly", desc: "Malé sady dílů, řetězy, turbíny, těsnící gumy do turniketu a další." }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se stínem */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/tajfun_barvy.webp" 
          alt="Aplikační stroje TAJFUN" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            APLIKAČNÍ STROJE TAJFUN
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Špičkové stroje na foukání izolačních materiálů vyráběné v ČR
          </p>
          <p className="text-base md:text-lg font-normal text-gray-200 uppercase tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            Prověřeno desítkami let vývoje • spolehlivé • snadno ovladatelné
          </p>
        </div>
      </section>

      {/* 2. SEKCE: Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „JEDNIČKA NA TRHU V ODBORU FOUKÁNÍ VŠECH TYPŮ IZOLACÍ“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „JEDINÝ VÝROBCE APLIKAČNÍCH STROJŮ V ČR“
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní obsah – Text uprostřed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Česká výroba, tradice a spolehlivost od roku 1995
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              Naše společnost vyrábí nejen špičkové izolační materiály (TEMPELAN, ČESKÁ CELULÓZA, EN-TEX, STYROBALL), ale jako jediní v ČR vyrábíme také profesionální stroje na foukání izolačních materiálů.
            </p>
            <p>
              Základní typ stroje <strong>TAJFUN</strong> se vyrábí již 31 let. Všechny stroje TAJFUN lze zakoupit samostatně nebo ve formě aplikační sestavy včetně hadic, spojek a příslušenství pro aplikaci s vlhčením, nebo s lepidlem pro aplikaci INTELANu.
            </p>
          </div>
          
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <a 
              href="#srovnani-stroju" 
              className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
            >
              Porovnat modely
            </a>
            <a 
              href="#barvy-tajfun" 
              className="inline-block bg-brand-dark text-white font-semibold px-8 py-3 rounded-md hover:bg-black transition-colors"
            >
              Zvolte si barvu stroje
            </a>
          </div>
        </div>
      </section>

      {/* 4. SEKCE: Full-bleed mřížka 2x2 (Modely Klasik & UNI) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative bg-brand-primary flex items-center justify-center p-6">
            <img 
              src="/images/tajfun.webp" 
              alt="Stroj TAJFUN" 
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2">
              Model 230 V
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-white uppercase">
              TAJFUN Klasik
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              Primárně určen pro aplikaci celulózové izolace nebo izolace z rozvolněného kuličkového polystyrénu. Disponuje dvou-čechračovým systémem, inovovaným ovládacím panelem a digitálním voltmetrem.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">✓ Výkon obou ventilátorů 2 800 W</li>
              <li className="flex items-center gap-2">✓ Hlavní motor 1 100 W</li>
              <li className="flex items-center gap-2">✓ Možnost rozložení na 2 části</li>
            </ul>
          </div>

          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <span className="text-brand-dark font-semibold tracking-wider uppercase text-sm mb-2 opacity-80">
              Univerzální špička na trhu
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              TAJFUN UNI
            </h3>
            <p className="text-brand-dark/90 text-sm md:text-base mb-6 leading-relaxed">
              Univerzální aplikační stroj určený pro foukání VŠECH běžně používaných typů izolačních materiálů (skelné, čedičové, celulóza, bavlna, dřevovlákno, EPS, konopí, ovčí vlna...).
            </p>
            <ul className="space-y-2 text-sm font-medium text-brand-dark">
              <li className="flex items-center gap-2">✓ Obzvlášť výkonný motor 1 500 W</li>
              <li className="flex items-center gap-2">✓ Horní nástavec s výklopným čelem v základní výbavě</li>
              <li className="flex items-center gap-2">✓ Rozložení na 3 části pro snadný transport</li>
            </ul>
          </div>

          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative bg-brand-primary flex items-center justify-center p-6">
            <img 
              src="/images/tajfun-1.webp" 
              alt="Stroj TAJFUN UNI detail" 
              className="w-full h-full object-contain object-center"
            />
          </div>

        </div>
      </section>

      {/* 5. SEKCE: Srovnávací tabulka */}
      <section id="srovnani-stroju" className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Srovnání jednotlivých typů strojů TAJFUN
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Podrobné technické parametry a porovnání modelů Klasik a UNI.
          </p>
        </div>

        <div className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white font-display text-sm md:text-base">
                  <th className="py-4 px-6 font-semibold w-1/3">VLASTNOSTI</th>
                  <th className="py-4 px-6 font-semibold w-1/3">TAJFUN KLASIK 230 V <span className="block text-xs font-normal opacity-80">předešlý model</span></th>
                  <th className="py-4 px-6 font-semibold w-1/3">TAJFUN UNI 230 V</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-secondary text-sm md:text-base">
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-brand-primary" : "bg-brand-secondary/10"}
                  >
                    <td className="py-4 px-6 font-medium text-brand-dark">{row.feature}</td>
                    
                    {/* Klasik sloupec */}
                    <td className="py-4 px-6 text-brand-dark/80">
                      {index === 0 ? (
                        <ul className="space-y-1.5 pl-4 list-disc">
                          {row.klasik.split(', ').map((item, i) => (
                            <li key={i} className="pl-1">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        row.klasik
                      )}
                    </td>

                    {/* UNI sloupec */}
                    <td className="py-4 px-6 text-brand-dark/90 font-medium">
                      {index === 0 ? (
                        <ul className="space-y-1.5 pl-4 list-disc">
                          {row.uni.split(', ').map((item, i) => (
                            <li key={i} className="pl-1">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        row.uni
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/documents/tajfun-klasik-letak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors"
          >
            Stáhnout leták TAJFUN Klasik (PDF)
          </a>
          <a
            href="/documents/tajfun-uni-letak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-semibold px-6 py-3 rounded-md hover:bg-black transition-colors"
          >
            Stáhnout leták TAJFUN UNI (PDF)
          </a>
        </div>
      </section>

      {/* 6. SEKCE: Zvolte si barvu svého Tajfuna */}
      <section id="barvy-tajfun" className="w-full bg-brand-secondary/20 py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">
                Exkluzivní nabídka
              </span>
              <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
                Zvolte si barvu svého stroje TAJFUN
              </h2>
              <div className="text-base md:text-lg text-brand-dark/80 space-y-4 leading-relaxed">
                <p>
                  <strong>Co Vám jinde nenabídnou:</strong> Nabízíme možnost volby vlastní barvy aplikačního stroje TAJFUN UNI. Každý klient tak může mít stroj v barvě dle své individuální volby ze vzorníku RAL.
                </p>
                <p>
                  Klient si může vybrat barvu pro spodní díl, střední násypku i horní kryt. Protože výroba začíná na základě objednávky a zálohy, prodlužuje se dodací doba o 2–3 týdny.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-block bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition-opacity"
                >
                  Nezávazně poptat barvu RAL
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-brand-primary bg-brand-primary p-4">
              <img 
                src="/images/tajfun_barvy.webp" 
                alt="Možnosti barevného provedení Tajfun" 
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 7. SEKCE: Náhradní díly a příslušenství */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Příslušenství a náhradní díly ke strojům TAJFUN
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Kompletní podpora, doplňkové vybavení a náhradní díly dostupné v ČR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accessoriesData.map((item, index) => (
            <div 
              key={index}
              className="bg-brand-primary p-8 rounded-xl shadow-md border border-brand-secondary flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-3 text-brand-accent">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/documents/tajfun-nahradni-dily.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-dark text-white font-semibold px-8 py-3 rounded-md hover:bg-black transition-colors"
          >
            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5a2 2 0 012 2v14a2 2 0 01-2 2z" />
            </svg>
            Stáhnout katalog náhradních dílů a příslušenství (PDF)
          </a>
        </div>
      </section>

      {/* 8. SEKCE: YouTube videa vedle sebe */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 border-t border-brand-secondary">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-4">
            Videoprezentace strojů TAJFUN
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Podívejte se na ukázky aplikačních strojů a jejich fungování v praxi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* První video */}
          <div className="w-full bg-brand-primary rounded-xl overflow-hidden shadow-md border border-brand-secondary p-2 md:p-4">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/JxYCEZbcnbw"
                title="TAJFUN video 1"
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Druhé video */}
          <div className="w-full bg-brand-primary rounded-xl overflow-hidden shadow-md border border-brand-secondary p-2 md:p-4">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/y6hpw9wG5IM"
                title="TAJFUN video 2"
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEKCE: Často kladené dotazy (FAQ) */}
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

      {/* 10. SEKCE: Kontakt a poptávka ceny */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 text-center">
        <div className="bg-brand-primary p-8 md:p-12 rounded-xl shadow-md border border-brand-secondary max-w-4xl mx-auto space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-dark">
            Máte zájem o cenovou nabídku stroje TAJFUN?
          </h2>
          <p className="text-brand-dark/80 text-base md:text-lg">
            Kontaktujte naše obchodní oddělení a rádi vám připravíme individuální nabídku včetně zaškolení a příslušenství.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-base font-semibold">
            <a href="tel:+420776281116" className="text-brand-dark hover:text-brand-accent transition-colors">
              📞 +420 776 281 116
            </a>
            <a href="mailto:info@enroll.cz" className="text-brand-dark hover:text-brand-accent transition-colors">
              ✉️ info@enroll.cz
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}