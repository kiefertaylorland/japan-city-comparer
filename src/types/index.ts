// Core data types based on the documentation schema

export interface City {
  id: string;
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
    establishedYear: number;
    area: number;
    averageTemp: {
      summer: number;
      winter: number;
    };
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  metrics: CityMetrics;
  highlights: string[];
  bestFor: string[];
  notIdealFor: string[];
  slug: string;
  colorTheme: string;
  lastUpdated: string;
}

export interface CityMetrics {
  cost: CostMetrics;
  attractions: AttractionMetrics;
  food: FoodMetrics;
  transportation: TransportationMetrics;
  culture: CultureMetrics;
  nightlife: NightlifeMetrics;
}

export interface CostMetrics {
  overallIndex: number;
  accommodation: {
    budget: number;
    mid: number;
    luxury: number;
  };
  dailyBudget: {
    budget: number;
    mid: number;
    luxury: number;
  };
  meals: {
    streetFood: number;
    restaurant: number;
    fineDining: number;
  };
  transport: {
    dayPass: number;
    taxiPerKm: number;
  };
}

export interface AttractionMetrics {
  totalCount: number;
  freeAttractions: number;
  worldHeritageSites: number;
  museums: number;
  temples: number;
  parks: number;
  topAttractions: Attraction[];
  uniqueExperiences: string[];
}

export interface Attraction {
  name: string;
  nameJP?: string;
  description: string;
  category: 'temple' | 'museum' | 'park' | 'landmark' | 'district' | 'experience';
  estimatedTime: string;
  cost: 'free' | 'low' | 'medium' | 'high';
  bestTimeToVisit: string;
  accessibility: 'easy' | 'moderate' | 'challenging';
}

export interface FoodMetrics {
  diversityScore: number;
  michelinStars: number;
  streetFoodScore: number;
  vegetarianFriendly: number;
  specialties: FoodSpecialty[];
  marketCount: number;
  restaurantDensity: number;
}

export interface FoodSpecialty {
  name: string;
  nameJP?: string;
  description: string;
  category: 'main' | 'snack' | 'dessert' | 'drink';
  difficulty: 'easy' | 'adventurous' | 'acquired_taste';
  whereToFind: string[];
}

export interface TransportationMetrics {
  efficiency: number;
  coverage: number;
  easeOfUse: number;
  punctuality: number;
  subwayLines: number;
  busLines: number;
  walkability: number;
  bikeability: number;
  airportConnections: AirportConnection[];
}

export interface AirportConnection {
  airport: string;
  methods: string[];
  time: string;
  cost: number;
}

export interface CultureMetrics {
  traditionalScore: number;
  modernScore: number;
  artScene: number;
  festivalsCount: number;
  culturalSites: number;
  languageBarrier: number;
  localCustoms: string[];
  culturalEvents: CulturalEvent[];
}

export interface CulturalEvent {
  name: string;
  nameJP?: string;
  description: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'year-round';
  duration: string;
  significance: 'local' | 'national' | 'international';
}

export interface NightlifeMetrics {
  vibrancy: number;
  variety: number;
  safety: number;
  lastTrainTime: string;
  barCount: number;
  clubCount: number;
  izakayaCount: number;
  uniqueVenues: string[];
  districts: NightlifeDistrict[];
}

export interface NightlifeDistrict {
  name: string;
  nameJP?: string;
  description: string;
  vibe: 'traditional' | 'modern' | 'alternative' | 'upscale' | 'casual';
  bestFor: string[];
  priceRange: 'budget' | 'mid' | 'expensive';
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
  unit?: string;
  chartType: 'bar' | 'radar' | 'pie' | 'line';
  colorScheme: {
    tokyo: string;
    osaka: string;
    kyoto: string;
  };
  comparisonKey: string;
  displayFormat: 'number' | 'currency' | 'percentage' | 'scale';
  tooltip: string;
  sortOrder: number;
}

export interface ComparisonData {
  categories: CategoryComparison[];
  lastUpdated: string;
  dataSource: string;
  methodology: string;
}

export interface CategoryComparison {
  categoryId: string;
  values: {
    tokyo: number;
    osaka: number;
    kyoto: number;
  };
  labels: {
    tokyo: string;
    osaka: string;
    kyoto: string;
  };
  insights: string[];
  winner: 'tokyo' | 'osaka' | 'kyoto' | 'tie';
  reasoning: string;
}

// Component prop types
export interface ChartDataPoint {
  city: string;
  value: number;
  label: string;
  color: string;
  metadata?: Record<string, any>;
}

export interface ChartConfiguration {
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

export interface CityComparisonData {
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
      rank: number;
    };
  };
  colorTheme: string;
  highlights: string[];
  bestFor: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  badge?: string | number;
  isActive?: boolean;
  subItems?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}