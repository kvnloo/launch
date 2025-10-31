import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8ebe8] via-[#d8dcd8] to-[#c8ccc8]" />

      {/* Product Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%] opacity-90">
        <img src="/seed-probiotic-bottle-tilted-dark-green-sage-color.jpg" alt="Seed Probiotic Bottle" className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light text-[#2d4a3a] mb-6 leading-tight text-balance">
            The probiotic pioneering the future of gut health.
          </h1>
          <p className="text-lg text-[#2d4a3a]/80 mb-8 max-w-lg text-balance">
            DS-01® Daily Synbiotic is clinically proven to deliver relief from bloating, gas, and irregularity.*
          </p>
          <Button className="backdrop-blur-md bg-white/70 hover:bg-white/90 text-[#2d4a3a] border border-white/40 shadow-lg rounded-full px-8 py-6 text-base transition-all">
            Is DS-01® right for you?
          </Button>
        </div>
      </div>

      {/* Pause button (decorative) */}
      <button className="absolute bottom-8 right-8 w-12 h-12 rounded-full backdrop-blur-md bg-white/40 hover:bg-white/60 border border-white/40 flex items-center justify-center transition-all">
        <div className="flex gap-1">
          <div className="w-1 h-3 bg-[#2d4a3a]/60 rounded-full" />
          <div className="w-1 h-3 bg-[#2d4a3a]/60 rounded-full" />
        </div>
      </button>
    </section>
  )
}
