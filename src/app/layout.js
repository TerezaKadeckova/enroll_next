import Navbar from "@/components/navbar";
import "./globals.css"; // Tady se načítá váš Tailwind

export const metadata = {
  title: "Enroll CZ",
  description: "Enroll CZ spol. s r.o.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className="min-h-screen bg-brand-primary text-brand-light flex flex-col w-full antialiased">
        
        {/* Horní navigační lišta */}
        <Navbar />

        {/* Hlavní obsah stránek – nahrazuje starý Outlet */}
        <main className="flex-grow w-full flex flex-col justify-center">
          {children}
        </main>

        {/* Patička webu */}
        <footer className="bg-brand-dark text-brand-light py-6 border-t border-slate-800 text-center text-sm w-full">
          <p>&copy; {new Date().getFullYear()} Enroll CZ spol. s r.o. Všechna práva vyhrazena.</p>
        </footer>

      </body>
    </html>
  );
}