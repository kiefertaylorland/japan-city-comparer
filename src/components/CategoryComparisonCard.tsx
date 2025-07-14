import { 
  DollarSign, 
  Camera, 
  UtensilsCrossed, 
  Train, 
  Landmark, 
  Moon,
  LucideIcon
} from 'lucide-react';
import ChartComparison from './ChartComparison';
import { transformDataForChart, getDefaultChartConfig } from '../utils/chartUtils';
import type { Category, CategoryComparison, ChartConfiguration } from '../types';

interface CategoryComparisonCardProps {
  category: Category;
  comparisonData: CategoryComparison;
  chartConfig?: Partial<ChartConfiguration>;
  onCardClick?: (categoryId: string) => void;
  className?: string;
  isLoading?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  'DollarSign': DollarSign,
  'Camera': Camera,
  'UtensilsCrossed': UtensilsCrossed,
  'Train': Train,
  'Landmark': Landmark,
  'Moon': Moon,
};

const CategoryComparisonCard: React.FC<CategoryComparisonCardProps> = ({
  category,
  comparisonData,
  chartConfig,
  onCardClick,
  className = '',
  isLoading = false
}) => {
  const IconComponent = iconMap[category.icon] || Camera;
  
  const chartData = transformDataForChart(comparisonData);
  const fullChartConfig = {
    ...getDefaultChartConfig(category.chartType, 200),
    ...chartConfig
  };

  const winner = chartData.find(city => city.metadata?.isWinner);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(category.id);
    }
  };

  if (isLoading) {
    return (
      <div className={`card animate-pulse ${className}`}>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`card hover:shadow-xl cursor-pointer transition-all duration-300 ${className}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View details for ${category.name}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-light-gray rounded-lg">
            <IconComponent size={20} className="text-indigo" />
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-gray">{category.displayName}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        </div>
        
        {winner && (
          <div className="flex items-center space-x-1 bg-gold bg-opacity-20 px-2 py-1 rounded-full">
            <span className="text-xs">🏆</span>
            <span className="text-xs font-medium text-charcoal-gray">{winner.city}</span>
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="mb-4">
        <ChartComparison
          data={chartData}
          config={fullChartConfig}
        />
      </div>

      {/* Insights */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-charcoal-gray">Key Insights</h4>
        <ul className="space-y-1">
          {comparisonData.insights.slice(0, 2).map((insight, index) => (
            <li key={index} className="text-xs text-gray-600 flex items-start">
              <span className="text-indigo mr-2 mt-1">•</span>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
        
        {comparisonData.insights.length > 2 && (
          <p className="text-xs text-indigo font-medium">
            +{comparisonData.insights.length - 2} more insights
          </p>
        )}
      </div>

      {/* Winner reasoning */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          <span className="font-medium">Why {winner?.city} wins:</span> {comparisonData.reasoning}
        </p>
      </div>

      {/* Tooltip indicator */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-400 italic">{category.tooltip}</p>
      </div>
    </div>
  );
};

export default CategoryComparisonCard;