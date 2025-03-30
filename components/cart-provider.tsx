"use client"

import React from "react"

import { useState } from "react"
import { ShoppingBag, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { useCartStore } from "../lib/store"

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const handleCheckout = () => {
    if (items.length === 0) return

    // Create WhatsApp message
    let message = "🛒 Yay! You've got a NEW ORDER from Membu Naturals! 🛒\n\n"
    message += "Order Details:\n"

    items.forEach((item) => {
      const itemTotal = item.price * item.quantity
      message += `• ${item.name} (${item.quantity} x KSh ${item.price}) = KSh ${itemTotal}\n`
    })

    message += `\nTotal Order Amount: KSh ${totalAmount}\n\n`
    message +=
      "To make sure your goodies get to you, please share your delivery details (name, address, and phone number). We can't wait for you to enjoy your Membu Naturals experience! 🩷✨\n\n"
    message += "Thank you for choosing us — your hair is going to love this! 😍"

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the message
    window.open(`https://wa.me/254703592854?text=${encodedMessage}`, "_blank")

    // Clear the cart after checkout
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <>
      {children}

      <button
        className="fixed top-4 right-4 z-50 bg-white text-[#6b2c1e] p-3 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingBag className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#b27566] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {items.length}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#6b2c1e]">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-[#6b2c1e]">
                <X className="w-6 h-6" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Button onClick={() => setIsCartOpen(false)} className="bg-[#b27566] hover:bg-[#6b2c1e] text-white">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500">KSh {item.price}</p>
                      </div>

                      <div className="flex items-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          className="mx-2 border rounded p-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>

                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">KSh {totalAmount}</span>
                  </div>

                  <Button onClick={handleCheckout} className="w-full bg-[#b27566] hover:bg-[#6b2c1e] text-white py-2">
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

