import { Link } from "wouter";
import Layout from "../components/Layout";
import { products, projects } from "../lib/data";
import { ArrowRight, Hammer, TreePine, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Wir zeigen die ersten 2 Produkte und Projekte als Teaser auf der Startseite
  const featuredProducts = products.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-foreground text-background overflow-hidden">
        {/* Hintergrundbild mit feiner Abdunkelung */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663204918233/RmVrMvhzjQZmkmxT72yXgY/hero_atelier-JiiGvidLnw3FUXkzrYrUky.webp"
            alt="MP Woodworking Werkstatt"
            className="w-full h-full object-cover object-center opacity-45 transform scale-105 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <span className="text-xs md:text-sm tracking-[0.3em] text-accent uppercase font-sans font-semibold">
              Manufaktur für Holzobjekte
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] tracking-tight">
              Die Seele des Holzes, <br />
              <span className="italic font-normal text-secondary">in Form gedreht.</span>
            </h1>
            <p className="text-base md:text-lg text-background/80 font-sans max-w-xl leading-relaxed">
              In meiner Werkstatt in Berlin-Köpenick entstehen aus märkischen Edelhölzern einzigartige, handgedrechselte Schalen, Gewürzmühlen und feine Möbel. Jedes Stück ist ein handgefertigtes Unikat mit Charakter.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/shop">
                <Button className="bg-background text-foreground hover:bg-secondary border border-transparent font-sans uppercase tracking-wider text-xs py-6 px-8 rounded-none cursor-pointer">
                  Unikate entdecken
                </Button>
              </Link>
              <Link href="/projekte">
                <Button className="bg-transparent text-background hover:bg-background/10 border border-background/40 font-sans uppercase tracking-wider text-xs py-6 px-8 rounded-none cursor-pointer">
                  Maßanfertigungen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marken-Werte (Atelier-Philosophie) */}
      <section className="py-24 bg-background border-b border-border/40">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Wert 1 */}
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center">
              <Hammer className="w-5 h-5 text-foreground stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold">100% Handarbeit</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Jedes Stück wird von mir persönlich an der Drechselbank oder Werkbank in Berlin-Köpenick gefertigt. Ohne CNC-Fräsen, ohne Massenproduktion.
            </p>
          </div>

          {/* Wert 2 */}
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center">
              <TreePine className="w-5 h-5 text-foreground stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold">Regionale Edelhölzer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Ich verwende ausschließlich nachhaltige Hölzer aus Berlin und Brandenburg – oft gerettet aus Baumpflegearbeiten, wie Eibe, Walnuss, Zwetschge oder Eiche.
            </p>
          </div>

          {/* Wert 3 */}
          <div className="flex flex-col space-y-4">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-foreground stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold">Natürliche Veredelung</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Die Oberflächen werden mehrfach fein geschliffen und ausschließlich mit lebensmittelechten biologischen Ölen und Wachsen behandelt, um die Haptik zu wahren.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products (Unikat-Shop Teaser) */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
                Aktuell im Atelier
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Handgefertigte Unikate</h2>
            </div>
            <Link href="/shop">
              <span className="text-sm tracking-wider uppercase font-sans font-semibold text-foreground hover:text-accent cursor-pointer flex items-center space-x-2 mt-4 md:mt-0">
                <span>Zum gesamten Shop</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col space-y-4 border border-border/20 p-4 hover:border-border/60 transition-colors bg-card">
                <div className="aspect-square w-full overflow-hidden bg-muted relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-background text-foreground text-[10px] tracking-widest uppercase font-sans px-3 py-1 border border-border/20">
                    {product.woodType}
                  </span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-serif text-xl font-bold group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans">
                      {product.categories.join(" / ")}
                    </p>
                  </div>
                  <span className="font-serif text-lg font-bold text-foreground">
                    {product.price.toFixed(2)} €
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-sans line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
                <div className="pt-2">
                  <Link href={`/produkt/${product.slug}`}>
                    <Button className="w-full bg-foreground text-background hover:bg-accent border border-transparent font-sans uppercase tracking-wider text-xs py-5 rounded-none cursor-pointer">
                      Details ansehen
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über Marco Paul (Atelier-Story) */}
      <section className="py-24 bg-secondary/30 border-t border-b border-border/20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 aspect-[4/3] w-full overflow-hidden bg-muted border border-border/20">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663204918233/RmVrMvhzjQZmkmxT72yXgY/about_marco-nCboYM94a8hKaHaQi5Egtu.webp"
              alt="Marco Paul bei der Arbeit"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
              Der Kunsthandwerker
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Marco Paul & die Faszination Holz
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Seit vielen Jahren widme ich mich der Holzbearbeitung in Berlin-Köpenick. Das Drechseln ist für mich eine meditative Arbeit: Ein rotierender Holzstamm, ein scharfes Eisen und das langsame Freilegen der inneren, verborgenen Schönheit des Baumes. 
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Ich verarbeite keine standardisierte Importware, sondern märkische Edelhölzer mit Charakter – Risse, wilde Verwachsungen und markante Astwirbel sind für mich keine Makel, sondern die einzigartige Signatur der Natur, die ich in meinen Objekten konserviere.
            </p>
            <div className="flex items-center space-x-3 text-xs tracking-wider text-foreground font-sans uppercase font-semibold pt-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Werkstatt in Berlin-Köpenick (Besuche nach Absprache)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projektgalerie (Custom Post Type Teaser) */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
                Werkstatt-Chronik
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Besondere Projekte</h2>
            </div>
            <Link href="/projekte">
              <span className="text-sm tracking-wider uppercase font-sans font-semibold text-foreground hover:text-accent cursor-pointer flex items-center space-x-2 mt-4 md:mt-0">
                <span>Alle Projekte ansehen</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col space-y-4 border border-border/10 p-4 bg-card hover:border-border/40 transition-colors">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-background text-foreground text-[10px] tracking-widest uppercase font-sans px-3 py-1 border border-border/20">
                    Projekt {project.year}
                  </span>
                </div>
                <div className="flex flex-col space-y-2 pt-2">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground font-sans">
                    <span>Holzart: {project.woodType}</span>
                    <span>•</span>
                    <span>{project.dimensions}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-sans line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2">
                  <Link href={`/projekt/${project.slug}`}>
                    <span className="text-xs tracking-wider uppercase font-sans font-semibold text-foreground group-hover:text-accent cursor-pointer flex items-center space-x-1">
                      <span>Projektdetails & Entstehung</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
