import { Clock, ExternalLink, Mail, MapPin, Phone, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/siteData';
import EnquiryForm from '../../components/EnquiryForm';

export const metadata = {
  title: 'Contact Baba Sales Agra – Request Free Site Survey',
  description:
    'Book a free site visit in Agra or request a GeM institutional quote. Call +91 94102 54350 or visit our Kamla Nagar office.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <header className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
          Contact Baba Sales · Agra
        </p>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
          Book a free site visit or request an institutional quote.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C5852] leading-relaxed">
          Reach our Kamla Nagar office seven days a week. Every enquiry goes
          directly to {BUSINESS_INFO.ceo} and our Agra engineering desk.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 space-y-4">
            <h2 className="font-serif-display text-xl font-bold text-[#1A1917]">
              Direct Contact Details
            </h2>

            <div className="space-y-3 text-sm text-[#3F3B36]">
              <p className="flex items-center gap-3">
                <UserCheck className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>
                  CEO / Contact Person: <strong className="text-[#1A1917]">{BUSINESS_INFO.ceo}</strong>
                </span>
              </p>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 hover:text-[#C2410C] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>{BUSINESS_INFO.primaryPhone} (Phone &amp; WhatsApp)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 hover:text-[#C2410C] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>{BUSINESS_INFO.secondaryPhone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 hover:text-[#C2410C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C2410C] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-[#E6E1D8]">
              <a
                href={BUSINESS_INFO.gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2557] hover:underline"
              >
                <span>View Verified Google Business Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 space-y-5">
            <h2 className="font-serif-display text-xl font-bold text-[#1A1917]">Agra Locations</h2>
            {BUSINESS_INFO.offices.map((office) => (
              <div
                key={office.id}
                className="space-y-1.5 pb-4 last:pb-0 border-b last:border-b-0 border-[#E6E1D8]"
              >
                <p className="text-xs font-mono uppercase tracking-wider font-semibold text-[#9A3412] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{office.label}</span>
                </p>
                <p className="text-sm text-[#5C5852] leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
