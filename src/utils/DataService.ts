import type { 
  City, 
  Category, 
  ComparisonData, 
  CategoryComparison, 
  CityComparisonData 
} from '../types';

import tokyoData from '../data/cities/tokyo.json';
import osakaData from '../data/cities/osaka.json';
import kyotoData from '../data/cities/kyoto.json';
import categoriesData from '../data/categories/categories.json';
import comparisonData from '../data/comparisons/comparison-data.json';

class DataService {
  // City data loading
  static async getCityData(cityId: string): Promise<City> {
    try {
      switch (cityId.toLowerCase()) {
        case 'tokyo':
          return tokyoData as City;
        case 'osaka':
          return osakaData as City;
        case 'kyoto':
          return kyotoData as City;
        default:
          throw new Error(`City data not found: ${cityId}`);
      }
    } catch (error) {
      throw new Error(`City data not found: ${cityId}`);
    }
  }

  // Category definitions
  static async getCategoryDefinitions(): Promise<Category[]> {
    try {
      return categoriesData as Category[];
    } catch (error) {
      throw new Error('Category definitions not found');
    }
  }

  // Comparison data
  static async getComparisonData(): Promise<ComparisonData> {
    try {
      return comparisonData as ComparisonData;
    } catch (error) {
      throw new Error('Comparison data not found');
    }
  }

  // Get specific category comparison
  static async getCategoryComparison(categoryId: string): Promise<CategoryComparison> {
    const comparison = await this.getComparisonData();
    const category = comparison.categories.find(c => c.categoryId === categoryId);
    
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
    
    const comparison = await this.getComparisonData();
    
    return cities.map(city => ({
      id: city.id,
      name: city.name,
      displayName: city.displayName,
      image: city.heroImage,
      quickFacts: {
        population: city.quickFacts.population,
        prefecture: city.quickFacts.prefecture,
        area: city.quickFacts.area
      },
      metrics: this.transformCityMetrics(city, comparison),
      colorTheme: city.colorTheme,
      highlights: city.highlights
    }));
  }

  private static transformCityMetrics(city: City, comparison: ComparisonData): Record<string, any> {
    const metrics: Record<string, any> = {};
    
    comparison.categories.forEach(category => {
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

  // Get cities list for navigation
  static async getCitiesList(): Promise<Array<{id: string, name: string, displayName: string}>> {
    const cities = await Promise.all([
      this.getCityData('tokyo'),
      this.getCityData('osaka'),
      this.getCityData('kyoto')
    ]);
    
    return cities.map(city => ({
      id: city.id,
      name: city.name,
      displayName: city.displayName
    }));
  }

  // Utility function to get city color theme
  static async getCityColor(cityId: string): Promise<string> {
    const city = await this.getCityData(cityId);
    return city.colorTheme;
  }

  // Format display values
  static formatDisplayValue(
    value: number,
    format: 'number' | 'currency' | 'percentage' | 'scale'
  ): string {
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
  }

  // Calculate ranking for a value
  static calculateRankForValue(value: number, allValues: number[], isHigherBetter: boolean = true): number {
    const sortedValues = [...allValues].sort((a, b) => isHigherBetter ? b - a : a - b);
    return sortedValues.indexOf(value) + 1;
  }
}

export default DataService;