# 🧪 Edge Cases & Error States

This document outlines potential edge cases and how the Japan City Comparison App should handle them in the UI.

## 🛑 Empty States

| Component | Trigger | UI Behavior |
|----------|---------|-------------|
| CategoryComparisonCard | No data available for a city/category | Display placeholder card with message: _"Data not available"_ and grayed-out visuals |
| CityComparisonTable | No cities selected or no data | Show a centered message: _"No city data to compare yet. Please select a city."_ with a refresh or retry option |

## ⏳ Loading States

| Component | Trigger | UI Behavior |
|----------|---------|-------------|
| All Charts and Cards | While fetching data | Show animated skeleton loaders (light gray blocks), avoid spinners when possible |
| Page Load | On initial visit | Display splash or animated intro/loading screen (max 2s duration) |

## ⚠️ Chart Fallback Behavior

| Chart | Trigger | UI Behavior |
|-------|---------|-------------|
| Bar Chart | Failed to fetch or render | Replace chart area with a fallback message: _"Chart unavailable. Please try again later."_ + refresh button |

## 📴 Offline Mode

| Scenario | UI Behavior |
|----------|-------------|
| App detects no internet connection | Show a non-intrusive banner: _"You’re offline. Some features may not be available."_ |

## 🔍 404 and 500 Pages

| Error | Trigger | UI Behavior |
|-------|---------|-------------|
| 404 Not Found | Invalid route or city slug | Minimalist full-screen message: _"Page not found"_ with link back to Home |
| 500 Server Error | Backend/data fetch fails | Friendly message: _"Something went wrong on our side. Try refreshing the page."_ |

---

**Note:** All error/edge state components should maintain aesthetic consistency—use the same fonts, spacing, and colors from the design system.

