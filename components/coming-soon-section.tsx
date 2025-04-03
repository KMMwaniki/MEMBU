import Image from "next/image"

// Coming soon products
const comingSoonProducts = [
  {
    id: 1,
    name: "Scalp Renewal Cleanse",
    price: "Coming Soon",
    image: "/images/MEMBU2.jpg",
  },
  {
    id: 2,
    name: "Scalp Therapy Conditioner",
    price: "Coming Soon",
    image: "/images/MEMBU2.jpg",
  },
  {
    id: 3,
    name: "Scalp Shield Leave-In",
    price: "Coming Soon",
    image: "/images/MEMBU2.jpg",
  },
]

export default function ComingSoonSection() {
  return (
    <section className="w-full bg-ivory py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <div>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mb-4">Coming Soon</h2>
            <div className="elegant-divider text-chocolate"></div>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-mocha mt-8 md:mt-0 italic">
            Scalp So Fresh, It'll Freeze Your Dandruff
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {comingSoonProducts.map((product) => (
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
                  <div className="absolute top-4 left-4 bg-chocolate text-white px-4 py-1 rounded-md font-medium tracking-wider text-sm">
                    COMING SOON!
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

