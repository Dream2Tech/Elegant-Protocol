import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <a href="#home" className="text-xl font-bold text-yellow-500 hover:text-yellow-600">
              Elegant Protocol
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block sm:ml-6">
            <ul className="flex space-x-4 text-gray-700 font-medium items-center">
              <li>
                <a href="#home" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Book Consultation button + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden sm:inline-flex items-center justify-center bg-yellow-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-yellow-600 text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Book Consultation
            </a>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 text-base font-medium"
            >
              Contact
            </a>
            
            <a
              href="#book"
              className="block mt-2 px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-base font-medium text-center transition-colors duration-200 shadow-sm"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}