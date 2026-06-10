import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { products, projects, woodTypes } from "../lib/data";
import { ArrowRight, Hammer, Flame, Star, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export default function Home() {

  const { addToCart } = useCart();

  return (
    <Layout>
      {/* Hero Section - Dunkel, kontraststark, plakativ */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden border-b border-[#2a2a28]">
        {/* Hintergrundbild mit starker Abdunkelung für extremen Kontrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="/manus-storage/hero_atelier_0f82348e.png"
            alt="Dunkle Woodworking Werkstatt"
            className="w-full h-full object-cover opacity-35 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 py-24 flex flex-col items-center text-center space-y-8 max-w-4xl">
          <span className="text-xs tracking-[0.4em] text-[#d40924] uppercase font-black">
            MANUFAKTUR FÜR HOLZOBJEKTE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-none uppercase text-[#f8f8f7]">
            DIE SEELE DES HOLZES,<br />
            <span className="text-[#d40924] relative inline-block">
              IN FORM GEDREHT.
              {/* Dezenter, hochwertiger grüner Glow unter der wichtigsten Überschrift */}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#a3e635] shadow-[0_0_12px_#a3e635] opacity-80" />
            </span>
          </h1>
          <p className="text-sm md:text-base text-[#a8a8a3] leading-relaxed max-w-2xl font-sans font-light">
            In meiner Werkstatt in Berlin-Köpenick entstehen aus märkischen Edelhölzern einzigartige, handgedrechselte Schalen, Gewürzmühlen und feine Möbel. Jedes Stück ist ein kompromissloses Unikat mit rauem, edlem Charakter.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full justify-center">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-widest text-xs py-6 px-10 rounded-none cursor-pointer border border-transparent font-bold transition-all hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:border-[#a3e635]/40">
                Unikate entdecken
              </Button>
            </Link>
            <Link href="/kontakt" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent hover:bg-[#1a1a19] text-[#f8f8f7] border border-[#2a2a28] hover:border-[#a3e635]/40 font-sans uppercase tracking-widest text-xs py-6 px-10 rounded-none cursor-pointer font-bold transition-all">
                Maßanfertigungen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Werte / Handwerks-Prinzipien */}
      <section className="py-20 bg-[#11110f] border-b border-[#2a2a28]">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Spalte 1: 100% Handarbeit */}
          <div className="flex flex-col space-y-4 p-8 bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/30 transition-colors group relative">
            {/* Feine grüne Akzentlinie links neben dem Textblock */}
            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#a3e635] opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon mit grünem Akzent-Rahmen */}
            <div className="p-3 bg-[#d40924]/10 border border-[#a3e635]/30 group-hover:border-[#a3e635] w-fit text-[#d40924] transition-colors">
              <Hammer className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#f8f8f7]">100% Handarbeit</h3>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans">
              Jedes Objekt wird von mir persönlich an der Drechselbank oder Werkbank in Berlin geformt. Keine Massenware, kein CNC. Nur reines Handwerk.
            </p>
          </div>

          {/* Spalte 2: Märkische Edelhölzer */}
          <div className="flex flex-col space-y-4 p-8 bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/30 transition-colors group relative">
            {/* Feine grüne Akzentlinie links neben dem Textblock */}
            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#a3e635] opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon mit grünem Akzent-Rahmen */}
            <div className="p-3 bg-[#d40924]/10 border border-[#a3e635]/30 group-hover:border-[#a3e635] w-fit text-[#d40924] transition-colors">
              <Flame className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#f8f8f7]">Märkische Edelhölzer</h3>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans">
              Ich verarbeite ausschließlich lokale Hölzer wie Eibe, Nussbaum, Robinie oder gestreifte Buche aus Berlin und Brandenburg mit bekannter Herkunft.
            </p>
          </div>

          {/* Spalte 3: Für Generationen */}
          <div className="flex flex-col space-y-4 p-8 bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/30 transition-colors group relative">
            {/* Feine grüne Akzentlinie links neben dem Textblock */}
            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#a3e635] opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Icon mit grünem Akzent-Rahmen */}
            <div className="p-3 bg-[#d40924]/10 border border-[#a3e635]/30 group-hover:border-[#a3e635] w-fit text-[#d40924] transition-colors">
              <Star className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#f8f8f7]">Für Generationen</h3>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans">
              Durch traditionelle Holzverbindungen und Veredelung mit natürlichen Ölen und Wachsen entstehen widerstandsfähige Erbstücke.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Unikate - Plakativ, dunkle Panels */}
      <section className="py-24 bg-[#010101] border-b border-[#2a2a28]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col space-y-3 relative pl-4">
              {/* Feine grüne vertikale Linie links neben der Hauptüberschrift */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a3e635]" />
              <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">EXKLUSIVE EINZELSTÜCKE</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#f8f8f7]">
                FRISCH AUS DER WERKSTATT
              </h2>
            </div>
            <Link href="/shop">
              <span className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase font-bold text-[#f8f8f7] hover:text-[#a3e635] cursor-pointer transition-colors pb-1 border-b border-transparent hover:border-[#a3e635]">
                <span>Alle Unikate ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="group flex flex-col space-y-4 p-4 bg-[#11110f] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#1a1a19] relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-110 group-hover:grayscale-0"
                  />
                  {product.stock === 1 && (
                    <span className="absolute top-4 left-4 bg-[#d40924] text-[#f8f8f7] text-[9px] tracking-widest uppercase px-3 py-1 font-bold">
                      Unikat
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1 pt-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-sans">
                    {product.woodType}
                  </span>
                  <Link href={`/produkt/${product.slug}`}>
                    <h3 className="font-serif text-2xl font-black uppercase text-[#f8f8f7] hover:text-[#a3e635] cursor-pointer transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  {/* Preisangabe mit kleinem grünen Punkt */}
                  <span className="font-serif text-xl font-bold text-[#d40924] pt-1 flex items-center gap-1.5">
                    {product.price.toFixed(2)} €
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block shadow-[0_0_6px_#a3e635]" />
                  </span>
                </div>
                <Button
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.title} zum Warenkorb hinzugefügt.`);
                  }}
                  className="w-full bg-[#1a1a19] hover:bg-[#d40924] text-[#f8f8f7] border border-[#2a2a28] hover:border-transparent font-sans uppercase tracking-widest text-[10px] py-4 rounded-none cursor-pointer font-bold transition-all hover:shadow-[0_0_12px_rgba(163,230,53,0.2)]"
                >
                  In den Warenkorb
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über den Drechsler - Handwerklicher Fokus */}
      <section className="py-24 bg-[#11110f] border-b border-[#2a2a28]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 aspect-[4/5] overflow-hidden bg-[#1a1a19] border border-[#2a2a28] relative group">
            {/* Dünner grüner Rahmen um das Porträt-Bild */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#a3e635]/40 transition-colors z-20 pointer-events-none" />
            <img
              src="/manus-storage/about_marco_bb26a810.png"
              alt="Marco Paul in seiner Holzwerkstatt"
              className="w-full h-full object-cover object-center filter grayscale contrast-115 transition-all group-hover:grayscale-0 group-hover:contrast-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6 relative pl-6">
            {/* Feine grüne Akzentlinie links neben dem Portrait-Textblock */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#a3e635] opacity-70" />
            
            <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">DER KOPF DAHINTER</span>
            <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#f8f8f7] leading-none">
              MARCO PAUL
            </h2>
            <p className="text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
              „Holz ist kein toter Werkstoff. Es arbeitet, atmet und besitzt ein Gedächtnis. Wenn ich ein Stück Eibe oder gestreifte Buche auf die Drechselbank spanne, weiß ich nie genau, was mich im Inneren erwartet. Risse, Verwachsungen und die Färbung der Jahresringe bestimmen die finale Form. Ich zwinge dem Holz kein Design auf — ich helfe ihm nur, seine innere Schönheit zu offenbaren.“
            </p>
            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans font-light">
              In meiner Werkstatt in Berlin-Köpenick arbeite ich mit traditionellen Werkzeugen und viel Geduld. Jedes fertige Werkstück ist das Ergebnis stundenlanger Konzentration, scharfer Eisen und feinstem Schleifstaub.
            </p>
            <div className="pt-4">
              <Link href="/kontakt">
                <Button className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-widest text-xs py-5 px-8 rounded-none cursor-pointer border border-transparent font-bold transition-all hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:border-[#a3e635]/40">
                  Besuchen Sie das Atelier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chronik / Projekte Highlight */}
      <section className="py-24 bg-[#010101]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col space-y-3 relative pl-4">
              {/* Feine grüne vertikale Linie links neben der Projekt-Überschrift */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a3e635]" />
              <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">HANDWERKS-CHRONIK</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#f8f8f7]">
                MASSANFERTIGUNGEN & PROJEKTE
              </h2>
            </div>
            <Link href="/projekte">
              <span className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase font-bold text-[#f8f8f7] hover:text-[#a3e635] cursor-pointer transition-colors pb-1 border-b border-transparent hover:border-[#a3e635]">
                <span>Alle Projekte ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group flex flex-col space-y-4 p-4 bg-[#11110f] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#1a1a19] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 filter grayscale contrast-110 group-hover:grayscale-0"
                  />
                  <span className="absolute top-4 left-4 bg-[#11110f] text-[#f8f8f7] text-[9px] tracking-widest uppercase px-3 py-1 border border-[#2a2a28] font-bold">
                    Projekt {project.year}
                  </span>
                </div>
                <div className="flex flex-col space-y-2 pt-2">
                  <h3 className="font-serif text-3xl font-black uppercase text-[#f8f8f7] group-hover:text-[#a3e635] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans line-clamp-2">
                    {project.description}
                  </p>
                  <Link href={`/projekt/${project.slug}`}>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#f8f8f7] group-hover:text-[#a3e635] transition-colors pt-2 block cursor-pointer">
                      Entstehungsgeschichte &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
