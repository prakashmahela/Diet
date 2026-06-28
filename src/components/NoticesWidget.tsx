import React, { useState, useMemo } from 'react';
import { Search, Calendar, Bell, FileText, Printer, ArrowRight, Share2, Eye, X } from 'lucide-react';
import { Notice, AccessibilityConfig } from '../types';
import { NOTICES } from '../data';

interface NoticesWidgetProps {
  accessibility: AccessibilityConfig;
}

export default function NoticesWidget({ accessibility }: NoticesWidgetProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeNotice, setActiveNotice] = useState<Notice | null>(null);

  const categories = useMemo(() => {
    const list = new Set(NOTICES.map(n => n.category));
    return ['All', ...Array.from(list)];
  }, []);

  const filteredNotices = useMemo(() => {
    return NOTICES.filter(notice => {
      const matchCat = selectedCategory === 'All' || notice.category === selectedCategory;
      const matchSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (notice.refNo && notice.refNo.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section 
      id="latest-notices" 
      className={`py-16 px-4 scroll-mt-24 transition-colors duration-200 ${
        accessibility.isHighContrast 
          ? 'bg-white text-black border-b border-black' 
          : 'bg-gradient-to-b from-[#FAF8F2] to-[#FAF8F2]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <Bell className="w-3.5 h-3.5" />
            <span>Circular &amp; Notice Board</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-serif font-extrabold tracking-tight mb-4">
            Latest Notices &amp; Institutional Updates
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#465362] leading-relaxed">
            Stay informed with our regular announcements regarding academic enrollments, student examinations, state-level workshops, and teacher capacities.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl shadow-custom-md p-4 sm:p-6 mb-8 border border-brand-green/10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-sans font-bold cursor-pointer transition-all duration-150 whitespace-nowrap ${
                  selectedCategory === cat
                    ? accessibility.isHighContrast
                      ? 'bg-black text-white'
                      : 'bg-brand-green text-white shadow-sm'
                    : accessibility.isHighContrast
                      ? 'bg-white text-black border border-black hover:bg-zinc-100'
                      : 'bg-brand-cream hover:bg-brand-cream-dark text-brand-navy/85'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" />
            <input
              type="text"
              placeholder="Search notices, reference IDs, keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-brand-cream/45 border border-brand-green/10 rounded-xl focus:outline-none focus:border-brand-green transition-all"
            />
          </div>
        </div>

        {/* Notice Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredNotices.map((notice) => {
            const isLatest = notice.important;
            return (
              <div
                key={notice.id}
                className={`rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 relative group justify-between ${
                  accessibility.isHighContrast
                    ? 'bg-white border-2 border-black hover:bg-zinc-50'
                    : isLatest
                      ? 'bg-white border-l-4 border-l-brand-gold border-t border-r border-b border-brand-green/10 shadow-custom-md hover:-translate-y-1.5'
                      : 'bg-white border-brand-green/5 shadow-custom-sm hover:shadow-custom-md hover:-translate-y-1'
                }`}
              >
                {/* Notice Top Elements */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-brand-navy/60">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      {notice.date}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      notice.category === 'Admission' 
                        ? 'bg-blue-550/10 text-blue-700' 
                        : notice.category === 'Workshop' 
                          ? 'bg-purple-100 text-purple-700' 
                          : notice.category === 'Examination' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {notice.category}
                    </span>
                  </div>

                  {notice.important && (
                    <div className="inline-flex items-center gap-1 text-[10px] text-red-750 font-extrabold uppercase tracking-wide bg-red-50 px-2 py-0.5 rounded border border-red-200 w-fit animate-pulse">
                      <span>• Crucial Bulletin</span>
                    </div>
                  )}

                  <h3 className={`text-base font-serif font-bold leading-snug group-hover:text-brand-green transition-colors duration-150 ${
                    accessibility.isHighContrast ? 'text-black font-extrabold' : 'text-brand-navy'
                  }`}>
                    {notice.title}
                  </h3>

                  {notice.refNo && (
                    <code className="text-[10.5px] font-mono text-brand-navy/50 bg-brand-cream/50 py-0.5 px-2 rounded w-fit">
                      Ref: {notice.refNo}
                    </code>
                  )}

                  <p className="text-[13px] text-[#465362] line-clamp-3 leading-relaxed mt-1">
                    {notice.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream-dark/50 flex items-center justify-between">
                  <button
                    onClick={() => setActiveNotice(notice)}
                    className={`inline-flex items-center gap-1.5 text-xs font-sans font-bold cursor-pointer transition-colors duration-150 ${
                      accessibility.isHighContrast 
                        ? 'text-black underline' 
                        : 'text-brand-green hover:text-brand-gold-dark'
                    }`}
                  >
                    <span>Read Circular</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-[10.5px] text-brand-navy/40 font-mono">
                    ID: {notice.id}
                  </span>
                </div>
              </div>
            );
          })}

          {filteredNotices.length === 0 && (
            <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-brand-green/20">
              <FileText className="w-10 h-10 text-brand-navy/20 mx-auto mb-3" />
              <p className="text-sm text-brand-navy/60 font-semibold mb-1">No Matching Bulletins Found</p>
              <p className="text-xs text-brand-navy/40">Try resetting filters or adjusting search queries.</p>
            </div>
          )}
        </div>
      </div>

      {/* Notice Detail Modal Backdrop */}
      {activeNotice && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveNotice(null)}
        >
          <div 
            className={`w-full max-w-2xl rounded-2xl shadow-custom-lg overflow-hidden flex flex-col max-h-[90vh] border animate-in zoom-in-95 duration-150 ${
              accessibility.isHighContrast 
                ? 'bg-white border-4 border-black text-black' 
                : 'bg-white border-brand-green/20'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-4 sm:p-6 flex justify-between items-start gap-4 border-b ${
              accessibility.isHighContrast ? 'border-black' : 'bg-brand-cream/40 border-brand-green/5'
            }`}>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-brand-gold tracking-widest uppercase">
                  DIET Dimapur Memorandum
                </span>
                <span className="text-[10px] font-mono text-brand-navy/50">
                  REF NO: {activeNotice.refNo || "DIET-DMP-CIRCULAR-2026"}
                </span>
                <span className="text-xs font-mono text-brand-navy/60">
                  DATE OF ISSUE: {activeNotice.date}
                </span>
              </div>
              <button
                onClick={() => setActiveNotice(null)}
                className="p-1.5 rounded-lg hover:bg-black/5 cursor-pointer text-brand-navy/70 transition-colors"
                aria-label="Close Notice Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-serif leading-relaxed text-sm sm:text-base text-zinc-800">
              {activeNotice.important && (
                <div className="mb-4 bg-red-50 text-red-850 p-3 rounded-lg border border-red-200 text-xs font-sans font-bold flex items-center gap-2">
                  <Bell className="w-4 h-4 shrink-0" />
                  <span>CRITICAL NOTICE: Standard administrative procedure is active. Ensure prompt actions as detailed below.</span>
                </div>
              )}

              <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy mb-5 border-b pb-3 leading-snug">
                {activeNotice.title}
              </h2>

              <p className="whitespace-pre-wrap font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#2C3539]">
                {activeNotice.content}
              </p>

              <div className="mt-8 pt-6 border-t border-dashed border-brand-green/10 flex flex-col gap-4 text-xs font-sans text-brand-navy/60">
                <p>By order of:</p>
                <div className="leading-tight">
                  <strong className="text-brand-navy font-bold">Principal Office, DIET Dimapur</strong>
                  <p>Virazouma, 7th Mile, Dimapur, Nagaland</p>
                  <p className="text-[11px] italic mt-1 text-emerald-800">For clarifications regarding this publication, contact JAMES SEMA (Nodal Staff).</p>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 bg-brand-cream/20 border-t border-brand-green/5 flex flex-wrap gap-3 items-center justify-between sm:px-6">
              <span className="text-[11px] font-sans font-medium text-brand-navy/50">
                Category: <strong className="text-brand-navy font-bold">{activeNotice.category}</strong>
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 bg-brand-cream hover:bg-brand-cream-dark text-brand-navy font-bold text-xs rounded-lg inline-flex items-center gap-1.5 border border-brand-green/10 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Memo</span>
                </button>
                <button
                  onClick={() => alert(`Simulating PDF download for: ${activeNotice.title}`)}
                  className="px-3.5 py-1.5 bg-brand-green text-white hover:bg-brand-navy font-bold text-xs rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Download Circular (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
