import React, { useState } from 'react';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';
import { CLIENT_CASE_STUDIES, PageRoute } from '../data/siteData';

interface ClientsPageProps {
  onNavigate: (route: PageRoute) => void;
}

const SECTORS = ['All Institutions', 'Defence & Govt', 'Universities & EdTech'] as const;

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  const [sectorFilter, setSectorFilter] = useState<string>('All Institutions');

  const filteredClients =
    sectorFilter === 'All Institutions'
      ? CLIENT_CASE_STUDIES
      : CLIENT_CASE_STUDIES.filter((c) => c.sector === sectorFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <header className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
          Clients &amp; Testimonials
        </p>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
          The institutions India trusts, trust us.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C5852] leading-relaxed">
          Defence stations, central universities, and institutes of national importance choose Baba
          Sales for deployments where uptime, compliance, and rapid local support are non-negotiable.
        </p>
      </header>

      {/* Sector Filter Controls */}
      <div
        role="group"
        aria-label="Filter institutional case studies"
        className="flex flex-wrap items-center gap-2"
      >
        {SECTORS.map((sector) => {
          const isActive = sectorFilter === sector;
          return (
            <button
              key={sector}
              type="button"
              onClick={() => setSectorFilter(sector)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#0F2557] text-white'
                  : 'bg-white border border-[#E6E1D8] text-[#5C5852] hover:text-[#1A1917]'
              }`}
            >
              {sector}
            </button>
          );
        })}
      </div>

      {/* Case Study List */}
      <div className="space-y-8">
        {filteredClients.map((client) => (
          <article
            key={client.id}
            className="bg-white border border-[#E6E1D8] rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#E6E1D8]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F2557]/8 text-[#0F2557] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold">
                    {client.sector} · {client.location} · {client.year}
                  </p>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1A1917] mt-1">
                    {client.institution}
                  </h2>
                </div>
              </div>

              <span className="text-xs font-mono text-[#5C5852] bg-[#FAF8F5] border border-[#E6E1D8] px-3 py-1.5 rounded-lg">
                {client.scope}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  Challenge
                </h3>
                <p className="text-sm text-[#5C5852] leading-relaxed">{client.challenge}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                  Solution Delivered
                </h3>
                <p className="text-sm text-[#5C5852] leading-relaxed">{client.solution}</p>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-2">
                  Verified Outcome
                </h3>
                <p className="text-sm font-medium text-[#1A1917] leading-relaxed">
                  {client.outcome}
                </p>
              </div>
            </div>

            <blockquote className="bg-[#FAF8F5] border border-[#E6E1D8] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[#C2410C] shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-[#1A1917] italic leading-relaxed">
                    &ldquo;{client.testimonialQuote}&rdquo;
                  </p>
                </div>
                <p className="text-xs text-[#5C5852] pl-6">
                  <strong className="text-[#1A1917]">{client.attributedBy}</strong> ·{' '}
                  {client.attributedRole}
                </p>
              </div>
            </blockquote>
          </article>
        ))}
      </div>

      {/* Institutional CTA */}
      <div className="bg-[#0F2557] text-white rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold">
            Preparing a University, School, or GeM Tender?
          </h2>
          <p className="mt-2 text-sm text-[#CBD5E1]">
            Request compliance sheets, past installation references, and site-visit BOQs from our
            Agra desk.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/contact')}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F2557] bg-white hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Request Institutional Proposal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
