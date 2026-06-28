import React, { useState, useMemo } from 'react';
import { ShieldAlert, Search, Mail, Phone, Users, Landmark, FileBadge, CornerRightDown, ArrowUpRight } from 'lucide-react';
import { StaffMember, AccessibilityConfig } from '../types';
import { STAFF } from '../data';

interface StaffDirectoryWidgetProps {
  accessibility: AccessibilityConfig;
}

export default function StaffDirectoryWidget({ accessibility }: StaffDirectoryWidgetProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<'All' | 'PSTE' | 'ET' | 'DR' | 'WE' | 'CMDE'>('All');
  const [viewBioStaff, setViewBioStaff] = useState<StaffMember | null>(null);

  // Split into Leadership and Lecturer directories
  const leaders = useMemo(() => STAFF.filter(s => s.isLeadership), []);

  const lecturers = useMemo(() => {
    return STAFF.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (s.department && s.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (s.qualification && s.qualification.toLowerCase().includes(searchTerm.toLowerCase()));
      
      let matchDept = true;
      if (selectedDept !== 'All') {
        if (selectedDept === 'PSTE') matchDept = s.department?.includes('Pre-Service') || false;
        if (selectedDept === 'ET') matchDept = s.department?.includes('Educational Technology') || false;
        if (selectedDept === 'DR') matchDept = s.department?.includes('District Resource') || false;
        if (selectedDept === 'WE') matchDept = s.department?.includes('Work Experience') || false;
        if (selectedDept === 'CMDE') matchDept = s.department?.includes('Curriculum') || false;
      }

      return !s.isLeadership && matchSearch && matchDept;
    });
  }, [searchTerm, selectedDept]);

  return (
    <section 
      id="staff-profile" 
      className={`py-16 px-4 scroll-mt-24 transition-colors duration-200 ${
        accessibility.isHighContrast 
          ? 'bg-white text-black border-b border-black' 
          : 'bg-[#FAF8F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Administrative Leadership &amp; Faculty</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-serif font-extrabold tracking-tight mb-4">
            Who’s Who at DIET Dimapur
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#465362] leading-relaxed">
            Our qualified educational lecturers and administrative coordinators collaborate directly with SCERT Nagaland to ensure elite instruction.
          </p>
        </div>

        {/* 1. LEADERSHIP SPOTLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              className={`rounded-2xl overflow-hidden border flex flex-col sm:flex-row shadow-custom-md hover:shadow-custom-lg transition-all duration-300 ${
                accessibility.isHighContrast 
                  ? 'bg-white border-2 border-black text-black' 
                  : 'bg-white border-brand-green/10'
              }`}
            >
              {/* Photo Container */}
              <div className="w-full sm:w-2/5 relative h-64 sm:h-auto min-h-[220px] bg-brand-cream/40 shrink-0">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.designation}`}
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {/* Government Crest Badge overlay */}
                <div className="absolute top-3 left-3 bg-brand-green/90 text-brand-gold text-[9px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase">
                  LEADER
                </div>
              </div>

              {/* Leader Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-sans font-bold text-brand-gold uppercase tracking-wider mb-1">
                    {leader.designation}
                  </span>
                  <h3 className={`text-xl font-serif font-extrabold leading-tight ${
                    accessibility.isHighContrast ? 'text-black' : 'text-brand-navy'
                  }`}>
                    {leader.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-navy/60 font-semibold mt-0.5">
                    {leader.qualification}
                  </p>
                  
                  <p className="text-xs text-[#465362] line-clamp-4 leading-relaxed mt-3 italic">
                    "{leader.bio}"
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-green/5 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setViewBioStaff(leader)}
                    className={`inline-flex items-center gap-1 text-xs font-sans font-bold cursor-pointer transition-colors ${
                      accessibility.isHighContrast ? 'text-black underline' : 'text-brand-green hover:text-brand-gold-dark'
                    }`}
                  >
                    <span>Read Full Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] uppercase font-bold text-brand-navy/40 tracking-wider">SCERT Council</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. LECTURER ROSTER WITH SEARCH / FILTER */}
        <div className="bg-white rounded-3xl shadow-custom-md border border-brand-green/5 p-6 sm:p-8 max-w-5.5xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-green/5 pb-6 mb-6">
            <h3 className="text-lg sm:text-xl font-serif font-extrabold text-brand-navy flex items-center gap-2">
              <FileBadge className="w-5 h-5 text-brand-gold" />
              <span>Full Faculty Directory</span>
            </h3>

            {/* Department Buttons */}
            <div className="flex flex-wrap gap-1 w-full md:w-auto overflow-x-auto">
              {(['All', 'PSTE', 'ET', 'DR', 'WE', 'CMDE'] as const).map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-lg text-xs font-sans font-bold cursor-pointer transition-all duration-150 whitespace-nowrap ${
                    selectedDept === dept
                      ? accessibility.isHighContrast
                        ? 'bg-black text-white'
                        : 'bg-brand-green text-white'
                      : 'bg-brand-cream/60 text-brand-navy hover:bg-brand-cream-dark'
                  }`}
                >
                  {dept === 'All' ? 'All Branches' : `${dept} Cell`}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-navy/40" />
              <input
                type="text"
                placeholder="Search lecturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-brand-cream/50 border border-brand-green/10 rounded-lg focus:outline-none focus:border-brand-green"
              />
            </div>
          </div>

          {/* Roster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lecturers.map((fac) => {
              const isJames = fac.name.includes("James");
              return (
                <div 
                  key={fac.id}
                  className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    accessibility.isHighContrast 
                      ? 'bg-white border-2 border-black hover:bg-zinc-50' 
                      : isJames
                        ? 'bg-brand-cream/35 border-l-4 border-l-brand-gold border-t border-b border-r border-brand-green/10 shadow-custom-sm'
                        : 'bg-white border-brand-green/5 hover:border-brand-green/15'
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[10px] tracking-wider uppercase font-extrabold text-brand-green">
                        {fac.designation}
                      </span>
                      {isJames && (
                        <span className="text-[9px] bg-brand-green text-brand-cream px-1.5 py-0.5 rounded font-bold uppercase">
                          Nodal Desk
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-base font-serif font-extrabold text-brand-navy">
                      {fac.name}
                    </h4>
                    
                    <p className="text-[11px] font-mono text-brand-navy/60">
                      {fac.qualification}
                    </p>

                    {fac.department && (
                      <p className="text-xs text-[#465362] font-semibold mt-1">
                        {fac.department}
                      </p>
                    )}
                  </div>

                  {/* Contact Links */}
                  <div className="pt-4 mt-4 border-t border-brand-cream-dark/40 flex flex-col gap-1 text-[11px] font-sans">
                    {fac.email && (
                      <span className="flex items-center gap-1.5 text-zinc-650 hover:text-brand-green">
                        <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="truncate">{fac.email}</span>
                      </span>
                    )}
                    {fac.phone && (
                      <span className="flex items-center gap-1.5 text-zinc-650 font-bold">
                        <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{fac.phone}</span>
                      </span>
                    )}
                    {fac.id === 'S003' && (
                      <button
                        onClick={() => setViewBioStaff(fac)}
                        className="text-xs font-bold text-brand-green hover:underline text-left mt-2 cursor-pointer flex items-center gap-1"
                      >
                        <span>View Nodal Portfolio</span>
                        <CornerRightDown className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {lecturers.length === 0 && (
              <div className="col-span-full py-10 text-center text-brand-navy/55 font-semibold">
                No educators or administrative staff fit your exact filtering.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Staff Profile Bio Modal */}
      {viewBioStaff && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setViewBioStaff(null)}
        >
          <div 
            className={`w-full max-w-lg rounded-2xl shadow-custom-lg overflow-hidden flex flex-col border animate-in zoom-in-95 duration-150 ${
              accessibility.isHighContrast 
                ? 'bg-white border-4 border-black text-black' 
                : 'bg-white border-brand-green/20'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-extrabold text-brand-gold tracking-wider uppercase mb-0.5">
                    {viewBioStaff.designation}
                  </span>
                  <h3 className="text-xl font-serif font-extrabold text-brand-navy">
                    {viewBioStaff.name}
                  </h3>
                  <span className="text-xs font-mono text-brand-navy/50">
                    {viewBioStaff.qualification}
                  </span>
                </div>
                <button
                  onClick={() => setViewBioStaff(null)}
                  className="p-1 rounded-lg hover:bg-black/5 text-zinc-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {viewBioStaff.image && (
                <div className="w-32 h-32 rounded-xl overflow-hidden self-center border-2 border-brand-green/10 shadow-sm">
                  <img
                    src={viewBioStaff.image}
                    alt={viewBioStaff.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="text-sm text-zinc-700 leading-relaxed font-serif mt-2">
                {viewBioStaff.bio ? (
                  <p className="whitespace-pre-line">{viewBioStaff.bio}</p>
                ) : (
                  <p>
                    Shri/Smt. {viewBioStaff.name} is a vital lecturer in the {viewBioStaff.department || 'A级 Training Board'}. 
                    Conducting specialized workshops, mentoring training candidates, and delivering research evaluation guides for DIET's Pre-Service and ODL programs.
                  </p>
                )}
              </div>

              {viewBioStaff.department && (
                <div className="bg-brand-cream/50 rounded-xl p-3 text-xs text-brand-navy/80 border border-brand-green/5 font-sans">
                  <strong>Branch Attachment:</strong> {viewBioStaff.department}
                </div>
              )}

              {/* Contact Information block */}
              <div className="flex flex-col gap-1.5 pt-4 border-t text-xs font-sans">
                {viewBioStaff.email && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-brand-green">Email Desk:</span>
                    <span className="font-mono text-zinc-650">{viewBioStaff.email}</span>
                  </div>
                )}
                {viewBioStaff.phone && (
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-brand-green">Mobile Desk:</span>
                    <span className="font-mono text-zinc-650 font-bold">{viewBioStaff.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-brand-green">Institution Location:</span>
                  <span>Virazouma, Main Administrative Block Room 102</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => setViewBioStaff(null)}
                className="w-full mt-4 py-2.5 bg-brand-green text-white hover:bg-brand-navy rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer"
              >
                Close Profile Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
