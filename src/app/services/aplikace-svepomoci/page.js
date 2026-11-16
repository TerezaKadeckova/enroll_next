"use client";

import React from 'react';
import Link from 'next/link';

function Aplikacesvepomoci() {
  const vyhodySvepomoci = [
    {
      
      title: "Jednoduchá aplikace",
      desc: "Nabízíme možnost aplikace našich tepelně izolačních materiálů svépomocí pomocí jednoduchých aplikačních přístrojů.",
    },
    {
      
      title: "Zapůjčení stroje TAJFUN",
      desc: "Rádi vám zapůjčíme spolehlivý aplikační stroj TAJFUN přímo k vašemu projektu pro rychlou a snadnou práci.",
    },
    {
      
      title: "Odborné poradenství",
      desc: "Se vším vám rádi poradíme, vysvětlíme postup a doporučíme správné materiály pro váš dům.",
    },
  ];

  const galleryImages = [
    { src: "/images/realizace.webp", alt: "Aplikace izolace" },
    { src: "/images/izolace.webp", alt: "Izolační materiály ENROLL" },
    { src: "/images/tajfun_barvy.webp", alt: "Aplikační stroj TAJFUN" },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/realizace.webp" 
          alt="Aplikace svépomocí ENROLL" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-4xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-3xl w-full">
            
            {/* Hlavní nadpis v barvě brand-accent */}
            <h1 className="font-display text-3xl md:text-[42px] font-bold text-brand-accent tracking-tight mb-3 uppercase leading-tight">
              Aplikace svépomocí
            </h1>
            
            {/* Podnadpis */}
            <p className="text-base md:text-lg font-medium text-brand-dark/90 uppercase tracking-wide">
              Zateplete svůj domov sami s naší podporou a zapůjčenou technikou
            </p>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvod a hlavní myšlenka */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Zvládněte zateplení svépomocí
          </h2>
          <p className="text-base md:text-[18px] text-brand-dark/80 leading-relaxed">
            Nabízíme možnost aplikace našich tepelně izolačních materiálů svépomocí pomocí jednoduchých aplikačních přístrojů. Nemusíte se bát náročné práce – rádi vám zapůjčíme osvědčený stroj TAJFUN, vše detailně vysvětlíme a poskytneme cenné rady pro úspěšnou realizaci.
          </p>
        </div>
      </section>

      {/* 3. SEKCE: Hlavní pilíře (karty) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vyhodySvepomoci.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-primary p-8 rounded-2xl shadow-md border border-brand-secondary flex flex-col justify-start transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEKCE: Fotokoláž / Ukázka vedle sebe (na pozadí brand-secondary) */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              Materiály, stroje a realizace
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Prohlédněte si vybavení a materiály, které vám rádi poskytneme k dispozici.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="bg-brand-primary rounded-2xl overflow-hidden shadow-md border border-brand-secondary/80 h-72 flex items-center justify-center p-4"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="max-h-full max-w-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEKCE: Výzva k akci (CTA) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Chcete realizovat zateplení svépomocí a půjčit stroj TAJFUN?
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg mb-8">
            Ozvěte se nám – domluvíme se na podrobnostech, zapůjčení techniky i odběru materiálu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Kontaktujte nás
            </Link>
           
          </div>
        </div>
      </section>

    </div>
  );
}

export default Aplikacesvepomoci;