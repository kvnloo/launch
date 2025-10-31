# UI Design Analysis Workflow for Claude Code

**Version:** 1.0
**Last Updated:** 2025-10-31
**Purpose:** Comprehensive methodology for analyzing and extracting design systems from websites

---

## Table of Contents

1. [Overview](#overview)
2. [Screenshot Analysis vs Live Inspection](#screenshot-analysis-vs-live-inspection)
3. [Color Extraction Methodologies](#color-extraction-methodologies)
4. [Design Token Mapping](#design-token-mapping)
5. [Workflow Steps](#workflow-steps)
6. [Tools & Resources](#tools--resources)
7. [Best Practices](#best-practices)

---

## Overview

This workflow provides a systematic approach to analyzing website UI designs and extracting design systems for migration or replication. It combines automated tooling with manual inspection to ensure accuracy and completeness.

### Key Principles

- **Evidence-based extraction**: All design decisions must be verifiable through inspection
- **Automated where possible**: Use tooling to reduce manual effort and human error
- **Token-first approach**: Extract reusable design tokens before component-specific styles
- **Accessibility verification**: Ensure color contrast and accessibility requirements are met

---

## Screenshot Analysis vs Live Inspection

### When to Use Screenshot Analysis

**Advantages:**
- ✅ Quick visual reference for layout and composition
- ✅ Static snapshot for documentation and comparison
- ✅ Useful for visual regression testing across builds
- ✅ Works for sites behind authentication or with complex state
- ✅ Cross-browser consistency verification

**Limitations:**
- ❌ Only captures 57% of usability problems (43% come from inter-page interactions)
- ❌ AI analysis identifies only 24% of issues, missing 76%
- ❌ Cannot inspect computed styles or DOM structure
- ❌ Misses responsive behavior and animations
- ❌ No access to actual color values or measurements

**Best For:**
- Initial layout assessment
- Visual documentation
- Stakeholder presentations
- Cross-device comparison
- Regression testing

### When to Use Live Website Inspection

**Advantages:**
- ✅ Access to computed CSS values and actual color codes
- ✅ Interactive testing of hover states, animations, transitions
- ✅ Responsive behavior across breakpoints
- ✅ DOM structure and semantic HTML inspection
- ✅ Network analysis for asset loading
- ✅ Performance profiling capabilities
- ✅ Direct color picking from rendered elements

**Limitations:**
- ❌ Requires website to be accessible/deployed
- ❌ May need authentication for restricted areas
- ❌ Time-consuming for detailed analysis
- ❌ Results vary by browser and device

**Best For:**
- Design token extraction
- Color palette generation
- Typography specifications
- Spacing/sizing measurements
- Interactive state documentation
- Animation specifications

### Recommended Hybrid Approach

**Phase 1: Screenshot Analysis**
1. Capture full-page screenshots at key breakpoints (mobile, tablet, desktop)
2. Document layout patterns and component hierarchy
3. Identify visual inconsistencies across pages
4. Create initial component inventory

**Phase 2: Live Inspection**
5. Extract actual color values using DevTools
6. Measure spacing, sizing, and typography values
7. Document interactive states (hover, focus, active)
8. Verify responsive breakpoints
9. Test accessibility (contrast, keyboard navigation)

---

## Color Extraction Methodologies

### Manual Extraction with Browser DevTools

**Chrome DevTools Color Picker:**

1. **Access Method:**
   - Right-click element → Inspect
   - Navigate to Styles tab
   - Click color square next to any color value

2. **Features:**
   - Eyedropper tool for sampling any page color
   - Format conversion (HEX, RGBA, HSLA, OKLCH)
   - Page colors palette (auto-generated from stylesheets)
   - Material Design palette integration
   - Contrast ratio testing for accessibility

3. **Workflow:**
   ```
   Inspect element → Styles tab → Color square → Eyedropper
   → Sample color → Convert format → Document value
   ```

4. **Best Practices:**
   - Sample colors from multiple elements to verify consistency
   - Check computed styles for actual rendered colors
   - Test color contrast ratios (WCAG AA/AAA compliance)
   - Document both light and dark mode variants

### Automated Color Extraction Tools

#### Chromata (Recommended)
- **URL:** https://chromata.app/
- **Features:**
  - Instant color palette extraction
  - Typography analysis
  - Export formats: Tailwind CSS, HEX, RGB, HSL, OKLCH
  - Complete design token generation

- **Usage:**
  ```bash
  # Web-based tool - paste URL and extract
  # Exports directly to CSS variables or design token JSON
  ```

#### Extract Color Palettes
- **URL:** https://extractcolorpalettes.com/
- **Features:**
  - WCAG accessibility compliance checking
  - Detailed contrast ratios
  - Multiple export formats:
    - CSS variables
    - SCSS
    - JSON
    - Figma libraries
    - Adobe Creative Suite swatches
    - Tailwind CSS classes

#### Superposition
- **Platform:** MacOS, Windows, Linux (free)
- **Features:**
  - Full design token extraction
  - Export to CSS, SCSS, JavaScript
  - Figma and Adobe XD integration

#### Colorize.design
- **Features:**
  - Parses CSS, HTML, JS files
  - Intelligent color grouping and naming
  - Export formats:
    - CSS custom properties
    - SASS/SCSS variables
    - Design tool palettes

### Extraction Workflow

**Step 1: Automated Extraction**
```bash
# Use Chromata or Extract Color Palettes
1. Visit extraction tool website
2. Enter target website URL
3. Generate color palette
4. Export to CSS variables format
5. Save to project as design-tokens/colors.css
```

**Step 2: Manual Verification**
```bash
# Using Chrome DevTools
1. Open target website
2. Inspect key UI elements:
   - Primary/secondary buttons
   - Navigation elements
   - Text content (headings, body)
   - Backgrounds and surfaces
   - Borders and dividers
3. Use eyedropper to verify extracted colors
4. Document any missing or inconsistent colors
```

**Step 3: Color System Organization**
```css
/* Organize by function, not appearance */
:root {
  /* Brand colors */
  --color-primary: #...;
  --color-secondary: #...;

  /* Semantic colors */
  --color-success: #...;
  --color-warning: #...;
  --color-error: #...;
  --color-info: #...;

  /* Neutral colors */
  --color-background: #...;
  --color-surface: #...;
  --color-border: #...;

  /* Text colors */
  --color-text-primary: #...;
  --color-text-secondary: #...;
  --color-text-disabled: #...;
}
```

---

## Design Token Mapping

### What Are Design Tokens?

Design tokens are named entities that store visual design attributes in a platform-agnostic format. They create a single source of truth for design decisions across design tools and codebases.

### Token Categories

1. **Color Tokens**
   - Brand colors
   - Semantic colors
   - Neutral/grayscale
   - State colors (hover, active, disabled)

2. **Typography Tokens**
   - Font families
   - Font sizes
   - Font weights
   - Line heights
   - Letter spacing

3. **Spacing Tokens**
   - Margin/padding scales
   - Gap/grid spacing
   - Component spacing

4. **Sizing Tokens**
   - Width/height scales
   - Icon sizes
   - Border radius values

5. **Shadow Tokens**
   - Box shadows
   - Text shadows
   - Elevation levels

6. **Animation Tokens**
   - Duration values
   - Easing functions
   - Transition properties

### Token Naming Conventions (2024 Best Practice)

**Structure:** `[Component]-[Variant]-[Kind]-[Modifier]-[Property]`

**Examples:**
```css
/* ✅ Good: Clear hierarchy and purpose */
--button-primary-background-default
--button-primary-background-hover
--button-secondary-border-focus
--card-elevated-shadow-level-2

/* ❌ Bad: Ambiguous or appearance-based */
--blue-color
--big-shadow
--btn-bg
```

**Simplified Structure for Core Tokens:**
```css
/* Tier 1: Base tokens (raw values) */
--color-blue-500: #3b82f6;
--spacing-4: 1rem;
--font-size-base: 16px;

/* Tier 2: Semantic tokens (functional naming) */
--color-primary: var(--color-blue-500);
--spacing-component-gap: var(--spacing-4);
--text-body-size: var(--font-size-base);

/* Tier 3: Component tokens (specific usage) */
--button-primary-background: var(--color-primary);
--card-gap: var(--spacing-component-gap);
--paragraph-size: var(--text-body-size);
```

### CSS Variables Integration

**Best Practices (2024):**

1. **Always define in CSS files, not just config:**
   ```css
   /* ✅ Correct: Define in CSS */
   :root {
     --color-primary: #3b82f6;
   }

   /* Then reference in components */
   .button {
     background: var(--color-primary);
   }
   ```

2. **Use fallback values for safety:**
   ```css
   .button {
     background: var(--color-primary, #3b82f6);
   }
   ```

3. **Organize by token collections:**
   ```css
   /* colors.css */
   :root {
     /* Color tokens */
   }

   /* typography.css */
   :root {
     /* Typography tokens */
   }

   /* spacing.css */
   :root {
     /* Spacing tokens */
   }
   ```

4. **Support theme modes:**
   ```css
   :root {
     --color-background: white;
     --color-text: black;
   }

   [data-theme="dark"] {
     --color-background: black;
     --color-text: white;
   }
   ```

### Token Generation Tools

#### Token CSS
- **URL:** https://tokencss.com/
- **Features:**
  - Define tokens in JSON format
  - Automatic conversion to CSS custom properties
  - Seamless development integration

#### Style Dictionary (Industry Standard)
- **GitHub:** https://github.com/amzn/style-dictionary
- **Features:**
  - Multi-platform export (CSS, SCSS, JSON, JS, etc.)
  - Token transformation pipeline
  - Custom format support
  - Integration with design tools

**Example workflow:**
```json
// tokens.json
{
  "color": {
    "primary": {
      "value": "#3b82f6"
    }
  }
}
```

```bash
# Transform to CSS
npx style-dictionary build

# Output: design-tokens.css
:root {
  --color-primary: #3b82f6;
}
```

---

## Workflow Steps

### Phase 1: Discovery & Documentation

**1.1 Initial Assessment**
- [ ] Capture screenshots at all breakpoints (320px, 768px, 1024px, 1440px+)
- [ ] Document pages/views to analyze
- [ ] Identify component patterns (buttons, cards, forms, navigation)
- [ ] Note interactive elements requiring state documentation

**1.2 Component Inventory**
- [ ] Create spreadsheet/document listing:
  - Component names
  - Usage locations
  - Variants (size, color, state)
  - Interactive behaviors
  - Responsive adaptations

### Phase 2: Automated Extraction

**2.1 Color Extraction**
```bash
# Using Chromata or Extract Color Palettes
1. Enter target website URL in extraction tool
2. Generate color palette
3. Export to CSS variables format
4. Save to: design-tokens/colors.css
5. Verify accessibility compliance (contrast ratios)
```

**2.2 Typography Extraction**
```bash
# Using Chromata or manual DevTools inspection
1. Extract font families, sizes, weights
2. Document line heights and letter spacing
3. Note responsive typography changes
4. Save to: design-tokens/typography.css
```

**2.3 Spacing & Sizing**
```bash
# Manual DevTools inspection required
1. Measure padding/margin patterns
2. Identify spacing scale (4px, 8px, 16px, etc.)
3. Document component sizing variants
4. Save to: design-tokens/spacing.css
```

### Phase 3: Manual Verification

**3.1 Live Inspection with DevTools**
```bash
# For each major component:
1. Right-click → Inspect
2. Check Computed styles tab
3. Document:
   - Actual color values (not inherited)
   - Spacing values (margin, padding)
   - Typography (computed font properties)
   - Borders, shadows, radius
4. Test interactive states:
   - :hover
   - :focus
   - :active
   - :disabled
5. Verify responsive behavior at breakpoints
```

**3.2 Color Verification**
```bash
# Using Chrome DevTools Color Picker:
1. Inspect element with color
2. Click color square in Styles tab
3. Use eyedropper to sample page colors
4. Verify against extracted palette
5. Add missing colors to design-tokens/colors.css
6. Check contrast ratios for accessibility
```

### Phase 4: Token Organization

**4.1 Create Token Structure**
```
design-tokens/
├── colors.css          # Color palette
├── typography.css      # Font tokens
├── spacing.css         # Spacing scale
├── sizing.css          # Width/height scales
├── shadows.css         # Shadow tokens
├── borders.css         # Border radius, width
├── animations.css      # Duration, easing
└── index.css           # Master import file
```

**4.2 Token Naming**
```css
/* Follow tier system:
   Tier 1: Base values (raw)
   Tier 2: Semantic tokens (functional)
   Tier 3: Component tokens (specific usage)
*/

/* colors.css */
:root {
  /* Tier 1: Base colors */
  --color-blue-500: #3b82f6;
  --color-gray-900: #111827;

  /* Tier 2: Semantic */
  --color-primary: var(--color-blue-500);
  --color-text-primary: var(--color-gray-900);

  /* Tier 3: Component */
  --button-primary-background: var(--color-primary);
}
```

### Phase 5: Validation & Testing

**5.1 Visual Comparison**
- [ ] Build test page with extracted tokens
- [ ] Compare side-by-side with original site
- [ ] Verify color accuracy
- [ ] Check spacing/sizing consistency
- [ ] Test responsive behavior

**5.2 Accessibility Audit**
```bash
# Using Chrome DevTools:
1. Open Lighthouse tab
2. Run accessibility audit
3. Verify color contrast ratios (WCAG AA/AAA)
4. Check keyboard navigation
5. Test screen reader compatibility
```

**5.3 Cross-Browser Testing**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Phase 6: Documentation

**6.1 Design System Documentation**
```markdown
# Create design-system.md:
- Color palette with usage guidelines
- Typography scale with examples
- Spacing system with visual scale
- Component specifications
- Token reference guide
- Accessibility compliance notes
```

**6.2 Implementation Guide**
```markdown
# Create implementation.md:
- How to use design tokens
- CSS variable fallback patterns
- Theme switching implementation
- Component usage examples
- Migration checklist
```

---

## Tools & Resources

### Extraction Tools

| Tool | Type | Best For | URL |
|------|------|----------|-----|
| **Chromata** | Web | Color + Typography | https://chromata.app/ |
| **Extract Color Palettes** | Web | Color + Accessibility | https://extractcolorpalettes.com/ |
| **Superposition** | Desktop | Full Design Tokens | https://superposition.design/ |
| **Token CSS** | CLI/Web | Token Management | https://tokencss.com/ |
| **Style Dictionary** | CLI | Token Transformation | https://github.com/amzn/style-dictionary |

### Browser DevTools

| Tool | Best For |
|------|----------|
| Chrome DevTools | Color picker, computed styles, performance |
| Firefox DevTools | CSS Grid/Flexbox inspector, accessibility |
| Safari Web Inspector | Safari-specific testing |
| Edge DevTools | Same as Chrome, accessibility insights |

### Testing Tools

| Tool | Purpose | URL |
|------|---------|-----|
| Percy | Visual regression testing | https://percy.io/ |
| Happo | Screenshot comparison | https://happo.io/ |
| BackstopJS | Visual regression | https://github.com/garris/BackstopJS |
| Chromatic | Storybook visual testing | https://www.chromatic.com/ |

### Figma Integration

| Tool | Purpose | URL |
|------|---------|-----|
| Tokens Studio | Design token automation | https://tokens.studio/ |
| TokToken | Token extraction plugin | Figma Community |
| Figma Token Exporter | Variable export | Figma Community |
| Handoff | Design-to-code handoff | https://github.com/Convertiv/handoff-app |

---

## Best Practices

### Color Extraction

**DO:**
- ✅ Use automated tools first, verify manually second
- ✅ Organize colors by function (primary, secondary, semantic)
- ✅ Check contrast ratios for accessibility (WCAG AA: 4.5:1 text, 3:1 UI)
- ✅ Document both light and dark mode variants
- ✅ Use OKLCH color space for modern color management
- ✅ Extract colors from computed styles, not source CSS

**DON'T:**
- ❌ Name colors by appearance (blue-color, dark-gray)
- ❌ Sample colors from images or gradients without verification
- ❌ Ignore state variations (hover, focus, disabled)
- ❌ Skip accessibility testing
- ❌ Mix color formats (use one: HEX, RGB, or OKLCH)

### Design Token Management

**DO:**
- ✅ Use three-tier token system (base → semantic → component)
- ✅ Define tokens in CSS files, not just config
- ✅ Provide fallback values for all CSS variables
- ✅ Version control your token files
- ✅ Document token usage and constraints
- ✅ Use consistent naming conventions across team

**DON'T:**
- ❌ Hard-code values in components
- ❌ Create overly specific token names
- ❌ Mix token sources (choose one system)
- ❌ Skip documentation updates
- ❌ Over-tokenize (balance granularity with maintainability)

### Typography

**DO:**
- ✅ Extract font families with fallback stacks
- ✅ Document font loading strategy (self-hosted vs CDN)
- ✅ Create type scale (consistent size relationships)
- ✅ Include line-height and letter-spacing
- ✅ Test typography at all breakpoints
- ✅ Consider variable fonts for flexibility

**DON'T:**
- ❌ Use too many font families (2-3 max)
- ❌ Ignore font licensing for self-hosting
- ❌ Skip web font optimization
- ❌ Use fixed pixel sizes without responsive scaling
- ❌ Forget to test font rendering across browsers

### Spacing & Layout

**DO:**
- ✅ Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, etc.)
- ✅ Measure from DevTools computed styles
- ✅ Document responsive spacing changes
- ✅ Use rem/em for scalable spacing
- ✅ Create gap tokens for consistent spacing

**DON'T:**
- ❌ Use arbitrary spacing values
- ❌ Mix spacing units (px, rem, em) without purpose
- ❌ Ignore responsive spacing adjustments
- ❌ Skip layout system documentation (grid, flex)

### Workflow Efficiency

**DO:**
- ✅ Use parallel operations (batch all reads, writes, todos)
- ✅ Automate extraction where possible
- ✅ Create reusable templates for documentation
- ✅ Version control all extracted assets
- ✅ Use TodoWrite to track progress
- ✅ Save all documentation to appropriate subdirectories

**DON'T:**
- ❌ Perform operations sequentially when parallel is possible
- ❌ Save working files to project root
- ❌ Skip verification steps
- ❌ Ignore accessibility requirements
- ❌ Over-engineer the token system

### Testing & Validation

**DO:**
- ✅ Build comparison test pages
- ✅ Test all interactive states
- ✅ Verify responsive behavior
- ✅ Run accessibility audits
- ✅ Cross-browser test
- ✅ Document any deviations from original

**DON'T:**
- ❌ Assume extraction is perfect without verification
- ❌ Skip accessibility testing
- ❌ Ignore edge cases and error states
- ❌ Test only in one browser
- ❌ Skip documentation updates

---

## Checklist: Complete UI Analysis

### Pre-Analysis
- [ ] Target website URL documented
- [ ] Screenshots captured at all breakpoints
- [ ] Component inventory created
- [ ] Required tools installed/accessible
- [ ] Project structure created (`design-tokens/`, `claudedocs/`)

### Extraction Phase
- [ ] Automated color extraction completed
- [ ] Typography tokens extracted
- [ ] Spacing/sizing tokens documented
- [ ] Shadow/border tokens extracted
- [ ] Animation tokens documented

### Verification Phase
- [ ] Colors verified with DevTools
- [ ] Typography verified with DevTools
- [ ] Spacing measured with DevTools
- [ ] Interactive states documented
- [ ] Responsive behavior tested
- [ ] Accessibility checked (WCAG AA/AAA)

### Organization Phase
- [ ] Tokens organized by category
- [ ] Consistent naming conventions applied
- [ ] Three-tier token system implemented
- [ ] CSS variables created with fallbacks
- [ ] Theme mode support added (if applicable)

### Testing Phase
- [ ] Test page built with extracted tokens
- [ ] Visual comparison completed
- [ ] Cross-browser testing completed
- [ ] Accessibility audit passed
- [ ] Performance tested

### Documentation Phase
- [ ] Design system documentation created
- [ ] Implementation guide created
- [ ] Token reference guide created
- [ ] Migration checklist created
- [ ] All files saved to appropriate directories

---

## Example: Complete Workflow

### Scenario: Analyzing a SaaS Dashboard

**Step 1: Discovery (10 minutes)**
```bash
# Capture screenshots
- Homepage: 320px, 768px, 1440px
- Dashboard: 768px, 1440px
- Settings page: 768px, 1440px

# Document components:
- Navigation bar (header)
- Sidebar navigation
- Dashboard cards
- Data tables
- Forms (login, settings)
- Buttons (primary, secondary, ghost)
- Modals
```

**Step 2: Automated Extraction (5 minutes)**
```bash
# Using Chromata:
1. Visit https://chromata.app/
2. Enter: https://example-saas.com
3. Extract color palette → Export to CSS
4. Extract typography → Export to CSS
5. Save to: design-tokens/colors.css, design-tokens/typography.css
```

**Step 3: Manual Verification (20 minutes)**
```bash
# Using Chrome DevTools:
1. Open https://example-saas.com
2. Inspect primary button:
   - Background: #3b82f6 (matches extraction ✓)
   - Hover: #2563eb (add to tokens)
   - Focus ring: #93c5fd (add to tokens)
   - Padding: 12px 24px (add to spacing tokens)
   - Border radius: 8px (add to border tokens)

3. Inspect typography:
   - Heading 1: 36px/1.2, font-weight: 700
   - Body: 16px/1.5, font-weight: 400
   - Font family: 'Inter', sans-serif

4. Test responsive:
   - Mobile breakpoint: 768px
   - Desktop breakpoint: 1024px
   - Layout shifts verified
```

**Step 4: Token Organization (15 minutes)**
```css
/* design-tokens/colors.css */
:root {
  /* Base */
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-200: #93c5fd;

  /* Semantic */
  --color-primary: var(--color-blue-500);
  --color-primary-hover: var(--color-blue-600);
  --color-focus-ring: var(--color-blue-200);

  /* Component */
  --button-primary-background: var(--color-primary);
  --button-primary-background-hover: var(--color-primary-hover);
  --button-focus-ring: var(--color-focus-ring);
}

/* design-tokens/spacing.css */
:root {
  --spacing-3: 12px;
  --spacing-6: 24px;
  --button-padding-y: var(--spacing-3);
  --button-padding-x: var(--spacing-6);
}

/* design-tokens/borders.css */
:root {
  --radius-md: 8px;
  --button-radius: var(--radius-md);
}
```

**Step 5: Validation (10 minutes)**
```html
<!-- test.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="design-tokens/colors.css">
  <link rel="stylesheet" href="design-tokens/spacing.css">
  <link rel="stylesheet" href="design-tokens/borders.css">
  <style>
    .button-primary {
      background: var(--button-primary-background);
      padding: var(--button-padding-y) var(--button-padding-x);
      border-radius: var(--button-radius);
      border: none;
      color: white;
      cursor: pointer;
    }
    .button-primary:hover {
      background: var(--button-primary-background-hover);
    }
    .button-primary:focus {
      outline: 2px solid var(--button-focus-ring);
    }
  </style>
</head>
<body>
  <button class="button-primary">Test Button</button>
  <!-- Compare with original site button -->
</body>
</html>
```

**Step 6: Documentation (15 minutes)**
```markdown
<!-- design-system.md -->
# SaaS Dashboard Design System

## Colors
Primary: #3b82f6 (Blue 500)
- Usage: Primary actions, links
- Hover: #2563eb
- Contrast ratio: 4.5:1 (WCAG AA compliant)

## Typography
Headings: Inter, 700
Body: Inter, 400
Scale: 16px base, 1.25 ratio

## Spacing
Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
Button padding: 12px 24px

## Components
### Primary Button
- Background: var(--button-primary-background)
- Hover: var(--button-primary-background-hover)
- Padding: 12px 24px
- Border radius: 8px
```

**Total Time: ~75 minutes for complete extraction and documentation**

---

## Troubleshooting

### Issue: Colors don't match extracted palette

**Solution:**
1. Use DevTools Color Picker eyedropper to sample directly
2. Check Computed styles tab (not Styles) for actual rendered values
3. Verify no filters, opacity, or blend modes affecting color
4. Check for dark mode or theme variations

### Issue: Spacing seems inconsistent

**Solution:**
1. Check Computed styles for actual margins/padding
2. Look for responsive spacing changes at breakpoints
3. Verify box-sizing model (border-box vs content-box)
4. Check for inherited spacing from parent elements

### Issue: Typography doesn't render correctly

**Solution:**
1. Verify font files are accessible (check Network tab)
2. Check font-family fallback stack
3. Verify font weights are available (not all fonts have all weights)
4. Check for font-display settings affecting loading

### Issue: Automated extraction misses colors

**Solution:**
1. Extraction tools only scan stylesheets, not computed styles
2. Use manual DevTools inspection for:
   - Dynamic colors (JavaScript-generated)
   - Pseudo-elements (::before, ::after)
   - State-dependent colors (hover, focus)
   - Colors from images or gradients

---

## Advanced Techniques

### Extracting Animation Tokens

```javascript
// Use DevTools Performance tab:
1. Record interaction (e.g., button click)
2. Identify animation in timeline
3. Inspect animation properties:
   - Duration: 200ms
   - Easing: cubic-bezier(0.4, 0, 0.2, 1)
   - Properties: transform, opacity
4. Document as tokens:

:root {
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
}
```

### Responsive Token Values

```css
/* Base tokens with responsive variants */
:root {
  --spacing-page-x: 16px;
  --font-size-h1: 24px;
}

@media (min-width: 768px) {
  :root {
    --spacing-page-x: 32px;
    --font-size-h1: 36px;
  }
}

@media (min-width: 1024px) {
  :root {
    --spacing-page-x: 48px;
    --font-size-h1: 48px;
  }
}
```

### Theme Mode Support

```css
/* Light mode (default) */
:root {
  --color-background: #ffffff;
  --color-text: #111827;
  --color-surface: #f9fafb;
}

/* Dark mode */
[data-theme="dark"] {
  --color-background: #111827;
  --color-text: #f9fafb;
  --color-surface: #1f2937;
}

/* System preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-background: #111827;
    --color-text: #f9fafb;
    --color-surface: #1f2937;
  }
}
```

---

## Conclusion

This workflow combines automated tooling with manual verification to ensure accurate, accessible, and maintainable design system extraction. By following the systematic approach outlined here, you can efficiently analyze any website's UI design and create a comprehensive design token system for migration or replication.

### Key Takeaways

1. **Hybrid approach works best**: Automated extraction + manual verification
2. **Live inspection is essential**: Screenshots alone miss 43-76% of design details
3. **Token-first methodology**: Extract reusable tokens before component-specific styles
4. **Accessibility is non-negotiable**: Always verify color contrast and WCAG compliance
5. **Documentation is crucial**: Future you will thank present you
6. **Parallel operations**: Batch all related operations in single messages for efficiency

### Next Steps

- Apply this workflow to your target website
- Customize token naming conventions for your team
- Integrate with your design tool (Figma, Sketch, etc.)
- Automate token generation with CI/CD pipelines
- Build component library using extracted tokens

---

**Version History:**
- v1.0 (2025-10-31): Initial comprehensive workflow documentation

**Maintained by:** Claude Code
**License:** MIT