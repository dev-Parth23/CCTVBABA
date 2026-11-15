import React from 'react';
import { Download, ExternalLink, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO, PageRoute } from '../data/siteData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="bg-[#0F2557] text-[#E2E8F0] border-t border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <div>
              <p className="font-serif-display text-2xl font-bold text-white tracking-tight">
                Baba Sales
              </p>
              <p className="text-xs font-mono text-[#93C5FD] mt-1">
                {BUSINESS_INFO.domain} · Est. {BUSINESS_INFO.established}
              </p>
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Led by {BUSINESS_INFO.ceo}, delivering CCTV surveillance, biometric automation,
              interactive smart classrooms, and enterprise IT infrastructure across Agra and Uttar
              Pradesh.
            </p>
            <p className="text-xs text-[#93C5FD]">
              Registered GeM Government Seller · Udyam Registered MSME
            </p>
          </div>

          {/* Column 2: Quick Pages */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              {[
                { label: 'Home', route: '/' as PageRoute },
                { label: 'About Baba Sales', route: '/about' as PageRoute },
                { label: 'Security & IT Solutions', route: '/services' as PageRoute },
                { label: 'Institutional Clients', route: '/clients' as PageRoute },
                { label: 'GMB Video Showcase', route: '/videos' as PageRoute },
                { label: 'Contact & Site Survey', route: '/contact' as PageRoute },
              ].map((link) => (
                <li key={link.route}>
                  <a
                    href={link.route}
                    onClick={(e) => handleNav(e, link.route)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Offices in Agra */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide">Agra Offices</h3>
            {BUSINESS_INFO.offices.map((office) => (
              <div key={office.id} className="space-y-1">
                <p className="text-xs font-semibold text-[#93C5FD] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{office.label}</span>
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>

          {/* Column 4: Direct Contact & Source Export */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide">Direct Contact</h3>
            <div className="space-y-2.5 text-sm text-[#CBD5E1]">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <span>{BUSINESS_INFO.secondaryPhone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <p className="flex items-center gap-2 text-xs text-[#93C5FD]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-medium text-white border border-white/25 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
             
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {new Date().getFullYear()} Baba Sales ({BUSINESS_INFO.domain}). All rights reserved.
          </p>
          <p>Agra · Aligarh · Mathura · Firozabad · Lucknow · Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
};
