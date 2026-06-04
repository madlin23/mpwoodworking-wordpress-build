import React from "react";
import { useRoute, Link } from "wouter";
import Layout from "../components/Layout";
import { projects } from "../lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Hammer, Hourglass, Sparkles } from "lucide-react";

export default function ProjectDetail() {
  const [, params] = useRoute("/projekt/:slug");

  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return (
      <Layout>
        <div className="container py-32 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="font-serif text-3xl font-bold">Projekt nicht gefunden</h1>
          <p className="text-sm text-muted-foreground font-sans">Das gesuchte Projekt existiert leider nicht.</p>
          <Link href="/projekte">
            <Button className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none">
              Zurück zu den Projekten
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        {/* Back-Link */}
        <Link href="/projekte">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground cursor-pointer font-sans mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu den Projekten</span>
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Projektbilder & Galerie */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="aspect-[16/10] w-full overflow-hidden bg-muted border border-border/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {project.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-[16/10] overflow-hidden bg-muted border border-border/20">
                    <img
                      src={img}
                      alt={`${project.title} Entstehung ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Projekt-Spezifikation (ACF Fields Voransicht) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
                Projektchronik {project.year}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                {project.title}
              </h1>
              <div className="h-[1px] bg-border/40 w-full pt-2" />
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-xs tracking-widest uppercase font-bold font-sans text-foreground">
                Projektbeschreibung
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {project.description}
              </p>
            </div>

            {/* ACF Meta-Box */}
            <div className="bg-secondary/20 p-6 border border-border/20 flex flex-col space-y-6">
              <span className="text-xs tracking-widest uppercase font-bold font-sans block text-foreground border-b border-border/20 pb-3">
                Erweiterte Projekt-Details (ACF)
              </span>

              {/* ACF Feld 1: Holzart Detail */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-background border border-border/20 mt-0.5">
                  <Sparkles className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-sans font-bold">Holz-Besonderheiten</span>
                  <p className="text-xs text-foreground font-sans">{project.acfFields.holzart_detail}</p>
                </div>
              </div>

              {/* ACF Feld 2: Herstellungsdauer */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-background border border-border/20 mt-0.5">
                  <Hourglass className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-sans font-bold">Herstellungsdauer</span>
                  <p className="text-xs text-foreground font-sans">{project.acfFields.herstellungsdauer}</p>
                </div>
              </div>

              {/* ACF Feld 3: Besonderheiten */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-background border border-border/20 mt-0.5">
                  <Hammer className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-sans font-bold">Konstruktive Besonderheiten</span>
                  <p className="text-xs text-foreground font-sans">{project.acfFields.besonderheiten}</p>
                </div>
              </div>
            </div>

            {/* Standard Technische Daten */}
            <div className="border-t border-border/40 pt-6">
              <table className="w-full text-xs font-sans text-muted-foreground space-y-2">
                <tbody>
                  <tr className="border-b border-border/10 py-2 block">
                    <td className="font-bold text-foreground w-1/3">Haupt-Holzart</td>
                    <td>{project.woodType}</td>
                  </tr>
                  <tr className="border-b border-border/10 py-2 block">
                    <td className="font-bold text-foreground w-1/3">Abmessungen</td>
                    <td>{project.dimensions}</td>
                  </tr>
                  <tr className="py-2 block">
                    <td className="font-bold text-foreground w-1/3">Oberflächenbehandlung</td>
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
