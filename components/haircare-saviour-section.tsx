import Image from "next/image"
import React from "react"

export default function HaircareSavioursSection() {
  return (
    <section className="w-full relative">
      <div className="absolute inset-0">
        <Image src="/images/k7.png" alt="Your Haircare Saviours" fill style={{ objectFit: "cover" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
            Your Haircare
            <br />
            Saviours
          </h2>

          <div className="space-y-4 text-sm md:text-base">
            <p>
              At Membu, our mission is to give you haircare that's as pure and loving as nature itself. We believe in
              the gentle power of natural ingredients, and our products are created with nothing but the best for your
              hair's health and beauty. We're here to help you embrace your natural beauty with confidence, knowing that
              every ingredient we use is kind to both you and the earth.
            </p>

            <p>
              Our vision is to make haircare a joyful, nourishing experience for you. We want you to feel pampered and
              cared for every time you use our products. With Membu, you're not just taking care of your hair; you're
              taking a moment for yourself, trusting in the natural goodness that comes from the earth.
            </p>

            <p>
              What makes us different is simple: We put you first. We truly care about the health of your hair and your
              experience with our products. Every bottle is filled with love, thoughtfulness, and the belief that your
              hair deserves only the purest ingredients.
            </p>

            <p>
              At Membu, you're not just a customer; you're part of our family. We want you to feel beautiful, confident,
              and completely at ease knowing that your hair is being treated with the utmost care and respect. We're
              here to support you on your journey to healthier, happier hair, because your hair's happiness is our
              happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

