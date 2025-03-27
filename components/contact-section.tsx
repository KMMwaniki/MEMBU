"use client"
import { Instagram } from "lucide-react"

export default function ContactSection() {
  const openWhatsApp = () => {
    window.open("https://wa.me/254703592854", "_blank")
  }

  const openEmail = () => {
    window.open("mailto:membuog@gmail.com", "_blank")
  }

  const openInstagram = () => {
    window.open("https://instagram.com/membu.naturals", "_blank")
  }

  return (
    <section className="w-full bg-[#5D2A1E] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Let's Chat</h2>

          <div className="space-y-8">
            <div className="text-right">
              <p className="text-white/70 mb-1">PHONE</p>
              <button onClick={openWhatsApp} className="text-white text-lg hover:underline">
                +254703592854
              </button>
            </div>

            <div className="text-right">
              <p className="text-white/70 mb-1">E-MAIL</p>
              <button onClick={openEmail} className="text-white text-lg hover:underline">
                membuog@gmail.com
              </button>
            </div>

            <div className="text-right">
              <p className="text-white/70 mb-1">SOCIAL</p>
              <button
                onClick={openInstagram}
                className="text-white inline-flex items-center justify-center hover:opacity-80"
              >
                <Instagram className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

