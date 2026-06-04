import { Link } from "wouter";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <div className="container py-32 text-center flex flex-col items-center justify-center space-y-6">
        <span className="text-xs tracking-[0.3em] text-accent uppercase font-sans font-semibold">
          Fehler 404
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold">Weg vom Pfad</h1>
        <p className="text-sm text-muted-foreground font-sans max-w-md leading-relaxed">
          Diese Seite wurde wohl wie Hobelspäne weggefegt. Lassen Sie uns zurück in die Werkstatt kehren, um schöne Holzobjekte zu betrachten.
        </p>
        <Link href="/">
          <Button className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-8 rounded-none cursor-pointer">
            Zurück zum Atelier
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
