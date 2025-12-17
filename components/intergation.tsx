"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Puzzle,
  ServerCog,
  Network,
  Video,
  Camera
} from "lucide-react";

const Intergation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

const segments = [
  {
    icon: Puzzle,
    title: "Integration Solutions",
    description:
      "OFBS specializes in VSAT ground services, with a team experienced in providing integrating services for Comms On-The-Move, Comms On-The-Pause, Fixed and maritime. Our on-ground teams provide site surveys, installation, migration, and maintenance services."
  },
  {
    icon: ServerCog,
    title: "Network & Data Center Integrators (Racking & Stacking)",
    description:
      "We design and deploy robust, scalable, and secure networks, offering scalable networks architecture and commissioning services to ensure consistency and high quality."
  },
  {
    icon: Network,
    title: "ICT Integrators",
    description:
      " Our ICT solutions offer a flexible, open-standard approach to networking, providing efficient VOIP communication, high-quality visual display, and robust security systems."
  },
];


  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl" />
<div className="max-w-7xl mx-auto relative z-10">
  {/* Section Header */}
  <div
    id="segments-header"
    data-animate
    className={`text-center mb-16 ${
      isVisible["segments-header"] ? "animate-fade-up" : "opacity-0"
    }`}
  >
    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-blue-900/10 rounded-full border border-blue-100 mb-6">
      <span className="text-blue-600 font-semibold text-sm">
        Integration Capabilities
      </span>
    </div>

    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
      Integration Service Solutions
    </h2>

    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
      Seamless system integration services connecting applications, platforms,
      and data to ensure interoperability, efficiency, and scalable digital
      operations.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
    {segments.map((segment, idx) => (
      <div
        key={idx}
        id={`segment-${idx}`}
        data-animate
        className={`group relative ${
          isVisible[`segment-${idx}`]
            ? "animate-fade-up"
            : "opacity-0"
        }`}
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-blue-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Card */}
        <div className="relative bg-white rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 h-full">
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-t-2xl" />

          {/* Icon */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <segment.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {segment.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {segment.description}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Intergation;
