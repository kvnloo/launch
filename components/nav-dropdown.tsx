"use client"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"

interface DropdownItem {
  id: string
  name: string
  code: string
  image: string
  badge?: string
}

interface NavDropdownProps {
  trigger: string
  items: DropdownItem[]
}

export function NavDropdown({ trigger, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    // Add small delay before closing to allow mouse movement to dropdown
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="#"
        className="text-foreground px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-primary/10 inline-block"
      >
        {trigger}
      </a>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] animate-dropdown-appear dropdown-blur rounded-2xl shadow-2xl p-6 border border-border">
          <div className="space-y-4">
            {items.map((item) => (
              <a key={item.id} href="#" className="flex items-center gap-3 group hover:brightness-110 transition-all">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-primary/20">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-muted-foreground font-light">{item.code}</span>
                    {item.badge && (
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary border-0 text-[10px] px-2 py-0 h-5">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-foreground font-medium">{item.name}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="flex items-center justify-between mt-6 pt-4 border-t border-border text-sm text-foreground hover:opacity-70 transition-opacity group"
          >
            <span>Shop All Products</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </div>
  )
}
