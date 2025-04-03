import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === newItem.id)

          if (existingItem) {
            // If item already exists, update quantity
            return {
              items: state.items.map((item) =>
                item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
              ),
            }
          } else {
            // If item doesn't exist, add it
            return { items: [...state.items, newItem] }
          }
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "membu-cart-storage",
    },
  ),
)



