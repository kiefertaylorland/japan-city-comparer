import type { CategoryComparison, ChartDataPoint, ChartConfiguration } from '../types';

// Chart data transformation utilities
export const transformDataForChart = (
  comparison: CategoryComparison
): ChartDataPoint[] => {
  const cities = ['tokyo', 'osaka', 'kyoto'] as const;
  const colors = {
    tokyo: '#f94144',
    osaka: '#f3722c',
    kyoto: '#577590'
  };

  // Defensive: If values or labels are missing, return empty array
  if (!comparison || !comparison.values || !comparison.labels) {
    return [];
  }

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

// Default chart configuration
export const getDefaultChartConfig = (
  type: 'bar' | 'line' | 'radar' | 'pie' = 'bar',
  height: number = 300
): ChartConfiguration => ({
  type,
  height,
  colors: {
    tokyo: '#f94144',
    osaka: '#f3722c',
    kyoto: '#577590'
  },
  axes: {
    x: {
      show: true,
      type: 'category'
    },
    y: {
      show: true,
      domain: type === 'bar' ? [0, 10] : undefined
    }
  },
  grid: {
    show: true,
    strokeDasharray: '3 3'
  },
  tooltip: {
    show: true,
    formatter: (value: number, name: string) => `${name}: ${value}`
  },
  legend: {
    show: false,
    position: 'bottom'
  },
  responsive: true,
  animation: true
});

// Format display values for charts
export const formatChartValue = (
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

// Get chart color by city
export const getCityColor = (cityId: string): string => {
  const colors: Record<string, string> = {
    tokyo: '#f94144',
    osaka: '#f3722c',
    kyoto: '#577590'
  };
  return colors[cityId.toLowerCase()] || '#577590';
};

// Get winner badge color
export const getWinnerBadgeColor = (isWinner: boolean): string => {
  return isWinner ? 'bg-gold text-charcoal-gray' : 'bg-light-gray text-charcoal-gray';
};

// Format category value for display
export const formatCategoryValue = (
  value: number,
  categoryId: string
): { formatted: string; unit: string } => {
  switch (categoryId) {
    case 'cost':
      return { formatted: value.toFixed(1), unit: '/10' };
    case 'attractions':
      return { formatted: value.toString(), unit: ' sites' };
    case 'food':
    case 'transportation':
    case 'culture':
    case 'nightlife':
      return { formatted: value.toFixed(1), unit: '/10' };
    default:
      return { formatted: value.toString(), unit: '' };
  }
};

// Get rank suffix (1st, 2nd, 3rd)
export const getRankSuffix = (rank: number): string => {
  if (rank === 1) return '1st';
  if (rank === 2) return '2nd';
  if (rank === 3) return '3rd';
  return `${rank}th`;
};

// Transform data for comparison table
export const transformDataForTable = (
  comparison: CategoryComparison[],
  cities: string[]
) => {
  return cities.map(cityId => {
    const cityData: Record<string, any> = { city: cityId };
    
    comparison.forEach(category => {
      cityData[category.categoryId] = {
        value: category.values[cityId as keyof typeof category.values],
        label: category.labels[cityId as keyof typeof category.labels],
        isWinner: category.winner === cityId
      };
    });
    
    return cityData;
  });
};