import Hero from "@/components/hero"
import OurStory from "@/components/our-story"
import ProductSection from "@/components/product-section"
import ComingSoon from "@/components/coming-soon"
import HairglowSection from "@/components/hairglow-section"
import FounderQuote from "@/components/founder-quote"
import HaircareSaviours from "@/components/haircare-saviours"
import ContactSection from "@/components/contact-section"
import CartDrawer from "@/components/cart-drawer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CartDrawer />
      <Hero />
      <OurStory />
      <div id="products">
        <ProductSection />
      </div>
      <ComingSoon />
      <HairglowSection />
      <FounderQuote />
      <HaircareSaviours />
      <ContactSection />
    </main>
  )
}

 