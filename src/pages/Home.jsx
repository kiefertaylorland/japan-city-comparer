import { Link } from 'react-router-dom';
import { cityData, comparisonCategories } from '../data/cityData';
import ComparisonChart from '../components/ComparisonChart';
import CityCard from '../components/CityCard';

const Home = () => {
  const cities = Object.values(cityData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      {/* Hero Section */}
      <div className="text-center mb-12 p-8 bg-japan-red text-white rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Perfect Japanese City
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Compare Tokyo, Osaka, and Kyoto across the factors that matter most to travelers. 
          Find the city that matches your interests and budget.
        </p>
      </div>

      {/* City Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {cities.map((city) => (
          <CityCard key={city.name.toLowerCase()} city={city} />
        ))}
      </div>

      {/* Comparison Charts */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-ink text-center mb-8">
          City Comparison Overview
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisonCategories.map((category) => (
            <ComparisonChart key={category.id} category={category} cities={cities} />
          ))}
        </div>
      </div>

      {/* Quick Recommendations */}
      <div className="bg-gradient-to-r from-sakura/10 to-bamboo/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-6 text-center">
          Quick Recommendations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">🌟 First Time in Japan</h3>
            <p className="text-gray-600 mb-3">
              Choose Tokyo for the full Japanese experience with modern conveniences.
            </p>
            <Link 
              to="/city/tokyo" 
              className="inline-block bg-japan-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore Tokyo
            </Link>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">🍜 Food Enthusiast</h3>
            <p className="text-gray-600 mb-3">
              Osaka offers the best street food and most affordable dining experiences.
            </p>
            <Link 
              to="/city/osaka" 
              className="inline-block bg-japan-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore Osaka
            </Link>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">⛩️ Culture Seeker</h3>
            <p className="text-gray-600 mb-3">
              Kyoto preserves traditional Japan like nowhere else on earth.
            </p>
            <Link 
              to="/city/kyoto" 
              className="inline-block bg-japan-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Explore Kyoto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
