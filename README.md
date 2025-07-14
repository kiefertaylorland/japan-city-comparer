# Japan City Comparer 🇯🇵

A comprehensive web application to compare Tokyo, Osaka, and Kyoto across multiple categories to help travelers choose their perfect Japanese destination.

## ✨ Features

- **Interactive City Comparison**: Side-by-side comparison across 6 key categories
- **Detailed City Profiles**: Individual pages for Tokyo, Osaka, and Kyoto
- **Visual Data Representation**: Charts and graphics for easy understanding
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Japanese Cultural Design**: Inspired by Japanese aesthetics and minimalism
- **Accessibility Focused**: WCAG compliant with keyboard navigation support

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
├── data/               # JSON data files
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.css           # Global styles and design system
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd japan_city_comparer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📊 Data Structure

The application uses a comprehensive data schema covering:

- **Cities**: Tokyo, Osaka, Kyoto with detailed metrics
- **Categories**: Cost, Attractions, Food, Transportation, Culture, Nightlife
- **Metrics**: Quantified data for objective comparisons
- **Content**: Descriptions, highlights, and recommendations

## 🎨 Design System

### Color Palette
- **Tokyo**: #f94144 (Red)
- **Osaka**: #f3722c (Orange)  
- **Kyoto**: #577590 (Blue)
- **Accents**: Sakura Pink (#f7c6c7), Gold (#e9c46a), Indigo (#264653)

### Typography
- **Primary Font**: Inter, Noto Sans JP
- **Hierarchy**: Clear heading levels with consistent spacing

### Components
- Modular, reusable component architecture
- Consistent styling with Tailwind utilities
- Accessible form controls and navigation

## 🧪 Testing

```bash
# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Touch Friendly**: Large tap targets and intuitive gestures

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast colors
- Alt text for images
- Focus management

## 🚢 Deployment

The application is ready for deployment to:
- **Vercel** (recommended)
- **Netlify**
- Any static hosting provider

### Environment Variables
```
VITE_PUBLIC_BASE_URL=https://your-domain.com
```

## 📈 Performance

- **Lighthouse Score**: 90+ target
- **Code Splitting**: Dynamic imports for routes
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Use `npm run build` to analyze

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Japanese aesthetics
- Data compiled from official tourism sources
- Images from Unsplash (placeholder implementation)
- Built with modern React best practices

---

**Made with ❤️ for travelers exploring Japan**