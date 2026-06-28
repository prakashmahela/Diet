import React, { useState } from 'react';
import { CreditCard, Calculator, Info, CheckCircle, FileSpreadsheet, Sparkles, HelpCircle } from 'lucide-react';
import { AccessibilityConfig } from '../types';
import { FEE_TABS } from '../data';

interface FeeStructureWidgetProps {
  accessibility: AccessibilityConfig;
}

export default function FeeStructureWidget({ accessibility }: FeeStructureWidgetProps) {
  const [activeTab, setActiveTab] = useState<'regular' | 'odl'>('regular');
  
  // Custom Fee Calculator States
  const [selectedCourse, setSelectedCourse] = useState<'regular' | 'odl'>('regular');
  const [hostelRequested, setHostelRequested] = useState<boolean>(false);
  const [studyKitRequested, setStudyKitRequested] = useState<boolean>(true);
  const [examRepeaterCount, setExamRepeaterCount] = useState<number>(0);

  // Constants
  const BASE_REG_COMMITTED = 10100;
  const BASE_ODL_COMMITTED = 5000;
  const HOSTEL_FEE = 4500; // per semester
  const ADDITIONAL_STUDY_KITS = 1200; // practical lesson plan logs, art materials
  const EXAM_BACK_RELO_FEE = 350; // per back paper exam

  // Calculator computation
  const baseCost = selectedCourse === 'regular' ? BASE_REG_COMMITTED : BASE_ODL_COMMITTED;
  const hostelCost = hostelRequested ? HOSTEL_FEE : 0;
  const kitCost = studyKitRequested ? ADDITIONAL_STUDY_KITS : 0;
  const examCost = examRepeaterCount * EXAM_BACK_RELO_FEE;
  const totalCalculated = baseCost + hostelCost + kitCost + examCost;

  return (
    <section 
      id="fee-structure" 
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
            <CreditCard className="w-3.5 h-3.5" />
            <span>State Authorized Fee Structure</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-serif font-extrabold tracking-tight mb-4">
            Official Course Fees &amp; Structural Calculator
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#465362] leading-relaxed">
            DIET Dimapur offers highly subsidized academic structures under SCERT standards, keeping professional teacher qualifications within reach of all ambitious candidates in Nagaland.
          </p>
        </div>

        {/* Two-Column Grid: Left Side has details, Right Side has interactive calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6.5xl mx-auto">
          
          {/* Column 1 (lg:col-span-7) - Structured Ledger */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Tab Selection */}
            <div className="flex gap-1 bg-brand-cream-dark/45 p-1 rounded-xl w-fit border border-brand-green/5">
              <button
                onClick={() => setActiveTab('regular')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-sans font-bold cursor-pointer transition-all duration-150 ${
                  activeTab === 'regular'
                    ? accessibility.isHighContrast
                      ? 'bg-black text-white'
                      : 'bg-brand-green text-white shadow-sm'
                    : 'text-brand-navy/80 hover:bg-brand-cream-dark/30'
                }`}
              >
                Regular D.El.Ed
              </button>
              <button
                onClick={() => setActiveTab('odl')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-sans font-bold cursor-pointer transition-all duration-150 ${
                  activeTab === 'odl'
                    ? accessibility.isHighContrast
                      ? 'bg-black text-white'
                      : 'bg-brand-green text-white shadow-sm'
                    : 'text-brand-navy/80 hover:bg-brand-cream-dark/30'
                }`}
              >
                ODL D.El.Ed (Need-based)
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-brand-cream/50 rounded-2xl border border-brand-green/10 p-5">
              <h3 className="font-serif font-bold text-lg text-brand-navy mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{FEE_TABS[activeTab].title} Information</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#465362] leading-relaxed mb-4">
                {FEE_TABS[activeTab].description} Admission fees are collected once per academic session at the beginning of the respective semester.
              </p>

              {/* Table ledger */}
              <div className="overflow-x-auto rounded-xl border border-brand-green/10 bg-white shadow-custom-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-brand-cream-dark/30 border-b border-brand-green/10">
                      <th className="py-3 px-4 font-bold text-brand-navy">Particular Item / Head of Expenditure</th>
                      <th className="py-3 px-4 font-bold text-brand-navy text-right">State Subsidized Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-green/5">
                    {FEE_TABS[activeTab].table.map((row, idx) => {
                      const isTotal = row.term.toLowerCase().includes('total');
                      return (
                        <tr 
                          key={idx}
                          className={`${isTotal ? 'bg-brand-cream font-bold text-brand-green' : 'hover:bg-brand-cream/20 text-[#2C3539]'}`}
                        >
                          <td className="py-3.5 px-4 font-sans">{row.term}</td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-[#14213d]">{row.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Legal footnotes */}
              <p className="text-[11px] text-brand-navy/55 italic mt-3.5 flex items-start gap-1.5 leading-relaxed">
                <span>⚠</span>
                <span>All state educational collections are governed directly under SCERT directives. Outstation trainees may consult with James Sema regarding installment accommodations.</span>
              </p>
            </div>
          </div>

          {/* Column 2 (lg:col-span-5) - Dynamic Calculator */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border transition-all duration-200 ${
              accessibility.isHighContrast 
                ? 'bg-white border-2 border-black' 
                : 'bg-brand-navy text-brand-cream border-[#ffffff10] shadow-custom-lg'
            }`}>
              
              {/* Header */}
              <div className="pb-4 border-b border-brand-cream/15 mb-6">
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold font-bold flex items-center gap-1.5 mb-1">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Student Tuition Assistant</span>
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold">
                  Academic Fee Estimator
                </h3>
                <p className="text-xs text-brand-cream/70 mt-1">
                  Evaluate custom estimates based on campus services, textbooks, and examinations.
                </p>
              </div>

              {/* Form Selectors */}
              <div className="flex flex-col gap-4 text-sm font-sans">
                
                {/* 1. Select Course */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                    Select Target Program Mode
                  </label>
                  <select 
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value as 'regular' | 'odl')}
                    className="w-full bg-white/5 border border-brand-cream/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-brand-cream focus:outline-none focus:border-brand-gold cursor-pointer"
                  >
                    <option value="regular" className="bg-brand-navy text-brand-cream font-bold">D.El.Ed Regular Admission (₹ 10,100)</option>
                    <option value="odl" className="bg-brand-navy text-brand-cream font-bold">D.El.Ed ODL Course (₹ 5,000)</option>
                  </select>
                </div>

                {/* 2. Hostel Required */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-brand-cream/5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                      Hostel &amp; Mess Utility
                      <span className="text-[9px] bg-brand-gold text-brand-navy px-1.5 rounded-full font-extrabold uppercase py-0.5">Subsidized</span>
                    </span>
                    <span className="text-[10.5px] text-brand-cream/65">
                      Shared campus dorm block (₹ 4,500/Sem)
                    </span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={hostelRequested}
                    onChange={(e) => setHostelRequested(e.target.checked)}
                    className="w-4 h-4 rounded accent-brand-gold cursor-pointer"
                  />
                </div>

                {/* 3. Materials study kits */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-brand-cream/5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs sm:text-sm font-bold">
                      Teaching Aids &amp; Practical Kit
                    </span>
                    <span className="text-[10.5px] text-brand-cream/65">
                      Curriculum log sheets, models (₹ 1,200)
                    </span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={studyKitRequested}
                    onChange={(e) => setStudyKitRequested(e.target.checked)}
                    className="w-4 h-4 rounded accent-brand-gold cursor-pointer"
                  />
                </div>

                {/* 4. Repeater / Back papers */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-lg bg-white/5 border border-brand-cream/5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs sm:text-sm font-bold">
                      Back-Paper Re-examinations
                    </span>
                    <span className="text-[10.5px] text-brand-cream/65">
                      Number of backlog modules (₹ 350 / paper)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setExamRepeaterCount(Math.max(0, examRepeaterCount - 1))}
                      className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 font-bold transition-colors flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-brand-gold min-w-[20px] text-center">{examRepeaterCount}</span>
                    <button 
                      onClick={() => setExamRepeaterCount(Math.min(10, examRepeaterCount + 1))}
                      className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 font-bold transition-colors flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

              {/* Estimate Calculation Breakdown */}
              <div className="mt-6 pt-5 border-t border-brand-cream/15 flex flex-col gap-2 bg-[#081b2e] p-4 rounded-xl">
                <div className="flex justify-between items-center text-xs text-brand-cream/70">
                  <span>Base Admissions Charge:</span>
                  <span className="font-mono">₹ {baseCost.toLocaleString()}</span>
                </div>
                {hostelRequested && (
                  <div className="flex justify-between items-center text-xs text-brand-cream/70">
                    <span>Hostel Accommodations (Sem):</span>
                    <span className="font-mono">₹ {hostelCost.toLocaleString()}</span>
                  </div>
                )}
                {studyKitRequested && (
                  <div className="flex justify-between items-center text-xs text-brand-cream/70">
                    <span>Teacher Internship Aid/Textbooks:</span>
                    <span className="font-mono">₹ {kitCost.toLocaleString()}</span>
                  </div>
                )}
                {examRepeaterCount > 0 && (
                  <div className="flex justify-between items-center text-xs text-brand-cream/70">
                    <span>Backlog Admin Papers ({examRepeaterCount}):</span>
                    <span className="font-mono">₹ {examCost.toLocaleString()}</span>
                  </div>
                )}

                <div className="border-t border-brand-cream/10 mt-3 pt-3 flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-serif font-bold text-brand-gold">Estimated Semester Total:</span>
                  <span className="text-base sm:text-xl font-mono font-extrabold text-[#F7F4EA] underline decoration-brand-gold decoration-2">
                    ₹ {totalCalculated.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Support prompt */}
              <p className="text-[10px] text-brand-cream/50 mt-4 leading-relaxed text-center">
                *Estimates are indicative. Final fees are paid at the counter with proper challan references issued by the office desk.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
