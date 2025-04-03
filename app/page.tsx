import HeroSection from "@/components/hero-section"
import OurStorySection from "@/components/our-story-section"
import ProductsSection from "@/components/products-section"
import ComingSoonSection from "@/components/coming-soon-section"
import HairglowSection from "@/components/hairglow-section"
import FounderQuoteSection from "@/components/founder-quote-section"
import HaircareSavioursSection from "@/components/haircare-saviours-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CartProvider from "@/components/cart-provider"

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <HeroSection />
        <OurStorySection />
        <ProductsSection />
        <ComingSoonSection />
        <HairglowSection />
        <FounderQuoteSection />
        <HaircareSavioursSection />
        <ContactSection />
        <Footer />
      </main>
    </CartProvider>
  )
}


