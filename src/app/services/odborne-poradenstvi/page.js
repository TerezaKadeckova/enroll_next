"use client";

import React from 'react';
import Link from 'next/link';

function Odborneporadenstvi() {
  const ciloveSkupiny = [
    {
      
      title: "Majitelům strojů TAJFUN",
      desc: "Poskytujeme podporu a rady pro efektivní využití aplikačních strojů.",
    },
    {
      
      title: "Stavebním firmám a realizačním týmům",
      desc: "Pomáháme realizačním týmům s technickými detaily a správnými postupy.",
    },
    {
      
      title: "Majitelům nemovitostí",
      desc: "Poradíme stavebníkům při plánování zateplení a volbě materiálů.",
    },
  ];

  const oblastiPoradenstvi = [
    {
      step: "01",
      title: "Bezplatné poradenství",
      desc: "Nabízíme odborné poradenství v oblasti zateplování staveb a správné aplikace našich tepelných izolací zcela zdarma.",
    },
    {
      step: "02",
      title: "Kalkulace spotřeby",
      desc: "Pokud klienti potřebují poradit s výpočty a kalkulacemi spotřeby materiálu, jsme jim plně k dispozici.",
    },
    {
      step: "03",
      title: "Respektování přírodních zákonů",
      desc: "Naším cílem je, aby na stavbách se stroji TAJFUN Uni a našimi izolacemi byly dodržovány fyzikální zákony.",
    },
    {
      step: "04",
      title: "Prevence kolizí a vlhkosti",
      desc: "Pomáháme předcházet jakýmkoliv technickým kolizím, jako je například nežádoucí kondenzace vodních par v konstrukci.",
    },
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* 1. SEKCE: Hero sekce se světlým Glassmorphismem u spodní hrany */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
        {/* Pozadí - fotka */}
        <img 
          src="/images/odborne_poradenstvi.webp" 
          alt="Odborné poradenství ENROLL" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Světlá karta z matného skla posunutá dolů */}
        <div className="relative z-20 px-6 w-full max-w-4xl mx-auto flex justify-center">
          <div className="bg-gray-100/75 backdrop-blur-xl border border-black/80 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-3xl w-full">
            
            {/* Hlavní nadpis v barvě brand-accent */}
            <h1 className="font-display text-3xl md:text-[42px] font-bold text-brand-accent tracking-tight mb-3 uppercase leading-tight">
              Odborné poradenství
            </h1>
            
            {/* Podnadpis */}
            <p className="text-base md:text-lg font-medium text-brand-dark/90 uppercase tracking-wide">
              Bezplatné poradenství, kalkulace a technická podpora pro vaše stavby
            </p>

          </div>
        </div>
      </section>

      {/* 2. SEKCE: Úvod */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Pomůžeme vám s návrhem i správnou aplikací
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed text-left md:text-center">
            <p>
              Majitelům aplikačních strojů <strong>TAJFUN</strong>, stavebním i izolatérským firmám a majitelům nemovitostí nabízíme bezplatné poradenství v oblasti zateplování staveb a správné aplikace našich tepelných izolací.
            </p>
            <p>
              Naším hlavním cílem je, aby na všech stavbách, kde se používají naše stroje <strong>TAJFUN Uni</strong> a naše izolace, byly respektovány přírodní zákony a předešlo se tak jakýmkoliv kolizím – například nežádoucí kondenzaci vodních par v konstrukci.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEKCE: Pro koho tu jsme (Cílové skupiny) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-16">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-accent mb-3">
            Komu poradenství poskytujeme
          </h2>
          <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
            Poskytujeme podporu všem, kdo pracují s našimi materiály a stroji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ciloveSkupiny.map((item, index) => (
            <div 
              key={index} 
              className="bg-brand-primary p-8 rounded-2xl shadow-md border border-brand-secondary flex flex-col justify-start"
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

      {/* 4. SEKCE: Oblasti poradenství (na pozadí brand-secondary) */}
      <section className="w-full bg-brand-secondary py-16 md:py-24 border-t border-b border-brand-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-3">
              V čem vám pomůžeme
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              Přehled hlavních oblastí, ve kterých se na nás můžete obrátit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oblastiPoradenstvi.map((item, index) => (
              <div 
                key={index} 
                className="bg-brand-primary p-7 rounded-2xl shadow-md border border-brand-secondary/80 relative flex flex-col justify-start"
              >
                <span className="font-display text-4xl font-bold text-brand-accent/30 mb-3 block">
                  {item.step}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEKCE: Výzva k akci (CTA) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-14 shadow-xl text-center flex flex-col items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
            Potřebujete poradit s projektem nebo kalkulací?
          </h2>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg mb-8">
            Neváhejte nás kontaktovat. Rádi vám pomůžeme se správným návrhem i výpočty pro vaši stavbu.
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

export default Odborneporadenstvi;