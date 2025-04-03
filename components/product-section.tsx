"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCartStore } from "@/lib/store"

// Product data
const products = [
  {
    id: 1,
    name: "Moisturizing Shampoo",
    price: 850,
    description: "Gentle cleansing with deep moisture for all hair types.",
    imagePlaceholder: "Moisturizing Shampoo Image",
  },
  {
    id: 2,
    name: "Hydrating Conditioner",
    price: 950,
    description: "Intense hydration that detangles and softens hair.",
    imagePlaceholder: "Hydrating Conditioner Image",
  },
  {
    id: 3,
    name: "Hair Growth Oil",
    price: 1200,
    description: "Natural oils blend to stimulate hair growth and strength.",
    imagePlaceholder: "Hair Growth Oil Image",
  },
  {
    id: 4,
    name: "Curl Defining Cream",
    price: 1100,
    description: "Define and enhance natural curls without the crunch.",
    imagePlaceholder: "Curl Defining Cream Image",
  },
]

// Coming soon products
const comingSoonProducts = [
  {
    id: 5,
    name: "Hair Mask Treatment",
    description: "Deep conditioning treatment for damaged hair.",
    imagePlaceholder: "COMING SOON!",
  },
  {
    id: 6,
    name: "Scalp Scrub",
    description: "Exfoliating treatment for a healthy scalp.",
    imagePlaceholder: "COMING SOON!",
  },
]

export default function ProductSection() {
  const { toast } = useToast()
  const addToCart = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Products</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Product image placeholder */}
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-500">{product.imagePlaceholder}</p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-600">KSh {product.price}</span>
                  <Button onClick={() => handleAddToCart(product)} className="bg-pink-600 hover:bg-pink-700 text-white">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center my-12 text-gray-800">Coming Soon</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              {/* Coming soon placeholder */}
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-500 font-bold text-xl">{product.imagePlaceholder}</p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


