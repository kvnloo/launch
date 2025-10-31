# Component Library Documentation

**Last Updated**: 2025-10-30
**Framework**: Next.js 16 + React 19 + Radix UI
**Styling**: Tailwind CSS 4 + class-variance-authority

---

## 📋 Table of Contents

- [Component Overview](#component-overview)
- [Custom Components](#custom-components)
- [UI Primitives](#ui-primitives)
- [Usage Patterns](#usage-patterns)
- [Styling System](#styling-system)

---

## 🎨 Component Overview

### Component Structure

```
components/
├── ui/                    # Radix UI primitives
│   ├── badge.tsx
│   └── button.tsx
├── hero-section.tsx       # Landing page hero
├── nav-dropdown.tsx       # Navigation dropdown
├── product-card.tsx       # Product display card
└── theme-provider.tsx     # Dark mode provider
```

### Component Categories

1. **Custom Components**: Brand-specific implementations
2. **UI Primitives**: Radix UI-based building blocks
3. **Layout Components**: Page structure components
4. **Utility Components**: Theme, providers, etc.

---

## 🔧 Custom Components

### HeroSection

**Location**: `components/hero-section.tsx`
**Purpose**: Landing page hero with CTA

```typescript
import { HeroSection } from '@/components/hero-section'

<HeroSection />
```

**Features**:
- Responsive layout
- Dark mode support
- Call-to-action buttons
- Gradient background

**Props**: None (currently static)

---

### NavDropdown

**Location**: `components/nav-dropdown.tsx`
**Purpose**: Navigation dropdown menu

```typescript
import { NavDropdown } from '@/components/nav-dropdown'

<NavDropdown />
```

**Features**:
- Radix UI dropdown menu primitive
- Mobile responsive
- Keyboard navigation
- Dark mode support

**Structure**:
```typescript
NavDropdown
├── Trigger (button)
└── Content (dropdown)
    ├── Item (link/action)
    ├── Item
    └── Item
```

---

### ProductCard

**Location**: `components/product-card.tsx`
**Purpose**: Display product information

```typescript
import { ProductCard } from '@/components/product-card'

<ProductCard
  title="Product Name"
  description="Product description"
  image="/path/to/image.jpg"
  price="$99.99"
/>
```

**Props**:
```typescript
interface ProductCardProps {
  title: string
  description: string
  image: string
  price: string
  badge?: string
}
```

**Features**:
- Image optimization
- Responsive design
- Optional badge
- Hover effects

---

### ThemeProvider

**Location**: `components/theme-provider.tsx`
**Purpose**: Dark mode context provider

```typescript
import { ThemeProvider } from '@/components/theme-provider'

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
>
  {children}
</ThemeProvider>
```

**Props**:
```typescript
interface ThemeProviderProps {
  attribute?: 'class' | 'data-theme'
  defaultTheme?: 'light' | 'dark' | 'system'
  enableSystem?: boolean
  children: React.ReactNode
}
```

**Usage with next-themes**:
```typescript
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

---

## 🧩 UI Primitives

### Badge

**Location**: `components/ui/badge.tsx`
**Purpose**: Display status or category labels

```typescript
import { Badge } from '@/components/ui/badge'

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

**Variants**:
- `default`: Primary badge style
- `secondary`: Secondary/muted badge
- `destructive`: Error/warning badge
- `outline`: Outlined badge

**Props**:
```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
  children: React.ReactNode
}
```

---

### Button

**Location**: `components/ui/button.tsx`
**Purpose**: Interactive button component

```typescript
import { Button } from '@/components/ui/button'

<Button variant="default" size="default">
  Click Me
</Button>
```

**Variants**:
- `default`: Primary button
- `destructive`: Danger/delete button
- `outline`: Outlined button
- `secondary`: Secondary button
- `ghost`: Minimal button
- `link`: Link-styled button

**Sizes**:
- `default`: Standard size
- `sm`: Small button
- `lg`: Large button
- `icon`: Icon-only button

**Props**:
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  className?: string
  children: React.ReactNode
}
```

**As Child Pattern**:
```typescript
// Render as Next.js Link
<Button asChild>
  <Link href="/about">About</Link>
</Button>
```

---

## 💡 Usage Patterns

### Pattern 1: Variant-Based Styling

```typescript
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### Pattern 2: Composition

```typescript
// Compose components together
<Card>
  <CardHeader>
    <CardTitle>Product</CardTitle>
  </CardHeader>
  <CardContent>
    <ProductCard {...props} />
  </CardContent>
  <CardFooter>
    <Button>Buy Now</Button>
  </CardFooter>
</Card>
```

### Pattern 3: Polymorphic Components

```typescript
// Button that renders as different elements
<Button asChild>
  <a href="https://example.com">External Link</a>
</Button>

<Button asChild>
  <Link href="/internal">Internal Link</Link>
</Button>
```

### Pattern 4: Theme-Aware Components

```typescript
function ThemedComponent() {
  return (
    <div className="bg-background text-foreground">
      <h1 className="text-primary">Title</h1>
      <p className="text-muted-foreground">Description</p>
    </div>
  )
}
```

---

## 🎨 Styling System

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        // ... more colors
      },
    },
  },
}
```

### CSS Variables

```css
/* app/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Utility Function

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage**:
```typescript
<div className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  className
)}>
  Content
</div>
```

---

## 📚 Component Development Guide

### Creating New Components

1. **Choose Base**: Start with Radix UI primitive or custom
2. **Define Variants**: Use `class-variance-authority`
3. **Add Types**: TypeScript interfaces for props
4. **Style**: Tailwind classes with `cn()` utility
5. **Document**: Add to this documentation

### Example Template

```typescript
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size",
        sm: "small-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

Component.displayName = 'Component'

export { Component, componentVariants }
```

---

## 🔗 Related Documentation

- [Project Overview](./PROJECT_OVERVIEW.md) - Architecture overview
- [Styling Guide](./STYLING.md) - Design system details
- [Development Workflow](./DEVELOPMENT_WORKFLOW.md) - Development patterns
- [Radix UI Docs](https://www.radix-ui.com/) - Component primitives
- [Tailwind CSS Docs](https://tailwindcss.com/) - Styling framework

---

**Next Steps**:
- Explore [Styling Guide](./STYLING.md) for design system
- See [Development Workflow](./DEVELOPMENT_WORKFLOW.md) for component development patterns
