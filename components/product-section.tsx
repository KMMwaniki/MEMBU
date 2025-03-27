import ProductCard from "@/components/product-card"

export default function ProductSection() {
  const products = [
    {
      id: "hair-serum-100ml",
      name: "Hair Serum",
      size: "100ml",
      price: 1100,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k3-LGZLyZX8CupRHYJKlctR114JJjf4mZ.png",
    },
    {
      id: "hair-serum-60ml",
      name: "Hair Serum",
      size: "60ml",
      price: 800,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k3-LGZLyZX8CupRHYJKlctR114JJjf4mZ.png",
    },
    {
      id: "lavender-hair-butter",
      name: "Lavender Hair Butter",
      size: "100g",
      price: 800,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k3-LGZLyZX8CupRHYJKlctR114JJjf4mZ.png",
    },
  ]

  return (
    <section id="products" className="w-full bg-[#F5EBE6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-serif text-[#8B3E2F] mb-16">The Basics</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              size={product.size}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

