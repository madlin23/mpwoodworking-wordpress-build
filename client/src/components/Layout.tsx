import React from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "../contexts/CartContext";
import { ShoppingBag, Menu, X, Hammer, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Obere feine Fugen-Linie für das Atelier-Feeling */}
      <div className="h-1.5 bg-accent w-full" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase">
                MP Woodworking
              </span>
              <span className="text-[9px] tracking-[0.25em] text-muted-foreground uppercase font-sans -mt-1 pl-0.5">
                Handwerk & Massivholz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`font-sans text-sm tracking-wide uppercase cursor-pointer relative py-1 transition-colors hover:text-foreground ${
                      isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Warenkorb & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/warenkorb">
              <div className="relative cursor-pointer p-2 hover:bg-muted/50 transition-colors">
                <ShoppingBag className="w-5 h-5 text-foreground stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground font-sans text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-none">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted/50 transition-colors"
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border/40 absolute top-full left-0 w-full animate-in slide-in-from-top duration-200">
            <div className="container py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <span
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans text-base tracking-wider uppercase cursor-pointer py-2 block border-b border-border/10 ${
                        isActive ? "text-foreground font-bold" : "text-muted-foreground"
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
      <footer className="bg-foreground text-background mt-20 border-t border-border/10">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Spalte 1: Brand */}
          <div className="flex flex-col space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight uppercase">
              MP Woodworking
            </span>
            <p className="text-xs text-background/60 leading-relaxed font-sans max-w-xs">
              Handgedrechselte Unikate und maßgefertigte Massivholzmöbel aus märkischen Edelhölzern. Jedes Stück erzählt seine eigene Geschichte.
            </p>
            <div className="flex items-center space-x-2 text-[10px] tracking-widest text-background/40 uppercase font-sans pt-2">
              <Hammer className="w-3 h-3 text-accent" />
              <span>Berlin-Köpenick</span>
            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-background/40 uppercase font-sans font-semibold">
              Atelier
            </span>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className="text-sm text-background/80 hover:text-background transition-colors cursor-pointer font-sans">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Spalte 3: Werkstatt */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-background/40 uppercase font-sans font-semibold">
              Werkstatt-Öffnungszeiten
            </span>
            <p className="text-sm text-background/80 font-sans">
              Nach Vereinbarung (Köpenick)<br />
              Marco Paul<br />
              E-Mail: info@mpwoodworking.de
            </p>
            <span className="text-xs text-accent font-sans">
              * Besuche bitte vorab anmelden.
            </span>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs tracking-[0.2em] text-background/40 uppercase font-sans font-semibold">
              Rechtliches
            </span>
            <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer font-sans">
              Impressum
            </span>
            <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer font-sans">
              Datenschutzerklärung
            </span>
            <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer font-sans">
              Widerrufsbelehrung
            </span>
            <span className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer font-sans">
              AGB
            </span>
          </div>
        </div>

        {/* Unterer Footer */}
        <div className="border-t border-background/10 py-6">
          <div className="container flex flex-col md:flex-row items-center justify-between text-xs text-background/40 font-sans space-y-4 md:space-y-0">
            <span>
              &copy; {new Date().getFullYear()} MP Woodworking. Alle Rechte vorbehalten.
            </span>
            <div className="flex items-center space-x-1">
              <span>Handgefertigt mit</span>
              <Heart className="w-3 h-3 text-accent fill-accent" />
              <span>in Berlin-Köpenick</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
