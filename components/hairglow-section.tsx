import Image from "next/image"
import { Leaf, Heart } from "lucide-react"

export default function HairglowSection() {
  return (
    <section className="w-full bg-[#5D2A1E] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k5-yjq2MZootWcNG71D3hKZuLwyDlCCHa.png"
                alt="Your hairglow starts with..."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Your hairglow starts with...
                </h2>
              </div>
            </div>
          </div>

          <div className="text-white space-y-12">
            <div className="flex items-center gap-6">
              <div className="bg-[#8B3E2F] p-4 rounded-full">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Organic, all-natural ingredients</h3>
                <p className="text-white/80">We use only the purest ingredients sourced from nature.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-[#8B3E2F] p-4 rounded-full">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Hypoallergenic products</h3>
                <p className="text-white/80">Gentle formulations suitable for all hair types and sensitive scalps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

