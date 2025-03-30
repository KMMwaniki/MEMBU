import Link from "next/link"
import { Instagram } from "lucide-react"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Membu Naturals</h3>
            <p className="text-gray-300">Natural hair care products for beautiful, healthy hair.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-300 hover:text-pink-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-pink-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-pink-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com/membu.naturals" className="text-gray-300 hover:text-pink-400">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Membu Naturals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

