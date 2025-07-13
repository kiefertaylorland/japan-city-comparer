import { Link } from 'react-router-dom';
import { cityData, comparisonCategories } from '../data/cityData';
import ComparisonChart from '../components/ComparisonChart';
import CityCard from '../components/CityCard';

const Home = () => {
  const cities = Object.values(cityData);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="japanese-heading text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">日本の都市</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
            Discover Your Perfect Japanese City
          </p>
          <div className="zen-divider max-w-md mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Experience the harmony of tradition and modernity as you explore Tokyo, Osaka, and Kyoto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#comparison" className="btn-primary">
              Begin Your Journey ⛩️
            </a>
            <Link to="/city/tokyo" className="btn-secondary">
              Explore Tokyo 🏯
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="japanese-card p-8">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-600 font-medium">Historic Cities</div>
            </div>
            <div className="japanese-card p-8">
              <div className="text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-gray-600 font-medium">Key Categories</div>
            </div>
            <div className="japanese-card p-8">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600 font-medium">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* City Cards */}
      <div className="py-20 sakura-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="japanese-heading text-4xl font-bold text-ink mb-6">
              Three Paths, One Destiny
            </h2>
            <div className="zen-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each city tells a different story of Japan's rich tapestry.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {cities.map((city) => (
              <div key={city.name} className="zen-border">
                <CityCard city={city} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Charts */}
      <div id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="japanese-heading text-4xl font-bold text-ink mb-6">
              The Art of Comparison
            </h2>
            <div className="zen-divider max-w-xs mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like carefully balanced elements in a zen garden, each city excels in different aspects.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {comparisonCategories.map((category) => (
              <div key={category.id} className="zen-border">
                <ComparisonChart category={category} cities={cities} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-br from-ink to-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="japanese-heading text-3xl md:text-4xl font-bold mb-8">
            "The journey of a thousand miles begins with a single step"
          </h2>
          <p className="text-xl mb-10">
            Begin your exploration of Japan's most captivating cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {cities.map((city) => (
              <Link
                key={city.name}
                to={`/city/${city.name.toLowerCase()}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="font-semibold text-lg">{city.name}</div>
                <div className="text-sm opacity-80">{city.subtitle}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
