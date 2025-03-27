"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart, type CartItem } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  size: string
}

export default function ProductCard({ id, name, price, image, size }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    const item: CartItem = {
      id,
      name: `${name} ${size}`,
      price,
      quantity: 1,
      image,
    }

    addItem(item)

    // Show added confirmation
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-[#5D2A1E]/5 rounded-md mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-2xl font-serif">{name}</h3>
            <p className="text-xl mt-2">{size}</p>
            <p className="font-medium mt-2">KSh {price}</p>
          </div>
        </div>
      </div>

      <Button
        onClick={handleAddToCart}
        className={`mt-2 w-full transition-all duration-300 ${
          isAdded ? "bg-green-600 hover:bg-green-700" : "bg-[#8B3E2F] hover:bg-[#6d3126]"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </>
        )}
      </Button>
    </div>
  )
}

