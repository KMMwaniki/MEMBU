export default function Footer() {
    return (
      <footer className="w-full bg-ivory text-chocolate py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-serif">Membu</h2>
            <div className="elegant-divider centered text-chocolate"></div>
          </div>
          <p className="font-light">© {new Date().getFullYear()} Membu Naturals. All rights reserved.</p>
          <p className="mt-6 font-light text-mocha">Made with ❤️ for your hair</p>
        </div>
      </footer>
    )
  }
  
  
  
  