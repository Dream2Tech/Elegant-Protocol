import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { FaUsers, FaCrown, FaClock } from 'react-icons/fa';
import chooseWiselyImage from "../assets/Choose wisely 🥂.jpg";

const WaveInput = ({ id, label, type = 'text', value, onChange, required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="relative mb-6">
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={`block w-full px-1 py-2 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 peer ${value ? 'pt-6' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
        />
        <label 
          htmlFor={id}
          className={`absolute left-1 top-2 text-gray-500 transition-all duration-200 transform origin-left pointer-events-none ${
            isFocused || value ? '-translate-y-5 text-sm text-[#F2B400]' : ''
          }`}
        >
          {label}
        </label>
        <div className="relative">
          <div className={`absolute bottom-0 left-0 h-0.5 bg-[#F2B400] transition-all duration-300 ${isFocused ? 'w-1/2' : 'w-0'}`}></div>
          <div className={`absolute bottom-0 right-0 h-0.5 bg-[#F2B400] transition-all duration-300 ${isFocused ? 'w-1/2' : 'w-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

const WaveTextarea = ({ id, label, value, onChange, required = false, rows = 4 }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <div className="relative">
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={`block w-full px-1 py-2 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 peer ${value ? 'pt-8' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label 
          htmlFor={id}
          className={`absolute left-1 top-2 text-gray-500 transition-all duration-200 transform origin-left pointer-events-none ${
            isFocused || value ? '-translate-y-5 text-sm text-[#F2B400]' : ''
          }`}
        >
          {label}
        </label>
        <div className="relative">
          <div className={`absolute bottom-0 left-0 h-0.5 bg-[#F2B400] transition-all duration-300 ${isFocused ? 'w-1/2' : 'w-0'}`}></div>
          <div className={`absolute bottom-0 right-0 h-0.5 bg-[#F2B400] transition-all duration-300 ${isFocused ? 'w-1/2' : 'w-0'}`}></div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", value: "Kigali, Rwanda" },
    { icon: Phone, title: "Phone / WhatsApp", value: "+250 ___ ___ ___" },
    { icon: Mail, title: "Email", value: "elegantprotocol@gmail.com" },
    { icon: Instagram, title: "Instagram", value: "@elegantprotocolservices" },
  ];

  const serviceCards = [
    {
      icon: FaUsers,
      title: "Professional Protocol Team",
      description: "Trained and experienced coordinators",
    },
    {
      icon: FaCrown,
      title: "VIP Guest Reception",
      description: "Premium hosting and hospitality",
    },
    {
      icon: FaClock,
      title: "Perfect Timing",
      description: "Smooth coordination throughout",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${chooseWiselyImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact Elegant Protocol Services
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 font-medium">
            We're here to make your wedding dreams come true
          </p>
          
          <p className="text-base md:text-lg text-white mb-10 leading-relaxed max-w-3xl mx-auto">
            Let us help you plan and execute a beautiful, organized, and elegant wedding.
            From the first consultation to the final toast, we're with you every step of the way.
          </p>
          
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Elegant Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Make your wedding feel special, respectful and well organized
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
                  <service.icon className="text-3xl text-yellow-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill the form and our team will reply shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <WaveInput id="name" label="Your Name *" value={formData.name} onChange={handleChange} required />
                <WaveInput id="email" label="Email Address *" type="email" value={formData.email} onChange={handleChange} required />
                <WaveInput id="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
                <WaveTextarea id="message" label="Your Message *" value={formData.message} onChange={handleChange} required rows={4} />

                {/* Elegant Golden Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F2B400] text-white font-semibold py-6 text-lg rounded-md flex items-center justify-center gap-2 shadow-md hover:bg-[#e0a800] transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                Contact Details
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-[#F2B400] text-white border-none shadow-md hover:shadow-lg transition-all rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="opacity-90">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-[#F2B400]/20 to-white/10 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                  Let Us Bring Elegance to Your Day
                </h3>
                <p className="text-muted-foreground">
                  Contact us today to discuss your wedding needs. We'll work with you to create a
                  perfectly coordinated, elegant celebration that your guests will remember forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;