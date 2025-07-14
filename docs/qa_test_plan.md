# ✅ QA / Test Plan

This document outlines how to test the Japan City Comparison App for visual, functional, and accessibility quality before launch.

---

## 🧪 Functional Testing Checklist

| Area | Test | Status |
|------|------|--------|
| Navbar | All links navigate correctly | ☐ |
| CityComparisonTable | Displays city data properly | ☐ |
| CategoryComparisonCard | Shows correct metrics + tooltips | ☐ |
| City Detail Page | Renders content and charts for all 3 cities | ☐ |
| Chart Rendering | Charts load and update as expected | ☐ |
| Responsive Layout | Adapts to desktop, tablet, and mobile | ☐ |
| 404 Page | Invalid URLs show error screen | ☐ |

---

## 📱 Device & Browser Testing

| Platform | Devices |
|----------|---------|
| iOS | iPhone SE, iPhone 14 Pro |
| Android | Pixel 6, Samsung Galaxy S21 |
| Desktop | Chrome, Safari, Firefox, Edge |

> Use tools like BrowserStack or physical devices.

---

## ♿ Accessibility (a11y) Testing

| Check | Tool | Status |
|-------|------|--------|
| Contrast Ratios | Lighthouse, WebAIM | ☐ |
| Semantic HTML | Manual + Axe DevTools | ☐ |
| Keyboard Navigation | Manual (Tab + Shift+Tab) | ☐ |
| Screen Reader Support | NVDA, VoiceOver | ☐ |

---

## ⚙️ Performance Testing

| Tool | Metric | Goal |
|------|--------|------|
| Lighthouse | Performance | ≥ 90 |
| Lighthouse | Accessibility | ≥ 90 |
| Core Web Vitals | LCP, FID, CLS | Pass |

---

## 📋 Regression Testing (Post-Deploy)

- Run through homepage, city page, navigation on production
- Confirm no data breakages or visual bugs
- Manually test charts + mobile layout

---

**Optional Tools:**
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/) for end-to-end tests
- [BrowserStack](https://www.browserstack.com/) for cross-browser/device testing

