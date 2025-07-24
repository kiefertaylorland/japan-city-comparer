import { useNavigate } from 'react-router-dom';
import { Crown, TrendingUp, TrendingDown } from 'lucide-react';
import { formatCategoryValue, getRankSuffix } from '../utils/chartUtils';
import { getCityFallbackImage } from '../utils/cityFallbackImages';
import type { CityComparisonData, Category } from '../types';

interface CityComparisonTableProps {
  cities: CityComparisonData[];
  categories: Category[];
  layout?: 'horizontal' | 'vertical';
  showQuickFacts?: boolean;
  onCityClick?: (cityId: string) => void;
  className?: string;
}

const CityComparisonTable: React.FC<CityComparisonTableProps> = ({
  cities,
  categories,
  showQuickFacts = true,
  onCityClick,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleCityClick = (cityId: string) => {
    if (onCityClick) {
      onCityClick(cityId);
    } else {
      navigate(`/city/${cityId}`);
    }
  };

  const formatPopulation = (population: number) => {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)}M`;
    }
    return `${Math.round(population / 1000)}K`;
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={14} className="text-gold" />;
    if (rank === 2) return <TrendingUp size={14} className="text-green-500" />;
    if (rank === 3) return <TrendingDown size={14} className="text-orange-500" />;
    return null;
  };

  return (
    <div className={`overflow-hidden rounded-2xl shadow-sm border border-gray-200 ${className}`}>
      {/* Desktop/Tablet View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-light-gray">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal-gray">
                City
              </th>
              {categories.map((category) => (
                <th 
                  key={category.id} 
                  className="px-3 py-4 text-center text-sm font-semibold text-charcoal-gray min-w-[100px]"
                >
                  <div className="break-words">
                    {category.displayName}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {cities.map((city) => (
              <tr 
                key={city.id}
                className="hover:bg-light-gray transition-colors cursor-pointer"
                onClick={() => handleCityClick(city.id)}
              >
                {/* City Info */}
                <td className="px-6 py-6 align-middle">
                  <div className="flex items-center space-x-4">
                    <img
                      src={city.image.url}
                      alt={city.image.alt}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => {
                        const fallback = getCityFallbackImage(city.id);
                        e.currentTarget.src = fallback.url;
                        e.currentTarget.alt = fallback.alt;
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal-gray leading-tight">
                        {city.displayName}
                      </h3>
                      {showQuickFacts && (
                        <div className="text-sm text-gray-600 space-y-1 mt-1">
                          <p className="leading-tight">{formatPopulation(city.quickFacts.population)} people</p>
                          <p className="leading-tight">{city.quickFacts.prefecture} Prefecture</p>
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                {/* Category Values */}
                {categories.map((category) => {
                  const metric = city.metrics[category.id];
                  if (!metric) return <td key={category.id} className="px-4 py-6 text-center">-</td>;

                  const { formatted, unit } = formatCategoryValue(metric.value, category.id);
                  
                  return (
                    <td key={category.id} className="px-3 py-6 text-center align-middle">
                      <div className="space-y-1.5 flex flex-col items-center justify-center min-h-[80px] max-w-[100px] mx-auto">
                        {/* Value */}
                        <div className="font-semibold text-charcoal-gray leading-tight text-sm">
                          {formatted}{unit}
                        </div>
                        
                        {/* Label */}
                        <div className="text-xs text-gray-600 leading-tight text-center px-1">
                          {metric.label}
                        </div>
                        
                        {/* Rank */}
                        {metric.rank === 1 ? (
                          <div className="flex items-center space-x-1 bg-gold bg-opacity-20 px-2 py-1 rounded-full">
                            <span className="text-xs">🏆</span>
                            <span className="text-xs font-medium text-charcoal-gray">Winner</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-1">
                            {getRankIcon(metric.rank)}
                            <span className="text-xs text-gray-500">
                              {getRankSuffix(metric.rank)}
                            </span>
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-6 p-4">
        {cities.map((city) => (
          <div 
            key={city.id}
            className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleCityClick(city.id)}
          >
            {/* City Header */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={city.image.url}
                alt={city.image.alt}
                className="w-12 h-12 rounded-lg object-cover"
                onError={(e) => {
                  const fallback = getCityFallbackImage(city.id);
                  e.currentTarget.src = fallback.url;
                  e.currentTarget.alt = fallback.alt;
                }}
              />
              <div>
                <h3 className="font-semibold text-charcoal-gray">
                  {city.displayName}
                </h3>
                {showQuickFacts && (
                  <p className="text-sm text-gray-600">
                    {formatPopulation(city.quickFacts.population)} • {city.quickFacts.prefecture}
                  </p>
                )}
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => {
                const metric = city.metrics[category.id];
                if (!metric) return null;

                const { formatted, unit } = formatCategoryValue(metric.value, category.id);
                
                return (
                  <div key={category.id} className="text-center p-3 bg-light-gray rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">
                      {category.displayName}
                    </div>
                    <div className="font-semibold text-charcoal-gray">
                      {formatted}{unit}
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-1">
                      {getRankIcon(metric.rank)}
                      <span className="text-xs text-gray-500">
                        {getRankSuffix(metric.rank)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityComparisonTable;