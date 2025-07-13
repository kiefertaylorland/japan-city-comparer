import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-japan-red" />
            <span className="text-xl font-semibold text-ink">Japan City Explorer</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-japan-red transition-colors duration-200"
            >
              Compare Cities
            </Link>
            <Link 
              to="/city/tokyo" 
              className="text-gray-700 hover:text-japan-red transition-colors duration-200"
            >
              Tokyo
            </Link>
            <Link 
              to="/city/osaka" 
              className="text-gray-700 hover:text-japan-red transition-colors duration-200"
            >
              Osaka
            </Link>
            <Link 
              to="/city/kyoto" 
              className="text-gray-700 hover:text-japan-red transition-colors duration-200"
            >
              Kyoto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
