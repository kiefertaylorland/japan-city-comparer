import { Link } from 'react-router-dom';
import { Users, ArrowRight, MapPin } from 'lucide-react';

const CityCard = ({ city }) => {
  const cityKey = city.name.toLowerCase();
  
  // Unique gradient for each city
  const gradients = {
    tokyo: 'from-red-50 via-pink-50 to-orange-50',
    osaka: 'from-orange-50 via-yellow-50 to-amber-50', 
    kyoto: 'from-green-50 via-emerald-50 to-teal-50'
  };
  
  return (
    <div className="japanese-card group h-full">
      {/* Header with gradient */}
      <div className={`h-56 bg-gradient-to-br ${gradients[cityKey]} flex items-center justify-center relative overflow-hidden`}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-current rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-current rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-current rounded-full"></div>
        </div>
        
        <div className="relative text-center z-10">
          <h3 className="japanese-heading text-3xl font-bold text-ink mb-2 group-hover:scale-110 transition-transform duration-300">
            {city.name}
          </h3>
          <p className="text-gray-600 font-medium text-lg">{city.subtitle}</p>
          
          {/* Floating badge */}
          <div className="absolute -top-2 -right-2 bg-japan-red text-white text-xs px-2 py-1 rounded-full font-medium">
            {city.name === 'Tokyo' ? '首都' : city.name === 'Osaka' ? '食' : '古都'}
          </div>
        </div>
      </div>
      
      <div className="p-8">
        {/* Stats row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Population</div>
              <div className="font-semibold text-gray-800">{city.population}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Cost Index</div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-japan-red to-japan-gold rounded-full transition-all duration-500"
                  style={{ width: `${(city.costIndex / 10) * 100}%` }}
                ></div>
              </div>
              <span className="text-lg font-bold text-japan-red">{city.costIndex}</span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
          {city.description}
        </p>
        
        {/* Best For tags */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm text-gray-700 mb-3 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Perfect For:
          </h4>
          <div className="flex flex-wrap gap-2">
            {city.bestFor.slice(0, 3).map((item, index) => (
              <span 
                key={index}
                className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs px-3 py-2 rounded-full border border-gray-200 hover:border-japan-red transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <Link
          to={`/city/${cityKey}`}
          className="group/btn w-full bg-gradient-to-r from-japan-red to-red-700 text-white py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 flex items-center justify-center space-x-2"
        >
          <span>Explore {city.name}</span>
          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
