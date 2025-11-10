import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-red-900 to-red-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Elegant Protocol</h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-200">
            Premium Wedding Protocol & Guest Hospitality Services
          </p>
          
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#home" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
        
        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#service1" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Wedding Protocol Team
              </a>
            </li>
            <li>
              <a 
                href="#service2" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Guest Reception & Ushering
              </a>
            </li>
            <li>
              <a 
                href="#service3" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                VIP Hospitality
              </a>
            </li>
            <li>
              <a 
                href="#service4" 
                className="text-white hover:text-yellow-400 transition-colors duration-200 inline-block"
              >
                Event Coordination
              </a>
            </li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-400 text-xl shrink-0" />
              <div className="text-sm">
                Kigali, Rwanda
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HiPhone className="text-yellow-400 text-xl shrink-0" />
              <div className="text-sm">
                <a 
                  href="tel:+250" 
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  +250
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HiMail className="text-yellow-400 text-xl shrink-0" />
              <div className="text-sm">
                <a 
                  href="mailto:elegantprotocol@gmail.com" 
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  elegantprotocol@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaInstagram className="text-yellow-400 text-xl shrink-0" />
              <div className="text-sm">
                <a 
                  href="https://instagram.com/elegantprotocolservices" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  @elegantprotocolservices
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-red-800">
        <p className="text-center text-gray-300 text-sm">
          © 2025 Elegant Protocol Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}