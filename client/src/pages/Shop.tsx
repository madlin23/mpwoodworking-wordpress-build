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
      <section className="bg-[#11110f] border-b border-[#2a2a28] py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">
              UNIKATE DIREKT AUS BERLIN
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black uppercase text-[#f8f8f7]">
              DER UNIKAT-SHOP
            </h1>
            <p className="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
              Hier finden Sie meine aktuell verfügbaren, handgedrechselten Arbeiten. Da jedes Stück aus einem anderen Stamm gefertigt wird, gibt es jedes Produkt exakt einmal. Ist ein Unikat verkauft, ist es dauerhaft vergriffen.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Main */}
      <section className="py-20 bg-[#010101]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Filter (Desktop) */}
          <div className="lg:col-span-3 flex flex-col space-y-8 bg-[#11110f] p-6 border border-[#2a2a28] h-fit">
            <div className="flex items-center space-x-2 pb-4 border-b border-[#2a2a28]">
              <SlidersHorizontal className="w-4 h-4 text-[#d40924]" />
              <span className="font-serif text-xs tracking-widest uppercase font-black text-[#f8f8f7]">Filter</span>
            </div>

            {/* Kategorien */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-wider uppercase text-[#a8a8a3] font-sans font-bold">Kategorie</span>
              <div className="flex flex-col space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm font-sans py-1 hover:text-[#d40924] transition-colors cursor-pointer ${
                      selectedCategory === cat ? "text-[#d40924] font-bold pl-2 border-l border-[#d40924]" : "text-[#a8a8a3]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Holzarten */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-wider uppercase text-[#a8a8a3] font-sans font-bold">Holzart</span>
              <div className="flex flex-col space-y-1.5">
                {woodTypes.map((wood) => (
                  <button
                    key={wood}
                    onClick={() => setSelectedWood(wood)}
                    className={`text-left text-sm font-sans py-1 hover:text-[#d40924] transition-colors cursor-pointer ${
                      selectedWood === wood ? "text-[#d40924] font-bold pl-2 border-l border-[#d40924]" : "text-[#a8a8a3]"
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
              <div className="text-center py-20 border border-dashed border-[#2a2a28] bg-[#11110f] flex flex-col items-center justify-center space-y-4">
                <span className="font-serif text-xl text-[#a8a8a3] uppercase">Keine Unikate gefunden</span>
                <p className="text-xs text-[#a8a8a3] font-sans">Versuchen Sie andere Filtereinstellungen.</p>
                <Button
                  onClick={() => { setSelectedCategory("Alle"); setSelectedWood("Alle"); }}
                  className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none cursor-pointer font-bold"
                >
                  Filter zurücksetzen
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col space-y-4 border border-[#2a2a28] p-4 hover:border-[#d40924] transition-colors bg-[#11110f]">
                    <div className="aspect-square w-full overflow-hidden bg-[#1a1a19] relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-110 group-hover:grayscale-0"
                      />
                      <span className="absolute top-4 left-4 bg-[#010101] text-[#f8f8f7] text-[10px] tracking-widest uppercase font-sans px-3 py-1 border border-[#2a2a28]">
                        {product.woodType}
                      </span>
                      {product.stock === 1 && (
                        <span className="absolute top-4 right-4 bg-[#d40924] text-[#f8f8f7] text-[9px] tracking-widest uppercase font-sans px-2.5 py-1 font-bold">
                          Letztes Stück
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start pt-2">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-serif text-2xl font-black uppercase text-[#f8f8f7] group-hover:text-[#d40924] transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-xs text-[#a8a8a3] font-sans uppercase font-bold tracking-wider">
                          {product.categories.join(" / ")}
                        </p>
                      </div>
                      <span className="font-serif text-xl font-bold text-[#d40924]">
                        {product.price.toFixed(2)} €
                      </span>
                    </div>
                    <p className="text-xs text-[#a8a8a3] font-sans line-clamp-2 leading-relaxed font-light">
                      {product.shortDescription}
                    </p>
                    <div className="pt-2">
                      <Link href={`/produkt/${product.slug}`}>
                        <Button className="w-full bg-[#1a1a19] hover:bg-[#d40924] text-[#f8f8f7] border border-[#2a2a28] hover:border-transparent font-sans uppercase tracking-wider text-xs py-5 rounded-none cursor-pointer font-bold">
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
