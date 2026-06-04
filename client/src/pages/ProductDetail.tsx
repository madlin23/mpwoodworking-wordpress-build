import React, { useState } from "react";
import { useRoute, Link, useLocation } from "wouter";
import Layout from "../components/Layout";
import { products } from "../lib/data";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Truck, RefreshCw, ShoppingBag } from "lucide-react";

export default function ProductDetail() {
  const [, params] = useRoute("/produkt/:slug");
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-32 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="font-serif text-3xl font-bold">Produkt nicht gefunden</h1>
          <p className="text-sm text-muted-foreground font-sans">Das gesuchte Unikat existiert nicht oder wurde bereits verkauft.</p>
          <Link href="/shop">
            <Button className="bg-foreground text-background font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none">
              Zurück zum Shop
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container py-8">
        {/* Back-Link */}
        <Link href="/shop">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground cursor-pointer font-sans mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Shop</span>
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Produktbilder */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden bg-muted border border-border/20">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden bg-muted border border-border/20">
                    <img
                      src={img}
                      alt={`${product.title} Galerie ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Produkt-Infos */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-accent uppercase font-sans font-semibold">
                Holzart: {product.woodType}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                {product.title}
              </h1>
              <div className="flex items-center justify-between pt-2 border-b border-border/40 pb-4">
                <span className="font-serif text-2xl font-bold text-foreground">
                  {product.price.toFixed(2)} €
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  Art.Nr.: {product.sku}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Spezifikationen (Holz-Datenblatt) */}
            <div className="bg-secondary/20 p-6 border border-border/20">
              <span className="text-xs tracking-widest uppercase font-bold font-sans block mb-4">
                Technische Details
              </span>
              <table className="w-full text-xs font-sans text-muted-foreground space-y-2">
                <tbody>
                  <tr className="border-b border-border/10 py-2 block">
                    <td className="font-bold text-foreground w-1/3">Holzart</td>
                    <td>{product.woodType}</td>
                  </tr>
                  <tr className="border-b border-border/10 py-2 block">
                    <td className="font-bold text-foreground w-1/3">Abmessungen</td>
                    <td>{product.dimensions}</td>
                  </tr>
                  <tr className="border-b border-border/10 py-2 block">
                    <td className="font-bold text-foreground w-1/3">Gewicht</td>
                    <td>{product.weight}</td>
                  </tr>
                  <tr className="py-2 block">
                    <td className="font-bold text-foreground w-1/3">Oberfläche</td>
                    <td>{product.surface}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kauf-Aktionen */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-border/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-muted transition-colors font-sans text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 font-sans text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-3 hover:bg-muted transition-colors font-sans text-sm"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="flex-grow bg-foreground text-background hover:bg-accent border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>In den Warenkorb</span>
                </Button>
              </div>
              <span className="text-xs text-accent font-sans">
                {product.stock === 1 ? "* Einzelstück: Sofort lieferbar." : `* Noch ${product.stock} Stück auf Lager.`}
              </span>
            </div>

            {/* Siegel / Versprechen */}
            <div className="border-t border-border/40 pt-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-accent stroke-[1.5]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Unikat-Garantie</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Truck className="w-5 h-5 text-accent stroke-[1.5]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Klimaneutraler Versand</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <RefreshCw className="w-5 h-5 text-accent stroke-[1.5]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Biologische Pflege</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
