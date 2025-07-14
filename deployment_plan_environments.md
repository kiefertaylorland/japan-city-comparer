# 🚀 Deployment Plan & Environments

This document outlines the deployment strategy, hosting environment, and environment variables for the Japan City Comparison App.

## 🧭 Hosting & Deployment Platform

| Platform | Details |
|----------|---------|
| Vercel | Primary host for frontend (Next.js or static React app) |

### ✅ Reasons for Choosing Vercel
- Simple integration with GitHub (CI/CD)
- Automatic preview deployments for PRs
- Optimized performance for React + Tailwind
- Built-in Lighthouse & Core Web Vitals monitoring

---

## 🔧 Environment Variables

| Key | Purpose | Example Value |
|-----|---------|---------------|
| `NEXT_PUBLIC_BASE_URL` | Base URL for app | `https://japancompare.com` |
| `NEXT_PUBLIC_ANALYTICS_ID` | (Optional) Analytics | `vercel_analytics_xyz123` |

> Store these securely in Vercel Project Settings → Environment Variables.

---

## 📈 Performance & Monitoring

| Tool | Usage |
|------|-------|
| Lighthouse CI | Pre-deploy checks for performance, accessibility |
| Vercel Analytics | Traffic + engagement metrics |
| Vercel Core Web Vitals | Realtime metrics monitoring |
| LogRocket / Sentry (optional) | Error tracking & session replay |

---

## 🗂 Environments

| Env | Purpose | URL Example |
|-----|---------|-------------|
| `development` | Local development | `localhost:3000` |
| `preview` | Feature branches/PRs | `vercel.app` preview links |
| `production` | Live app | `https://japancompare.com` |

---

**Next Steps:**
1. Connect GitHub repo to Vercel.
2. Define env vars for each environment.
3. Set up preview deployment rules.
4. Run Lighthouse audit before each release.
5. Monitor performance post-launch via Vercel dashboard.

