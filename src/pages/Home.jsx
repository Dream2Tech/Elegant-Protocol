import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer";
import { FaUsers, FaHeart, FaClock } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Make your wedding feel special, respectful and well organized
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <FaUsers className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Professional Protocol Team
              </h3>
              <p className="text-gray-600">
                Trained and experienced coordinators
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <FaHeart className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                VIP Guest Reception
              </h3>
              <p className="text-gray-600">
                Premium hosting and hospitality
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                <FaClock className="text-3xl text-yellow-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                Perfect Timing
              </h3>
              <p className="text-gray-600">
                Smooth coordination throughout
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Make Your Wedding Elegant?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Let us bring professionalism, beauty and perfect coordination to your special day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#book"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Book Consultation
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 border-2 border-gray-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Plan Your Perfect Wedding?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can make your special day truly memorable
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-yellow-700 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
      
    </div>
  );
}