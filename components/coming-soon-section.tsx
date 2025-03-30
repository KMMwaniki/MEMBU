import Image from "next/image"
import React from "react"

// Coming soon products
const comingSoonProducts = [
  {
    id: 1,
    name: "Scalp Renewal Cleanse",
    price: "N/A",
  },
  {
    id: 2,
    name: "Scalp Therapy Conditioner",
    price: "N/A",
  },
  {
    id: 3,
    name: "Scalp Shield Leave-In",
    price: "N/A",
  },
]

export default function ComingSoonSection() {
  return (
    <section className="w-full bg-[#f9f1ef] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#b27566]">Coming Soon</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-[#b27566] mt-4 md:mt-0">
            Scalp So Fresh, It'll Freeze Your Dandruff
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {comingSoonProducts.map((product) => (
            <div key={product.id} className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/k4.png" alt={product.name} fill style={{ objectFit: "cover" }} />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="text-2xl md:text-3xl font-serif mb-1">{product.name}</h3>
                  <p className="text-lg mt-4">{product.price}</p>
                  <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 m-4">COMING SOON!</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

