"use client";

import React, { useState } from 'react';

export default function IntelanPage() {
  const [openFaq, setOpenFaq] = useState(null);
  
  // 1. NOVÝ STAV: Drží cestu k právě zvětšenému obrázku (pokud je null, modal je zavřený)
  const [activeImage, setActiveImage] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
      
      {/* ... (vaše předchozí sekce 1 až 7 zůstávají stejné) ... */}

      {/* 8. SEKCE: Ukázky aplikací izolace */}
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
              // 2. Přidáno onClick a kurzor pointer pro indikaci klikatelnosti
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

      {/* 3. MODÁLNÍ OKNO (Zvětšený náhled přes celou obrazovku) */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)} // Zavře se při kliknutí kamkoliv na pozadí
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            {/* Tlačítko křížku pro zavření */}
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-brand-accent transition-colors p-2"
              aria-label="Zavřít"
            >
              ✕
            </button>
            
            {/* Velký obrázek */}
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-2 border-brand-secondary"
              onClick={(e) => e.stopPropagation()} // Aby kliknutí na samotný obrázek nezavřelo okno
            />
          </div>
        </div>
      )}

    </div>
  );
}