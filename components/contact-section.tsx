import Link from "next/link"
import { Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full bg-chocolate text-white py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-16 md:mb-0">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">Let's Chat</h2>
            <div className="elegant-divider text-white"></div>
            <p className="text-camel mt-8 font-light max-w-md">
              We'd love to hear from you. Reach out to us with any questions, comments, or just to say hello.
            </p>
          </div>

          <div className="space-y-10">
            <div className="contact-item">
              <span className="contact-label">PHONE</span>
              <Link href="https://wa.me/254703592854" className="contact-value link">
                +254703592854
              </Link>
            </div>

            <div className="contact-item">
              <span className="contact-label">E-MAIL</span>
              <Link href="mailto:membuog@gmail.com" className="contact-value link">
                membuog@gmail.com
              </Link>
            </div>

            <div className="contact-item">
              <span className="contact-label">SOCIAL</span>
              <Link href="https://instagram.com/membu.naturals" className="contact-value link">
                <Instagram className="w-6 h-6 inline-block mr-3" />
                @membu.naturals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



