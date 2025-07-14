# Component Logic & API Contracts

## Japan City Comparison App

### 🎯 Overview

This document defines the data contracts, component interfaces, and API specifications for the Japan City Comparison App, ensuring consistent data flow between components and potential future API integrations.

---

## 🧩 Component Data Contracts

### 1. `<CategoryComparisonCard />` Component

#### Props Interface

```typescript
interface CategoryComparisonCardProps {
  category: {
    id: string;                    // "cost", "attractions", etc.
    name: string;                  // "Cost of Living"
    icon: string;                  // Lucide icon name
    description: string;           // Category explanation
    unit?: string;                 // "¥", "count", "score"
    tooltip: string;               // Helper text
  };
  comparisonData: {
    values: {
      tokyo: number;
      osaka: number;
      kyoto: number;
    };
    labels: {
      tokyo: string;               // "Very Expensive"
      osaka: string;               // "Moderate"
      kyoto: string;               // "Expensive"
    };
    winner: 'tokyo' | 'osaka' | 'kyoto' | 'tie';
    insights: string[];            // Key insights array
  };
  chartConfig: {
    type: 'bar' | 'radar' | 'pie';
    colors: {
      tokyo: string;               // "#f94144"
      osaka: string;               // "#f3722c"
      kyoto: string;               // "#577590"
    };
    height: number;                // Chart height in pixels
    showGrid: boolean;
    showTooltip: boolean;
  };
  onCardClick?: (categoryId: string) => void;
  className?: string;
  isLoading?: boolean;
}
```

#### CategoryComparisonCard Usage Example

```tsx
<CategoryComparisonCard
  category={{
    id: "cost",
    name: "Cost of Living",
    icon: "DollarSign",
    description: "Overall expense level for accommodation, food, and activities",
    unit: "scale",
    tooltip: "1 = Very affordable, 10 = Very expensive"
  }}
  comparisonData={{
    values: { tokyo: 8.5, osaka: 6.8, kyoto: 7.2 },
    labels: { tokyo: "Very Expensive", osaka: "Moderate", kyoto: "Expensive" },
    winner: "osaka",
    insights: ["Tokyo is 25% more expensive than Osaka", "Accommodation costs are highest in Tokyo"]
  }}
  chartConfig={{
    type: "bar",
    colors: { tokyo: "#f94144", osaka: "#f3722c", kyoto: "#577590" },
    height: 200,
    showGrid: true,
    showTooltip: true
  }}
  onCardClick={(categoryId) => console.log(`Clicked: ${categoryId}`)}
/>
```

### 2. `<CityComparisonTable />` Component

#### CityComparisonTable Props Interface

```typescript
interface CityComparisonTableProps {
  cities: CityComparisonData[];
  categories: CategoryDefinition[];
  layout: 'horizontal' | 'vertical';
  showQuickFacts?: boolean;
  onCityClick?: (cityId: string) => void;
  className?: string;
}

interface CityComparisonData {
  id: string;
  name: string;
  displayName: string;
  image: {
    url: string;
    alt: string;
  };
  quickFacts: {
    population: number;
    prefecture: string;
    area: number;
  };
  metrics: {
    [categoryId: string]: {
      value: number;
      label: string;
      rank: number;               // 1, 2, or 3
    };
  };
  colorTheme: string;
  highlights: string[];
}

interface CategoryDefinition {
  id: string;
  name: string;
  icon: string;
  unit: string;
  displayFormat: 'number' | 'currency' | 'percentage' | 'scale';
  sortOrder: number;
}
```

#### CityComparisonTable Usage Example

```tsx
<CityComparisonTable
  cities={[
    {
      id: "tokyo",
      name: "Tokyo",
      displayName: "Tokyo (東京)",
      image: { url: "/images/tokyo.jpg", alt: "Tokyo skyline" },
      quickFacts: { population: 13960000, prefecture: "Tokyo", area: 2194 },
      metrics: {
        cost: { value: 8.5, label: "Very Expensive", rank: 3 },
        attractions: { value: 150, label: "World Class", rank: 1 }
      },
      colorTheme: "#f94144",
      highlights: ["World's largest metropolitan area", "Incredible food scene"]
    }
  ]}
  categories={[
    {
      id: "cost",
      name: "Cost",
      icon: "DollarSign",
      unit: "scale",
      displayFormat: "scale",
      sortOrder: 1
    }
  ]}
  layout="horizontal"
  showQuickFacts={true}
  onCityClick={(cityId) => navigate(`/city/${cityId}`)}
/>
```

### 3. `<CityCard />` Component

#### CityCard Props Interface

```typescript
interface CityCardProps {
  city: {
    id: string;
    name: string;
    displayName: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    quickFacts: {
      population: number;
      prefecture: string;
      establishedYear: number;
      area: number;
    };
    highlights: string[];
    bestFor: string[];
    colorTheme: string;
  };
  variant: 'summary' | 'detailed' | 'compact';
  showCTA?: boolean;
  onExploreClick?: (cityId: string) => void;
  className?: string;
}
```

#### CityCard Usage Example

```tsx
<CityCard
  city={{
    id: "tokyo",
    name: "Tokyo",
    displayName: "Tokyo (東京)",
    description: "Japan's bustling capital city...",
    image: { url: "/images/tokyo.jpg", alt: "Tokyo skyline" },
    quickFacts: { population: 13960000, prefecture: "Tokyo", establishedYear: 1603, area: 2194 },
    highlights: ["World's largest metropolitan area", "Incredible food scene"],
    bestFor: ["First-time visitors", "Business travelers"],
    colorTheme: "#f94144"
  }}
  variant="detailed"
  showCTA={true}
  onExploreClick={(cityId) => navigate(`/city/${cityId}`)}
/>
```

### 4. `<ChartComparison />` Component

#### ChartComparison Props Interface

```typescript
interface ChartComparisonProps {
  data: ChartDataPoint[];
  config: ChartConfiguration;
  title?: string;
  subtitle?: string;
  onDataPointClick?: (dataPoint: ChartDataPoint) => void;
  className?: string;
}

interface ChartDataPoint {
  city: string;
  value: number;
  label: string;
  color: string;
  metadata?: Record<string, any>;
}

interface ChartConfiguration {
  type: 'bar' | 'line' | 'radar' | 'pie' | 'area';
  height: number;
  width?: number;
  colors: {
    tokyo: string;
    osaka: string;
    kyoto: string;
  };
  axes: {
    x: {
      show: boolean;
      label?: string;
      type: 'category' | 'number';
    };
    y: {
      show: boolean;
      label?: string;
      domain?: [number, number];
    };
  };
  grid: {
    show: boolean;
    strokeDasharray?: string;
  };
  tooltip: {
    show: boolean;
    formatter?: (value: number, name: string) => string;
  };
  legend: {
    show: boolean;
    position: 'top' | 'bottom' | 'left' | 'right';
  };
  responsive: boolean;
  animation: boolean;
}
```

#### Usage Example

```tsx
<ChartComparison
  data={[
    { city: "Tokyo", value: 8.5, label: "Very Expensive", color: "#f94144" },
    { city: "Osaka", value: 6.8, label: "Moderate", color: "#f3722c" },
    { city: "Kyoto", value: 7.2, label: "Expensive", color: "#577590" }
  ]}
  config={{
    type: "bar",
    height: 300,
    colors: { tokyo: "#f94144", osaka: "#f3722c", kyoto: "#577590" },
    axes: { x: { show: true, type: "category" }, y: { show: true, domain: [0, 10] } },
    grid: { show: true },
    tooltip: { show: true },
    legend: { show: false, position: "bottom" },
    responsive: true,
    animation: true
  }}
  title="Cost of Living Comparison"
  onDataPointClick={(dataPoint) => console.log(dataPoint)}
/>
```

### 5. `<Navbar />` Component

#### Navbar Props Interface

```typescript
interface NavbarProps {
  currentPage: string;
  navigationItems: NavigationItem[];
  logo: {
    text: string;
    image?: string;
  };
  onNavigate?: (path: string) => void;
  className?: string;
}

interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  badge?: string | number;
  isActive?: boolean;
  subItems?: NavigationItem[];
}
```

### 6. `<CityDetailHero />` Component

#### CityDetailHero Props Interface

```typescript
interface CityDetailHeroProps {
  city: {
    name: string;
    displayName: string;
    description: string;
    heroImage: {
      url: string;
      alt: string;
      credit?: string;
    };
    quickFacts: {
      population: number;
      prefecture: string;
      area: number;
      averageTemp: {
        summer: number;
        winter: number;
      };
    };
    colorTheme: string;
  };
  breadcrumbs?: BreadcrumbItem[];
  showQuickFacts?: boolean;
  className?: string;
}

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}
```

---

## 🔗 API Contracts & Data Services

### Static Data Service (Current Implementation)

#### Data Loading Service

```typescript
class DataService {
  // City data loading
  static async getCityData(cityId: string): Promise<City> {
    try {
      const response = await import(`../data/cities/${cityId}.json`);
      return response.default;
    } catch (error) {
      throw new Error(`City data not found: ${cityId}`);
    }
  }

  // Category definitions
  static async getCategoryDefinitions(): Promise<CategoryDefinition[]> {
    try {
      const response = await import('../data/categories/categories.json');
      return response.default;
    } catch (error) {
      throw new Error('Category definitions not found');
    }
  }

  // Comparison data
  static async getComparisonData(): Promise<ComparisonData> {
    try {
      const response = await import('../data/comparisons/comparison-data.json');
      return response.default;
    } catch (error) {
      throw new Error('Comparison data not found');
    }
  }

  // Get specific category comparison
  static async getCategoryComparison(categoryId: string): Promise<CategoryComparison> {
    const comparisonData = await this.getComparisonData();
    const category = comparisonData.categories.find(c => c.categoryId === categoryId);
    
    if (!category) {
      throw new Error(`Category not found: ${categoryId}`);
    }
    
    return category;
  }

  // Get all cities summary
  static async getAllCitiesSummary(): Promise<CityComparisonData[]> {
    const cities = await Promise.all([
      this.getCityData('tokyo'),
      this.getCityData('osaka'),
      this.getCityData('kyoto')
    ]);
    
    const comparisonData = await this.getComparisonData();
    
    return cities.map(city => ({
      id: city.id,
      name: city.name,
      displayName: city.displayName,
      image: city.heroImage,
      quickFacts: city.quickFacts,
      metrics: this.transformCityMetrics(city, comparisonData),
      colorTheme: city.colorTheme,
      highlights: city.highlights
    }));
  }

  private static transformCityMetrics(city: City, comparisonData: ComparisonData): Record<string, any> {
    const metrics: Record<string, any> = {};
    
    comparisonData.categories.forEach(category => {
      const cityValue = category.values[city.id as keyof typeof category.values];
      const cityLabel = category.labels[city.id as keyof typeof category.labels];
      
      // Calculate rank (1 = best, 3 = worst, depends on category)
      const values = Object.values(category.values);
      const rank = this.calculateRank(cityValue, values, category.categoryId);
      
      metrics[category.categoryId] = {
        value: cityValue,
        label: cityLabel,
        rank: rank
      };
    });
    
    return metrics;
  }

  private static calculateRank(value: number, allValues: number[], categoryId: string): number {
    const sortedValues = [...allValues].sort((a, b) => {
      // For cost, lower is better (rank 1)
      if (categoryId === 'cost') return a - b;
      // For most other categories, higher is better
      return b - a;
    });
    
    return sortedValues.indexOf(value) + 1;
  }
}
```

### Future API Contracts (For Dynamic Data)

#### REST API Endpoints

```typescript
// GET /api/cities
interface GetCitiesResponse {
  cities: City[];
  total: number;
  lastUpdated: string;
}

// GET /api/cities/:id
interface GetCityResponse {
  city: City;
  lastUpdated: string;
}

// GET /api/categories
interface GetCategoriesResponse {
  categories: CategoryDefinition[];
  total: number;
}

// GET /api/comparisons
interface GetComparisonsResponse {
  comparisons: ComparisonData;
  lastUpdated: string;
}

// GET /api/comparisons/:categoryId
interface GetCategoryComparisonResponse {
  comparison: CategoryComparison;
  category: CategoryDefinition;
  lastUpdated: string;
}

// POST /api/feedback (Future feature)
interface PostFeedbackRequest {
  cityId: string;
  categoryId?: string;
  rating: number;
  comment?: string;
  userType: 'tourist' | 'local' | 'business';
}

interface PostFeedbackResponse {
  success: boolean;
  feedbackId: string;
  message: string;
}
```

#### GraphQL Schema (Alternative)

```graphql
type City {
  id: ID!
  name: String!
  displayName: String!
  description: String!
  heroImage: Image!
  quickFacts: QuickFacts!
  coordinates: Coordinates!
  metrics: CityMetrics!
  highlights: [String!]!
  bestFor: [String!]!
  notIdealFor: [String!]!
  colorTheme: String!
  lastUpdated: String!
}

type CategoryComparison {
  categoryId: String!
  values: ComparisonValues!
  labels: ComparisonLabels!
  insights: [String!]!
  winner: String!
  reasoning: String!
}

type Query {
  cities: [City!]!
  city(id: ID!): City
  categories: [Category!]!
  comparisons: [CategoryComparison!]!
  categoryComparison(categoryId: String!): CategoryComparison
}

type Mutation {
  submitFeedback(input: FeedbackInput!): FeedbackResponse!
}
```

---

## 🎯 React Hooks & Custom Logic

### Data Fetching Hooks

```typescript
// Hook for city data
export const useCityData = (cityId: string) => {
  const [data, setData] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const cityData = await DataService.getCityData(cityId);
        setData(cityData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cityId]);

  return { data, loading, error };
};

// Hook for comparison data
export const useComparisonData = (categoryId?: string) => {
  const [data, setData] = useState<ComparisonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const comparisonData = await DataService.getComparisonData();
        setData(comparisonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categoryData = useMemo(() => {
    if (!data || !categoryId) return null;
    return data.categories.find(c => c.categoryId === categoryId) || null;
  }, [data, categoryId]);

  return { data, categoryData, loading, error };
};

// Hook for all cities summary
export const useCitiesSummary = () => {
  const [data, setData] = useState<CityComparisonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const citiesData = await DataService.getAllCitiesSummary();
        setData(citiesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
```

### Utility Functions

```typescript
// Chart data transformation utilities
export const transformDataForChart = (
  comparison: CategoryComparison,
  chartType: 'bar' | 'line' | 'radar' | 'pie'
): ChartDataPoint[] => {
  const cities = ['tokyo', 'osaka', 'kyoto'] as const;
  const colors = {
    tokyo: '#f94144',
    osaka: '#f3722c',
    kyoto: '#577590'
  };

  return cities.map(city => ({
    city: city.charAt(0).toUpperCase() + city.slice(1),
    value: comparison.values[city],
    label: comparison.labels[city],
    color: colors[city],
    metadata: {
      isWinner: comparison.winner === city,
      rank: calculateRank(comparison.values[city], Object.values(comparison.values))
    }
  }));
};

// Ranking calculation
export const calculateRank = (value: number, allValues: number[]): number => {
  const sortedValues = [...allValues].sort((a, b) => b - a);
  return sortedValues.indexOf(value) + 1;
};

// Format display values
export const formatDisplayValue = (
  value: number,
  format: 'number' | 'currency' | 'percentage' | 'scale'
): string => {
  switch (format) {
    case 'currency':
      return `¥${value.toLocaleString()}`;
    case 'percentage':
      return `${value}%`;
    case 'scale':
      return `${value}/10`;
    default:
      return value.toString();
  }
};
```

---

## 🔄 Error Handling & Loading States

### Error Boundaries

```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error }>;
}

export class ComponentErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error: Error | null }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component error:', error, errorInfo);
    // In production, send to error reporting service
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}
```

### Loading States

```typescript
interface LoadingStateProps {
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: string }>;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  loading,
  error,
  children,
  skeleton,
  errorFallback: ErrorFallback
}) => {
  if (loading) {
    return skeleton || <DefaultSkeleton />;
  }

  if (error) {
    return ErrorFallback ? <ErrorFallback error={error} /> : <DefaultError message={error} />;
  }

  return <>{children}</>;
};
```
