"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [openMobileCategories, setOpenMobileCategories] = useState({});

  const closeMenu = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
    setOpenMobileCategories({});
  };

  const toggleMobileCategory = (categoryTitle) => {
    setOpenMobileCategories((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  const productCategories = [
    { title: 'Tajfun stroje', to: '/products/tajfun-stroje' },
    { title: 'Tepelná čerpadla', to: '/products/tepelna-cerpadla' },
    {
      title: 'Izolační materiály',
      items: [
        { to: '/products/ceska-celuloza', label: 'Česká celulóza' },
        { to: '/products/en-tex', label: 'EN-TEX' },
        { to: '/products/styroball', label: 'STYROBALL' },
        { to: '/products/styroball-plus', label: 'STYROBALL PLUS' },
        { to: '/products/tempelan', label: 'TEMPELAN - tepelná a akustická izolace' },
        { to: '/products/izo-ball', label: 'IZO-BALL příměs do polystyrenbetonu' },
        { to: '/products/intelan', label: 'INTELAN - protipožární akustický nástřik' },
        { to: '/products/dry-cell', label: 'DRY-CELL vysoušecí hmota' },
        
      ],
    },
    {
      title: 'Služby',
      items: [
        { to: '/services/zatepleni-objektu', label: 'Zateplení objektů' },
        { to: '/services/realizace-foukani', label: 'Realizace foukání izolace' },
        { to: '/services/aplikace-svepomoci', label: 'Aplikace izolace svépomocí' },
        { to: '/services/recyklace-skartace', label: 'Recyklace a skartace' },
        { to: '/services/institut-skoleni', label: 'Institut a školení' },
        { to: '/services/odborne-poradenstvi', label: 'Odborné poradenství' },
      ],
    },
  ];

  return (
    <header className="bg-brand-light shadow-sm border-b border-slate-200 sticky top-0 z-50 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-3 md:h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center space-x-3">
          <img 
            src="/images/enroll-logo.webp" 
            alt="Logo Enroll" 
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Tlačítko Hamburgeru (Mobilní menu) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 text-slate-600 hover:text-brand-accent focus:outline-none rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigace pro Počítače / Desktopy */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-slate-600">
          <Link href="/" className={pathname === "/" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>Domů</Link>
          <Link href="/about" className={pathname === "/about" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>O nás</Link>
          
          {/* Desktop Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-brand-accent transition-colors py-2 focus:outline-none">
              <span>Produkty a služby</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 mt-0 w-80 bg-brand-light border border-slate-200 rounded-md shadow-xl py-3 hidden group-hover:block z-50 max-h-[80vh] overflow-y-auto">
              {productCategories.map((category, index) => (
                <div key={index} className="px-4 py-2">
                  {category.items ? (
                    <>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                        {category.title}
                      </div>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.to}
                            href={item.to}
                            className={`block px-2 py-1.5 text-sm rounded transition-colors ${
                              pathname === item.to 
                                ? 'text-brand-accent font-semibold bg-brand-accent/10' 
                                : 'text-slate-600 hover:bg-brand-secondary hover:text-brand-accent'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                        href={category.to}
                        className={`block text-xs font-bold uppercase tracking-wider py-1.5 transition-colors ${
                        pathname === category.to ? 'text-brand-accent' : 'text-slate-900 hover:text-brand-accent'
                        }`}
                        >
                      {category.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link href="/pricelist" className={pathname === "/pricelist" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>Ceníky</Link>
          <Link href="/videoandphotos" className={pathname === "/videoandphotos" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>Videa a fotografie</Link>
          <Link href="/documents" className={pathname === "/documents" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>Dokumenty</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-brand-accent font-semibold" : "hover:text-brand-accent transition-colors"}>Kontakty</Link>
        </nav>

      </div>

      {/* Rozbalovací Mobilní Menu */}
      {isOpen && (
        <nav className="md:hidden bg-brand-primary text-black px-6 py-4 flex flex-col space-y-2 font-medium shadow-lg max-h-[80vh] overflow-y-auto">
          <Link 
            href="/" 
            onClick={closeMenu} 
            className={`py-2 rounded-md px-3 transition-colors ${pathname === '/' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}
          >
            Domů
          </Link>
          <Link 
            href="/about" 
            onClick={closeMenu} 
            className={`py-2 rounded-md px-3 transition-colors ${pathname === '/about' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}
          >
            O nás
          </Link>

          <div>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full flex items-center justify-between py-2 rounded-md px-3 transition-colors hover:text-brand-accent hover:bg-black/5"
            >
              <span>Produkty a služby</span>
              <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isProductsOpen && (
              <div className="pl-3 space-y-2 mt-1 border-l-2 border-black/20 ml-3">
                {productCategories.map((category, index) => (
                  <div key={index} className="py-1">
                    {category.items ? (
                      <div>
                        <button
                          onClick={() => toggleMobileCategory(category.title)}
                          className="w-full flex items-center justify-between py-1 px-2 text-sm font-bold text-slate-800 hover:text-brand-accent"
                        >
                          <span>{category.title}</span>
                          <svg className={`w-3.5 h-3.5 transition-transform ${openMobileCategories[category.title] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openMobileCategories[category.title] && (
                          <div className="pl-3 space-y-1 mt-1 border-l border-black/10">
                            {category.items.map((item) => (
                              <Link
                                key={item.to}
                                href={item.to}
                                onClick={closeMenu}
                                className={`block py-1.5 px-2 rounded-md text-xs transition-colors ${
                                  pathname === item.to ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={category.to}
                        onClick={closeMenu}
                        className={`block py-1.5 px-2 text-sm font-bold rounded transition-colors ${
                          pathname === category.to ? 'text-brand-accent bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'
                        }`}
                      >
                        {category.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricelist" onClick={closeMenu} className={`py-2 rounded-md px-3 transition-colors ${pathname === '/pricelist' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}>Ceníky</Link>
          <Link href="/videoandphotos" onClick={closeMenu} className={`py-2 rounded-md px-3 transition-colors ${pathname === '/videoandphotos' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}>Videa a fotografie</Link>
          <Link href="/documents" onClick={closeMenu} className={`py-2 rounded-md px-3 transition-colors ${pathname === '/documents' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}>Dokumenty</Link>
          <Link href="/contact" onClick={closeMenu} className={`py-2 rounded-md px-3 transition-colors ${pathname === '/contact' ? 'text-brand-accent font-bold bg-black/15' : 'hover:text-brand-accent hover:bg-black/5'}`}>Kontakty</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;