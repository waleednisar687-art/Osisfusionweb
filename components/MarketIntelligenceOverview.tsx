"use client";
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Target, Satellite, Globe, Radio, Network, Layers, MapPin } from 'lucide-react';

const ServicesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const coreCapabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced forecasting models for satellite performance and market trends"
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Deep analysis of usage patterns and connectivity behavior"
    },
    {
      icon: Target,
      title: "Network Optimization",
      description: "Real-time intelligence for coverage and reliability optimization"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F1F5F9 50%, #FFFFFF 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent)' }}></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06), transparent)' }}></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#06B6D4',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 rounded-full border border-[#E2E8F0] mb-6">
            <span className="text-sm font-semibold" style={{ color: '#2563EB' }}>Comprehensive Solutions</span>
          </div>      
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#475569' }}>
            End-to-end satellite and ICT solutions designed for enterprise-grade reliability and global reach
          </p>
        </div>
        <div className={`bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligence & Analytics Platform
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Transform satellite data into actionable intelligence with real-time monitoring and predictive insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {coreCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{capability.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
              <button className="px-8 py-4 bg-white text-[#2563EB] rounded-xl font-semibold shadow-xl shadow-black/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Intelligence Platform
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesShowcase;