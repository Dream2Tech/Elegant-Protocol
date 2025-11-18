
import React from "react";
import { 
  Users, 
  UserCheck, 
  Crown, 
  HeartHandshake, 
  Calendar, 
  Clock, 
  Mic, 
  Handshake 
} from "lucide-react";


import serviceHero from "../assets/weddingRoom.jpg";

const services = [
  {
    icon: Users,
    title: "Wedding Protocol Team",
    description: "Professionally trained team to coordinate all aspects of your ceremony",
  },
  {
    icon: UserCheck,
    title: "Guest Receiving & Ushering",
    description: "Warm welcome and smooth guidance for all your guests",
  },
  {
    icon: Crown,
    title: "VIP Reception & Hosting",
    description: "Premium hospitality service for distinguished guests",
  },
  {
    icon: HeartHandshake,
    title: "Bride & Groom Entrance Coordination",
    description: "Perfect timing and elegant coordination for your grand entrance",
  },
  {
    icon: Calendar,
    title: "Table & Sitting Arrangements",
    description: "Organized seating management ensuring guest comfort",
  },
  {
    icon: Clock,
    title: "Time Flow & Event Management",
    description: "Seamless scheduling and perfect timing throughout",
  },
  {
    icon: Mic,
    title: "MC Support & Coordination",
    description: "Professional assistance for smooth program flow",
  },
  {
    icon: Handshake,
    title: "Hospitality Management",
    description: "Complete guest experience management from start to finish",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our Wedding Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We provide full wedding protocol and hospitality support
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-9 h-9 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every Wedding is Unique Section */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Wedding is Unique
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We understand that no two weddings are the same. That's why we adjust our services to match your specific needs, style, and vision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate ceremonies to grand celebrations, we bring the same level of professionalism, elegance, and attention to detail to every event.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md text-center"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 transition-all duration-300 text-center"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={serviceHero}
              alt="Elegant wedding room setup"
              className="rounded-xl shadow-2xl max-w-full h-auto object-cover max-h-96 lg:max-h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}