"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Odesláno:', formData);
    alert('Děkujeme! Vaše zpráva byla odeslána.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="w-full flex flex-col bg-brand-secondary text-brand-dark max-w-7xl mx-auto px-4 py-12">
     
      <h1 className="mb-8 text-center md:text-left text-brand-dark font-display">
        Kontaktujte nás
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEVÝ SLOUPEC - Základní kontaktní údaje */}
        <div className="flex flex-col gap-6 bg-brand-primary p-8 rounded-2xl border border-brand-secondary shadow-md shadow-brand-shadow/50">
          <div>
            <h2 className="mb-4 text-brand-dark font-display">Sídlo firmy</h2>
            <p className="font-bold text-lg text-brand-dark">ENROLL CZ spol. s r.o.</p>
            <p>Nová Ves 190</p>
            <p>463 31 Nová Ves u Liberce</p>
            <p className="text-sm opacity-80 mt-3 italic">
              (obec Nová Ves se nachází 5 km od města Chrastavy, cca 12 km od Liberce)
            </p>
          </div>

          <hr className="border-brand-secondary my-2" />

          <div className="space-y-2">
            <h3 className="font-semibold text-brand-dark font-display">Fakturační údaje</h3>
            <p><span className="font-medium">IČO:</span> 25460161</p>
            <p><span className="font-medium">DIČ:</span> CZ25460161</p>
          </div>
          
          <hr className="border-brand-secondary my-2" />

          <div className="space-y-2">
            <h3 className="font-semibold text-brand-dark font-display">Kontaktní údaje</h3>
            <p><span className="font-medium">Telefon:</span> +420 482 720 511</p>
            <p><span className="font-medium">Vedoucí výroby:</span> +420 482 725 345</p>
            <p><span className="font-medium">E-mail:</span> <a href="mailto:info@enroll.cz" className="text-brand-accent hover:underline">
              info@enroll.cz
            </a></p>
          </div>

          <hr className="border-brand-secondary my-2" />
          <div className="space-y-2">
            <h3 className="font-semibold text-brand-dark font-display">Provozní doba</h3>
            <p><span className="font-medium">Pondělí až pátek:</span> 7.00 - 15.30 hod.</p>
            <p><span className="font-medium">Výdej materiálu:</span> POUZE od 8.00 – 10.30 hod. a od 11.00 - 14.00 hod.</p>
          </div>
        </div>


        {/* PRAVÝ SLOUPEC - Google Mapa a Kontaktní formulář */}
        <div className="flex flex-col gap-8">
          
          {/* Google Mapa */}
          <div className="w-full h-72 rounded-2xl overflow-hidden border border-brand-secondary shadow-md shadow-brand-shadow/50">
            <iframe
              title="Google Mapa - ENROLL CZ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3571991054366!2d14.9682662!3d50.8060875!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470932c57849e7b9%3A0xc3f283d735071bd1!2sNov%C3%A1%20Ves%20190%2C%20463%2031%20Nov%C3%A1%20Ves%20u%20Liberce!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Kontaktní formulář */}
          <div className="bg-brand-primary p-8 rounded-2xl border border-brand-secondary shadow-md shadow-brand-shadow/50">
            <h2 className="mb-6 font-display text-brand-dark">Napište nám</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-brand-light border border-brand-secondary rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  placeholder="Jan Novák"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-brand-light border border-brand-secondary rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-brand-light border border-brand-secondary rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-brand-light border border-brand-secondary rounded-xl text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  placeholder="Vaše zpráva..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-brand-accent text-brand-dark font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all self-end cursor-pointer"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;