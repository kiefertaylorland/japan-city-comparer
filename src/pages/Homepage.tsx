import { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import CityComparisonTable from '../components/CityComparisonTable';
import CategoryComparisonCard from '../components/CategoryComparisonCard';
import CityCard from '../components/CityCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCitiesSummary, useCategoryDefinitions, useComparisonData } from '../hooks/useData';

const Homepage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const { data: citiesData, loading: citiesLoading, error: citiesError } = useCitiesSummary();
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useCategoryDefinitions();
  const { data: comparisonData, loading: comparisonLoading, error: comparisonError } = useComparisonData();

  const isLoading = citiesLoading || categoriesLoading || comparisonLoading;
  const hasError = citiesError || categoriesError || comparisonError;

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  if (hasError) {
    return (
      <div className="container-custom py-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-charcoal-gray">Oops! Something went wrong</h2>
          <p className="text-gray-600">We're having trouble loading the data. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo to-kyoto-blue text-white py-16">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center mb-4">
              <Sparkles size={48} className="text-gold" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Find Your Perfect
              <span className="block text-gold">Japanese City</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto text-balance">
              Compare Tokyo, Osaka, and Kyoto across cost, attractions, food, culture, and more 
              to discover your ideal destination.
            </p>
            
            <div className="pt-6">
              <button 
                onClick={() => {
                  document.getElementById('comparison-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="inline-flex items-center space-x-2 bg-white text-indigo px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors text-lg"
              >
                <span>Start Comparing</span>
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-tokyo-red">3</div>
              <div className="text-charcoal-gray font-medium">Amazing Cities</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-osaka-orange">6</div>
              <div className="text-charcoal-gray font-medium">Comparison Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-kyoto-blue">425+</div>
              <div className="text-charcoal-gray font-medium">Total Attractions</div>
            </div>
          </div>
        </div>
      </section>

      {/* City Overview Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Explore Japan's Top Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each city offers a unique experience. Get a quick overview before diving into detailed comparisons.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="large" text="Loading cities..." />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {citiesData.map((city) => (
                <CityCard
                  key={city.id}
                  city={{
                    id: city.id,
                    name: city.name,
                    displayName: city.displayName,
                    description: `Discover ${city.name}'s unique character and attractions.`,
                    image: city.image,
                    quickFacts: {
                      ...city.quickFacts,
                      establishedYear: 1000 // Default value
                    },
                    highlights: city.highlights,
                    bestFor: [],
                    colorTheme: city.colorTheme
                  }}
                  variant="summary"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-section" className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how the cities stack up across all major categories at a glance.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="large" text="Loading comparison data..." />
            </div>
          ) : (
            <CityComparisonTable
              cities={citiesData}
              categories={categories}
              showQuickFacts={true}
            />
          )}
        </div>
      </section>

      {/* Category Comparisons */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
              Detailed Category Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into each category to understand what makes each city special.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <CategoryComparisonCard
                  key={index}
                  category={{} as any}
                  comparisonData={{} as any}
                  isLoading={true}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const categoryComparison = comparisonData?.categories.find(
                  c => c.categoryId === category.id
                );
                
                if (!categoryComparison) return null;

                return (
                  <CategoryComparisonCard
                    key={category.id}
                    category={category}
                    comparisonData={categoryComparison}
                    onCardClick={handleCategoryClick}
                    className={selectedCategory === category.id ? 'ring-2 ring-indigo' : ''}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gold">
              Ready to Plan Your Japan Adventure?
            </h2>
            <p className="text-xl text-blue-100">
              Choose your city and start exploring detailed guides, attractions, and insider tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="/city/tokyo" className="btn-primary bg-tokyo-red hover:bg-red-600">
                Explore Tokyo
              </a>
              <a href="/city/osaka" className="btn-primary bg-osaka-orange hover:bg-orange-600">
                Explore Osaka
              </a>
              <a href="/city/kyoto" className="btn-primary bg-kyoto-blue hover:bg-blue-700">
                Explore Kyoto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;