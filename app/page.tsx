import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { NavDropdown } from "@/components/nav-dropdown"
import { Search, ShoppingCart, User } from "lucide-react"

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

  const shopItems = [
    {
      id: "ds-01",
      name: "Daily Synbiotic",
      code: "DS-01®",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
    },
    {
      id: "dm-02",
      name: "Daily Multivitamin",
      code: "DM-02™",
      image: "/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg",
    },
    {
      id: "duo",
      name: "Daily Essentials Duo",
      code: "Bundle",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
      badge: "Save 25%",
    },
    {
      id: "am-02",
      name: "Energy + Focus",
      code: "AM-02™",
      image: "/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg",
    },
    {
      id: "pm-02",
      name: "Sleep + Restore",
      code: "PM-02™",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
    },
    {
      id: "pds-08",
      name: "Pediatric Daily Synbiotic",
      code: "PDS-08®",
      image: "/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg",
    },
    {
      id: "vs-01",
      name: "Vaginal Synbiotic",
      code: "VS-01™",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
    },
  ]

  const scienceItems = [
    {
      id: "research",
      name: "Research & Development",
      code: "R&D",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
    },
    {
      id: "clinical",
      name: "Clinical Studies",
      code: "Studies",
      image: "/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg",
    },
  ]

  const learnItems = [
    {
      id: "gut-health",
      name: "Gut Health 101",
      code: "Learn",
      image: "/seed-probiotic-bottle-dark-green-sage-color-produc.jpg",
    },
    {
      id: "microbiome",
      name: "The Microbiome",
      code: "Learn",
      image: "/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-baseline gap-0">
              <span className="font-medium text-white">zer</span>
              <div className="w-2 h-2 rounded-full bg-white -mb-[3px]" />
            </div>
            {/* </CHANGE> */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <NavDropdown trigger="Products" items={shopItems} />
              <NavDropdown trigger="Services" items={scienceItems} />
              <NavDropdown trigger="Learn" items={learnItems} />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-white hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:opacity-70 transition-opacity" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-white hover:opacity-70 transition-opacity" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen w-full overflow-hidden bg-[#d8dcd8]">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/seed-probiotic-bottle-rotating-slowly-on-light-sag.jpg" type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight text-balance">
                The probiotic pioneering the future of gut health.
              </h1>
              <p className="text-white/90 text-lg mb-8 text-balance">
                DS-01® Daily Synbiotic is clinically proven to deliver relief from bloating, gas, and irregularity.*
              </p>
              <Button className="bg-white text-[#1a3a2a] hover:bg-white/90 rounded-full px-8 py-6 text-base">
                Is DS-01® right for you?
              </Button>
            </div>
          </div>
        </div>

        {/* Pause Button */}
        <button
          className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Pause video"
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="4" height="14" fill="currentColor" />
            <rect x="8" width="4" height="14" fill="currentColor" />
          </svg>
        </button>
      </section>

      <section className="py-20 px-6 bg-[#1a3a2a]">
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

      <section className="py-20 px-6 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Badge className="mb-4 bg-[#c8d9b8] text-[#1a3a2a] hover:bg-[#c8d9b8] border-0">Bundle + Save 25%</Badge>
              <h2 className="text-4xl md:text-5xl font-light text-[#1a3a2a] mb-6 text-balance">
                Daily essentials for nutrition and gut health.
              </h2>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img
                  src="/seed-probiotic-bottle-dark-green-sage-color-produc.jpg"
                  alt="Seed Products"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
