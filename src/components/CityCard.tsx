import { useState } from 'react';
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
  const [showAllBestFor, setShowAllBestFor] = useState(false);

  const formatPopulation = (population: number) => {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)}M`;
    }
    if (population >= 1000) {
      return `${Math.round(population / 1000)}K`;
    }
    return population.toString();
  };

  const getCityFallbackImage = (cityId: string) => {
    // Create simple gradient backgrounds for each city using their theme colors
    const createSVGDataURL = (color1: string, color2: string, cityName: string) => {
      const svg = `
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
              <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#grad)"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24px" font-weight="bold">${cityName}</text>
        </svg>
      `.trim();
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    const fallbackImages = {
      tokyo: createSVGDataURL('#f94144', '#f3722c', 'Tokyo'),
      osaka: createSVGDataURL('#f3722c', '#f9844a', 'Osaka'), 
      kyoto: createSVGDataURL('#577590', '#43aa8b', 'Kyoto')
    };
    return fallbackImages[cityId.toLowerCase() as keyof typeof fallbackImages] || fallbackImages.tokyo;
  };

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick(city.id);
    }
  };

  const toggleBestForExpansion = () => {
    setShowAllBestFor(!showAllBestFor);
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
            // Fallback to city-specific image if local image fails to load
            e.currentTarget.src = getCityFallbackImage(city.id);
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
              {(showAllBestFor ? city.bestFor : city.bestFor.slice(0, 3)).map((item, index) => (
                <span
                  key={index}
                  className="text-xs bg-light-gray text-gray-700 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
              {city.bestFor.length > 3 && (
                <button
                  onClick={toggleBestForExpansion}
                  className="text-xs text-gray-500 hover:text-blue-600 hover:underline cursor-pointer transition-colors duration-200 px-1 py-0.5 rounded bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                  aria-label={showAllBestFor ? 'Show fewer options' : `Show ${city.bestFor.length - 3} more options`}
                >
                  {showAllBestFor ? 'show less' : `+${city.bestFor.length - 3} more`}
                </button>
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