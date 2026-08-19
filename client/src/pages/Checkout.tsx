import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import Layout from "../components/Layout";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle, ShieldCheck } from "lucide-react";

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { items, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    zip: "",
    email: "",
    payment: "bank",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrdered(true);
      toast.success("Bestellung erfolgreich eingegangen!");
    }, 1500);
  };

  if (isOrdered) {
    return (
      <Layout>
        <div className="container py-24 text-center flex flex-col items-center justify-center space-y-6 max-w-lg bg-[#010101] relative">
          {/* Feiner grüner Akzentpunkt */}
          <div className="absolute top-12 w-2 h-2 rounded-full bg-[#008b1d] shadow-[0_0_6px_#008b1d]"></div>
          
          <div className="p-4 bg-[#d40924]/10 border border-[#d40924]/20 text-[#d40924] group hover:border-[#008b1d]/30 hover:text-[#008b1d] transition-all">
            <CheckCircle className="w-12 h-12 stroke-[1.5]" />
          </div>
          <h1 className="font-serif text-3xl font-black uppercase text-[#f8f8f7]">Vielen Dank für Ihre Bestellung!</h1>
          <p className="text-xs text-[#a8a8a3] font-sans leading-relaxed font-light">
            Ihre Bestellung ist erfolgreich bei MP Woodworking eingegangen. Da es sich um exklusive Unikate handelt, prüfen wir kurz den Lagerbestand und senden Ihnen in Kürze eine persönliche Bestätigung sowie die Rechnung zur Vorkasse per E-Mail zu.
          </p>
          <Button
            onClick={() => {
              clearCart();
              setLocation("/");
            }}
            className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] border border-transparent font-sans uppercase tracking-wider text-xs py-4 px-8 rounded-none cursor-pointer font-bold transition-all hover:shadow-[0_0_15px_rgba(0, 139, 29, 0.3)] hover:border-[#008b1d]/40"
          >
            Zurück zur Startseite
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-16 bg-[#010101]">
        {/* Back-Link */}
        <Link href="/warenkorb">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-[#a8a8a3] hover:text-[#008b1d] cursor-pointer font-sans mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zum Warenkorb</span>
          </span>
        </Link>

        <div className="relative pl-4 mb-12">
          {/* Feine grüne vertikale Linie links neben der Hauptüberschrift */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#008b1d]" />
          <h1 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#f8f8f7] flex items-center gap-2">
            Kasse
            <span className="w-2 h-2 rounded-full bg-[#008b1d] inline-block shadow-[0_0_6px_#008b1d]"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Rechnungsdetails */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-black uppercase text-[#f8f8f7] mb-6 flex items-center gap-2">
              Rechnungs- & Lieferadresse
              <span className="w-1.5 h-1.5 rounded-full bg-[#008b1d]/40 inline-block"></span>
            </h3>

            <form onSubmit={handleOrder} className="space-y-6 font-sans text-xs text-[#a8a8a3]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstname" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Vorname *</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lastname" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Nachname *</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="street" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Straße und Hausnummer *</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  value={formData.street}
                  onChange={handleChange}
                  className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2 flex flex-col space-y-2">
                  <label htmlFor="city" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Stadt *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="zip" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">PLZ *</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">E-Mail-Adresse *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none rounded-none transition-colors"
                />
              </div>

              <div className="flex flex-col space-y-2 pt-4 border-t border-[#2a2a28]">
                <label htmlFor="payment" className="text-[10px] uppercase tracking-wider font-bold text-[#a8a8a3]">Zahlungsart</label>
                <select
                  id="payment"
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className="border border-[#2a2a28] p-3 bg-[#11110f] text-[#f8f8f7] focus:border-[#008b1d] focus:outline-none cursor-pointer rounded-none transition-colors"
                >
                  <option value="bank">Überweisung / Vorkasse</option>
                  <option value="paypal">PayPal (Demo-Simulation)</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2 font-bold transition-all hover:shadow-[0_0_15px_rgba(0, 139, 29, 0.3)] hover:border-[#008b1d]/40"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isSubmitting ? "Wird verarbeitet..." : `Zahlungspflichtig bestellen (${cartTotal.toFixed(2)} €)`}</span>
              </Button>
            </form>
          </div>

          {/* Bestellübersicht rechts */}
          <div className="lg:col-span-5 bg-[#11110f] p-6 border border-[#2a2a28] hover:border-[#008b1d]/20 transition-colors flex flex-col space-y-6 h-fit relative group">
            {/* Feiner grüner Glimm-Streifen */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#008b1d]/0 group-hover:bg-[#008b1d]/30 transition-colors" />

            <span className="text-xs tracking-widest uppercase font-bold font-serif block text-[#f8f8f7] border-b border-[#2a2a28] pb-4 flex items-center gap-1.5">
              Ihre Bestellung
              <span className="w-1.5 h-1.5 rounded-full bg-[#008b1d] inline-block shadow-[0_0_4px_#008b1d]"></span>
            </span>

            <div className="flex flex-col space-y-4 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-xs font-sans text-[#a8a8a3]">
                  <div className="flex flex-col space-y-1">
                    <span className="font-serif font-bold text-[#f8f8f7] uppercase hover:text-[#008b1d] transition-colors">{item.product.title}</span>
                    <span>Menge: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-[#d40924] flex items-center gap-1">
                    {(item.product.price * item.quantity).toFixed(2)} €
                    <span className="w-1 h-1 rounded-full bg-[#008b1d] inline-block shadow-[0_0_3px_#008b1d]" />
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2a2a28] pt-4 flex flex-col space-y-2 font-sans text-xs text-[#a8a8a3]">
              <div className="flex justify-between">
                <span>Zwischensumme</span>
                <span className="text-[#f8f8f7] font-bold">{cartTotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span>Versand</span>
                <span className="text-[#008b1d] font-bold uppercase tracking-wider text-[10px]">Kostenlos</span>
              </div>
              <div className="border-t border-[#2a2a28] pt-4 flex justify-between font-serif text-xl font-black uppercase text-[#f8f8f7]">
                <span>Gesamtsumme</span>
                <span className="text-[#d40924] flex items-center gap-1">
                  {cartTotal.toFixed(2)} €
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008b1d] inline-block shadow-[0_0_4px_#008b1d]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
