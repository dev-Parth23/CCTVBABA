'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Clients', href: '/clients/' },
  { label: 'Videos', href: '/videos/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  const normalize = (p) => (p.endsWith('/') ? p : `${p}/`);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1A1917] whitespace-nowrap shrink-0"
        >
          Baba Sales
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C5852]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = normalize(pathname) === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#1A1917] border-[#C2410C] font-semibold'
                    : 'border-transparent hover:text-[#1A1917] hover:border-[#D6CFC3]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact/"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Request Site Visit
          </Link>

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

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E6E1D8] bg-[#FAF8F5] px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#5C5852]"
          >
            Home
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#5C5852]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact/"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-[#C2410C] rounded-lg"
            >
              Request Free Site Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
