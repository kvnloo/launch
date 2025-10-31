"use client"

import { useState } from "react"
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

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a href="#" className="text-white hover:opacity-70 transition-opacity">
        {trigger}
      </a>

      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-[300px] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-[#c8c6be]/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">
            <div className="space-y-4">
              {items.map((item) => (
                <a key={item.id} href="#" className="flex items-center gap-3 group hover:brightness-110 transition-all">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/20">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-white/70 font-light">{item.code}</span>
                      {item.badge && (
                        <Badge className="bg-[#c4d96f] text-[#1a3a2a] hover:bg-[#c4d96f] border-0 text-[10px] px-2 py-0 h-5">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-white font-medium">{item.name}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-between mt-6 pt-4 border-t border-white/10 text-sm text-white hover:opacity-70 transition-opacity group"
            >
              <span>Shop All Products</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
