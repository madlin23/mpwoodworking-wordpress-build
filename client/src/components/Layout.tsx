import React from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "../contexts/CartContext";
import { ShoppingBag, Menu, X, Hammer } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Atelier", path: "/" },
    { name: "Unikat-Shop", path: "/shop" },
    { name: "Projekte", path: "/projekte" },
    { name: "Holzarten", path: "/holzarten" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010101] text-[#f8f8f7] font-sans selection:bg-[#d40924] selection:text-[#f8f8f7]">
      {/* Rote feine Akzentlinie ganz oben */}
      <div className="h-1.5 bg-[#d40924] w-full" />

      {/* Sticky Header mit starkem Blur */}
      <header className="sticky top-0 z-50 bg-[#010101]/90 backdrop-blur-md border-b border-[#2a2a28]">
        <div className="container py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="font-serif text-2xl md:text-3xl font-black tracking-wider text-[#f8f8f7] group-hover:text-[#d40924] transition-colors uppercase">
                MP Woodworking
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#a8a8a3] uppercase font-sans -mt-1 pl-0.5">
                Handwerk & Massivholz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`font-sans text-xs tracking-widest uppercase font-bold cursor-pointer relative py-1 transition-colors hover:text-[#d40924] ${
                      isActive ? "text-[#d40924]" : "text-[#a8a8a3]"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Warenkorb & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/warenkorb">
              <div className="relative cursor-pointer p-2 hover:bg-[#1a1a19] border border-transparent hover:border-[#2a2a28] transition-colors">
                <ShoppingBag className="w-5 h-5 text-[#f8f8f7] stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#d40924] text-[#f8f8f7] font-sans text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#1a1a19] border border-transparent hover:border-[#2a2a28] transition-colors text-[#f8f8f7]"
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#11110f]/95 backdrop-blur-md border-b border-[#2a2a28] absolute top-full left-0 w-full animate-in slide-in-from-top duration-200">
            <div className="container py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <span
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans text-sm tracking-widest uppercase cursor-pointer py-2 block border-b border-[#2a2a28] ${
                        isActive ? "text-[#d40924] font-bold" : "text-[#a8a8a3]"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Hauptinhalt */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#11110f] text-[#f8f8f7] mt-20 border-t border-[#2a2a28]">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Spalte 1: Brand */}
          <div className="flex flex-col space-y-4">
            <span className="font-serif text-3xl font-black tracking-wider uppercase">
              MP Woodworking
            </span>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans max-w-xs">
              Kompromisslose Handwerkskunst und charakterstarke Massivholz-Unikate aus märkischen Edelhölzern. Gefertigt für Generationen.
            </p>
            <div className="flex items-center space-x-2 text-[10px] tracking-widest text-[#a8a8a3] uppercase font-sans pt-2">
              <Hammer className="w-3.5 h-3.5 text-[#d40924]" />
              <span>Berlin-Köpenick</span>
            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-[#d40924] uppercase font-bold font-serif">
              Atelier
            </span>
            <div className="flex flex-col space-y-2 font-sans text-xs">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className="text-[#a8a8a3] hover:text-[#d40924] transition-colors cursor-pointer uppercase tracking-wider font-bold">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Spalte 3: Werkstatt */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-[#d40924] uppercase font-bold font-serif">
              Werkstatt
            </span>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans">
              Atelier & Werkstatt Köpenick<br />
              Besuche ausschließlich nach Vereinbarung.<br />
              <strong className="text-[#f8f8f7]">Marco Paul</strong><br />
              E-Mail: <span className="text-[#d40924] hover:underline cursor-pointer">info@mpwoodworking.de</span>
            </p>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-[#d40924] uppercase font-bold font-serif">
              Rechtliches
            </span>
            <div className="flex flex-col space-y-2 font-sans text-xs text-[#a8a8a3]">
              <span className="hover:text-[#f8f8f7] cursor-pointer transition-colors uppercase tracking-wider">Impressum</span>
              <span className="hover:text-[#f8f8f7] cursor-pointer transition-colors uppercase tracking-wider">Datenschutzerklärung</span>
              <span className="hover:text-[#f8f8f7] cursor-pointer transition-colors uppercase tracking-wider">Widerrufsbelehrung</span>
              <span className="hover:text-[#f8f8f7] cursor-pointer transition-colors uppercase tracking-wider">AGB</span>
            </div>
          </div>
        </div>

        {/* Unterer Footer */}
        <div className="border-t border-[#2a2a28] py-6 bg-[#1a1a19]/40">
          <div className="container flex flex-col md:flex-row items-center justify-between text-xs text-[#a8a8a3] font-sans space-y-4 md:space-y-0">
            <span>
              &copy; {new Date().getFullYear()} MP Woodworking. Alle Rechte vorbehalten.
            </span>
            <div className="flex items-center space-x-1 text-[#a8a8a3]">
              <Hammer className="w-3.5 h-3.5 text-[#d40924]" />
              <span>Handgefertigt in Berlin</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
