import Image from "next/image"

export default function FounderQuote() {
  return (
    <section className="w-full bg-[#B67F6D] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k6-eF1shdQAs5cM0JeLJ68utMSShKNEx4.png"
            alt="Founder Quote"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

