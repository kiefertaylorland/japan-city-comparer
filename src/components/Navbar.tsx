import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import type { NavigationItem } from '../types';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      isActive: location.pathname === '/'
    },
    {
      id: 'tokyo',
      label: 'Tokyo',
      path: '/city/tokyo',
      isActive: location.pathname === '/city/tokyo'
    },
    {
      id: 'osaka',
      label: 'Osaka',
      path: '/city/osaka',
      isActive: location.pathname === '/city/osaka'
    },
    {
      id: 'kyoto',
      label: 'Kyoto',
      path: '/city/kyoto',
      isActive: location.pathname === '/city/kyoto'
    }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-indigo hover:text-opacity-80 transition-colors"
          >
            <span className="text-2xl">🇯🇵</span>
            <span>Japan Compare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  item.isActive
                    ? 'text-indigo border-b-2 border-indigo pb-1'
                    : 'text-charcoal-gray hover:text-indigo'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-charcoal-gray hover:text-indigo hover:bg-light-gray transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-light-gray">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    item.isActive
                      ? 'text-indigo bg-light-gray'
                      : 'text-charcoal-gray hover:text-indigo hover:bg-light-gray'
                  }`}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;