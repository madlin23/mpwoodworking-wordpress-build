import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-12">Ihr Warenkorb</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/40 flex flex-col items-center justify-center space-y-4 bg-card">
            <div className="p-4 bg-secondary/20 rounded-none">
              <ShoppingBag className="w-8 h-8 text-muted-foreground stroke-[1.5]" />
            </div>
            <h2 className="font-serif text-xl text-muted-foreground">Ihr Warenkorb ist leer</h2>
            <p className="text-xs text-muted-foreground font-sans">Entdecken Sie handgefertigte Unikate in unserem Sortiment.</p>
            <Link href="/shop">
              <Button className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none cursor-pointer mt-2">
                Zum Shop
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Artikel-Liste */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-border/20 bg-card gap-4"
                >
                  {/* Bild & Titel */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted overflow-hidden border border-border/20 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link href={`/produkt/${item.product.slug}`}>
                        <span className="font-serif text-base font-bold hover:text-accent cursor-pointer">
                          {item.product.title}
                        </span>
                      </Link>
                      <span className="text-xs text-muted-foreground font-sans mt-0.5">
                        Holzart: {item.product.woodType}
                      </span>
                    </div>
                  </div>

                  {/* Anzahl & Preis */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8 border-t sm:border-t-0 pt-4 sm:pt-0">
                    {/* Mengenauswahl */}
                    <div className="flex items-center border border-border/40 bg-background">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-muted transition-colors font-sans text-xs"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-sans text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-muted transition-colors font-sans text-xs"
                      >
                        +
                      </button>
                    </div>

                    {/* Preis */}
                    <span className="font-serif text-base font-bold text-foreground w-20 text-right">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </span>

                    {/* Löschen */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Artikel löschen"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Zusammenfassung */}
            <div className="lg:col-span-4 bg-secondary/10 p-6 border border-border/20 flex flex-col space-y-6 h-fit">
              <span className="text-xs tracking-widest uppercase font-bold font-sans block text-foreground border-b border-border/20 pb-4">
                Bestellübersicht
              </span>

              <div className="flex flex-col space-y-3 font-sans text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Zwischensumme</span>
                  <span className="text-foreground">{cartTotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Versandkosten</span>
                  <span className="text-accent font-semibold">Kostenlos</span>
                </div>
                <div className="border-t border-border/20 pt-4 flex justify-between font-serif text-lg font-bold text-foreground">
                  <span>Gesamtsumme</span>
                  <span>{cartTotal.toFixed(2)} €</span>
                </div>
                <span className="text-[10px] text-muted-foreground mt-1">
                  inkl. gesetzlicher MwSt. (Kleinunternehmerregelung nach § 19 UStG).
                </span>
              </div>

              <Link href="/kasse">
                <Button className="w-full bg-foreground text-background hover:bg-accent border border-transparent font-sans uppercase tracking-wider text-xs py-5 rounded-none cursor-pointer flex items-center justify-center space-x-2">
                  <span>Zur Kasse</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
