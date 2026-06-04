import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Clock, Hammer } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Allgemeine Anfrage",
    woodType: "Eiche",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Vielen Dank! Ihre Anfrage wurde erfolgreich an Marco Paul übermittelt. Ich melde mich zeitnah bei Ihnen.");
      setFormData({
        name: "",
        email: "",
        subject: "Allgemeine Anfrage",
        woodType: "Eiche",
        message: "",
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Kontakt Header */}
      <section className="bg-secondary/20 border-b border-border/20 py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
              In Verbindung treten
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Kontakt & Anfragen</h1>
            <p className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
              Sie interessieren sich für ein ausverkauftes Unikat, wünschen eine Maßanfertigung (z.B. einen individuellen Tisch oder ein spezielles Drechselobjekt) oder möchten meine Werkstatt in Berlin-Köpenick besuchen? Schreiben Sie mir gern eine Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Main */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Kontaktdaten */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-widest uppercase font-bold font-sans text-foreground">
                Atelier Marco Paul
              </span>
              <h2 className="text-2xl font-serif font-bold">Die Werkstatt in Köpenick</h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Ich arbeite konzentriert an meinen Holzobjekten. Besuche in der Werkstatt sind daher ausschließlich nach vorheriger Terminvereinbarung möglich.
              </p>
            </div>

            {/* Daten-Liste */}
            <div className="flex flex-col space-y-6 font-sans text-sm text-muted-foreground">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/30 border border-border/20 mt-1">
                  <MapPin className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-foreground text-xs uppercase tracking-wider">Adresse</span>
                  <p>Berlin-Köpenick (Genaue Anschrift bei Terminvereinbarung)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/30 border border-border/20 mt-1">
                  <Mail className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-foreground text-xs uppercase tracking-wider">E-Mail</span>
                  <p>info@mpwoodworking.de</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/30 border border-border/20 mt-1">
                  <Phone className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-foreground text-xs uppercase tracking-wider">Telefon</span>
                  <p>+49 (0) 30 123 456 78 (Nachricht hinterlassen)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/30 border border-border/20 mt-1">
                  <Clock className="w-4 h-4 text-accent stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-foreground text-xs uppercase tracking-wider">Besuchszeiten</span>
                  <p>Montag – Samstag: Flexibel nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="lg:col-span-7 bg-card border border-border/20 p-8 lg:p-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Nachricht senden</h3>

            <form onSubmit={handleSubmit} className="space-y-6 font-sans text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Ihr Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                    placeholder="z.B. Marco Paul"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Ihre E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                    placeholder="z.B. name@beispiel.de"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Betreff / Anliegen</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none cursor-pointer"
                >
                  <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                  <option value="Preisanfrage Maßanfertigung">Preisanfrage Maßanfertigung (Tisch, Möbel)</option>
                  <option value="Anfrage Drechselobjekt">Anfrage Drechselobjekt (Schale, Mühle)</option>
                  <option value="Werkstattbesuch">Termin für Werkstattbesuch</option>
                </select>
              </div>

              {formData.subject === "Preisanfrage Maßanfertigung" && (
                <div className="flex flex-col space-y-2 animate-in fade-in duration-300">
                  <label htmlFor="woodType" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Gewünschte Holzart</label>
                  <select
                    id="woodType"
                    name="woodType"
                    value={formData.woodType}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none cursor-pointer"
                  >
                    <option value="Eiche">Märkische Eiche</option>
                    <option value="Walnuss">Edle Walnuss</option>
                    <option value="Zwetschge">Farbintensive Zwetschge (Pflaume)</option>
                    <option value="Eibe">Seltene Eibe (Spezial-Anfrage)</option>
                  </select>
                </div>
              )}

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none resize-none"
                  placeholder="Beschreiben Sie Ihre Wünsche oder Fragen so detailliert wie möglich..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-accent border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2"
              >
                <Hammer className="w-4 h-4" />
                <span>{isSubmitting ? "Wird gesendet..." : "Anfrage senden"}</span>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
