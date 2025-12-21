"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants =  {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.65)' }}
        >
          <source
            src="https://comssol.com/wp-content/uploads/2021/01/Satellite-37713.mp4"
            type="video/mp4"
          />
        </video>

        {/* OFBS Brand Gradient Overlays - Multiple layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-cyan-900/30" />
        
        {/* Animated gradient orbs - OFBS colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className=""
          >
            
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading - OFBS Style */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="block">Connecting the</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Disconnected
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Integrated ICT and network solutions that connect remote operations through proven system integration expertise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button - OFBS Brand Colors */}
            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-cyan-300 font-semibold rounded-xl border-2 border-blue-500/50 hover:bg-white/20 hover:border-cyan-400/70 hover:text-white transition-all duration-300 shadow-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Learn More</span>
              </span>
            </motion.button>
          </motion.div>       
        </motion.div>
      </div>

 
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid overlay for tech feel */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;