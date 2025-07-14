# 📄 `design_system.md`

## 🎨 Japan Travel App Design System

A modular, minimalist design system for the Japan City Comparison App — inspired by Japanese simplicity, travel usability, and visual clarity.

## 🧱 Design Foundations

### 🎨 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#ffffff` | Backgrounds, cards |
| **Light Gray** | `#f8f9fa` | Secondary background |
| **Charcoal Gray** | `#2c2c2c` | Headlines, contrast text |
| **Indigo** | `#264653` | Primary text, accents |
| **Sakura Pink** | `#f7c6c7` | Highlights, hover, icons |
| **Gold** | `#e9c46a` | UI accents, buttons |
| **Tokyo Red** | `#f94144` | Chart color |
| **Osaka Orange** | `#f3722c` | Chart color |
| **Kyoto Blue** | `#577590` | Chart color |

## 🔤 Typography

| Element | Font | Style |
|--------|------|-------|
| **Primary Font** | `Inter` or `Noto Sans JP` | Clean, readable |
| **Headlines** | `font-bold`, `text-2xl → 4xl` | Hierarchical clarity |
| **Body** | `font-normal`, `text-base` | Comfortable reading |
| **Captions** | `text-sm`, `text-gray-500` | Used for icons/charts |

## 📐 Spacing System

| Name | Value (px) | Tailwind |
|------|------------|----------|
| `xs` | `4px` | `p-1`, `m-1` |
| `sm` | `8px` | `p-2`, `m-2` |
| `md` | `16px` | `p-4`, `m-4` |
| `lg` | `24px` | `p-6`, `m-6` |
| `xl` | `32px` | `p-8`, `m-8` |

Use consistent spacing between sections, cards, and interactive components.

## 📦 Layout & Grid

- **Grid:** `grid-cols-1 md:grid-cols-3` for comparison layouts
- **Max Widths:**
  - `max-w-screen-lg` for content containers
  - `max-w-md` for cards and charts
- **Padding:** `px-4 py-6` or `p-6` depending on screen size

## 🧩 Components

### 🧭 Navbar

```html
<nav class="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
  <!-- Logo + Nav links -->
</nav>
````

### 📊 CityComparisonTable

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  <!-- City comparison rows -->
</div>
```

### 🔍 CategoryComparisonCard

```html
<div class="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-lg transition">
  <!-- Icon, title, bar chart -->
</div>
```

### 📈 ChartComparison

```html
<div class="max-w-md mx-auto rounded-xl bg-white p-6 shadow-sm">
  <!-- Recharts component -->
</div>
```

### 🦶 Footer

```html
<footer class="text-sm text-gray-500 text-center py-6">
  &copy; 2025 Japan Compare
</footer>
```

## 📊 Chart Styles (Recharts)

- **Tokyo**: `#f94144`
- **Osaka**: `#f3722c`
- **Kyoto**: `#577590`
- Bars should have rounded edges and tooltips on hover.

## 🧠 Accessibility Guidelines

| Feature       | Implementation                                                                     |
| ------------- | ---------------------------------------------------------------------------------- |
| Semantic HTML | `<main>`, `<header>`, `<nav>`, `<article>`                                         |
| Alt text      | Descriptive text on all images                                                     |
| Focus states  | Use Tailwind’s `focus:outline-none` + `focus:ring`                                 |
| Contrast      | Test with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) |
| Mobile        | Ensure buttons, cards, and charts are touch-friendly                               |

## 🧪 Performance & Responsiveness

- **Lighthouse Score Goal**: 90+ for accessibility and performance
- **Responsiveness**: All views must support `sm`, `md`, `lg` breakpoints
- **Image Optimization**: Use `next-gen` formats (WebP) if possible

## 🧰 Tools & Libraries

| Purpose      | Tool                          |
| ------------ | ----------------------------- |
| UI Framework | React + Tailwind CSS          |
| Charts       | Recharts                      |
| Icons        | Lucide or Heroicons (outline) |
| Animations   | Framer Motion                 |
| Deployment   | Vercel or Netlify             |

## ✅ Sample Token Snippet (CSS Variables)

```css
:root {
  --color-white: #ffffff;
  --color-light-gray: #f8f9fa;
  --color-indigo: #264653;
  --color-sakura-pink: #f7c6c7;
  --color-gold: #e9c46a;
  --color-tokyo: #f94144;
  --color-osaka: #f3722c;
  --color-kyoto: #577590;

  --font-primary: 'Inter', sans-serif;
  --space-md: 16px;
}
```

## 🎯 Ready to Use

This design system can be integrated directly into your React + Tailwind project. From typography to color schemes to component structure, everything is designed to promote consistency, beauty, and cultural relevance.
