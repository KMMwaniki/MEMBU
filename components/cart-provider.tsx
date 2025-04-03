"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ShoppingBag, X, Trash2 } from "lucide-react"
import { useCartStore } from "@/lib/store"

interface CartProviderProps {
  children: React.ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Get cart items from the store
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()

  // Fix hydration issues by only rendering client-side content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

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

  // Don't render cart content until after client-side hydration
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      {children}

      <button className="cart-button" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
        <ShoppingBag className="w-6 h-6" />
        {items.length > 0 && <span className="cart-count animate-bounce">{items.length}</span>}
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end">
          <div className="cart-sidebar open">
            <div className="cart-header">
              <h2 className="cart-title">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="cart-close" aria-label="Close cart">
                <X className="w-6 h-6" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p className="cart-empty-message">Your cart is empty</p>
                <button onClick={() => setIsCartOpen(false)} className="btn btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-price">KSh {item.price}</p>
                      </div>

                      <div className="cart-item-quantity">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          aria-label="Quantity"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button onClick={() => removeItem(item.id)} className="cart-item-remove" aria-label="Remove item">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span className="cart-total-label">Total</span>
                    <span className="cart-total-amount">KSh {totalAmount}</span>
                  </div>

                  <div className="cart-actions">
                    <button onClick={clearCart} className="cart-clear" aria-label="Clear cart">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear Cart
                    </button>

                    <button onClick={handleCheckout} className="cart-checkout" aria-label="Complete order">
                      Complete Order
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

