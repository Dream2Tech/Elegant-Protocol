import weddingRoomImage from "../assets/weddingRoom.jpg";

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${weddingRoomImage})`,
      }}
    >
  
  <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Elegant Protocol Services
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 font-medium">
          Premium Wedding Protocol & Guest Hospitality
        </p>
        
        <p className="text-base md:text-lg text-white mb-10 leading-relaxed max-w-3xl mx-auto">
          We make your wedding look organized, elegant and professional. From the 
          arrival of guests to the entrance of the bride and the coordination of special 
          moments, we manage everything with class and discipline.
        </p>
        
        <a 
          href="#services"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Our Services
         
        </a>
      </div>
    </section>
  );
}