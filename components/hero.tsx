import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 bg-pink-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Natural Hair Care Products For Your Beautiful Hair
          </h1>
          <p className="text-lg text-gray-600">
            Discover our range of natural hair care products designed to nourish and enhance your hair's natural beauty.
          </p>
          <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md text-lg">
            <Link href="#products">Shop Now</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          {/* Placeholder for hero image */}
          <div
            className="bg-gray-200 rounded-lg flex items-center justify-center"
            style={{ width: "100%", height: "400px" }}
          >
            <p className="text-gray-500 text-lg">Hero Image</p>
          </div>
        </div>
      </div>
    </section>
  )
}

