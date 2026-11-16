"use client";

import React from 'react';
import Link from 'next/link';

export default function IzolacniMaterialyPage() {
  // Seznam izolačních materiálů firmy Enroll s odkazy, obrázky a krátkým popisem
  const materials = [
    {
      title: "Česká celulóza",
      desc: "Tradiční vysoce kvalitní celulózová izolace pro dokonalé zateplení budov bez tepelných mostů.",
      to: "/products/ceska-celuloza",
      img: "/images/ceska_celulozabalik.webp" 
    },
    {
      title: "EN-TEX",
      desc: "Bavlněná izolační vlákna pro ekologickou a vysoce účinnou tepelnou i akustickou izolaci.",
      to: "/products/en-tex",
      img: "/images/entexbalik.webp"
    },
    {
      title: "STYROBALL",
      desc: "Polystyrénové kuličky určené jako lehčená tepelně izolační příměs do stavebních směsí a betonů.",
      to: "/products/styroball",
      img: "/images/styroballbalik.webp"
    },
    {
      title: "STYROBALL PLUS",
      desc: "Inovovaná verze lehčené polystyrénové příměsi s vylepšenými izolačními vlastnostmi.",
      to: "/products/styroball-plus",
      img: "/images/styroballbalik.webp"
    },
    {
      title: "TEMPELAN",
      desc: "První foukaná celulózová izolace v ČR s více než 30letou historií. Nesedá, nehoří, nenasákne vlhkost.",
      to: "/products/tempelan",
      img: "/images/tempelanbalik.webp"
    },
    {
      title: "IZO-BALL",
      desc: "Speciální příměs do polystyrénbetonů zajišťující nízkou hmotnost a skvělou tepelnou izolaci.",
      to: "/products/izo-ball",
      img: "/images/izobalbalik.webp"
    },
    {
      title: "INTELAN",
      desc: "Špičkový akustický a protipožární stříkaný nástřik pro haly, školy i komerční prostory.",
      to: "/products/intelan",
      img: "/images/enroll-logo.webp"
    },
    {
      title: "DRY-CELL",
      desc: "Vysoce účinná vysoušecí hmota a systém pro řešení vlhkosti ve stavebních konstrukcích.",
      to: "/products/dry-cell",
      img: "/images/enroll-logo.webp"
    }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce */}
    
<section className="w-full bg-[var(--color-brand-light)] border-b border-brand-secondary overflow-hidden">
  <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[55vh] md:min-h-[65vh]">
    
    {/* Levá polovina: Text na čistém světlém podkladu */}
    <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:py-16 lg:pr-12 text-left">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent text-xs md:text-sm font-semibold uppercase tracking-wider w-fit mb-5">
        <span>Portfolio produktů</span>
      </div>

      <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
        Izolační materiály
      </h1>

      <p className="text-lg md:text-2xl font-medium text-brand-dark mb-4 leading-snug">
        Ekologické, bezpečné a vysoce účinné zateplení pro váš domov i průmysl
      </p>

      <p className="text-sm md:text-base font-medium text-brand-dark/70 uppercase tracking-wider mb-8">
        špičková kvalita • úspora energie • prověřená tradice v ČR
      </p>

    </div>

    {/* Pravá polovina: Fotografie bez překryvů a ztmavení */}
    <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-full w-full">
      <img 
        src="/images/tempelan.webp" 
        alt="Izolační materiály Enroll" 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>

      {/* 2. SEKCE: Úvodní text */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-6">
          Kompletní sortiment izolačních systémů
        </h2>
        <p className="text-base md:text-[18px] text-brand-dark/80 leading-relaxed">
          Společnost Enroll CZ se dlouhodobě specializuje na výrobu a vývoj ekologických tepelných, akustických a protipožárních izolací. Naše materiály vynikají dokonalou přizpůsobivostí, dlouhou životností a splňují přísné normy i požadavky dotačních programů, jako je Nová zelená úsporám.
        </p>
      </section>

      {/* 3. SEKCE: Mřížka produktových karet (Grid) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {materials.map((item, index) => (
            <div 
              key={index}
              className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Náhledový obrázek produktu */}
                <div className="h-48 w-full overflow-hidden bg-white relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Textová část */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Tlačítko Zjistit více */}
              <div className="px-6 pb-6 pt-0">
                <Link 
                  href={item.to}
                  className="inline-flex items-center gap-2 font-semibold text-brand-dark hover:text-brand-accent transition-colors text-sm"
                >
                  <span>Zjistit více</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}