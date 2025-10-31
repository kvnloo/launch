import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  badge: string
  tag: string
  price: string
  isNew: boolean
}

export function ProductCard({ name, badge, tag, price, isNew }: ProductCardProps) {
  return (
    <div className="group relative rounded-3xl backdrop-blur-md bg-card/50 hover:bg-card/70 border border-border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Glass morphism overlay - dark mode */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <Badge
            variant={isNew ? "secondary" : "default"}
            className={
              isNew
                ? "bg-primary/20 text-foreground hover:bg-primary/30 backdrop-blur-sm"
                : "bg-secondary text-secondary-foreground hover:bg-secondary"
            }
          >
            {badge}
          </Badge>
          <Badge variant="outline" className="border-border text-muted-foreground backdrop-blur-sm">
            {tag}
          </Badge>
        </div>

        {/* Product Image */}
        <div className="aspect-square mb-6 flex items-center justify-center">
          <div className="w-full h-full rounded-2xl bg-muted/50 backdrop-blur-sm" />
        </div>

        {/* Product Info */}
        <h3 className="text-xl font-light text-foreground mb-4 text-balance">{name}</h3>

        <Button className="w-full backdrop-blur-md bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mb-3 transition-all">
          Shop Now
        </Button>

        <Button
          variant="outline"
          className="w-full backdrop-blur-md border-border text-foreground hover:bg-muted hover:text-foreground rounded-full mb-3 transition-all bg-transparent"
        >
          Learn More
        </Button>

        <p className="text-sm text-muted-foreground text-center">Starting at {price} per month</p>
      </div>
    </div>
  )
}
