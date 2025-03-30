import Link from "next/link"
import Image from "next/image"
import React from "react"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image src="/images/k1.png" alt="Membu Hero" fill style={{ objectFit: "cover" }} priority />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-2">Membu</h1>
          <p className="text-lg md:text-xl mb-8">Your Hair Sanctuary</p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">Talk To The Hair</h2>

          <p className="text-lg md:text-xl mb-12">
            Because gorgeous, full hair
            <br />
            is for everyone.
          </p>

          <Link
            href="#products"
            className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-colors"
          >
            SHOP NOW →
          </Link>
        </div>
      </div>
    </section>
  )
}

