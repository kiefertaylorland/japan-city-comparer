import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Compare Cities', emoji: '⚖️' },
    { path: '/city/tokyo', label: 'Tokyo', emoji: '🏙️' },
    { path: '/city/osaka', label: 'Osaka', emoji: '🍜' },
    { path: '/city/kyoto', label: 'Kyoto', emoji: '⛩️' },
  ];
  
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-japan-red to-red-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Home className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text japanese-heading">
                Japan City Explorer
              </span>
              <div className="text-xs text-gray-500 -mt-1">日本都市探検</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 group ${
                    isActive
                      ? 'bg-gradient-to-r from-japan-red to-red-700 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-japan-red'
                  }`}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span>{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-japan-gold rounded-full"></div>
                  )}
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-japan-red/5 to-red-700/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-2">
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${
                      isActive
                        ? 'bg-gradient-to-r from-japan-red to-red-700 text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-japan-red'
                    }`}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
