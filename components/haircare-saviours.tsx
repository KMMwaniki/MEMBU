import Image from "next/image"

export default function HaircareSaviours() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k7-gIoQfN5kLxCD4eFH40RV4O6EvQBAhH.png"
              alt="Your Haircare Saviours"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-[#5D2A1E]">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Your Haircare Saviours</h2>

            <p>
              At Membu, our mission is to give you haircare that's as pure and loving as nature itself. We believe in
              the gentle power of natural ingredients, and our products are created with nothing but the best for your
              hair's health and beauty.
            </p>

            <p>
              Our vision is to make haircare a joyful, nourishing experience for you. We want you to feel pampered and
              cared for every time you use our products. With Membu, you're not just taking care of your hair; you're
              taking a moment for yourself.
            </p>

            <p>
              What makes us different is simple: We put you first. We truly care about the health of your hair and your
              experience with our products. Every bottle is filled with love, thoughtfulness, and the belief that your
              hair deserves only the purest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

