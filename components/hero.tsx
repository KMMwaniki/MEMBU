import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k1-6B5sV8MOEEavMIknTudPSBWT1AB027.png"
          alt="Membu Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="hero-content text-center text-white px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-2">Membu</h1>
        <p className="text-xl md:text-2xl font-light mb-8">Your Hair Sanctuary</p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Talk To The Hair</h2>
        <p className="text-lg md:text-xl max-w-md mx-auto mb-12">Because gorgeous, full hair is for everyone.</p>

        <Link
          href="#products"
          className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-[#8B3E2F] transition-colors duration-300"
        >
          SHOP NOW →
        </Link>
      </div>
    </section>
  )
}

