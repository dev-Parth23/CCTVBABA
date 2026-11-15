import React from 'react';
import { Award, Building, Check, MapPin, ShieldCheck } from 'lucide-react';
import { AUTHORIZED_BRANDS, BUSINESS_INFO, HERO_MEDIA, KPI_METRICS, PageRoute } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Intro Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
            About Baba Sales · cctvbaba.com
          </p>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
            Twelve years of disciplined engineering in Agra.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#5C5852] leading-relaxed">
            Founded in {BUSINESS_INFO.established} and led by{' '}
            <strong className="text-[#1A1917]">{BUSINESS_INFO.ceo}</strong>, Baba Sales started with
            a straightforward principle: security and IT hardware only perform as reliably as the
            team that wires, configures, and supports it.
          </p>
          <p className="mt-4 text-base text-[#5C5852] leading-relaxed">
            Today, we serve everything from single-home Video Door Phone installations to
            multi-building university surveillance networks and defence station perimeters across
            Agra, Aligarh, Mathura, Firozabad, and Lucknow. Unlike middlemen who outsource wiring,
            every Baba Sales project is executed by our own in-house technicians.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors cursor-pointer"
            >
              Speak With {BUSINESS_INFO.ceo}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/clients')}
              className="px-6 py-3 text-sm font-semibold text-[#1A1917] bg-white border border-[#D6CFC3] hover:border-[#1A1917] rounded-lg transition-colors cursor-pointer"
            >
              See Institutional Clients
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="h-full min-h-[300px] rounded-2xl overflow-hidden border border-[#E6E1D8] bg-[#E6E1D8]">
            <img
              src={HERO_MEDIA.server}
              alt="Baba Sales enterprise command center and structured cabling rack"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-[#E6E1D8] rounded-xl divide-y lg:divide-y-0 lg:divide-x divide-[#E6E1D8]">
        {KPI_METRICS.map((kpi) => (
          <div key={kpi.label} className="p-6">
            <p className="font-serif-display text-3xl font-bold text-[#C2410C] tabular-nums">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1917]">
              {kpi.label}
            </p>
            <p className="mt-1 text-xs text-[#78716C]">{kpi.detail}</p>
          </div>
        ))}
      </section>

      {/* Registrations & Standards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 space-y-3">
          <ShieldCheck className="w-6 h-6 text-[#C2410C]" />
          <h2 className="font-serif-display text-xl font-bold text-[#1A1917]">
            GeM Registered Seller
          </h2>
          <p className="text-sm text-[#5C5852] leading-relaxed">
            Verified Government e-Marketplace (GeM) supplier capable of executing direct L1 orders,
            custom bids, and institutional rate contracts with complete tax &amp; OEM compliance.
          </p>
        </div>

        <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 space-y-3">
          <Award className="w-6 h-6 text-[#C2410C]" />
          <h2 className="font-serif-display text-xl font-bold text-[#1A1917]">
            Udyam Registered Enterprise
          </h2>
          <p className="text-sm text-[#5C5852] leading-relaxed">
            Officially registered MSME enterprise under the Ministry of Micro, Small &amp; Medium
            Enterprises, supporting transparent institutional and corporate procurement.
          </p>
        </div>

        <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 space-y-3">
          <Building className="w-6 h-6 text-[#C2410C]" />
          <h2 className="font-serif-display text-xl font-bold text-[#1A1917]">
            7-Day Local Support
          </h2>
          <p className="text-sm text-[#5C5852] leading-relaxed">
            Open {BUSINESS_INFO.hours} across Agra office, ensuring spare parts, NVR
            servicing, and urgent troubleshooting are always close at hand.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-white border border-[#E6E1D8] rounded-xl p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-1">
              Physical Presence in Agra
            </p>
            <h2 className="font-serif-display text-2xl font-bold text-[#1A1917]">
              Accessible Office for Walk-Ins &amp; Procurement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {BUSINESS_INFO.offices.map((office) => (
              <div key={office.id} className="space-y-2">
                <p className="text-sm font-bold text-[#0F2557] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{office.label}</span>
                </p>
                <p className="text-sm text-[#5C5852] leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#F2EFE9] border border-[#E6E1D8] rounded-xl p-6 sm:p-8 space-y-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold">
            Genuine OEM Hardware Only
          </p>
          <h2 className="font-serif-display text-2xl font-bold text-[#1A1917]">
            11 Authorized Brands Handled
          </h2>
          <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-medium text-[#1A1917] pt-2">
            {AUTHORIZED_BRANDS.map((brand) => (
              <li key={brand} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>{brand}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
