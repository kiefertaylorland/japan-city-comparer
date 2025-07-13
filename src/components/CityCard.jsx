import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';

const CityCard = ({ city }) => {
  const cityKey = city.name.toLowerCase();
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-japan-red/20 to-japan-gold/20 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-ink mb-1">{city.name}</h3>
          <p className="text-gray-600">{city.subtitle}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{city.population}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500">Cost Index</span>
            <div className="text-lg font-semibold text-japan-red">{city.costIndex}/10</div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {city.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">Best For:</h4>
          <div className="flex flex-wrap gap-1">
            {city.bestFor.slice(0, 3).map((item, index) => (
              <span 
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          to={`/city/${cityKey}`}
          className="flex items-center justify-center space-x-2 w-full bg-japan-red text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
