"use client"
import Image from "next/image"
import { useCartStore } from "@/lib/store"
import { useToast } from "@/components/ui/use-toast"
import { useState, useEffect } from "react"

// Product data
const products = [
  {
    id: 1,
    name: "Hair Serum",
    size: "100ml",
    price: 1100,
    image: "/images/MEMBU2.jpg",
  },
  {
    id: 2,
    name: "Hair Serum",
    size: "60ml",
    price: 800,
    image: "/images/MEMBU2.jpg",
  },
  {
    id: 3,
    name: "Lavender Hair Butter",
    size: "100g",
    price: 800,
    image: "/images/MEMBU2.jpg",
  },
]

// Define a type for the product
interface Product {
  id: number
  name: string
  size: string
  price: number
  image: string
}

export default function ProductsSection() {
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)
  const addToCart = useCartStore((state) => state.addItem)

  // Fix hydration issues by only rendering client-side content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: `${product.name} (${product.size})`,
      price: product.price,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${product.size}) has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <section id="products" className="w-full bg-cream py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mb-4">The Basics</h2>
          <p className="section-subtitle">Carefully crafted with love and natural ingredients</p>
          <div className="elegant-divider centered text-chocolate"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="relative aspect-square overflow-hidden">
                {/* Product image */}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="product-image"
                />

                <div className="product-overlay">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-size">{product.size}</p>
                  <p className="product-price">KSh {product.price}</p>
                </div>

                <div className="product-action">
                  <button
                    onClick={() => mounted && handleAddToCart(product)}
                    className="add-to-cart-btn"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

