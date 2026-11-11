"use client"
import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div className="w-full flex flex-col text-brand-dark">
      
      {/* Horní menší banner stránky s nerušivými barevnými efekty */}
      <section className="relative bg-brand-dark py-16 md:py-24 text-center text-brand-light overflow-hidden">
        
        {/* === EFEKTY POZADÍ (Světelné bubliny a přechody) === */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark via-brand-dark to-black/90 z-0"></div>
        
        {/* Zelená zářivá bublina vlevo nahoře */}
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-brand-accent/25 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        {/* Teplá oranžovo-hnědá bublina vpravo dole */}
        <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-brand-light/90 font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Příběh, který už od roku 1990 hřeje české domovy.
          </span>
          
          <h1 className="font-bold tracking-tight text-brand-accent drop-shadow-sm">
            ENROLL CZ spol. s r.o.
          </h1>

          <p className="text-brand-light/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Naše společnost se zabývá výrobou a aplikací špičkových foukaných tepelných izolací z celulózy TEMPELAN - ČESKÁ CELULÓZA nebo izolace z bavlněných vláken EN-TEX, dále pak výrobou a aplikací jedinečných tepelně izolačních materiálů z polystyrenové izolace STYROBALL a STYROBALL PLUS.
          </p>

          <p className="text-brand-light/90 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            Základním rysem výrobních a obchodních aktivit naší společnosti <br className="hidden sm:inline" /> ENROLL CZ spol. s r.o. je EKOLOGIE.
          </p>
        </div>
      </section>

      {/* Hlavní obsahová sekce */}
      <section className="w-full bg-brand-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="space-y-6 text-center">
            <h2 className="font-bold tracking-tight text-brand-accent leading-tight">
              Od smělého nápadu po poctivou českou výrobu.
            </h2>
            
            <p className="text-brand-dark/80 leading-relaxed font-normal">
              Příběh společnosti <strong>ENROLL CZ</strong> se začal psát už v roce 1990. Doba byla bouřlivá, plná změn a nových možností. Když tehdy po Československu cestoval zástupce finské firmy a prezentoval myšlenku ekologických tepelných izolací ze sběrového papíru, málokdo tušil, jak velký potenciál v sobě tento obor skrývá.

              Pro zakladatele firmy, <strong>Ing. Aleše Svobodu</strong>, to byla výzva, která ho okamžitě nadchla. Vycestoval do Finska, aby viděl výrobu na vlastní oči. Tam pochopil klíčovou věc – srdce a kolébka celulózového průmyslu leží v USA. Následovaly týdny vyjednávání, stovky odeslaných faxů přes Atlantik a nakonec osobní jednání v americkém Ohiu, kde podepsal kontrakt na dodávku první špičkové technologie do ČR.

              Už v <strong>květnu 1991</strong> se v Liberci rozjela výroba celulózové izolace <strong>TEMPELAN</strong> a český trh získal do té doby nevídaný, vysoce účinný ekologický materiál.
            </p>
             
            <h2 className="font-bold tracking-tight text-brand-accent leading-tight pt-4">
              Inovace, které změnily trh.
            </h2>
            <p className="text-brand-dark/80 leading-relaxed font-normal">
              <strong>Stroje TAJFUN i recyklace.</strong><br />

              Poptávka po kvalitním zateplení rostla a bylo potřeba posunout i samotnou aplikaci. V roce 1995 proto vznikl první vlastní zafoukávací stroj <strong>TAJFUN</strong> (dnešní generace TAJFUN Uni), který se stal synonymem pro spolehlivost na stavbách.

              O rok později, v roce 1996, firma rozšířila své portfolio o recyklaci EPS a postupně rozvinula export do celé Evropy. V roce 2001 se celá výroba přesunula do moderního areálu v Nové Vsi u Liberce, kde ENROLL CZ sídlí a tvoří dodnes.
            </p>

            <p className="text-brand-dark/80 leading-relaxed font-normal">
              Nezůstáváme však stát na místě:
            </p>

            {/* Odrážky */}
            <div className="pt-4 border-t border-brand-secondary flex flex-col space-y-4 font-normal text-brand-dark text-left">
              <div className="flex items-start space-x-3">
                <span className="text-brand-accent font-bold text-lg leading-none">✓</span>
                <div><strong>Foukaná bavlněná izolace:</strong> Výroba izolací ze zbytků textilu a bavlněných vláken (EN-TEX).</div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-brand-accent font-bold text-lg leading-none">✓</span>
                <div><strong>Energetická nezávislost:</strong> Naše výrobky nejsou náročné na spotřebu energie při výrobě. Díky tomu si udržují stabilní cenu i v době kolísajících cen energií a šetří peněženky i přírodu.</div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-brand-accent font-bold text-lg leading-none">✓</span>
                <div><strong>Cirkulární ekonomika:</strong> Recyklace odpadních minerálních izolací z rekonstrukcí a demolic.</div>
              </div>
            </div>

            <div className="pt-6">
              <Link 
                href="/contact" 
                className="inline-block bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Napište nám
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Fotografie vedení firmy s popiskem */}
      <section className="w-full bg-brand-light pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="relative max-w-3xl mx-auto">
            <img 
              src="/images/zakladatel_a_syn.webp" 
              alt="Zakladatel Aleš Svoboda se synem" 
              className="w-full h-auto rounded-2xl shadow-xl border border-brand-secondary/40 object-cover"
            />
          </div>
          <p className="text-brand-dark/90 font-medium max-w-2xl mx-auto text-base md:text-lg italic leading-relaxed">
            „Tradice, která zavazuje. Zakladatel <strong>Aleš Svoboda</strong> se synem, který jako mistr výroby postupně přebírá rodinné know-how a vede <strong>ENROLL CZ</strong> do další éry.“
          </p>
        </div>
      </section>

      {/* Sekce tradice s barevným přechodem a bublinami */}
      <section className="relative bg-brand-dark py-16 md:py-24 text-center text-brand-light overflow-hidden">
        
        {/* === EFEKTY POZADÍ === */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-dark via-brand-dark to-black/90 z-0"></div>
        
        {/* Teplá zářivá bublina vlevo */}
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        {/* Zelená bublina vpravo nahoře */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4">
          <h1 className="font-bold tracking-tight text-brand-accent drop-shadow-sm">
            Tradice, rodina a budoucnost bez kompromisů
          </h1>

          <p className="text-brand-light/90 max-w-2xl mx-auto font-normal leading-relaxed">
            ENROLL CZ je ryze českou rodinnou firmou, jejíž kořeny sahají až do roku 1991. Síla našich produktů nespočívá jen v certifikované kvalitě a technologickém náskoku, ale především v <strong>předávání poctivého řemesla z otce na syna.</strong> <br />  
            <br /> 
            Zatímco zakladatel Aleš Svoboda vtiskl firmě vizionářského ducha a odvahu, jeho syn dnes z pozice mistra dohlíží na každodenní preciznost výroby a postupně přebírá veškeré tajemství oboru.
            Společně tak garantujeme, že izolace z Nové Vsi u Liberce budou i pro nadcházející generace synonymem pro <strong>poctivé české teplo domova</strong>.
          </p>
            
          <p className="text-brand-light/90 max-w-2xl mx-auto font-normal pt-2">
            Základním rysem výrobních a obchodních aktivit naší společnosti ENROLL CZ spol. s r.o. je EKOLOGIE.
          </p>
        </div>

        <div className="relative flex items-center justify-center p-6 mt-4">
          {/* Zářivý zelený efekt za pečatí */}
          <div className="absolute w-[260px] h-[260px] bg-brand-accent rounded-full opacity-25 blur-2xl"></div>
  
          {/* Samotná pečeť */}
          <img 
            src="/images/pecet_35let.png" 
            alt="pečeť 35 let na trhu" 
            className="relative z-10 max-w-[250px] h-auto object-contain drop-shadow-2xl"
          />
        </div> 

      </section>

      {/* Spodní sekce Proč si vybrat ENROLL CZ */}
      <section className="w-full bg-brand-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          
          <h2 className="font-bold tracking-tight text-brand-accent leading-tight">
            Proč si vybrat ENROLL CZ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-brand-primary rounded-2xl border border-brand-secondary shadow-sm flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-brand-accent font-bold text-xl leading-none">✓</span>
                <h3 className="font-bold text-brand-dark text-lg leading-snug">Průkopníci ekologie</h3>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                Izolujeme udržitelně z recyklovaných materiálů již od roku 1991.
              </p>
            </div>

            <div className="p-6 bg-brand-primary rounded-2xl border border-brand-secondary shadow-sm flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-brand-accent font-bold text-xl leading-none">✓</span>
                <h3 className="font-bold text-brand-dark text-lg leading-snug">Vlastní vývoj a výroba</h3>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                Stroje TAJFUN i izolace TEMPELAN a EN-TEX držíme pod jednou střechou.
              </p>
            </div>

            <div className="p-6 bg-brand-primary rounded-2xl border border-brand-secondary shadow-sm flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-brand-accent font-bold text-xl leading-none">✓</span>
                <h3 className="font-bold text-brand-dark text-lg leading-snug">Stabilita a férovost</h3>
              </div>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                České know-how, rodinný přístup a energeticky nenáročná výroba bez zbytečného zdražování.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Spodní motto */}
      <section className="w-full bg-brand-primary py-12 text-center text-brand-dark border-t border-brand-secondary/60">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-serif italic font-normal text-base md:text-lg">
            „Vy si užívejte hřejivý domov, o to dokonalé zateplení se postaráme my.“
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;