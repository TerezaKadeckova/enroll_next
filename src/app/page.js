"use client";

import React from 'react';
import Link from 'next/link';
// Import Swiper React komponent
import { Swiper, SwiperSlide } from 'swiper/react';
// Import modulů Swiperu
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import základních CSS stylů Swiperu
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  // Data pro 5 slidů v Hero sekci
  const slidesData = [
    {
      image: '/images/izo-ball.webp',
      tag: 'O nás',
      title: (
        <>
          Výroba a aplikace<br />
          <span className="text-brand-accent">špičkových foukaných tepelných izolací</span>
        </>
      ),
      text: 'Nabízíme výrobou a aplikací špičkových foukaných tepelných izolací z celulózy TEMPELAN - ČESKÁ CELULÓZA nebo izolace z bavlněných vláken EN-TEX, dále pak výrobou a aplikací jedinečných tepelně izolačních materiálů z polystyrenové izolace STYROBALL a STYROBALL PLUS.',
      primaryBtn: { text: 'Více o nás', link: '/about' },
      secondaryBtn: { text: 'Kontaktujte nás', link: '/contact' },
    },
    {
      image: '/images/tajfun_barvy.webp',
      tag: 'Stroje Tajfun',
      title: (
        <>
          Aplikační stroj <br />
          <span className="text-brand-accent">TAJFUN UNI</span>
        </>
      ),
      text: 'Inovován od roku 1995, stroj Tajfun UNI je ideální pro foukání izolací do všech typů staveb. Spolehlivý, efektivní a snadno ovladatelný.',
      primaryBtn: { text: 'Více o strojích', link: '#nabidka' },
      secondaryBtn: { text: 'Kontaktujte nás', link: '/contact' },
    },
    {
      image: '/images/tempelan.webp',
      tag: 'Naše materiály',
      title: (
        <>
          Ekologické izolační systémy<br />
          <span className="text-brand-accent">Tempelan, Česká celuloza, En-Tex, Styroball, Styroball Plus</span>
        </>
      ),
      text: 'Objevujte s námi špičkové izolační materiály, které kombinují ekologii, efektivitu a dlouhou životnost. Naše produkty jsou ideální pro moderní stavebnictví.',
      primaryBtn: { text: 'Více o materiálech', link: '#nabidka' },
      secondaryBtn: { text: 'Kontaktujte nás', link: '/contact' },
    },
    {
      image: '/images/logo_institut.png',
      tag: 'Vzdělávací institut',
      title: (
        <>
          Školení a workshopy <br />
          <span className="text-brand-accent">na jednom místě</span>
        </>
      ),
      text: 'Nabízíme školení a workshopy pro firmy i jednotlivce, zaměřené na aplikaci izolačních materiálů a efektivní využití našich produktů. Získejte praktické dovednosti a znalosti od odborníků.',
      primaryBtn: { text: 'Institut', link: 'https://institut-prirodnich-izolaci.cz/' },
      secondaryBtn: { text: 'Kontaktujte nás', link: '/contact' },
    },
    {
      image: '/images/hero-5.png',
      tag: 'Ekologická likvidace dokumentů',
      title: (
        <>
          Skartace dokumentů
          <br />
          <span className="text-brand-accent">a písemností</span>
        </>
      ),
      text: 'Provádíme skartace veškerých dokumentů firmám, finančním institucím, orgánům státní správy, advokátním kancelářím atd... Zajišťujeme bezpečnou a ekologickou likvidaci citlivých informací.',
      primaryBtn: { text: 'Prohlédnout ateliér', link: '#nabidka' },
      secondaryBtn: { text: 'Kontaktujte nás', link: '/contact' },
    },
  ];

  // Data pro produkty 
  const productsData = [
    {
      title: 'Tajfun stroje',
      desc: 'Spolehlivé foukací stroje TAJFUN UNI a technologie s inovací od roku 1995.',
      image: '/images/stroje2.webp',
      link: '/productsandservices',
    },
    {
      title: 'Izolační materiály',
      desc: 'Celulóza TEMPELAN, bavlněná vlákna EN-TEX a polystyren STYROBALL.',
      image: '/images/izolace.webp',
      link: '/productsandservices',
    },
    {
      title: 'Tepelná čerpadla',
      desc: 'Moderní a ekologické systémy vytápění pro úsporu energie v domě.',
      image: '/images/principTPC.png',
      link: '/productsandservices',
    },
  ];

  // Data pro služby
  const servicesData = [
    {
      title: 'Zateplení objektů',
      desc: 'RD, novostavby, stěny, stropy, střechy a podkrovní prostory.',
      image: '/images/zatepleni_objektu.webp',
      link: '/productsandservices',
    },
    {
      title: 'Realizace foukání',
      desc: 'Kompletní profesionální aplikace foukané izolace na klíč.',
      image: '/images/tajfun_barvy.webp',
      link: '/productsandservices',
    },
    {
      title: 'Aplikace svépomocí',
      desc: 'Zapůjčení aplikačních strojů Tajfun a odborný návod k použití.',
      image: '/images/aplikace_svepomoci.webp',
      link: '/productsandservices',
    },
    {
      title: 'Recyklace a skartace',
      desc: 'Ekologická likvidace dokumentů a recyklace materiálů.',
      image: '/images/recyklace_skartace.webp',
      link: '/productsandservices',
    },
    {
      title: 'Institut a školení',
      desc: 'Odborná školení, kurzy a workshopy pro firmy i jednotlivce.',
      image: '/images/logo_institut.png',
      link: '/productsandservices',
    },
    {
      title: 'Odborné poradenství',
      desc: 'Pomoc s výpočty, technickým řešením a dotacemi Nová zelená úsporám.',
      image: '/images/odborne_poradenstvi.webp',
      link: '/contact',
    },
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* ================= HERO SEKCE (SLIDER) ================= */}
      <section className="relative w-full bg-brand-dark overflow-hidden [&_.swiper-button-next]:text-brand-accent [&_.swiper-button-prev]:text-brand-accent [&_.swiper-pagination-bullet-active]:bg-brand-accent [&_.swiper-pagination-bullet]:bg-brand-light">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="relative w-full min-h-[580px] sm:min-h-[620px] md:h-[75vh] flex items-center">
              {/* Obrázek na pozadí */}
              <img 
                src={slide.image} 
                alt={slide.tag} 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
              />
              
              {/* Překryvný tmavý gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 via-brand-dark/30 sm:via-brand-dark/30 to-transparent"></div>

              {/* Hlavní obsah */}
              <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-12 text-brand-light space-y-4 md:space-y-6">
                
                {/* Štítek */}
                <div>
                  <span className="inline-block text-brand-accent font-semibold tracking-wider uppercase border-b-2 border-brand-accent pb-0.5 text-xs sm:text-sm">
                    {slide.tag}
                  </span>
                </div>
                
                {/* Nadpis */}
                <h1 className="font-bold tracking-tight max-w-4xl leading-tight text-2xl sm:text-4xl md:text-5xl text-brand-light">
                  {slide.title}
                </h1>
                
                {/* Textový popis */}
                <p className="max-w-2xl font-normal leading-relaxed text-brand-light/90 text-sm sm:text-base md:text-lg">
                  {slide.text}
                </p>
                
                {/* Tlačítka */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3">
                  {slide.primaryBtn.link.startsWith('#') || slide.primaryBtn.link.startsWith('http') ? (
                    <a 
                      href={slide.primaryBtn.link} 
                      className="bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-6 py-3 rounded-xl shadow-xl transition-all text-center text-sm sm:text-base"
                    >
                      {slide.primaryBtn.text}
                    </a>
                  ) : (
                    <Link 
                      href={slide.primaryBtn.link} 
                      className="bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-6 py-3 rounded-xl shadow-xl transition-all text-center text-sm sm:text-base"
                    >
                      {slide.primaryBtn.text}
                    </Link>
                  )}

                  {slide.secondaryBtn.link.startsWith('#') || slide.secondaryBtn.link.startsWith('http') ? (
                    <a 
                      href={slide.secondaryBtn.link} 
                      className="bg-brand-light/10 hover:bg-brand-light/20 backdrop-blur-md text-brand-light font-bold px-6 py-3 rounded-xl border border-brand-light/20 transition-all text-center text-sm sm:text-base"
                    >
                      {slide.secondaryBtn.text}
                    </a>
                  ) : (
                    <Link 
                      href={slide.secondaryBtn.link} 
                      className="bg-brand-light/10 hover:bg-brand-light/20 backdrop-blur-md text-brand-light font-bold px-6 py-3 rounded-xl border border-brand-light/20 transition-all text-center text-sm sm:text-base"
                    >
                      {slide.secondaryBtn.text}
                    </Link>
                  )}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= INOVAČNÍ / PŘEDSTAVOVACÍ SEKCE ================= */}
      <section className="w-full bg-brand-light py-16 md:py-24 border-b border-brand-secondary/60">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-secondary text-brand-dark">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Ekologické a průmyslové inovace
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight">
              Špičkové technologie s ohledem na <span className="text-brand-accent">přírodu a budoucnost</span>
            </h2>

            <p className="text-brand-dark/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Společnost <strong className="font-semibold text-brand-dark">ENROLL CZ spol. s r.o.</strong> vytváří moderní řešení při zateplení a ekologii. Snažíme se odrážet náš lidský a udržitelný přístup.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="#nabidka" 
                className="bg-brand-accent hover:opacity-90 text-brand-dark font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-center text-sm sm:text-base inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Naše produkty
              </a>
              <Link 
                href="/about" 
                className="bg-brand-secondary hover:bg-brand-secondary/80 text-brand-dark font-bold px-6 py-3 rounded-xl transition-all text-center text-sm sm:text-base inline-flex items-center gap-1"
              >
                Více o nás &rsaquo;
              </Link>
            </div>

            <div className="pt-8 border-t border-brand-secondary/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-accent">35+</div>
                <div className="text-xs sm:text-sm text-brand-dark/70 font-medium mt-1">Let zkušeností</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-accent">100%</div>
                <div className="text-xs sm:text-sm text-brand-dark/70 font-medium mt-1">Český vývoj</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-accent">ISO</div>
                <div className="text-xs sm:text-sm text-brand-dark/70 font-medium mt-1">Certifikace kvality</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-brand-primary p-6 sm:p-8 rounded-3xl border border-brand-secondary shadow-xl shadow-brand-shadow/80 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 font-extrabold text-white text-xs sm:text-sm tracking-wide select-none">
                  <div 
                    className="bg-[#005bb7] px-2.5 py-1 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0% 0%, 78% 0%, 100% 50%, 78% 100%, 0% 100%)' }}
                  >
                    <span className="pr-1.5">nová</span>
                  </div>
                  <div 
                    className="bg-[#38ad2b] px-2.5 py-1 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)' }}
                  >
                    <span className="pr-1.5">zelená</span>
                  </div>
                  <div 
                    className="bg-[#b5d300] px-2.5 py-1 flex items-center justify-center"
                    style={{ clipPath: 'polygon(0% 0%, 82% 0%, 100% 50%, 82% 100%, 0% 100%)' }}
                  >
                    <span className="pr-1.5">úsporám</span>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                  Státní dotace
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-dark leading-snug">
                  Naše realizace splňují podmínky pro program Nová zelená úsporám
                </h3>
                <p className="text-sm text-brand-dark/80 leading-relaxed font-normal">
                  Plánujete zateplení fasády, střechy, stropu nebo výměnu oken a dveří? S námi investujete chytře a bez zbytečných starostí. Naše materiály a technologické postupy plně odpovídají přísným technickým požadavkům dotačního programu.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-brand-secondary/40 border border-brand-secondary/60">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">Výrazné snížení počátečních nákladů díky státní podpoře</span>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-brand-secondary/40 border border-brand-secondary/60">
                  <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">Certifikované izolační systémy s doložitelnými vlastnostmi pro energetické poradce</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SEKCE NABÍDKY ================= */}
      <section id="nabidka" className="w-full bg-brand-light py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          
          <div className="space-y-8">
            <div className="border-b border-brand-secondary pb-4">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">
                Náš sortiment
              </span>
              <h2 className="font-bold text-brand-dark text-3xl md:text-4xl mt-1">
                Produkty
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-brand-primary rounded-2xl border border-brand-secondary/80 shadow-md shadow-brand-shadow/60 hover:shadow-xl hover:border-brand-accent/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="w-full h-48 bg-brand-secondary/40 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-bold text-xl text-brand-dark group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-80 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                    Zjistit více <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-b border-brand-secondary pb-4">
              <span className="text-brand-accent font-semibold uppercase tracking-wider text-sm">
                Co pro vás děláme
              </span>
              <h2 className="font-bold text-brand-dark text-3xl md:text-4xl mt-1">
                Služby
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-brand-primary rounded-2xl border border-brand-secondary/80 shadow-md shadow-brand-shadow/60 hover:shadow-xl hover:border-brand-accent/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="w-full h-48 bg-brand-secondary/40 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="font-bold text-xl text-brand-dark group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-80 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                    Zjistit více <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= JEDNODUCHÁ SEKCE "PROČ MY?" ================= */}
      <section className="w-full bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-bold text-brand-dark">U nás naleznete</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-normal text-brand-dark">
            <div className="p-4 border border-brand-secondary bg-brand-secondary/30 rounded-lg">Foukaná izolace</div>
            <div className="p-4 border border-brand-secondary bg-brand-secondary/30 rounded-lg">Odborné poradenství</div>
            <div className="p-4 border border-brand-secondary bg-brand-secondary/30 rounded-lg">Recyklace</div>
            <div className="p-4 border border-brand-secondary bg-brand-secondary/30 rounded-lg">Vzdělávací institut</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;