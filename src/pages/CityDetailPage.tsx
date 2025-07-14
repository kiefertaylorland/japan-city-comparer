import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Calendar, 
  Thermometer,
  Crown
} from 'lucide-react';
import { useCityData, useCategoryDefinitions, useComparisonData } from '../hooks/useData';
import LoadingSpinner from '../components/LoadingSpinner';
import CategoryComparisonCard from '../components/CategoryComparisonCard';

const CityDetailPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  
  const { data: city, loading: cityLoading, error: cityError } = useCityData(cityId || '');
  const { data: categories, loading: categoriesLoading } = useCategoryDefinitions();
  const { data: comparisonData, loading: comparisonLoading } = useComparisonData();

  const isLoading = cityLoading || categoriesLoading || comparisonLoading;

  if (cityError) {
    return (
      <div className="container-custom py-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-charcoal-gray">City Not Found</h2>
          <p className="text-gray-600">Sorry, we couldn't find information for this city.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" text="Loading city details..." />
      </div>
    );
  }

  const formatPopulation = (population: number) => {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)} million`;
    }
    return `${Math.round(population / 1000)}K`;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-light-gray border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-indigo hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-charcoal-gray font-medium">{city.displayName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={city.heroImage.url}
          alt={city.heroImage.alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl text-white space-y-4">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to comparison</span>
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                {city.displayName}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100">
                {city.description}
              </p>
              
              {city.heroImage.credit && (
                <p className="text-sm text-white/60">
                  {city.heroImage.credit}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-light-gray rounded-xl">
              <Users size={32} className="mx-auto mb-3 text-indigo" />
              <div className="text-2xl font-bold text-charcoal-gray">
                {formatPopulation(city.quickFacts.population)}
              </div>
              <div className="text-sm text-gray-600">Population</div>
            </div>
            
            <div className="text-center p-6 bg-light-gray rounded-xl">
              <MapPin size={32} className="mx-auto mb-3 text-indigo" />
              <div className="text-2xl font-bold text-charcoal-gray">
                {city.quickFacts.area}
              </div>
              <div className="text-sm text-gray-600">km² Area</div>
            </div>
            
            <div className="text-center p-6 bg-light-gray rounded-xl">
              <Calendar size={32} className="mx-auto mb-3 text-indigo" />
              <div className="text-2xl font-bold text-charcoal-gray">
                {city.quickFacts.establishedYear}
              </div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            
            <div className="text-center p-6 bg-light-gray rounded-xl">
              <Thermometer size={32} className="mx-auto mb-3 text-indigo" />
              <div className="text-lg font-bold text-charcoal-gray">
                {city.quickFacts.averageTemp.summer}°C / {city.quickFacts.averageTemp.winter}°C
              </div>
              <div className="text-sm text-gray-600">Summer / Winter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal-gray mb-8 text-center">
            What Makes {city.name} Special
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <Crown size={20} className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-charcoal-gray">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For / Not Ideal For */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Best For */}
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-charcoal-gray mb-6 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Perfect For
              </h3>
              <ul className="space-y-3">
                {city.bestFor.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-green-500">•</span>
                    <span className="text-charcoal-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal For */}
            <div className="bg-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-charcoal-gray mb-6 flex items-center">
                <span className="text-orange-500 mr-2">!</span>
                Consider Alternatives If You're
              </h3>
              <ul className="space-y-3">
                {city.notIdealFor.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="text-orange-500">•</span>
                    <span className="text-charcoal-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category Performance */}
      <section className="py-12 bg-light-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-charcoal-gray mb-8 text-center">
            How {city.name} Performs
          </h2>
          
          {comparisonData && categories && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const categoryComparison = comparisonData.categories.find(
                  c => c.categoryId === category.id
                );
                
                if (!categoryComparison) return null;

                return (
                  <CategoryComparisonCard
                    key={category.id}
                    category={category}
                    comparisonData={categoryComparison}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Top Attractions */}
      {city.metrics.attractions.topAttractions.length > 0 && (
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-charcoal-gray mb-8 text-center">
              Must-Visit Attractions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.metrics.attractions.topAttractions.map((attraction, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-charcoal-gray">
                        {attraction.name}
                      </h3>
                      {attraction.nameJP && (
                        <p className="text-sm text-gray-600">{attraction.nameJP}</p>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-700">{attraction.description}</p>
                    
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-light-gray px-2 py-1 rounded">
                        {attraction.estimatedTime}
                      </span>
                      <span className={`px-2 py-1 rounded ${
                        attraction.cost === 'free' ? 'bg-green-100 text-green-800' :
                        attraction.cost === 'low' ? 'bg-blue-100 text-blue-800' :
                        attraction.cost === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {attraction.cost}
                      </span>
                      <span className="bg-light-gray px-2 py-1 rounded">
                        {attraction.accessibility}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600">
                      <strong>Best time:</strong> {attraction.bestTimeToVisit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare with Other Cities */}
      <section className="py-12 bg-indigo text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Compare {city.name} with Other Cities
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how {city.name} stacks up against other amazing Japanese destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary bg-white text-indigo hover:bg-gray-100">
              View Full Comparison
            </Link>
            
            <div className="flex gap-2">
              {['tokyo', 'osaka', 'kyoto'].filter(id => id !== city.id).map((otherCityId) => (
                <Link
                  key={otherCityId}
                  to={`/city/${otherCityId}`}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-indigo"
                >
                  {otherCityId.charAt(0).toUpperCase() + otherCityId.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityDetailPage;