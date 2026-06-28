import React, { useState, useMemo } from 'react';
import { Image as ImageIcon, Eye, X, ChevronLeft, ChevronRight, Download, ZoomIn } from 'lucide-react';
import { GalleryItem, AccessibilityConfig } from '../types';
import { GALLERY } from '../data';

interface InteractiveGalleryProps {
  accessibility: AccessibilityConfig;
}

export default function InteractiveGallery({ accessibility }: InteractiveGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Campus' | 'Training' | 'Academics' | 'Events'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') return GALLERY;
    return GALLERY.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === 0) return filteredItems.length - 1;
      return (prev ?? 0) - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === filteredItems.length - 1) return 0;
      return (prev ?? 0) + 1;
    });
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section 
      id="photo-gallery" 
      className={`py-16 px-4 scroll-mt-24 transition-colors duration-200 ${
        accessibility.isHighContrast 
          ? 'bg-white text-black border-b border-black' 
          : 'bg-white border-b border-brand-green/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Tour &amp; Archives</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-serif font-extrabold tracking-tight mb-4">
            DIET Dimapur Photo Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#465362] leading-relaxed">
            Explore authentic highlights of our serene physical campus, active teacher capacity workshops, laboratory lectures, and annual trainee events.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto">
          {(['All', 'Campus', 'Training', 'Academics', 'Events'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-sans font-bold cursor-pointer transition-all duration-150 ${
                selectedFilter === cat
                  ? accessibility.isHighContrast
                    ? 'bg-black text-white'
                    : 'bg-brand-green text-white shadow-sm'
                  : 'bg-brand-cream hover:bg-brand-cream-dark text-brand-navy/85'
              }`}
            >
              {cat === 'All' ? 'All Images' : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border shadow-custom-sm overflow-hidden ${
                accessibility.isHighContrast 
                  ? 'border-2 border-black' 
                  : 'border-brand-green/10 bg-brand-cream/10'
              }`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] bg-brand-gold text-brand-navy px-2 py-0.5 rounded font-extrabold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/25">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-white">
                  <h4 className="font-serif font-bold text-sm leading-snug line-clamp-1 mb-1">
                    {item.alt}
                  </h4>
                  <p className="text-[11px] text-brand-cream/80 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Lighbox Slider */}
      {currentLightboxItem && (
        <div 
          className="fixed inset-0 bg-black/95 z-55 flex flex-col justify-between p-4 sm:p-6 text-white animate-in freeze-0 fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Header Controls */}
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-xs sm:text-sm font-mono tracking-wide text-brand-gold">
              DIET Gallery Exhibition Panel • {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Saving high-resolution version of: ${currentLightboxItem.alt}`);
                }}
                className="p-2 rounded-lg hover:bg-white/10 text-white cursor-pointer"
                title="Download image reference"
              >
                <Download className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-lg hover:bg-white/10 text-white cursor-pointer"
                aria-label="Exit Lightbox viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central stage */}
          <div className="flex-1 flex justify-between items-center gap-2 max-w-5xl mx-auto w-full py-4 relative">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/15 text-white cursor-pointer transition-all shrink-0"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Img Box */}
            <div 
              className="flex-1 h-full max-h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentLightboxItem.src}
                alt={currentLightboxItem.alt}
                className="max-w-full max-h-full object-contain rounded-lg border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/15 text-white cursor-pointer transition-all shrink-0"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Footer Text area */}
          <div className="text-center py-4 border-t border-white/10 max-w-2xl mx-auto">
            <span className="text-[10px] bg-brand-gold text-brand-navy px-2 py-0.5 rounded font-bold uppercase tracking-widest inline-block mb-2">
              {currentLightboxItem.category}
            </span>
            <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-1.5 leading-snug">
              {currentLightboxItem.alt}
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 max-w-xl mx-auto leading-relaxed">
              {currentLightboxItem.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
