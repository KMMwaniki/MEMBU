import { Leaf, Heart } from "lucide-react"

export default function HairglowSection() {
  return (
    <section className="w-full bg-charcoal text-white py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            {/* Hairglow image - left side empty as in b3 */}
          </div>

          <div className="space-y-20">
            <div className="space-y-16">
              <div className="flex items-center group">
                <div className="decorative-leaf">
                  <Leaf className="w-8 h-8 text-chocolate" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Organic, all-natural ingredients</h3>
                  <p className="text-camel font-light">
                    We use only the finest natural ingredients, carefully selected for their nourishing properties.
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="decorative-leaf">
                  <Heart className="w-8 h-8 text-chocolate" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">Hypoallergenic products</h3>
                  <p className="text-camel font-light">
                    Gentle formulations suitable for all hair types and sensitive scalps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

