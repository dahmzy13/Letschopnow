import { Apple, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const navigate = useNavigate();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-wrap justify-between items-center">
      <Link to="/" className="text-orange-500 text-xl sm:text-2xl font-bold">chopnow</Link>
      <div className="flex items-center space-x-3 sm:space-x-6">
        <Link to="/about" className="text-white hover:text-orange-500 text-sm sm:text-base">About Us</Link>
        
        {/* Sign In Dropdown */}
        <div className="relative">
          <button 
            className="bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-orange-600 transition-colors text-sm sm:text-base flex items-center gap-1"
            onClick={() => {
              setIsSignInOpen(!isSignInOpen);
              setIsSignUpOpen(false);
            }}
          >
            Sign In
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isSignInOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsSignInOpen(false);
                  navigate('/user/signin');
                }}
              >
                Sign In as a User
              </button>
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsSignInOpen(false);
                  navigate('/business/signin');
                }}
              >
                Sign In as a Business
              </button>
            </div>
          )}
        </div>

        {/* Sign Up Dropdown */}
        <div className="relative">
          <button 
            className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base flex items-center gap-1"
            onClick={() => {
              setIsSignUpOpen(!isSignUpOpen);
              setIsSignInOpen(false);
            }}
          >
            Sign Up
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isSignUpOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsSignUpOpen(false);
                  navigate('/user/signup');
                }}
              >
                Sign Up as a User
              </button>
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setIsSignUpOpen(false);
                  navigate('/business/signup');
                }}
              >
                Sign Up as a Business
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}