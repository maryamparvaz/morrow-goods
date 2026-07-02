'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductColor, ProductSize } from '@/types';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;

  addItem: (product: Product, quantity?: number, color?: ProductColor, size?: ProductSize) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  getItemCount: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (product, quantity = 1, color, size) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.product.id === product.id &&
              item.selectedColor?.id === color?.id &&
              item.selectedSize?.id === size?.id
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            const newQuantity = Math.min(
              updatedItems[existingIndex].quantity + quantity,
              product.stock
            );
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: newQuantity,
            };
            return { items: updatedItems };
          }

          return {
            items: [
              ...state.items,
              {
                product,
                quantity: Math.min(quantity, product.stock),
                selectedColor: color,
                selectedSize: size,
              },
            ],
          };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => {
          if (quantity < 1) return state;

          return {
            items: state.items.map((item) => {
              if (item.product.id === productId) {
                const newQuantity = Math.min(quantity, item.product.stock);
                return { ...item, quantity: newQuantity };
              }
              return item;
            }),
          };
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      openCart: () => {
        set({ isCartOpen: true });
      },

      closeCart: () => {
        set({ isCartOpen: false });
      },

      toggleCart: () => {
        set((state) => ({ isCartOpen: !state.isCartOpen }));
      },

      getItemCount: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getShipping: () => {
        const state = get();
        const subtotal = state.getSubtotal();
        if (subtotal === 0) return 0;
        if (subtotal >= 150) return 0;
        return 8.50;
      },

      getTotal: () => {
        const state = get();
        return state.getSubtotal() + state.getShipping();
      },
    }),
    {
      name: 'morrow-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
