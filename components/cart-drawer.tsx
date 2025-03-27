"use client"

import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer"

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, totalItems, totalPrice } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`
  }

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsCheckingOut(true)

    try {
      // Format the order message
      let orderMessage = `🛒 Yay! You've got a NEW ORDER from Membu Naturals! 🛒\n\nOrder Details:\n`

      items.forEach((item) => {
        orderMessage += `• ${item.name} (${item.quantity} x KSh ${item.price}) = KSh ${item.price * item.quantity}\n`
      })

      orderMessage += `\nTotal Order Amount: KSh ${totalPrice}\n\nTo make sure your goodies get to you, please share your delivery details (name, address, and phone number). We can't wait for you to enjoy your Membu Naturals experience! 🩷✨\n\nThank you for choosing us — your hair is going to love this! 😍`

      // Encode the message for WhatsApp
      const encodedMessage = encodeURIComponent(orderMessage)

      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/254703592854?text=${encodedMessage}`, "_blank")

      // Clear the cart after successful checkout
      // We'll keep the cart items for now in case they want to modify the order
      setIsCheckingOut(false)
      setIsOpen(false)
    } catch (error) {
      console.error("Checkout failed:", error)
      setIsCheckingOut(false)
    }
  }

  return (
    <>
      {/* Cart Icon Button */}
      <button
        className="fixed right-6 bottom-6 z-50 p-4 bg-[#8B3E2F] text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-serif">Your Cart</DrawerTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </DrawerHeader>

          <div className="px-6 overflow-y-auto max-h-[50vh]">
            {items.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex items-center gap-4">
                    <div className="w-16 h-16 relative bg-gray-100 rounded">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-gray-500">{formatPrice(item.price)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <DrawerFooter className="border-t">
            <div className="flex justify-between py-2">
              <span className="font-medium">Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={items.length === 0 || isCheckingOut}
              className="w-full bg-[#8B3E2F] hover:bg-[#6d3126] text-white"
            >
              {isCheckingOut ? "Processing..." : "Checkout via WhatsApp"}
            </Button>

            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Continue Shopping
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

