import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../data/siteData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { label: string; route: PageRoute }[] = [
  { label: 'About', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Clients', route: '/clients' },
  { label: 'Videos', route: '/videos' },
  { label: 'Contact', route: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1A1917] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C2410C]"
        >
          Baba Sales
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C5852]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={item.route}
                onClick={(e) => handleLinkClick(e, item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#1A1917] border-[#C2410C] font-semibold'
                    : 'border-transparent hover:text-[#1A1917] hover:border-[#D6CFC3]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA button + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
          >
            Request Site Visit
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E6E1D8] text-[#1A1917] hover:bg-[#F2EFE9] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E6E1D8] bg-[#FAF8F5] px-4 py-4 space-y-1">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentRoute === '/' ? 'bg-[#F2EFE9] text-[#1A1917] font-semibold' : 'text-[#5C5852]'
            }`}
          >
            Home
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.route}
              href={item.route}
              onClick={(e) => handleLinkClick(e, item.route)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentRoute === item.route
                  ? 'bg-[#F2EFE9] text-[#1A1917] font-semibold'
                  : 'text-[#5C5852]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#C2410C] rounded-lg"
            >
              Request Free Site Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
