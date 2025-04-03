import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/MEMBU3.jpg"
          alt="Membu Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center" style={{ marginTop: "-10vh" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-1">Membu</h1>

          {/* Elegant divider */}
          <div className="elegant-divider centered text-white mb-2"></div>

          <p className="text-base md:text-lg mb-2 font-light tracking-wider">Your Hair Sanctuary</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-2">Talk To The Hair</h2>

          <p className="text-base md:text-lg mb-4 font-light tracking-wide">
            Because gorgeous, full hair is for everyone.
          </p>

          <Link href="#products" className="shop-now-btn light hover:shadow-lg">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

