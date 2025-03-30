"use client"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { useToast } from "../components/ui/use-toast"
import { useCartStore } from "../lib/store"
import React from "react"

// Product data
const products = [
  {
    id: 1,
    name: "Hair Serum",
    size: "100ml",
    price: 1100,
    image: "/images/k3.png",
  },
  {
    id: 2,
    name: "Hair Serum",
    size: "60ml",
    price: 800,
    image: "/images/k3.png",
  },
  {
    id: 3,
    name: "Lavender Hair Butter",
    size: "100g",
    price: 800,
    image: "/images/k3.png",
  },
]

export default function ProductsSection() {
  const { toast } = useToast()
  const addToCart = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: any) => {
    addToCart({
        id: product.id,
        name: `${product.name} ${product.size}`,
        price: product.price,
        quantity: 1,
        size: undefined
    })

    toast({
      title: "Added to cart",
      description: `${product.name} ${product.size} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <section id="products" className="w-full bg-[#f9f1ef] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-[#b27566] mb-12">The Basics</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-2xl md:text-3xl font-serif mb-1">{product.name}</h3>
                  <p className="text-xl md:text-2xl mb-4">{product.size}</p>
                  <p className="text-lg">KSh {product.price}</p>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white text-black hover:bg-[#b27566] hover:text-white border border-white"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

