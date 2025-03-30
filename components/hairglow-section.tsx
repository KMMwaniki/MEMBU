import Image from "next/image"
import { Leaf, Heart } from "lucide-react"
import React from "react"

export default function HairglowSection() {
  return (
    <section className="w-full bg-[#6b2c1e] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <Image src="/images/k5.png" alt="Your hairglow starts with..." fill style={{ objectFit: "cover" }} />
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              Your hairglow
              <br />
              starts with...
            </h2>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <Leaf className="w-10 h-10" />
                <p className="text-xl">Organic, all-natural ingredients</p>
              </div>

              <div className="flex items-center space-x-6">
                <Heart className="w-10 h-10" />
                <p className="text-xl">Hypoallergenic products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

