import Link from "next/link"
import { Instagram } from "lucide-react"
import React from "react"

export default function ContactSection() {
  return (
    <section className="w-full bg-[#6b2c1e] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12">Let's Chat</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">PHONE</h3>
              <Link href="https://wa.me/254703592854" className="text-xl hover:underline">
                +254703592854
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">E-MAIL</h3>
              <Link href="mailto:membuog@gmail.com" className="text-xl hover:underline">
                membuog@gmail.com
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">SOCIAL</h3>
              <Link href="https://instagram.com/membu.naturals" className="inline-block hover:opacity-80">
                <Instagram className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

