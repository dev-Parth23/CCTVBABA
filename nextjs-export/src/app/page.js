import Link from 'next/link';
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react';
import {
  AUTHORIZED_BRANDS,
  BUSINESS_INFO,
  CLIENT_CASE_STUDIES,
  HERO_MEDIA,
  KPI_METRICS,
  SERVICES_LIST,
} from '../data/siteData';
import SecurityRiskAssessment from '../components/SecurityRiskAssessment';
import VideoGallerySection from '../components/VideoGallerySection';

export default function HomePage() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-4">
              Agra · Est. {BUSINESS_INFO.established} · GeM &amp; Udyam Registered
            </p>
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#1A1917] leading-[1.1] tracking-tight max-w-2xl">
              Securing Agra&apos;s institutions for 12+ years — and counting.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5C5852] leading-relaxed max-w-xl">
              From Agra Air Force Station to central universities, from retail showrooms to family
              homes — Baba Sales designs, installs, and maintains CCTV surveillance, biometric
              attendance, interactive flat panels, and enterprise IT systems you can depend on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Request a Free Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#security-awareness"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#1A1917] bg-white border border-[#D6CFC3] hover:border-[#1A1917] rounded-lg transition-colors whitespace-nowrap"
              >
                Check Your Security Risk
              </a>
            </div>

            <div className="mt-7 pt-6 border-t border-[#E6E1D8] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5C5852]">
              <span className="font-semibold text-[#1A1917]">Led by {BUSINESS_INFO.ceo}</span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS_INFO.hours}</span>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="font-mono font-semibold text-[#0F2557] hover:underline tabular-nums"
              >
                {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#E6E1D8] bg-[#E6E1D8]">
              <img
                src={HERO_MEDIA.cctv}
                alt="Outdoor IP CCTV surveillance camera installation by Baba Sales Agra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-mono uppercase tracking-wider text-[#FDBA74]">
                  In-House Engineering
                </p>
                <p className="text-sm sm:text-base font-semibold mt-0.5">
                  Installed &amp; maintained by our own Agra technicians
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 bg-white border border-[#E6E1D8] rounded-xl divide-y lg:divide-y-0 lg:divide-x divide-[#E6E1D8]">
          {KPI_METRICS.map((kpi) => (
            <div key={kpi.label} className="p-5 sm:p-6">
              <p className="font-serif-display text-3xl sm:text-4xl font-bold text-[#C2410C] tabular-nums">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs font-mono uppercase tracking-wider font-semibold text-[#1A1917]">
                {kpi.label}
              </p>
              <p className="mt-1 text-xs text-[#78716C]">{kpi.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="border-y border-[#E6E1D8] py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#78716C] shrink-0">
            Authorized Sales &amp; Service
          </p>
          <p className="text-sm font-semibold text-[#1A1917] leading-relaxed">
            {AUTHORIZED_BRANDS.join('  ·  ')}
          </p>
        </div>
      </section>

      <SecurityRiskAssessment />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-2">
              Everything Under One Roof
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1A1917] tracking-tight">
              One trusted partner, every solution.
            </h2>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#1A1917] bg-white border border-[#D6CFC3] hover:border-[#1A1917] rounded-lg transition-colors self-start sm:self-auto whitespace-nowrap"
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-[#E6E1D8] rounded-xl p-6 flex flex-col justify-between hover:border-[#C2410C]/60 transition-colors"
            >
              <div>
                <p className="text-xs font-mono text-[#9A3412] font-semibold mb-3">
                  {service.number}. {service.brands.slice(0, 3).join(' · ')}
                </p>
                <h3 className="font-serif-display text-xl font-bold text-[#1A1917] leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#5C5852] leading-relaxed">{service.shortDesc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E6E1D8]">
                <Link
                  href="/services/"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-[#C2410C] hover:text-[#9A3412]"
                >
                  Explore Scope →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0F2557] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-wider text-[#93C5FD] font-semibold mb-2">
                Clients &amp; Testimonials
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                The institutions India trusts, trust us.
              </h2>
              <p className="mt-3 text-base text-[#CBD5E1] leading-relaxed">
                Defence stations, central universities, and institutes of national importance rely on
                Baba Sales for deployments where reliability is non-negotiable.
              </p>
            </div>
            <Link
              href="/clients/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0F2557] bg-white hover:bg-[#F1F5F9] rounded-lg transition-colors self-start sm:self-auto whitespace-nowrap"
            >
              <span>View All 5 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_CASE_STUDIES.slice(0, 3).map((client) => (
              <article
                key={client.id}
                className="bg-white/6 border border-white/15 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-mono text-[#93C5FD] mb-2">
                    {client.sector} · {client.location}
                  </p>
                  <h3 className="font-serif-display text-xl font-bold text-white">
                    {client.institution}
                  </h3>
                  <p className="mt-1 text-xs text-[#CBD5E1] font-medium">{client.scope}</p>
                  <blockquote className="mt-4 pt-4 border-t border-white/15 text-sm text-[#E2E8F0] leading-relaxed">
                    <Quote className="w-4 h-4 text-[#FDBA74] mb-2" />
                    &ldquo;{client.testimonialQuote}&rdquo;
                  </blockquote>
                </div>
                <p className="mt-5 text-xs text-[#93C5FD]">
                  — {client.attributedBy}, {client.attributedRole}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-sm text-[#CBD5E1]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#93C5FD] shrink-0" />
              <span>
                Also trusted by <strong className="text-white">Raja Mahendra Pratap Singh University</strong>{' '}
                and <strong className="text-white">IIIT Lucknow</strong>
              </span>
            </div>
            <Link
              href="/clients/"
              className="text-sm font-semibold text-white underline underline-offset-4 hover:text-[#93C5FD]"
            >
              Raja Mahendra Pratap Singh University, Aligarh &amp; IIIT Lucknow Deployments →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-2">
            Google My Business Showcase
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1A1917] tracking-tight">
            See our installations and security awareness reels.
          </h2>
          <p className="mt-3 text-base text-[#5C5852] leading-relaxed">
            Real walkthroughs, interactive panel demos, and practical guidance from our Agra
            technical team.
          </p>
        </div>

        <VideoGallerySection limit={2} showFilterBar={false} />
      </section>
    </div>
  );
}
