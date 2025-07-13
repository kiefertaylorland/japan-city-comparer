import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Star } from 'lucide-react';
import { cityData, comparisonCategories } from '../data/cityData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CityDetail = () => {
  const { cityName } = useParams();
  const city = cityData[cityName];

  if (!city) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-ink mb-4">City Not Found</h1>
        <Link to="/" className="text-japan-red hover:underline">
          Return to comparison
        </Link>
      </div>
    );
  }

  const categoryData = comparisonCategories.map(category => ({
    name: category.name,
    score: city.categories[category.id].score,
    icon: category.icon,
    description: city.categories[category.id].description
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-japan-red hover:text-red-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to comparison</span>
      </Link>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-japan-red/10 to-japan-gold/10 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-ink mb-2">{city.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{city.subtitle}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Population: {city.population}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-japan-red" />
                <span className="text-gray-700">Cost Index: {city.costIndex}/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">{city.description}</p>
      </div>

      {/* Quick Facts Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-ink mb-4">🍜 Food Scene</h3>
          <p className="text-gray-700">{city.foodScene}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-ink mb-4">🚅 Transportation</h3>
          <p className="text-gray-700">{city.transport}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-ink mb-4">⛩️ Culture</h3>
          <p className="text-gray-700">{city.culture}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-ink mb-4">🌃 Nightlife</h3>
          <p className="text-gray-700">{city.nightlife}</p>
        </div>
      </div>

      {/* Top Attractions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">Top Attractions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {city.topAttractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-japan-red flex-shrink-0" />
              <span className="text-gray-700 font-medium">{attraction}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best For */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">Best For</h2>
        <div className="flex flex-wrap gap-3">
          {city.bestFor.map((item, index) => (
            <span 
              key={index}
              className="bg-japan-red text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Category Scores */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-ink mb-6">{city.name} Category Scores</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  stroke="#666"
                />
                <YAxis 
                  domain={[0, 10]}
                  tick={{ fontSize: 12 }}
                  stroke="#666"
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                          <p className="font-semibold flex items-center space-x-2">
                            <span>{data.icon}</span>
                            <span>{label}</span>
                          </p>
                          <p className="text-japan-red font-bold">Score: {data.score}/10</p>
                          <p className="text-sm text-gray-600 max-w-xs">{data.description}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="score" 
                  fill="#DC2626"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Other Cities */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-ink mb-6 text-center">
          Compare with Other Cities
        </h2>
        <div className="flex justify-center space-x-4">
          {Object.entries(cityData)
            .filter(([key]) => key !== cityName)
            .map(([key, otherCity]) => (
              <Link
                key={key}
                to={`/city/${key}`}
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
              >
                <div className="font-semibold text-ink">{otherCity.name}</div>
                <div className="text-sm text-gray-600">{otherCity.subtitle}</div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
