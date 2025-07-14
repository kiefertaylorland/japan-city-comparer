import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        {/* 404 Illustration */}
        <div className="text-6xl mb-4">🗾</div>
        
        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-charcoal-gray">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for seems to have gotten lost in Japan. 
            Let's help you find your way back.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 btn-primary"
          >
            <Home size={18} />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 btn-secondary"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Or explore these cities:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/city/tokyo" 
              className="text-tokyo-red hover:underline font-medium"
            >
              Tokyo (東京)
            </Link>
            <Link 
              to="/city/osaka" 
              className="text-osaka-orange hover:underline font-medium"
            >
              Osaka (大阪)
            </Link>
            <Link 
              to="/city/kyoto" 
              className="text-kyoto-blue hover:underline font-medium"
            >
              Kyoto (京都)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;