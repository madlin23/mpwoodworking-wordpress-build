import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { projects } from "../lib/data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      {/* Projekte Header */}
      <section className="bg-[#11110f] border-b border-[#2a2a28] py-16 relative">
        {/* Feine grüne Akzentlinie am Header-Boden */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#a3e635]/30" />
        
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4 relative pl-4">
            {/* Feine grüne vertikale Linie links neben der Projekt-Hauptüberschrift */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#a3e635]" />
            
            <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">
              WERKSTATT-CHRONIK
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black uppercase text-[#f8f8f7]">
              PROJEKTE & UNIKATE
            </h1>
            <p className="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
              Neben meinen regelmäßigen Drechselarbeiten realisiere ich anspruchsvolle Möbelprojekte und maßgeschneiderte Unikate auf Kundenwunsch. Entdecken Sie hier die Entstehungsgeschichten und technischen Details ausgewählter Arbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Projekte Main */}
      <section className="py-20 bg-[#010101]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col space-y-4 border border-[#2a2a28] p-4 bg-[#11110f] hover:border-[#a3e635]/40 transition-colors relative">
                {/* Feine grüne Akzentlinie links neben dem Textblock bei Hover */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-[#a3e635] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#1a1a19] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 filter grayscale contrast-110 group-hover:grayscale-0"
                  />
                  <span className="absolute top-4 left-4 bg-[#010101] text-[#f8f8f7] text-[10px] tracking-widest uppercase font-sans px-3 py-1 border border-[#2a2a28]">
                    Jahr: {project.year}
                  </span>
                </div>
                <div className="flex flex-col space-y-2 pt-2">
                  <h3 className="font-serif text-2xl font-black uppercase text-[#f8f8f7] group-hover:text-[#a3e635] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-col space-y-1 text-xs text-[#a8a8a3] font-sans uppercase font-bold tracking-wider">
                    <span className="flex items-center gap-1.5">
                      Holzart: {project.woodType}
                      <span className="w-1 h-1 rounded-full bg-[#a3e635] inline-block" />
                    </span>
                    <span>Maße: {project.dimensions}</span>
                  </div>
                </div>
                <p className="text-xs text-[#a8a8a3] font-sans line-clamp-3 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="pt-2">
                  <Link href={`/projekt/${project.slug}`}>
                    <span className="text-xs tracking-wider uppercase font-sans font-bold text-[#f8f8f7] hover:text-[#a3e635] cursor-pointer flex items-center space-x-1 transition-colors">
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
