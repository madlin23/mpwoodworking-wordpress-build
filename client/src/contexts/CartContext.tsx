import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../lib/data";
import { toast } from "sonner";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
          toast.error(`Nur noch ${product.stock} Stück auf Lager.`);
          return prevItems;
        }
        toast.success(`Anzahl von "${product.title}" im Warenkorb erhöht.`);
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      
      if (quantity > product.stock) {
        toast.error(`Nur noch ${product.stock} Stück auf Lager.`);
        return prevItems;
      }
      
      toast.success(`"${product.title}" zum Warenkorb hinzugefügt.`);
      return [...prevItems, { product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.product.id === productId);
      if (item) {
        toast.info(`"${item.product.title}" entfernt.`);
      }
      return prevItems.filter((item) => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product.id === productId) {
          if (quantity > item.product.stock) {
            toast.error(`Nur noch ${item.product.stock} Stück auf Lager.`);
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
