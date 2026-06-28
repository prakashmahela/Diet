import React, { useState } from 'react';
import { Menu, X, Landmark, GraduationCap, ChevronRight } from 'lucide-react';
import { AccessibilityConfig } from '../types';

interface HeaderNavProps {
  accessibility: AccessibilityConfig;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function HeaderNav({ accessibility, activeSection, onNavigate }: HeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about-us' },
    { label: 'Academics', target: 'courses-offered' },
    { label: 'Staff Profile', target: 'staff-profile' },
    { label: 'Activities', target: 'activities-training' },
    { label: 'Photo Gallery', target: 'photo-gallery' },
    { label: 'Notifications', target: 'latest-notices' },
    { label: 'Fee Structure', target: 'fee-structure' },
    { label: 'Contact Us', target: 'contact-us' },
  ];

  const handleItemClick = (target: string) => {
    onNavigate(target);
    setIsOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md flex flex-col transition-all duration-200">
      {/* 1. Top Government Strip */}
      <div 
        className={`w-full py-1.5 px-4 text-[11px] sm:text-xs font-serif font-semibold border-b ${
          accessibility.isHighContrast 
            ? 'bg-black text-white border-zinc-800' 
            : 'bg-brand-green text-brand-cream border-brand-gold/15'
        }`}
        id="diet-government-strip"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-brand-gold">★</span>
            <span className="uppercase tracking-wider">Government of Nagaland</span>
            <span className="text-[#ffffff45] hidden xs:inline">|</span>
            <span className="text-brand-cream/90 font-sans font-normal hidden xs:inline">SCERT / DIET Dimapur</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs font-sans font-normal text-brand-cream/80">
            <span className="hidden md:inline">Contact: princidietdmp@gmail.com</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px]">Academic Year 2026-27 Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Primary Educational Header */}
      <div 
        className={`w-full py-4 px-4 sm:px-6 transition-colors duration-200 ${
          accessibility.isHighContrast 
            ? 'bg-white text-black border-b-2 border-black' 
            : 'bg-white border-b border-brand-green/10'
        }`}
        id="diet-primary-header"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Branding */}
          <div 
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3 sm:gap-4.5 cursor-pointer select-none group"
          >
            {/* SVG Crest Seal */}
            <div className={`p-2 rounded-full hidden sm:flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
              accessibility.isHighContrast 
                ? 'bg-black text-white border-2 border-black' 
                : 'bg-brand-green/5 text-brand-green border border-brand-green/10'
            }`}>
              <svg 
                className="w-12 h-12" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="40" stroke="#C8A24A" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M50 22 L62 46 L88 46 L67 60 L75 84 L50 70 L25 84 L33 60 L12 46 L38 46 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                <path d="M35 55 L50 40 L65 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 65 H60" stroke="#C8A24A" strokeWidth="3" strokeLinecap="round" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
                <text x="50" y="93" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="monospace">SCERT</text>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className={`font-serif font-extrabold tracking-tight text-base sm:text-lg md:text-xl md:leading-tight ${
                accessibility.isHighContrast ? 'text-black' : 'text-brand-navy'
              }`}>
                DIET DIMAPUR
              </span>
              <span className={`text-[10px] sm:text-xs tracking-wider uppercase font-sans font-semibold ${
                accessibility.isHighContrast ? 'text-zinc-700' : 'text-brand-green'
              }`}>
                District Institute of Education &amp; Training
              </span>
              <span className={`text-[9px] font-medium font-sans ${
                accessibility.isHighContrast ? 'text-zinc-650' : 'text-brand-navy/60'
              }`}>
                Virazouma, 7th Mile, Dimapur, Nagaland — Estd. 2006
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isAct = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  onClick={() => handleItemClick(item.target)}
                  className={`px-2 py-1.5 rounded-md text-[13px] font-sans font-semibold transition-all duration-150 cursor-pointer ${
                    accessibility.isHighContrast
                      ? isAct
                        ? 'bg-black text-white hover:bg-black/90 px-3'
                        : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                      : isAct
                        ? 'bg-brand-green text-white hover:bg-brand-green-dark border-b-2 border-brand-gold px-3 shadow-sm'
                        : 'text-brand-navy/90 hover:text-brand-green hover:bg-brand-cream-dark/40'
                  }`}
                  id={`nav-item-${item.target}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Right Controls: Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-lg border transition-all duration-150 cursor-pointer ${
                accessibility.isHighContrast
                  ? 'bg-white text-black border-black hover:bg-zinc-150'
                  : 'bg-brand-cream/50 text-brand-navy border-brand-green/10 hover:bg-brand-cream-dark/60'
              }`}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Menu Dropdown */}
      {isOpen && (
        <div 
          className={`lg:hidden w-full absolute top-full left-0 border-t shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200 ${
            accessibility.isHighContrast
              ? 'bg-white text-black border-black'
              : 'bg-brand-cream border-brand-green/15'
          }`}
          id="diet-mobile-dropdown"
        >
          <div className="py-2.5 px-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              const isAct = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  onClick={() => handleItemClick(item.target)}
                  className={`w-full py-3 px-4 rounded-lg text-left text-sm font-sans font-bold flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    accessibility.isHighContrast
                      ? isAct
                        ? 'bg-black text-white'
                        : 'text-zinc-800 hover:bg-zinc-100 border-b border-zinc-200'
                      : isAct
                        ? 'bg-brand-green text-white border-l-4 border-brand-gold'
                        : 'text-brand-navy hover:text-brand-green hover:bg-brand-cream-dark/50 border-b border-brand-green/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isAct ? 'rotate-90' : 'opacity-40'}`} />
                </button>
              );
            })}
            <div className="py-4 px-2 mt-2 bg-white/40 rounded-xl border border-brand-green/5 text-xs text-brand-navy/60 flex flex-col gap-1.5">
              <span className="font-semibold text-brand-green">Academic Support Desk:</span>
              <span>☏ 9856221729 (Nodal Officer James Sema)</span>
              <span>✉ princidietdmp@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
