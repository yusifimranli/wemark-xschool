'use client';

import { useState } from 'react';

interface AboutProps {
  data: {
    about_title?: string;
    about_description?: string;
    about_images?: { image: string }[];
    [key: string]: any;
  };
}

export default function AboutXSchool({ data }: AboutProps) {
  const images = data?.about_images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#EAEAEA] text-black border-t border-gray-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none whitespace-pre-line">
            {data?.about_title || "ABOUT\nxSCHOOL"}
          </h2>
          <a 
            href="#xschool" 
            className="text-sm font-semibold underline underline-offset-4 mt-4 md:mt-0 hover:text-gray-600 transition-colors"
          >
            Go to xSchool
          </a>
        </div>
        
        <div className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl leading-relaxed mb-16 space-y-6 whitespace-pre-line">
          {data?.about_description || "Loading description..."}
        </div>

        {/* Slider Bloku */}
        {images.length > 0 && (
          <div className="relative w-full">
            {/* Şəkil konteyneri */}
            <div className="overflow-hidden rounded-2xl bg-gray-300 h-[400px] md:h-[500px] relative shadow-md">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((item, index) => (
                  <div key={index} className="min-w-full h-full flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={`About xSchool ${index}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* İdarəetmə Düymələri (Oklar) */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-black' : 'w-2 bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-lg font-bold"
                >
                  ←
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-lg font-bold"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}