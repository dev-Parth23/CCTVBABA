import React, { useEffect, useState } from 'react';
import { ExternalLink, Play, X, Check } from 'lucide-react';
import { BUSINESS_INFO, GMB_VIDEOS, VideoShowcaseItem } from '../data/siteData';

interface VideoGallerySectionProps {
  limit?: number;
  showFilterBar?: boolean;
  onViewAll?: () => void;
  onRequestDemo?: (topic: string) => void;
}

const CATEGORIES = [
  'All Videos',
  'CCTV & Surveillance',
  'Smart Classrooms',
  'Biometric & Access',
  'Institutional Walkthroughs',
] as const;

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({
  limit,
  showFilterBar = true,
  onViewAll,
  onRequestDemo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Videos');
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeVideo]);

  const filtered =
    activeCategory === 'All Videos'
      ? GMB_VIDEOS
      : GMB_VIDEOS.filter((v) => v.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const getEmbedUrl = (video: VideoShowcaseItem): string | null => {
    if (video.youtubeUrl) {
      if (video.youtubeUrl.includes('embed/')) return video.youtubeUrl;
      const match = video.youtubeUrl.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
      if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    if (video.driveUrl) {
      return video.driveUrl.replace('/view', '/preview');
    }
    return null;
  };

  return (
    <div>
      {showFilterBar && (
        <div
          role="group"
          aria-label="Filter GMB promotion videos"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2557] text-white'
                    : 'bg-white border border-[#E6E1D8] text-[#5C5852] hover:text-[#1A1917] hover:border-[#C7BFB2]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayed.map((video) => (
          <article
            key={video.id}
            className="bg-white border border-[#E6E1D8] rounded-xl overflow-hidden flex flex-col"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video w-full overflow-hidden bg-[#1A1917] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C2410C]"
              aria-label={`Play ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-[#C2410C] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/95">
                <span className="font-medium">{video.publishedLabel}</span>
                <span className="font-mono tabular-nums bg-black/60 px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
            </button>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#78716C] mb-1.5">
                  {video.category} · Baba Sales Field Showcase
                </p>
                <h3 className="font-serif-display text-xl font-bold text-[#1A1917] leading-snug">
                  {video.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#5C5852] leading-relaxed">{video.summary}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E6E1D8] flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="text-sm font-semibold text-[#C2410C] hover:text-[#9A3412] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Watch Presentation →
                </button>
                <a
                  href={BUSINESS_INFO.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5C5852] hover:text-[#1A1917] whitespace-nowrap"
                >
                  <span>GMB Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {onViewAll && (
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1A1917] bg-white border border-[#E6E1D8] hover:border-[#1A1917] rounded-lg transition-colors cursor-pointer"
          >
            Explore All GMB &amp; Awareness Videos →
          </button>
        </div>
      )}

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-[#FAF8F5] border border-[#E6E1D8] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E1D8] bg-white">
              <div>
                <p className="text-xs text-[#78716C]">
                  {activeVideo.category} · {activeVideo.duration}
                </p>
                <h3
                  id="video-modal-title"
                  className="font-serif-display text-lg font-bold text-[#1A1917]"
                >
                  {activeVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video modal"
                className="w-10 h-10 rounded-lg border border-[#E6E1D8] flex items-center justify-center text-[#1A1917] hover:bg-[#F2EFE9] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {getEmbedUrl(activeVideo) ? (
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={getEmbedUrl(activeVideo) || ''}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full bg-[#111827] overflow-hidden">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 p-6 sm:p-8 flex flex-col justify-end text-white">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FDBA74] mb-2">
                    Google My Business Video Reel · Ready for YouTube / Drive Embed
                  </p>
                  <p className="text-lg sm:text-xl font-bold leading-snug max-w-xl">
                    {activeVideo.summary}
                  </p>
                  <p className="mt-3 text-xs text-white/75">
                    Note: Share your YouTube or Google Drive link anytime to plug the live stream
                    directly into this player slot.
                  </p>
                </div>
              </div>
            )}

            <div className="p-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                Key Highlights Covered in This Reel
              </h4>
              <ul className="space-y-2 text-sm text-[#1A1917]">
                {activeVideo.keyTakeaways.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#E6E1D8] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={BUSINESS_INFO.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2557] hover:underline"
                >
                  <span>View Baba Sales on Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {onRequestDemo && (
                  <button
                    type="button"
                    onClick={() => {
                      const title = activeVideo.title;
                      setActiveVideo(null);
                      onRequestDemo(title);
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors cursor-pointer"
                  >
                    Book Live On-Site Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
