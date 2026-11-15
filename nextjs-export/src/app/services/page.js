import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST } from '../../data/siteData';

export const metadata = {
  title: 'CCTV, Biometric, Interactive Panels & IT Services',
  description:
    'Explore CP PLUS, Hikvision, Matrix, Newline, PeopleLink & eSSL solutions: IP CCTV, biometric access, 4K smart classrooms, enterprise laptops, networking & fire alarms.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      <header className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
          Solutions &amp; Capabilities
        </p>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
          Complete security, smart-classroom &amp; IT systems under one roof.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C5852] leading-relaxed">
          From single-premise CCTV upgrades to GeM-compliant university infrastructure, every
          solution includes design consultation, genuine OEM hardware, neat installation, and
          post-handover AMC support.
        </p>
      </header>

      <div className="space-y-8">
        {SERVICES_LIST.map((service, idx) => (
          <article
            key={service.id}
            className="bg-white border border-[#E6E1D8] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className={`lg:col-span-5 min-h-[240px] bg-[#E6E1D8] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#9A3412] font-semibold mb-2">
                  {service.number} · Authorized Brands: {service.brands.join(' · ')}
                </p>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1A1917]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#5C5852] leading-relaxed">
                  {service.fullDesc}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-[#E6E1D8]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#1A1917]">
                      <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E6E1D8] flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#78716C]">
                  Available for Direct Retail, Corporate &amp; GeM Institutional Tenders
                </span>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
