import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Daily Synbiotic",
      badge: "Bestseller",
      tag: "DS-01®",
      price: "$49.99",
      isNew: false,
    },
    {
      id: 2,
      name: "Daily Multivitamin",
      badge: "New",
      tag: "DM-02®",
      price: "$39.99",
      isNew: true,
    },
    {
      id: 3,
      name: "Energy + Focus",
      badge: "New",
      tag: "AM-02®",
      price: "$24.99",
      isNew: true,
    },
    {
      id: 4,
      name: "Sleep + Restore",
      badge: "New",
      tag: "PM-02®",
      price: "$24.99",
      isNew: true,
    },
  ]

  return (
    <main className="min-h-screen bg-[#e8ebe8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2d4a3a]" />
              <span className="font-semibold text-[#2d4a3a]">Seed</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-[#2d4a3a] hover:opacity-70 transition-opacity">
                Shop
              </a>
              <a href="#" className="text-[#2d4a3a] hover:opacity-70 transition-opacity">
                Science
              </a>
              <a href="#" className="text-[#2d4a3a] hover:opacity-70 transition-opacity">
                Learn
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <section className="py-20 px-6 bg-[#2d4a3a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2 text-balance">Whole body health starts</h2>
              <h2 className="text-4xl md:text-5xl font-light text-white text-balance">in the gut.</h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-white/80 text-sm max-w-md text-balance">
                Formulations that provide fast-acting and sustained support using scientifically and clinically studied
                ingredients.
              </p>
              <Button variant="link" className="text-white hover:text-white/80 p-0 h-auto">
                Shop All →
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 px-6 bg-[#f5f3ed]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Badge className="mb-4 bg-[#d4e5c7] text-[#2d4a3a] hover:bg-[#d4e5c7]">Bundle + Save 25%</Badge>
              <h2 className="text-4xl md:text-5xl font-light text-[#2d4a3a] mb-6 text-balance">
                Daily essentials for nutrition and gut health.
              </h2>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img src="/seed-probiotic-bottle-dark-green-sage-color-produc.jpg" alt="Seed Products" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
