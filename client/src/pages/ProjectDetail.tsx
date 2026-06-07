import React from "react";
import { useRoute, Link } from "wouter";
import Layout from "../components/Layout";
import { projects } from "../lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Hammer, Hourglass, Sparkles } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute("/projekt/:slug");

  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return (
      <Layout>
        <div className="container py-32 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="font-serif text-3xl font-black uppercase text-[#f8f8f7]">Projekt nicht gefunden</h1>
          <p className="text-xs text-[#a8a8a3] font-sans">Das gesuchte Projekt existiert leider nicht.</p>
          <Link href="/projekte">
            <Button className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none font-bold">
              Zurück zu den Projekten
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 bg-[#010101]">
        {/* Back-Link */}
        <Link href="/projekte">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-[#a8a8a3] hover:text-[#a3e635] cursor-pointer font-sans mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu den Projekten</span>
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Projektbilder & Galerie */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors relative group">
              <div className="absolute inset-0 border border-transparent group-hover:border-[#a3e635]/20 z-10 pointer-events-none transition-colors" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {project.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-[16/10] overflow-hidden bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors relative group">
                    <img
                      src={img}
                      alt={`${project.title} Entstehung ${idx + 1}`}
                      className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Projekt-Spezifikation (ACF Fields Voransicht) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 relative pl-6">
            {/* Feine grüne vertikale Akzentlinie links neben dem Info-Block */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#a3e635] opacity-60" />

            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-[#d40924] uppercase font-sans font-bold flex items-center gap-1.5">
                Projektchronik {project.year}
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block shadow-[0_0_6px_#a3e635]" />
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-black uppercase text-[#f8f8f7] leading-tight">
                {project.title}
              </h1>
              <div className="h-[1px] bg-[#2a2a28] w-full pt-2" />
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-xs tracking-widest uppercase font-bold font-serif text-[#f8f8f7]">
                Projektbeschreibung
              </h3>
              <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans font-light">
                {project.description}
              </p>
            </div>

            {/* ACF Meta-Box */}
            <div className="bg-[#11110f] p-6 border border-[#2a2a28] flex flex-col space-y-6 relative">
              {/* Feine grüne Akzentlinie am Tabellen-Panel */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#a3e635]/20" />
              <span className="text-xs tracking-widest uppercase font-bold font-serif block text-[#f8f8f7] border-b border-[#2a2a28] pb-3">
                Erweiterte Projekt-Details (ACF)
              </span>

              {/* ACF Feld 1: Holzart Detail */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#010101] border border-[#2a2a28] group-hover:border-[#a3e635]/40 mt-0.5 text-[#d40924] group-hover:text-[#a3e635] transition-colors">
                  <Sparkles className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-sans font-bold">Holz-Besonderheiten</span>
                  <p className="text-xs text-[#f8f8f7] font-sans">{project.acfFields.holzart_detail}</p>
                </div>
              </div>

              {/* ACF Feld 2: Herstellungsdauer */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#010101] border border-[#2a2a28] group-hover:border-[#a3e635]/40 mt-0.5 text-[#d40924] group-hover:text-[#a3e635] transition-colors">
                  <Hourglass className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-sans font-bold">Herstellungsdauer</span>
                  <p className="text-xs text-[#f8f8f7] font-sans">{project.acfFields.herstellungsdauer}</p>
                </div>
              </div>

              {/* ACF Feld 3: Besonderheiten */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#010101] border border-[#2a2a28] group-hover:border-[#a3e635]/40 mt-0.5 text-[#d40924] group-hover:text-[#a3e635] transition-colors">
                  <Hammer className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-[#a8a8a3] font-sans font-bold">Konstruktive Besonderheiten</span>
                  <p className="text-xs text-[#f8f8f7] font-sans">{project.acfFields.besonderheiten}</p>
                </div>
              </div>
            </div>

            {/* Standard Technische Daten */}
            <div className="border-t border-[#2a2a28] pt-6">
              <table className="w-full text-xs font-sans text-[#a8a8a3] space-y-2">
                <tbody>
                  <tr className="border-b border-[#2a2a28] py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Haupt-Holzart</td>
                    <td>{project.woodType}</td>
                  </tr>
                  <tr className="border-b border-[#2a2a28] py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Abmessungen</td>
                    <td>{project.dimensions}</td>
                  </tr>
                  <tr className="py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Oberflächenbehandlung</td>
                    <td>{project.surface}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
