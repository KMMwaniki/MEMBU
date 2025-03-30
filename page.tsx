"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, X, Instagram } from "lucide-react"
import React from "react"

export default function Home() {
  interface CartItem {
    id: number
    name: string
    size?: string
    price: number
    quantity: number
  }

  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Products data
  const products = [
    {
      id: 1,
      name: "Hair Serum",
      size: "100ml",
      price: 1100,
    },
    {
      id: 2,
      name: "Hair Serum",
      size: "60ml",
      price: 800,
    },
    {
      id: 3,
      name: "Lavender Hair Butter",
      size: "100g",
      price: 800,
    },
  ]

  // Coming soon products
  const comingSoonProducts = [
    {
      id: 4,
      name: "Scalp Renewal Cleanse",
      price: "N/A",
    },
    {
      id: 5,
      name: "Scalp Therapy Conditioner",
      price: "N/A",
    },
    {
      id: 6,
      name: "Scalp Shield Leave-In",
      price: "N/A",
    },
  ]

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }

    setIsCartOpen(true)
  }

  // Remove from cart function
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  // Update quantity function
  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // Calculate total
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  // Checkout function
  const handleCheckout = () => {
    if (cart.length === 0) return

    // Create WhatsApp message
    let message = "🛒 Yay! You've got a NEW ORDER from Membu Naturals! 🛒\n\n"
    message += "Order Details:\n"

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity
      message += `• ${item.name} ${item.size} (${item.quantity} x KSh ${item.price}) = KSh ${itemTotal}\n`
    })

    message += `\nTotal Order Amount: KSh ${totalAmount}\n\n`
    message +=
      "To make sure your goodies get to you, please share your delivery details (name, address, and phone number). We can't wait for you to enjoy your Membu Naturals experience! 🩷✨\n\n"
    message += "Thank you for choosing us — your hair is going to love this! 😍"

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the message
    window.open(`https://wa.me/254703592854?text=${encodedMessage}`, "_blank")

    // Clear the cart after checkout
    setCart([])
    setIsCartOpen(false)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section (K1) */}
      <section className="relative w-full h-screen bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder for hero image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-serif mb-2">Membu</h1>
              <p className="text-lg mb-8">Your Hair Sanctuary</p>

              <h2 className="text-5xl md:text-7xl font-serif mb-6">Talk To The Hair</h2>

              <p className="text-lg mb-12">
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
        </div>
      </section>

      {/* Our Story Section (K2) */}
      <section className="w-full bg-[#b27566] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif">Our Story</h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <p>
                Membu is a journey of love, tradition, and the belief that nature knows best. It all started with a deep
                connection to the land the lands of Meru and Embu, where my parents come from. These regions, with their
                rich history, lush landscapes, and vibrant communities, have always been a source of inspiration. The
                values of respect for nature and the importance of living in harmony with it were instilled in me from
                an early age.
              </p>

              <p>
                Growing up, I saw how my parents always valued what nature provided, how they trusted its gifts, from
                the food they ate to the way they cared for themselves. It was their belief that everything needed for
                health and well-being was already around us. This belief in nature's power, passed down through
                generations, is what sparked the idea behind Membu.
              </p>

              <p>
                The brand was created with one simple purpose: to offer haircare solutions that are as pure and natural
                as the land that inspired them. Membu uses only 100% natural ingredients, carefully selected to nurture
                and protect your hair. Whether your hair is curly, coily, wavy, or straight, we believe that nature has
                the perfect solution for every type, and we're here to bring it to you.
              </p>

              <p>
                At Membu, we pour our hearts into every product, ensuring that it's not just good for your hair, but
                also good for the environment. Our commitment to sustainability is as strong as our belief in the power
                of nature, and we hope that through our products, you can experience the same harmony and connection
                with the earth that we cherish so much.
              </p>

              <p>
                This brand is a reflection of who we are, a tribute to our heritage, a celebration of natural beauty,
                and a reminder that sometimes, the best things in life come from the earth itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section (K3) */}
      <section id="products" className="w-full bg-[#f9f1ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif text-[#b27566] mb-12">The Basics</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="relative aspect-square overflow-hidden bg-[#f0e0da]">
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                    <h3 className="text-3xl font-serif mb-1">{product.name}</h3>
                    <p className="text-2xl mb-4">{product.size}</p>
                    <p className="text-lg">KSh {product.price}</p>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white text-black hover:bg-[#b27566] hover:text-white border border-white px-4 py-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section (K4) */}
      <section className="w-full bg-[#f9f1ef] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="text-5xl font-serif text-[#b27566]">Coming Soon</h2>
            <h3 className="text-3xl font-serif text-[#b27566] mt-4 md:mt-0">
              Scalp So Fresh, It'll Freeze Your Dandruff
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonProducts.map((product) => (
              <div key={product.id} className="relative">
                <div className="relative aspect-square overflow-hidden bg-[#f0e0da]">
                  {/* Placeholder for coming soon product image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                    <h3 className="text-3xl font-serif mb-1">{product.name}</h3>
                    <p className="text-lg mt-4">{product.price}</p>
                    <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 m-4">COMING SOON!</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hairglow Section (K5) */}
      <section className="w-full bg-[#6b2c1e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full bg-[#5a2519]">
              {/* Placeholder for hairglow image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl md:text-6xl font-serif text-center">
                  Your hairglow
                  <br />
                  starts with...
                </h2>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                    <span>🌿</span>
                  </div>
                  <p className="text-xl">Organic, all-natural ingredients</p>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                    <span>❤️</span>
                  </div>
                  <p className="text-xl">Hypoallergenic products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Section (K6) */}
      <section className="w-full bg-[#b27566] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic mb-8">
              "I use our products every day, and I wouldn't dream of putting anything on my scalp or hair that isn't
              pure and gentle. I believe in the power of nature, and that's why I can promise you that only the very
              best ingredients go into every bottle. Your hair deserves to be cared for with love, just like mine is,
              and I'm so happy to share that with you."
            </blockquote>

            <cite className="text-lg">- Kimberly Muthoni Mwaniki, Founder, CEO</cite>
          </div>
        </div>
      </section>

      {/* Haircare Saviours Section (K7) */}
      <section className="w-full bg-[#333] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif mb-8">
              Your Haircare
              <br />
              Saviours
            </h2>

            <div className="space-y-4 text-sm md:text-base">
              <p>
                At Membu, our mission is to give you haircare that's as pure and loving as nature itself. We believe in
                the gentle power of natural ingredients, and our products are created with nothing but the best for your
                hair's health and beauty. We're here to help you embrace your natural beauty with confidence, knowing
                that every ingredient we use is kind to both you and the earth.
              </p>

              <p>
                Our vision is to make haircare a joyful, nourishing experience for you. We want you to feel pampered and
                cared for every time you use our products. With Membu, you're not just taking care of your hair; you're
                taking a moment for yourself, trusting in the natural goodness that comes from the earth.
              </p>

              <p>
                What makes us different is simple: We put you first. We truly care about the health of your hair and
                your experience with our products. Every bottle is filled with love, thoughtfulness, and the belief that
                your hair deserves only the purest ingredients.
              </p>

              <p>
                At Membu, you're not just a customer; you're part of our family. We want you to feel beautiful,
                confident, and completely at ease knowing that your hair is being treated with the utmost care and
                respect. We're here to support you on your journey to healthier, happier hair, because your hair's
                happiness is our happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (K8) */}
      <section className="w-full bg-[#6b2c1e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif mb-12">Let's Chat</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">PHONE</h3>
                <Link href="https://wa.me/254703592854" className="text-xl hover:underline">
                  +254703592854
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">E-MAIL</h3>
                <Link href="mailto:membuog@gmail.com" className="text-xl hover:underline">
                  membuog@gmail.com
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">SOCIAL</h3>
                <Link href="https://instagram.com/membu.naturals" className="inline-block hover:opacity-80">
                  <Instagram className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#5a2519] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Membu Naturals. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for your hair</p>
        </div>
      </footer>

      {/* Shopping Cart */}
      <button
        className="fixed top-4 right-4 z-50 bg-white text-[#6b2c1e] p-3 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingBag className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#b27566] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {cart.length}
          </span>
        )}
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#6b2c1e]">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-[#6b2c1e]">
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#b27566] hover:bg-[#6b2c1e] text-white px-4 py-2"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="p-4 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">
                          {item.name} {item.size}
                        </h3>
                        <p className="text-gray-500">KSh {item.price}</p>
                      </div>

                      <div className="flex items-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                          className="mx-2 border rounded p-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>

                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">KSh {totalAmount}</span>
                  </div>

                  <button onClick={handleCheckout} className="w-full bg-[#b27566] hover:bg-[#6b2c1e] text-white py-2">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

