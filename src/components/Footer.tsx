import { Apple, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="text-orange-500 text-xl sm:text-2xl font-bold mb-6 md:mb-0">chopnow</Link>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
            <span className="text-white/60 text-sm sm:text-base">support@chopnow.co</span>
            <span className="text-white/60 text-sm sm:text-base">©2023 Chopnow</span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 mb-6 md:mb-0">
            <button className="flex items-center justify-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors w-full sm:w-auto">
              <Apple className="w-4 h-4" />
              <span>iPhone</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors w-full sm:w-auto">
              <span>Android</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <Link to="/about" className="text-white/60 hover:text-white text-sm sm:text-base">About us</Link>
            <a href="#" className="text-white/60 hover:text-white text-sm sm:text-base">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm sm:text-base">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}