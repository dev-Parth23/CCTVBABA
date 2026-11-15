'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  Home,
  Landmark,
  ShieldAlert,
  Store,
} from 'lucide-react';
import { SECURITY_RISK_PROFILES } from '../data/siteData';

const PREMISES_ICONS = {
  home: <Home className="w-4 h-4 shrink-0" />,
  shop: <Store className="w-4 h-4 shrink-0" />,
  school: <GraduationCap className="w-4 h-4 shrink-0" />,
  office: <Building2 className="w-4 h-4 shrink-0" />,
  govt: <Landmark className="w-4 h-4 shrink-0" />,
};

export default function SecurityRiskAssessment() {
  const [selectedId, setSelectedId] = useState('shop');

  const activeProfile =
    SECURITY_RISK_PROFILES.find((p) => p.id === selectedId) || SECURITY_RISK_PROFILES[1];

  return (
    <section
      id="security-awareness"
      className="py-16 sm:py-20 bg-[#F2EFE9]/70 border-y border-[#E6E1D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-2">
            Security Awareness Check
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1A1917] tracking-tight">
            Why is security needed everywhere?
          </h2>
          <p className="mt-3 text-base text-[#5C5852] leading-relaxed">
            Whether you manage a home, showroom, university campus, or government facility, blind
            spots cost far more than prevention. Select your premises below to review real-world
            risks observed across 12+ years of installations in Agra and Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div role="tablist" aria-label="Select premises type" className="lg:col-span-5 flex flex-col gap-3">
            {SECURITY_RISK_PROFILES.map((profile) => {
              const isSelected = profile.id === selectedId;
              return (
                <button
                  key={profile.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(profile.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C2410C] text-[#1A1917] shadow-sm'
                      : 'bg-white/75 border-[#E6E1D8] text-[#5C5852] hover:bg-white hover:text-[#1A1917]'
                  }`}
                >
                  <span className="flex items-center gap-3 font-medium text-sm sm:text-base">
                    <span className={isSelected ? 'text-[#C2410C]' : 'text-[#78716C]'}>
                      {PREMISES_ICONS[profile.id]}
                    </span>
                    <span>{profile.label}</span>
                  </span>
                  <span
                    className={`text-xs font-mono tabular-nums shrink-0 ${
                      isSelected ? 'text-[#C2410C] font-semibold' : 'text-[#78716C]'
                    }`}
                  >
                    {profile.riskScore}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="lg:col-span-7 bg-white border border-[#E6E1D8] rounded-xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#E6E1D8]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#FEF3C7] text-[#9A3412] flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                      Unprotected Risk Level · {activeProfile.severityLabel}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-[#1A1917] tabular-nums mt-0.5">
                      {activeProfile.riskScore}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                    Potential Exposure
                  </p>
                  <p className="text-base sm:text-lg font-bold text-[#C2410C] tabular-nums mt-0.5">
                    {activeProfile.potentialLoss}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="h-2 w-full bg-[#F2EFE9] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C2410C] rounded-full transition-all duration-300"
                    style={{ width: `${activeProfile.riskPercent}%` }}
                  />
                </div>
                <p className="mt-4 text-sm sm:text-base text-[#3F3B36] leading-relaxed">
                  {activeProfile.summary}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E6E1D8]">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-3">
                    Common Blind Spots
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5C5852]">
                    {activeProfile.vulnerabilities.map((item) => (
                      <li key={item} className="leading-snug">· {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
                    What We Recommend
                  </h3>
                  <ul className="space-y-2 text-sm text-[#1A1917] font-medium">
                    {activeProfile.recommendations.map((rec) => (
                      <li key={rec} className="flex items-start gap-2 leading-snug">
                        <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E1D8] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#78716C]">
                Free on-site blind-spot audit available across Agra &amp; nearby districts.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Audit My {activeProfile.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
