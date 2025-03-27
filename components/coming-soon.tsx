import Image from "next/image"

export default function ComingSoon() {
  const upcomingProducts = [
    {
      name: "Scalp Renewal Cleanse",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k4-j15iilrUSbIxVyq8OQytGFgkxJc3uF.png",
    },
    {
      name: "Scalp Therapy Conditioner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k4-j15iilrUSbIxVyq8OQytGFgkxJc3uF.png",
    },
    {
      name: "Scalp Shield Leave-In",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k4-j15iilrUSbIxVyq8OQytGFgkxJc3uF.png",
    },
  ]

  return (
    <section className="w-full bg-[#F5EBE6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="text-4xl font-serif text-[#8B3E2F] mb-4 md:mb-0">Coming Soon</h2>
          <p className="text-2xl font-serif text-[#8B3E2F]">Scalp So Fresh, It'll Freeze Your Dandruff</p>
        </div>

        <div className="product-grid">
          {upcomingProducts.map((product, index) => (
            <div key={index} className="relative">
              <div className="relative aspect-square overflow-hidden bg-[#5D2A1E]/5 rounded-md">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-serif">{product.name}</h3>
                    <p className="text-xl mt-2">N/A</p>
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

