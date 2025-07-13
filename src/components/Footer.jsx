import { Home, Heart, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-ink to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 floating">
          <Home className="w-32 h-32" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 floating" style={{animationDelay: '3s'}}>
          <Home className="w-24 h-24" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-japan-red to-red-700 rounded-xl">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="japanese-heading text-xl font-bold">Japan City Explorer</h3>
                <p className="text-gray-400 text-sm">日本都市探検</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Discover the perfect Japanese city for your next adventure. 
              Each destination offers a unique window into Japan's rich culture and modern innovation.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-japan-red fill-current" />
              <span>for Japan travelers</span>
            </div>
          </div>
          
          {/* Cities section */}
          <div className="md:col-span-1">
            <h4 className="japanese-heading text-lg font-semibold mb-6 text-japan-gold">
              Explore Cities
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Tokyo', subtitle: 'The Vibrant Metropolis', emoji: '🏙️' },
                { name: 'Osaka', subtitle: "Japan's Kitchen", emoji: '🍜' },
                { name: 'Kyoto', subtitle: 'The Cultural Heart', emoji: '⛩️' }
              ].map((city) => (
                <a
                  key={city.name}
                  href={`/city/${city.name.toLowerCase()}`}
                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-xl">{city.emoji}</span>
                  <div>
                    <div className="font-medium group-hover:text-japan-gold transition-colors">
                      {city.name}
                    </div>
                    <div className="text-sm text-gray-400">{city.subtitle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-japan-gold transition-colors ml-auto" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Info section */}
          <div className="md:col-span-1">
            <h4 className="japanese-heading text-lg font-semibold mb-6 text-japan-gold">
              Project Info
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h5 className="font-medium mb-2">Built With</h5>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>⚛️ React + Vite</div>
                  <div>🎨 Tailwind CSS</div>
                  <div>📊 Recharts</div>
                  <div>🛣️ React Router</div>
                </div>
              </div>
              
              <a
                href="https://github.com/kiefertaylorland/japan-city-comparer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 text-gray-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Japan City Explorer. Created for educational purposes.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span>🌸</span>
                <span>Inspired by Japanese aesthetics</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>🗾</span>
                <span>Promoting Japan travel</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
