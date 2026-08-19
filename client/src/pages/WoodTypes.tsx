import React from "react";
import Layout from "../components/Layout";
import { woodTypes } from "../lib/data";
import { Sparkles } from "lucide-react";

export default function WoodTypes() {
  return (
    <Layout>
      {/* Holzarten Header */}
      <section className="bg-[#11110f] border-b border-[#2a2a28] py-16 relative">
        {/* Feine grüne Akzentlinie am Header-Boden */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#008b1d]/30" />
        
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4 relative pl-4">
            {/* Feine grüne vertikale Linie links neben der Hauptüberschrift */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#008b1d]" />
            
            <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">
              WERKSTOFF-KUNDE
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black uppercase text-[#f8f8f7]">
              DAS HOLZARTEN-LEXIKON
            </h1>
            <p className="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
              Jede Holzart besitzt ihre eigenen physikalischen Eigenschaften, Farbtöne und Herausforderungen in der Bearbeitung. Bei MP Woodworking verarbeite ich charakterstarke Edelhölzer aus Berlin und Brandenburg. Lernen Sie hier die Seelen meiner bevorzugten Werkstoffe kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Holzarten Main */}
      <section className="py-20 bg-[#010101]">
        <div className="container flex flex-col space-y-20">
          {woodTypes.map((wood, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={wood.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#2a2a28] pb-16 last:border-0 relative ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Holz-Info links/rechts */}
                <div className={`lg:col-span-7 flex flex-col space-y-6 relative pl-6 ${isEven ? "" : "lg:order-2"}`}>
                  {/* Feine grüne vertikale Akzentlinie links neben dem Info-Block */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#008b1d] opacity-60" />

                  <div className="flex flex-col space-y-2">
                    <span className="text-xs italic text-[#d40924] font-sans font-bold tracking-wider flex items-center gap-1.5">
                      {wood.scientificName}
                      <span className="w-1 h-1 rounded-full bg-[#008b1d] inline-block shadow-[0_0_4px_#008b1d]" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-black uppercase text-[#f8f8f7]">{wood.name}</h2>
                  </div>

                  <p className="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
                    {wood.description}
                  </p>

                  {/* Merkmale / Eigenschaften */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {wood.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-[#f8f8f7] font-bold uppercase tracking-wider group">
                        <Sparkles className="w-4 h-4 text-[#d40924] group-hover:text-[#008b1d] stroke-[1.5] transition-colors" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Holz-Steckbrief rechts/links */}
                <div className={`lg:col-span-5 bg-[#11110f] p-8 border border-[#2a2a28] relative ${isEven ? "" : "lg:order-1"}`}>
                  {/* Feine grüne Akzentlinie am Tabellen-Panel */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#008b1d]/20" />
                  
                  <span className="text-xs tracking-widest uppercase font-bold font-serif block text-[#f8f8f7] border-b border-[#2a2a28] pb-4 mb-4">
                    Steckbrief: {wood.name}
                  </span>

                  <div className="flex flex-col space-y-4 font-sans text-xs text-[#a8a8a3]">
                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-[#f8f8f7] uppercase tracking-wider text-[10px] font-serif flex items-center gap-1.5">
                        Farbton & Reifung
                        <span className="w-1 h-1 rounded-full bg-[#008b1d] inline-block" />
                      </span>
                      <p className="font-light">{wood.color}</p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-[#f8f8f7] uppercase tracking-wider text-[10px] font-serif flex items-center gap-1.5">
                        Härte & Dichte
                        <span className="w-1 h-1 rounded-full bg-[#008b1d] inline-block" />
                      </span>
                      <p className="font-light">{wood.hardness}</p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-[#f8f8f7] uppercase tracking-wider text-[10px] font-serif flex items-center gap-1.5">
                        Herkunft
                        <span className="w-1 h-1 rounded-full bg-[#008b1d] inline-block" />
                      </span>
                      <p className="font-light">{wood.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
