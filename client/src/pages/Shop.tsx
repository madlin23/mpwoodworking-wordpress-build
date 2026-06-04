import React, { useState } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { products } from "../lib/data";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [selectedWood, setSelectedWood] = useState<string>("Alle");

  // Kategorien extrahieren
  const categories = ["Alle", ...Array.from(new Set(products.flatMap((p) => p.categories)))];
  
  // Holzarten extrahieren
  const woodTypes = ["Alle", ...Array.from(new Set(products.map((p) => p.woodType.split(" & ")[0])))];

  // Produkte filtern
  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "Alle" || product.categories.includes(selectedCategory);
    const woodMatch = selectedWood === "Alle" || product.woodType.includes(selectedWood);
    return categoryMatch && woodMatch;
  });

  return (
    <Layout>
      {/* Shop Header */}
      <section className="bg-secondary/20 border-b border-border/20 py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
              Echte Einzelstücke
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Der Unikat-Shop</h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Hier finden Sie meine aktuell verfügbaren, handgedrechselten Arbeiten. Da jedes Stück aus einem anderen Stamm gefertigt wird, gibt es jedes Produkt exakt einmal. Ist ein Unikat verkauft, ist es dauerhaft vergriffen.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Main */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Filter (Desktop) */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <div className="flex items-center space-x-2 pb-4 border-b border-border/40">
              <SlidersHorizontal className="w-4 h-4 text-accent" />
              <span className="font-sans text-xs tracking-widest uppercase font-bold">Filter</span>
            </div>

            {/* Kategorien */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-wider uppercase text-muted-foreground font-sans font-semibold">Kategorie</span>
              <div className="flex flex-col space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm font-sans py-1 hover:text-foreground transition-colors ${
                      selectedCategory === cat ? "text-foreground font-bold pl-2 border-l border-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Holzarten */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-wider uppercase text-muted-foreground font-sans font-semibold">Holzart</span>
              <div className="flex flex-col space-y-1.5">
                {woodTypes.map((wood) => (
                  <button
                    key={wood}
                    onClick={() => setSelectedWood(wood)}
                    className={`text-left text-sm font-sans py-1 hover:text-foreground transition-colors ${
                      selectedWood === wood ? "text-foreground font-bold pl-2 border-l border-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {wood}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Produkt-Raster */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border/40 flex flex-col items-center justify-center space-y-4">
                <span className="font-serif text-xl text-muted-foreground">Keine Unikate gefunden</span>
                <p className="text-xs text-muted-foreground font-sans">Versuchen Sie andere Filtereinstellungen.</p>
                <Button
                  onClick={() => { setSelectedCategory("Alle"); setSelectedWood("Alle"); }}
                  className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none cursor-pointer"
                >
                  Filter zurücksetzen
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
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
                      {product.stock === 1 && (
                        <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-[9px] tracking-widest uppercase font-sans px-2.5 py-1">
                          Letztes Stück
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start pt-2">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-serif text-lg font-bold group-hover:text-accent transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-sans">
                          {product.categories.join(" / ")}
                        </p>
                      </div>
                      <span className="font-serif text-base font-bold text-foreground">
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
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
