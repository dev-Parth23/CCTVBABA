import { ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/siteData';
import VideoGallerySection from '../../components/VideoGallerySection';

export const metadata = {
  title: 'GMB Promotion & Installation Video Gallery',
  description:
    'Watch field walkthroughs, smart classroom demos, biometric deployment guides, and CCTV security awareness reels from Baba Sales Agra.',
};

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
            GMB Promotion &amp; Brand Awareness Gallery
          </p>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
            Field walkthroughs &amp; security demonstrations.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5C5852] leading-relaxed">
            Watch how Baba Sales approaches cable protection, night-vision camera placement, smart
            classroom panels, and biometric access.
          </p>
        </div>

        <a
          href={BUSINESS_INFO.gmbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1A1917] bg-white border border-[#D6CFC3] hover:border-[#1A1917] rounded-lg transition-colors self-start lg:self-auto whitespace-nowrap shrink-0"
        >
          <span>Visit Baba Sales on Google</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </header>

      <VideoGallerySection showFilterBar={true} />
    </div>
  );
}
