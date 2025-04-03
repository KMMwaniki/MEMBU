export default function AboutSection() {
    return (
      <section id="about" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for about image */}
              <div
                className="bg-gray-200 rounded-lg flex items-center justify-center"
                style={{ width: "100%", height: "400px" }}
              >
                <p className="text-gray-500 text-lg">About Image</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">About Membu Naturals</h2>
              <p className="text-lg text-gray-600">
                At Membu Naturals, we believe in the power of natural ingredients to transform your hair. Our products are
                carefully formulated with the finest natural ingredients to nourish and enhance your hair's natural
                beauty.
              </p>
              <p className="text-lg text-gray-600">
                Founded by Kimberly Mwaniki, Membu Naturals was born from a passion for creating effective, natural hair
                care solutions that work for all hair types. Our mission is to help you achieve your healthiest hair ever
                with products that are kind to your hair and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  