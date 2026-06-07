import React, { useState } from "react";
import { useRoute, Link } from "wouter";
import Layout from "../components/Layout";
import { products } from "../lib/data";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, Truck, RefreshCw, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const [, params] = useRoute("/produkt/:slug");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-32 text-center flex flex-col items-center justify-center space-y-4">
          <h1 className="font-serif text-3xl font-black uppercase text-[#f8f8f7]">Produkt nicht gefunden</h1>
          <p className="text-xs text-[#a8a8a3] font-sans">Das gesuchte Unikat existiert nicht oder wurde bereits verkauft.</p>
          <Link href="/shop">
            <Button className="bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] font-sans uppercase tracking-wider text-xs py-4 px-6 rounded-none font-bold">
              Zurück zum Shop
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.title} zum Warenkorb hinzugefügt.`);
  };

  return (
    <Layout>
      <div className="container py-8 bg-[#010101]">
        {/* Back-Link */}
        <Link href="/shop">
          <span className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-[#a8a8a3] hover:text-[#a3e635] cursor-pointer font-sans mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Shop</span>
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Produktbilder */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors relative group">
              {/* Feiner grüner Innenrahmen bei Hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#a3e635]/20 z-10 pointer-events-none transition-colors" />
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden bg-[#1a1a19] border border-[#2a2a28] hover:border-[#a3e635]/40 transition-colors relative group">
                    <img
                      src={img}
                      alt={`${product.title} Galerie ${idx + 1}`}
                      className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Produkt-Infos */}
          <div className="lg:col-span-5 flex flex-col space-y-8 relative pl-6">
            {/* Feine grüne vertikale Akzentlinie links neben dem Info-Block */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#a3e635] opacity-60" />

            <div className="flex flex-col space-y-3">
              <span className="text-xs tracking-[0.25em] text-[#d40924] uppercase font-sans font-bold flex items-center gap-1.5">
                Holzart: {product.woodType}
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block shadow-[0_0_6px_#a3e635]" />
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-black uppercase text-[#f8f8f7] leading-tight">
                {product.title}
              </h1>
              <div className="flex items-center justify-between pt-2 border-b border-[#2a2a28] pb-4">
                {/* Preisangabe mit grünem Akzentpunkt */}
                <span className="font-serif text-3xl font-bold text-[#d40924] flex items-center gap-2">
                  {product.price.toFixed(2)} €
                  <span className="w-2 h-2 rounded-full bg-[#a3e635] inline-block shadow-[0_0_8px_#a3e635]" />
                </span>
                <span className="text-xs text-[#a8a8a3] font-sans">
                  Art.Nr.: {product.sku}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a8a8a3] leading-relaxed font-sans font-light">
              {product.description}
            </p>

            {/* Spezifikationen (Holz-Datenblatt) */}
            <div className="bg-[#11110f] p-6 border border-[#2a2a28] relative">
              {/* Feine grüne Akzentlinie am Tabellen-Panel */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#a3e635]/20" />
              <span className="text-xs tracking-widest uppercase font-bold font-serif block mb-4 text-[#f8f8f7]">
                Technische Details
              </span>
              <table className="w-full text-xs font-sans text-[#a8a8a3] space-y-2">
                <tbody>
                  <tr className="border-b border-[#2a2a28] py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Holzart</td>
                    <td>{product.woodType}</td>
                  </tr>
                  <tr className="border-b border-[#2a2a28] py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Abmessungen</td>
                    <td>{product.dimensions}</td>
                  </tr>
                  <tr className="border-b border-[#2a2a28] py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Gewicht</td>
                    <td>{product.weight}</td>
                  </tr>
                  <tr className="py-2 block">
                    <td className="font-bold text-[#f8f8f7] w-1/3">Oberfläche</td>
                    <td>{product.surface}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kauf-Aktionen */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-[#2a2a28] bg-[#11110f]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-[#1a1a19] hover:text-[#a3e635] transition-colors font-sans text-sm text-[#f8f8f7]"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 font-sans text-sm font-bold text-[#f8f8f7]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-3 hover:bg-[#1a1a19] hover:text-[#a3e635] transition-colors font-sans text-sm text-[#f8f8f7]"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="flex-grow bg-[#d40924] hover:bg-[#ef1a35] text-[#f8f8f7] border border-transparent font-sans uppercase tracking-wider text-xs py-6 rounded-none cursor-pointer flex items-center justify-center space-x-2 font-bold transition-all hover:shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:border-[#a3e635]/40"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>In den Warenkorb</span>
                </Button>
              </div>
              <span className="text-xs text-[#d40924] font-sans font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block" />
                {product.stock === 1 ? "Einzelstück: Sofort lieferbar." : `Noch ${product.stock} Stück auf Lager.`}
              </span>
            </div>

            {/* Siegel / Versprechen */}
            <div className="border-t border-[#2a2a28] pt-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1 group">
                <ShieldCheck className="w-5 h-5 text-[#d40924] group-hover:text-[#a3e635] stroke-[1.5] transition-colors" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#f8f8f7]">Unikat-Garantie</span>
              </div>
              <div className="flex flex-col items-center space-y-1 group">
                <Truck className="w-5 h-5 text-[#d40924] group-hover:text-[#a3e635] stroke-[1.5] transition-colors" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#f8f8f7]">Kostenloser Versand</span>
              </div>
              <div className="flex flex-col items-center space-y-1 group">
                <RefreshCw className="w-5 h-5 text-[#d40924] group-hover:text-[#a3e635] stroke-[1.5] transition-colors" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#f8f8f7]">Biologische Pflege</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
