import { ArrowRight, Users, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  variant?: 'summary' | 'detailed' | 'compact';
  showCTA?: boolean;
  onExploreClick?: (cityId: string) => void;
  className?: string;
}

const CityCard: React.FC<CityCardProps> = ({
  city,
  variant = 'summary',
  showCTA = true,
  onExploreClick,
  className = ''
}) => {
  const formatPopulation = (population: number) => {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)}M`;
    }
    if (population >= 1000) {
      return `${Math.round(population / 1000)}K`;
    }
    return population.toString();
  };

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick(city.id);
    }
  };

  const cardClasses = {
    summary: 'card h-full',
    detailed: 'card h-full',
    compact: 'card h-full'
  };

  const imageClasses = {
    summary: 'h-48',
    detailed: 'h-56',
    compact: 'h-32'
  };

  return (
    <div className={`${cardClasses[variant]} city-card-${city.id} ${className}`}>
      {/* Hero Image */}
      <div className={`${imageClasses[variant]} relative overflow-hidden rounded-xl mb-4`}>
        <img
          src={city.image.url}
          alt={city.image.alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop&crop=center`;
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          style={{ backgroundColor: `${city.colorTheme}20` }}
        ></div>
        <div className="absolute bottom-3 left-3">
          <h3 className="text-white font-bold text-xl drop-shadow-lg">
            {city.displayName}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Description */}
        {variant !== 'compact' && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {city.description}
          </p>
        )}

        {/* Quick Facts */}
        <div className="space-y-2">
          <h4 className="font-semibold text-charcoal-gray text-sm">Quick Facts</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <Users size={12} className="text-gray-500" />
              <span className="text-gray-600">{formatPopulation(city.quickFacts.population)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={12} className="text-gray-500" />
              <span className="text-gray-600">{city.quickFacts.prefecture}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar size={12} className="text-gray-500" />
              <span className="text-gray-600">Est. {city.quickFacts.establishedYear}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500 text-xs">📏</span>
              <span className="text-gray-600">{city.quickFacts.area} km²</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {variant === 'detailed' && (
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal-gray text-sm">Highlights</h4>
            <ul className="space-y-1">
              {city.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <span className="text-indigo mr-2 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Best For */}
        {variant !== 'compact' && (
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal-gray text-sm">Best For</h4>
            <div className="flex flex-wrap gap-1">
              {city.bestFor.slice(0, 3).map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-light-gray text-gray-700 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
              {city.bestFor.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{city.bestFor.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {showCTA && (
          <div className="pt-3 border-t border-gray-200">
            <Link
              to={`/city/${city.id}`}
              onClick={handleExploreClick}
              className="group flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: city.colorTheme }}
            >
              <span>Explore {city.name}</span>
              <ArrowRight 
                size={16} 
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1" 
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityCard;