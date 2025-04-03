"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

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
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
              <Link href="/" className="flex items-center text-pink-600 hover:text-pink-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 mb-6">Your cart is empty</p>
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href="/#products">Shop Now</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="p-6 border-b">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-500">KSh {item.price}</p>
                    </div>

                    <div className="flex items-center">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                        className="mx-2 border rounded-md p-1"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>

                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 ml-4">
                        <Trash2 className="h-5 w-5" />
                        <span className="sr-only">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-6">
                  <span className="font-medium text-gray-800">Total</span>
                  <span className="font-bold text-xl text-pink-600">KSh {totalAmount}</span>
                </div>

                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg"
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

