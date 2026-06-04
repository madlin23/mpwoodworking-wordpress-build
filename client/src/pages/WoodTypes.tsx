import React from "react";
import Layout from "../components/Layout";
import { woodTypes } from "../lib/data";
import { Sparkles, Compass, Shield } from "lucide-react";

export default function WoodTypes() {
  return (
    <Layout>
      {/* Holzarten Header */}
      <section className="bg-secondary/20 border-b border-border/20 py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
              Werkstoff-Kunde
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Das Holzarten-Lexikon</h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Jede Holzart besitzt ihre eigenen physikalischen Eigenschaften, Farbtöne und Herausforderungen in der Bearbeitung. Bei MP Woodworking verarbeite ich charakterstarke Edelhölzer aus Berlin und Brandenburg. Lernen Sie hier die Seelen meiner bevorzugten Werkstoffe kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Holzarten Main */}
      <section className="py-20">
        <div className="container flex flex-col space-y-20">
          {woodTypes.map((wood, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={wood.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-border/20 pb-16 last:border-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Holz-Info links/rechts */}
                <div className={`lg:col-span-7 flex flex-col space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs italic text-accent font-sans font-semibold tracking-wider">
                      {wood.scientificName}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">{wood.name}</h2>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                    {wood.description}
                  </p>

                  {/* Merkmale / Eigenschaften */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {wood.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-foreground">
                        <Sparkles className="w-4 h-4 text-accent stroke-[1.5]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Holz-Steckbrief rechts/links */}
                <div className={`lg:col-span-5 bg-secondary/10 p-8 border border-border/20 ${isEven ? "" : "lg:order-1"}`}>
                  <span className="text-xs tracking-widest uppercase font-bold font-sans block text-foreground border-b border-border/20 pb-4 mb-4">
                    Steckbrief: {wood.name}
                  </span>

                  <div className="flex flex-col space-y-4 font-sans text-xs text-muted-foreground">
                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">Farbton & Reifung</span>
                      <p>{wood.color}</p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">Härte & Dichte</span>
                      <p>{wood.hardness}</p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">Herkunft</span>
                      <p>{wood.origin}</p>
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
