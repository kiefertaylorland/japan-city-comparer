import { Heart } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-light-gray border-t border-gray-200 ${className}`}>
      <div className="container-custom">
        <div className="py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
              <span>Made with</span>
              <Heart size={16} className="text-tokyo-red fill-current" />
              <span>for travelers exploring Japan</span>
            </div>
            
            <div className="text-sm text-gray-500 space-y-2">
              <p>&copy; {currentYear} Japan City Compare. All rights reserved.</p>
              <p className="text-xs">
                Data collected from official tourism boards and local research. 
                Last updated: January 2025
              </p>
            </div>
          </div>
          
          {/* City Quick Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-sm font-semibold text-charcoal-gray mb-3">Explore Cities</h3>
              <div className="flex justify-center space-x-6 text-sm">
                <a 
                  href="/city/tokyo" 
                  className="text-tokyo-red hover:underline transition-colors"
                >
                  Tokyo (東京)
                </a>
                <a 
                  href="/city/osaka" 
                  className="text-osaka-orange hover:underline transition-colors"
                >
                  Osaka (大阪)
                </a>
                <a 
                  href="/city/kyoto" 
                  className="text-kyoto-blue hover:underline transition-colors"
                >
                  Kyoto (京都)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;