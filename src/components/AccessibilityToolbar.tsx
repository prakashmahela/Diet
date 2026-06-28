import React from 'react';
import { Accessibility, RotateCcw, ZoomIn, ZoomOut, Eye, Type } from 'lucide-react';
import { AccessibilityConfig } from '../types';

interface AccessibilityToolbarProps {
  config: AccessibilityConfig;
  onChange: (updater: (prev: AccessibilityConfig) => AccessibilityConfig) => void;
}

export default function AccessibilityToolbar({ config, onChange }: AccessibilityToolbarProps) {
  const decreaseFontSize = () => {
    onChange((prev) => ({
      ...prev,
      fontSizeLevel: Math.max(0, prev.fontSizeLevel - 1),
    }));
  };

  const increaseFontSize = () => {
    onChange((prev) => ({
      ...prev,
      fontSizeLevel: Math.min(2, prev.fontSizeLevel + 1),
    }));
  };

  const toggleHighContrast = () => {
    onChange((prev) => ({
      ...prev,
      isHighContrast: !prev.isHighContrast,
    }));
  };

  const toggleReadableFont = () => {
    onChange((prev) => ({
      ...prev,
      isReadableFont: !prev.isReadableFont,
    }));
  };

  const handleReset = () => {
    onChange(() => ({
      fontSizeLevel: 0,
      isHighContrast: false,
      isReadableFont: false,
    }));
  };

  const sizeLabels = ["Standard (100%)", "Large (115%)", "Extra Large (130%)"];

  return (
    <div 
      className={`py-1.5 px-4 text-xs border-b transition-colors duration-200 ${
        config.isHighContrast 
          ? 'bg-black text-white border-zinc-800' 
          : 'bg-brand-navy text-brand-cream border-brand-green/20'
      }`}
      id="diet-accessibility-toolbar"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side: Tagline info */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide">
          <Accessibility className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span>Screen Reader Access & Accommodation Panel</span>
        </div>

        {/* Right Side: Control Cluster */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Font Controls */}
          <div className="flex items-center gap-1 border-r border-[#ffffff20] pr-2.5">
            <span className="text-[10px] uppercase tracking-wider text-brand-cream/60 mr-1.5">Text Size:</span>
            <button
              onClick={decreaseFontSize}
              disabled={config.fontSizeLevel === 0}
              className={`p-1 rounded cursor-pointer transition-all duration-150 flex items-center justify-center ${
                config.isHighContrast 
                  ? 'hover:bg-zinc-800 text-white' 
                  : 'hover:bg-[#ffffff15] text-[#F7F4EA]'
              } disabled:opacity-30`}
              title="Decrease text size"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] min-w-[28px] text-center font-bold text-brand-gold">
              A{config.fontSizeLevel === 1 ? '+' : config.fontSizeLevel === 2 ? '++' : ''}
            </span>
            <button
              onClick={increaseFontSize}
              disabled={config.fontSizeLevel === 2}
              className={`p-1 rounded cursor-pointer transition-all duration-150 flex items-center justify-center ${
                config.isHighContrast 
                  ? 'hover:bg-zinc-800 text-white' 
                  : 'hover:bg-[#ffffff15] text-[#F7F4EA]'
              } disabled:opacity-30`}
              title="Increase text size"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Theme Controls */}
          <div className="flex items-center gap-2 pr-1">
            {/* Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className={`px-2 py-0.5 rounded cursor-pointer transition-all duration-150 flex items-center gap-1 text-[11px] ${
                config.isHighContrast
                  ? 'bg-white text-black font-extrabold shadow-sm'
                  : 'hover:bg-[#ffffff15] text-brand-cream'
              }`}
              title="Toggle high contrast for low vision"
            >
              <Eye className="w-3.5 h-3.5 text-brand-gold" />
              <span>{config.isHighContrast ? "Contrast: High" : "High Contrast"}</span>
            </button>

            {/* Font Type Toggle */}
            <button
              onClick={toggleReadableFont}
              className={`px-2 py-0.5 rounded cursor-pointer transition-all duration-150 flex items-center gap-1 text-[11px] ${
                config.isReadableFont
                  ? 'bg-brand-gold text-brand-navy font-bold shadow-sm'
                  : 'hover:bg-[#ffffff15] text-brand-cream'
              }`}
              title="Toggle high legibility uniform font"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{config.isReadableFont ? "Custom Font Off" : "Readable Font"}</span>
            </button>
          </div>

          {/* Reset All */}
          <button
            onClick={handleReset}
            className={`pl-2 ml-1 cursor-pointer hover:text-brand-gold text-brand-cream/80 transition-all duration-150 flex items-center gap-1 text-[11px] font-medium border-l border-white/20`}
            title="Reset to default settings"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
