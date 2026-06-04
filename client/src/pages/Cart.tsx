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
      <div className="container py-16 bg-[#010101]">
        <h1 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#f8f8f7] mb-12">Ihr Warenkorb</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#2a2a28] flex flex-col items-center justify-center space-y-4 bg-[#11110f]">
            <div className="p-4 bg-[#1a1a19] text-[#d40924]">
              <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h2 className="font-serif text-2xl font-black uppercase text-[#f8f8f7]">Ihr Warenkorb ist leer</h2>
            <p className="text-xs text-[#a8a8a3] font-sans">Entdecken Sie handgefertigte Unikate in unserem Sortiment.</p>
            <Link href="/shop">
              <Button className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none cursor-pointer mt-2 font-bold">
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
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-[#2a2a28] bg-[#11110f] gap-4"
                >
                  {/* Bild & Titel */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#1a1a19] overflow-hidden border border-[#2a2a28] flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover object-center filter grayscale contrast-110"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link href={`/produkt/${item.product.slug}`}>
                        <span className="font-serif text-xl font-black uppercase hover:text-[#d40924] cursor-pointer text-[#f8f8f7] transition-colors">
                          {item.product.title}
                        </span>
                      </Link>
                      <span className="text-xs text-[#a8a8a3] font-sans uppercase font-bold tracking-wider mt-0.5">
                        Holzart: {item.product.woodType}
                      </span>
                    </div>
                  </div>

                  {/* Anzahl & Preis */}
                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-8 border-t sm:border-t-0 border-[#2a2a28] pt-4 sm:pt-0">
                    {/* Mengenauswahl */}
                    <div className="flex items-center border border-[#2a2a28] bg-[#010101]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-[#1a1a19] transition-colors font-sans text-xs text-[#f8f8f7]"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-sans text-xs font-bold text-[#f8f8f7]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-[#1a1a19] transition-colors font-sans text-xs text-[#f8f8f7]"
                      >
                        +
                      </button>
                    </div>

                    {/* Preis */}
                    <span className="font-serif text-xl font-bold text-[#d40924] w-24 text-right">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </span>

                    {/* Löschen */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 hover:bg-[#d40924]/10 text-[#a8a8a3] hover:text-[#d40924] transition-colors cursor-pointer"
                      aria-label="Artikel löschen"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Zusammenfassung */}
            <div className="lg:col-span-4 bg-[#11110f] p-6 border border-[#2a2a28] flex flex-col space-y-6 h-fit">
              <span className="text-xs tracking-widest uppercase font-bold font-serif block text-[#f8f8f7] border-b border-[#2a2a28] pb-4">
                Bestellübersicht
              </span>

              <div className="flex flex-col space-y-3 font-sans text-xs text-[#a8a8a3]">
                <div className="flex justify-between">
                  <span>Zwischensumme</span>
                  <span className="text-[#f8f8f7] font-bold">{cartTotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Versandkosten</span>
                  <span className="text-[#d40924] font-bold">Kostenlos</span>
                </div>
                <div className="border-t border-[#2a2a28] pt-4 flex justify-between font-serif text-xl font-black uppercase text-[#f8f8f7]">
                  <span>Gesamtsumme</span>
                  <span className="text-[#d40924]">{cartTotal.toFixed(2)} €</span>
                </div>
                <span className="text-[10px] text-[#a8a8a3] mt-1 leading-relaxed">
                  inkl. gesetzlicher MwSt. (Kleinunternehmerregelung nach § 19 UStG).
                </span>
              </div>

              <Link href="/kasse">
                <Button className="w-full bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] border border-transparent font-sans uppercase tracking-wider text-xs py-5 rounded-none cursor-pointer flex items-center justify-center space-x-2 font-bold">
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
