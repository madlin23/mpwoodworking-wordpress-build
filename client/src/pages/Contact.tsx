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
      <section className="bg-[#11110f] border-b border-[#2a2a28] py-16">
        <div className="container">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-xs tracking-[0.3em] text-[#d40924] uppercase font-black">
              IN VERBINDUNG TRETEN
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black uppercase text-[#f8f8f7]">
              KONTAKT & ANFRAGEN
            </h1>
            <p className="text-xs md:text-sm text-[#a8a8a3] leading-relaxed font-sans font-light">
              Sie interessieren sich für ein ausverkauftes Unikat, wünschen eine Maßanfertigung (z.B. einen individuellen Tisch oder ein spezielles Drechselobjekt) oder möchten meine Werkstatt in Berlin-Köpenick besuchen? Schreiben Sie mir gern eine Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Main */}
      <section className="py-20 bg-[#010101]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Kontaktdaten */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-widest uppercase font-bold font-serif text-[#d40924]">
                ATELIER MARCO PAUL
              </span>
              <h2 className="text-3xl font-serif font-black uppercase text-[#f8f8f7]">DIE WERKSTATT IN KÖPENICK</h2>
              <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans font-light">
                Ich arbeite konzentriert an meinen Holzobjekten. Besuche in der Werkstatt sind daher ausschließlich nach vorheriger Terminvereinbarung möglich.
              </p>
            </div>

            {/* Daten-Liste */}
            <div className="flex flex-col space-y-6 font-sans text-xs text-[#a8a8a3]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#11110f] border border-[#2a2a28] mt-1 text-[#d40924]">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-[#f8f8f7] text-xs uppercase tracking-wider font-serif">Adresse</span>
                  <p className="font-light">Berlin-Köpenick (Genaue Anschrift bei Terminvereinbarung)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#11110f] border border-[#2a2a28] mt-1 text-[#d40924]">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-[#f8f8f7] text-xs uppercase tracking-wider font-serif">E-Mail</span>
                  <p className="font-light">info@mpwoodworking.de</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#11110f] border border-[#2a2a28] mt-1 text-[#d40924]">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-[#f8f8f7] text-xs uppercase tracking-wider font-serif">Telefon</span>
                  <p className="font-light">+49 (0) 30 123 456 78 (Nachricht hinterlassen)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#11110f] border border-[#2a2a28] mt-1 text-[#d40924]">
                  <Clock className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-[#f8f8f7] text-xs uppercase tracking-wider font-serif">Besuchszeiten</span>
                  <p className="font-light">Montag – Samstag: Flexibel nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="lg:col-span-7 bg-[#11110f] border border-[#2a2a28] p-8 lg:p-12">
            <h3 className="font-serif text-3xl font-black uppercase text-[#f8f8f7] mb-6">Nachricht senden</h3>

            <form onSubmit={handleSubmit} className="space-y-6 font-sans text-xs text-[#a8a8a3]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Ihr Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#010101] text-[#f8f8f7] focus:border-[#d40924] focus:outline-none rounded-none"
                    placeholder="z.B. Marco Paul"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Ihre E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#010101] text-[#f8f8f7] focus:border-[#d40924] focus:outline-none rounded-none"
                    placeholder="z.B. name@beispiel.de"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Betreff / Anliegen</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-[#2a2a28] p-3 bg-[#010101] text-[#f8f8f7] focus:border-[#d40924] focus:outline-none cursor-pointer rounded-none"
                >
                  <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                  <option value="Preisanfrage Maßanfertigung">Preisanfrage Maßanfertigung (Tisch, Möbel)</option>
                  <option value="Anfrage Drechselobjekt">Anfrage Drechselobjekt (Schale, Mühle)</option>
                  <option value="Werkstattbesuch">Termin für Werkstattbesuch</option>
                </select>
              </div>

              {formData.subject === "Preisanfrage Maßanfertigung" && (
                <div className="flex flex-col space-y-2 animate-in fade-in duration-300">
                  <label htmlFor="woodType" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Gewünschte Holzart</label>
                  <select
                    id="woodType"
                    name="woodType"
                    value={formData.woodType}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#010101] text-[#f8f8f7] focus:border-[#d40924] focus:outline-none cursor-pointer rounded-none"
                  >
                    <option value="Eiche">Märkische Eiche</option>
                    <option value="Walnuss">Edle Walnuss</option>
                    <option value="Zwetschge">Farbintensive Zwetschge (Pflaume)</option>
                    <option value="Eibe">Seltene Eibe (Spezial-Anfrage)</option>
                  </select>
                </div>
              )}

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-[#2a2a28] p-3 bg-[#010101] text-[#f8f8f7] focus:border-[#d40924] focus:outline-none resize-none rounded-none"
                  placeholder="Beschreiben Sie Ihre Wünsche oder Fragen so detailliert wie möglich..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2 font-bold"
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
