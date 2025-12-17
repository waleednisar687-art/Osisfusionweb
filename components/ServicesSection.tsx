"use client";
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  Satellite, 
  Radio, 
  Map, 
  Network, 
  Layers,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 2,
      icon: Satellite,
      title: 'Satellite Services',
      description: 'Advanced satellite communication services providing global connectivity, broadcasting, and data transmission for enterprises worldwide.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/SatHubs-OFS-Final-Image-1.webp',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/satellite-services'
    },
    {
      id: 3,
      icon: Radio,
      title: 'Electrical Solutions',
      description: 'Comprehensive electrical systems for reliable power, safety, and efficiency.',
      image: 'data:image/jpeg;base64,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',
      color: 'from-[#2563EB] to-[#06B6D4]',
      hoverColor: 'group-hover:border-[#06B6D4]',
      link: '/services/l-band'
    },
    {
      id: 4,
      icon: Map,
      title: 'GIS',
      description: 'Geographic Information Systems solutions for spatial data analysis, mapping, and location-based services with cutting-edge technology.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/GIS1.png',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/gis'
    },
    {
      id: 5,
      icon: Network,
      title: 'ICT Services & Solutions',
      description: 'Complete information and communication technology services including network infrastructure, cloud solutions, and enterprise IT management.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/OFS-Final-Image.jpg',
      color: 'from-[#2563EB] to-[#06B6D4]',
      hoverColor: 'group-hover:border-[#06B6D4]',
      link: '/services/ict-services'
    },
    {
      id: 6,
      icon: Layers,
      title: 'Integration Solutions & Services',
      description: 'Seamless system integration services connecting diverse technologies and platforms for unified, efficient business operations.',
      image: 'https://ofbs-oft.com/wp-content/uploads/2025/01/OFS-Final-Image.png',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/integration-services'
    },
     {
      id: 8,
      icon: Radio,
      title: 'Radio Communication Solutions',
      description: 'Advanced satellite communication services providing global connectivity, broadcasting, and data transmission for enterprises worldwide.',
      image: 'data:image/jpeg;base64,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',
      color: 'from-[#2563EB] to-[#1E3A8A]',
      hoverColor: 'group-hover:border-[#2563EB]',
      link: '/services/radio-communication-solutions'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-[#F1F5F9] to-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Orbs - OFBS Colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(37,99,235,0.12)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(6,182,212,0.08)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(30,58,138,0.06)' }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#06B6D4'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 rounded-lg"
          style={{ borderColor: 'rgba(37,99,235,0.08)' }}
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-40 h-40 border-2 rounded-full"
          style={{ borderColor: 'rgba(6,182,212,0.06)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="relative inline-block mb-6">
            <div 
              className="absolute inset-0 blur-3xl opacity-20" 
              style={{ 
                background: 'linear-gradient(to right, rgba(37,99,235,0.3), rgba(6,182,212,0.3), rgba(37,99,235,0.3))'
              }}
            />
            
            <h2
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                letterSpacing: '0.02em',
                color: '#0F172A'
              }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#475569'
            }}
          >
            Comprehensive satellite and IT communication solutions tailored to your business needs
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div 
                className={`relative h-full bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 ${service.hoverColor}`}
                style={{ 
                  borderColor: '#E2E8F0',
                  boxShadow: '0 4px 6px -1px rgba(37,99,235,0.05), 0 2px 4px -1px rgba(37,99,235,0.03)'
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay - OFBS Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-4 right-4"
                  >
                    <div 
                      className="w-12 h-12 backdrop-blur-md rounded-xl flex items-center justify-center border"
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderColor: 'rgba(255,255,255,0.3)'
                      }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif",
                      color: '#0F172A'
                    }}
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#06B6D4] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed line-clamp-3"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#475569'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <motion.a
                    href={service.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center space-x-2 font-semibold group/btn transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#2563EB'
                    }}
                  >
                    <span className="group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#2563EB] group-hover/btn:to-[#06B6D4] group-hover/btn:bg-clip-text group-hover/btn:text-transparent">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.a>
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Decorative Corner */}
                <div 
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-xl transition-colors duration-500"
                  style={{ 
                    borderColor: '#E2E8F0'
                  }}
                />
              </div>

              {/* External Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-center"
        style={{ 
          background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)'
        }}
      />
    </section>
  );
};

export default ServicesSection;