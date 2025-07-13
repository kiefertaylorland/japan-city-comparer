const Footer = () => {
  return (
    <footer className="bg-ink text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Japan City Explorer</h3>
            <p className="text-gray-300 text-sm">
              Discover the perfect Japanese city for your next adventure
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              Made with ❤️ for Japan travelers
            </p>
            <p className="text-gray-400 text-xs mt-1">
              © 2025 Japan City Explorer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
