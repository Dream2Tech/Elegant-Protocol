import { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      alt: "VIP Guest Reception",
      title: "VIP Guest Reception",
      category: "vip"
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      alt: "Elegant Ceremony Setup",
      title: "Ceremony Excellence",
      category: "ceremony"
    },
    {
      id: 3,
      src: "/images/gallery3.jpg",
      alt: "Guest Welcome Service",
      title: "Guest Welcome",
      category: "reception"
    },
    {
      id: 4,
      src: "/images/gallery4.jpg",
      alt: "Bridal Entrance Coordination",
      title: "Grand Entrance",
      category: "ceremony"
    },
    {
      id: 5,
      src: "/images/gallery5.jpg",
      alt: "Table Arrangement Mastery",
      title: "Seating Perfection",
      category: "reception"
    },
    {
      id: 6,
      src: "/images/gallery6.jpg",
      alt: "Event Timing Precision",
      title: "Time Flow Mastery",
      category: "coordination"
    },
    {
      id: 7,
      src: "/images/gallery7.jpg",
      alt: "Hospitality Management",
      title: "Guest Experience",
      category: "hospitality"
    },
    {
      id: 8,
      src: "/images/gallery8.jpg",
      alt: "Team Coordination",
      title: "Professional Team",
      category: "team"
    },
    {
      id: 9,
      src: "/images/gallery9.jpg",
      alt: "Floral Arrangements",
      title: "Floral Design",
      category: "decor"
    },
    {
      id: 10,
      src: "/images/gallery10.jpg",
      alt: "Catering Coordination",
      title: "Culinary Excellence",
      category: "catering"
    },
    {
      id: 11,
      src: "/images/gallery11.jpg",
      alt: "Entertainment Management",
      title: "Entertainment Coordination",
      category: "entertainment"
    },
    {
      id: 12,
      src: "/images/gallery12.jpg",
      alt: "Photography Coordination",
      title: "Photo Session Management",
      category: "photography"
    },
    {
      id: 13,
      src: "/images/gallery13.jpg",
      alt: "Transportation Logistics",
      title: "Transport Coordination",
      category: "logistics"
    }
  ];

  const categories = ["all", "vip", "ceremony", "reception", "coordination", "hospitality", "team", "decor", "catering", "entertainment", "photography", "logistics"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Get current image index for navigation
  const getCurrentImageIndex = () => {
    return filteredImages.findIndex(img => img.id === selectedImage?.id);
  };

  // Navigate to next image
  const nextImage = () => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    } else {
      setSelectedImage(filteredImages[0]);
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  // Add event listener for keyboard navigation
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  // Masonry layout sizes similar to Tilia theme
  const getMasonrySize = (index) => {
    const sizes = [
      "h-64",   // Medium
      "h-80",   // Large
      "h-56",   // Small
      "h-72",   // Medium-large
      "h-64",   // Medium
      "h-80",   // Large
      "h-56",   // Small
      "h-72",   // Medium-large
      "h-64",   // Medium
      "h-56",   // Small
      "h-80",   // Large
      "h-72",   // Medium-large
      "h-64",   // Medium
    ];
    return sizes[index % sizes.length];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Background Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
            Our Gallery
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Premium wedding protocol and coordination services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Minimal Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'text-[#BF932A] border-b-2 border-[#BF932A]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category === 'all' ? 'All' : 
               category === 'vip' ? 'VIP' :
               category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative break-inside-avoid rounded-lg overflow-hidden transform transition-all duration-500 cursor-pointer bg-gray-100
                ${getMasonrySize(index)}
                ${hoveredCard === image.id ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHoveredCard(image.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Title Overlay - Minimal */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </h3>
                    <span className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-600">No images found</h3>
          </div>
        )}
      </div>

      {/* Minimal Footer */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-light text-gray-800 mb-4">
            Ready to Create Your Perfect Wedding?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-300">
              Book Consultation
            </button>
            <button className="px-6 py-3 border border-gray-800 text-gray-800 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Light Background Image Modal with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Arrows */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110 z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110 z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Small Image Counter */}
            {filteredImages.length > 1 && (
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-white bg-black/50 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm z-20">
                {getCurrentImageIndex() + 1} / {filteredImages.length}
              </div>
            )}

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 backdrop-blur-sm transform hover:scale-110 z-20"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;