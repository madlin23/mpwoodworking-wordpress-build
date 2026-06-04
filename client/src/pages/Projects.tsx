import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { projects } from "../lib/data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <Layout>
      {/* Projekte Header */}
      <section className="bg-secondary/20 border-b border-border/20 py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
              Werkstatt-Chronik
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Projekte & Maßanfertigungen</h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Neben meinen regelmäßigen Drechselarbeiten realisiere ich anspruchsvolle Möbelprojekte und maßgeschneiderte Unikate auf Kundenwunsch. Entdecken Sie hier die Entstehungsgeschichten und technischen Details ausgewählter Arbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Projekte Main */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col space-y-4 border border-border/10 p-4 bg-card hover:border-border/40 transition-colors">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-background text-foreground text-[10px] tracking-widest uppercase font-sans px-3 py-1 border border-border/20">
                    Jahr: {project.year}
                  </span>
                </div>
                <div className="flex flex-col space-y-2 pt-2">
                  <h3 className="font-serif text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-col space-y-1 text-xs text-muted-foreground font-sans">
                    <span>Holzart: {project.woodType}</span>
                    <span>Maße: {project.dimensions}</span>
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
