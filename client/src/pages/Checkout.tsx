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
        <div className="container py-24 text-center flex flex-col items-center justify-center space-y-6 max-w-lg">
          <div className="p-4 bg-accent/10 rounded-none text-accent">
            <CheckCircle className="w-12 h-12 stroke-[1.5]" />
          </div>
          <h1 className="font-serif text-3xl font-bold">Vielen Dank für Ihre Bestellung!</h1>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            Ihre Bestellung ist erfolgreich bei MP Woodworking eingegangen. Da es sich um exklusive Unikate handelt, prüfen wir kurz den Lagerbestand und senden Ihnen in Kürze eine persönliche Bestätigung sowie die Rechnung zur Vorkasse per E-Mail zu.
          </p>
          <Button
            onClick={() => {
              clearCart();
              setLocation("/");
            }}
            className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-8 rounded-none cursor-pointer"
          >
            Zurück zur Startseite
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-16">
        {/* Back-Link */}
        <Link href="/warenkorb">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground cursor-pointer font-sans mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Warenkorb</span>
          </span>
        </Link>

        <h1 className="font-serif text-3xl font-bold mb-12">Kasse</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Rechnungsdetails */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-xl font-bold mb-6">Rechnungs- & Lieferadresse</h3>

            <form onSubmit={handleOrder} className="space-y-6 font-sans text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstname" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Vorname *</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lastname" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Nachname *</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="street" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Straße und Hausnummer *</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  value={formData.street}
                  onChange={handleChange}
                  className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2 flex flex-col space-y-2">
                  <label htmlFor="city" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Stadt *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="zip" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">PLZ *</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">E-Mail-Adresse *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-2 pt-4 border-t border-border/20">
                <label htmlFor="payment" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Zahlungsart</label>
                <select
                  id="payment"
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className="border border-border/40 p-3 bg-background focus:border-accent focus:outline-none cursor-pointer"
                >
                  <option value="bank">Überweisung / Vorkasse</option>
                  <option value="paypal">PayPal (Demo-Simulation)</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full bg-foreground text-background hover:bg-accent border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{isSubmitting ? "Wird verarbeitet..." : `Zahlungspflichtig bestellen (${cartTotal.toFixed(2)} €)`}</span>
              </Button>
            </form>
          </div>

          {/* Bestellübersicht rechts */}
          <div className="lg:col-span-5 bg-secondary/10 p-6 border border-border/20 flex flex-col space-y-6 h-fit">
            <span className="text-xs tracking-widest uppercase font-bold font-sans block text-foreground border-b border-border/20 pb-4">
              Ihre Bestellung
            </span>

            <div className="flex flex-col space-y-4 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-xs font-sans">
                  <div className="flex flex-col space-y-1">
                    <span className="font-serif font-bold text-foreground">{item.product.title}</span>
                    <span className="text-muted-foreground">Menge: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-foreground">{(item.product.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/20 pt-4 flex flex-col space-y-2 font-sans text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Zwischensumme</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Versand</span>
                <span className="text-accent font-semibold">Kostenlos</span>
              </div>
              <div className="border-t border-border/20 pt-4 flex justify-between font-serif text-base font-bold text-foreground">
                <span>Gesamtsumme</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
