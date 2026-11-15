"use client";
import React, { useState } from 'react';

function CeskaCeluloza() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "V čem se ČESKÁ CELULÓZA líší od materiálu TEMPELAN?",
      a: "ČESKÁ CELULÓZA® je nová generace celulózové izolace, která využívá ještě jemnějších vláken a vylepšených přísad pro maximální objemovou stálost a snadnější aplikaci u náročných konstrukcí."
    },
    {
      q: "Sedá si ČESKÁ CELULÓZA po čase v konstrukci?",
      a: "Při dodržení předepsaných aplikačních objemových hmotností materiál v konstrukci nesesedá a garantujeme jeho stálé tepelně-izolační i akustické vlastnosti po celou dobu životnosti stavby."
    },
    {
      q: "Lze na Českou celulózu získat dotaci Nová zelená úsporám?",
      a: "Ano, ČESKÁ CELULÓZA® plně splňuje všechny normy a požadavky dotačních programů pro zateplení budov a úsporu energií."
    }
  ];

  const techParams = [
    { label: "Třída reakce na oheň", value: "B - s1, d0" },
    { label: "Deklarovaný součinitel tepelné vodivosti (λD)", value: "0,038 W/m·K" },
    { label: "Šíření plamene po povrchu", value: "0,00 mm/min" },
    { label: "Zdravotní nezávadnost", value: "Bez formaldehydu, netoxická, nedráždí pokožku" },
    { label: "Odolnost vůči škůdcům", value: "Odolná vůči plísním, hlodavcům a hmyzu" }
  ];

  return (
    <div className="w-full flex flex-col text-brand-dark bg-[var(--color-brand-light)]">
      
      {/* Hero sekce */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/images/tempelan-hero.webp" 
          alt="Česká celulóza" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="font-display text-4xl md:text-[52px] font-bold text-brand-accent tracking-tight mb-4 uppercase leading-tight">
            ČESKÁ CELULÓZA®
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
            Ekologická celulózová izolace nejvyšší kvality
          </p>
          <p className="text-base md:text-lg font-normal text-gray-200 uppercase tracking-wider">
            přírodní • chráněno proti ohni • nesesedá
          </p>
        </div>
      </section>

      {/* Zelená mottos */}
      <section className="w-full bg-brand-primary py-12 border-b border-brand-secondary shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „ŠPIČKOVÁ ČESKÁ TEPELNÁ A AKUSTICKÁ IZOLACE“
          </p>
          <p className="text-lg font-semibold text-brand-accent uppercase tracking-wider">
            „NAŠE RECYKLACE JE PROSPĚŠNÁ PRO CELOU SPOLEČNOST“
          </p>
        </div>
      </section>

      {/* Text uprostřed */}
      <section className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark leading-tight">
            Přírodní teplo a akustický komfort pro Váš domov
          </h2>
          <div className="text-base md:text-[18px] text-brand-dark/80 space-y-4 leading-relaxed">
            <p>
              <strong>ČESKÁ CELULÓZA®</strong> je ekologicky šetrný izolační materiál vyráběný z výběrového sběrového papíru a zušlechtěný minerálními přísadami pro dosažení vysoké odolnosti proti ohni, plísním i hlodavcům.
            </p>
            <p>
              <strong>ČESKÁ CELULÓZA®</strong> je pravý a nefalšovaný český výrobek od české firmy.
            </p>
            <p>
              Foukaná aplikace eliminuje vznik tepelných mostů a dokonale vyplní i ty nejhůře přístupné spáry a dutiny ve vaší stavbě.
            </p>
          </div>
        </div>
      </section>

      {/* Grid 2x2 */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-aplikace.webp" 
              alt="Aplikace České celulózy" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full bg-[var(--color-brand-dark)] text-white p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-brand-accent uppercase">
              Vynikající vlastnosti
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Vynikající tepelně-izolační schopnosti v zimě i v létě.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Skvělá akustická izolace – tlumí hluk z okolí i mezi místnostmi.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">✓</span>
                <span>Chráněno proti biologickým škůdcům, hnilobám a plísním.</span>
              </li>
            </ul>
          </div>

          <div className="w-full bg-brand-accent text-brand-dark p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 uppercase">
              Oblasti použití
            </h3>
            <ul className="space-y-3 text-base md:text-lg font-medium">
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Zateplení krovů, půdních prostor a šikmých střech.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Izolace trámových stropů, podlah a příček.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>•</span>
                <span>Nízkoenergetické a pasivní novostavby i rekonstrukce.</span>
              </li>
            </ul>
          </div>

          <div className="w-full h-[380px] md:h-[480px] overflow-hidden relative">
            <img 
              src="/images/tempelan-hero.webp" 
              alt="Struktura materiálu" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Technická tabulka */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-[36px] font-bold text-brand-dark mb-2">
            Technické parametry
          </h2>
          <p className="text-brand-dark/80 text-lg">
            Certifikované vlastnosti izolačního materiálu ČESKÁ CELULÓZA®.
          </p>
        </div>

        <div className="bg-brand-primary rounded-xl shadow-md overflow-hidden border border-brand-secondary">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white font-display text-sm md:text-base">
                  <th className="py-4 px-6 font-semibold">Vlastnost</th>
                  <th className="py-4 px-6 font-semibold">Hodnota</th>
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

export default CeskaCeluloza;