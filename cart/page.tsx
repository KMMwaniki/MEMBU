"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Trash2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { useCartStore } from "../lib/store"
import { useToast } from "../components/ui/use-toast"
import React from "react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size?: string
}

export default function CartPage() {
  const { toast } = useToast()
  const { items, removeItem, updateQuantity, clearCart } = useCartStore()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!isMounted || items.length === 0) return
    
    setIsCheckingOut(true)
    
    try {
      const message = `🛒 Membu Naturals Order\n\n${items.map(item => 
        `• ${item.name}${item.size ? ` (${item.size})` : ''} - ${item.quantity} × KSh ${item.price} = KSh ${item.price * item.quantity}`
      ).join('\n')}\n\nTotal: KSh ${totalAmount}`
      
      window.open(
        `https://wa.me/254703592854?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener noreferrer"
      )
    } catch (error) {
      // Updated toast notification without variant
      toast({
        title: "Error",
        description: "Failed to initiate checkout",
        // Remove the variant line or replace with appropriate property
        // variant: "destructive" // Remove this line
      })
    } finally {
      clearCart()
      setIsCheckingOut(false)
    }
  }

  if (!isMounted) return null

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      {/* Rest of your JSX remains the same */}
    </main>
  )
}