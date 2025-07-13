## 🛠️ Technical Specification Document (TSD)

### 🧱 Tech Stack
- **Frontend Framework:** React (with/ Vite or CRA)
- **Styling:** Tailwind CSS
- **Charts/Visuals:** Recharts or Chart.js
- **Routing:** React Router
- **Icons:** Heroicons or Lucide
- **Deployment:** Netlify or Vercel

### 🧩 Component Architecture

#### Pages:
- `/` — Home + summary comparison table
- `/city/:name` — City detail page

#### Components:
- `Navbar`
- `CityComparisonTable`
- `CategoryComparisonCard`
- `CityCard`
- `ChartComparison`
- `Footer`

### 📊 Sample Data Schema (JSON)
```json
{
  "city": "Tokyo",
  "costIndex": 8.5,
  "topAttractions": ["Shibuya Crossing", "Tokyo Tower"],
  "foodScene": "Diverse, global cuisine",
  "transport": "Extensive subway system",
  "culture": "Modern + traditional mix",
  "nightlife": "Vibrant, late-night options"
}
```

### 🧪 Testing
- Manual UI testing
- Lighthouse audit for performance/accessibility
- Basic unit tests using Jest

