import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, MessageSquare, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface EnquiryFormProps {
  defaultPremises?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ defaultPremises = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [premisesType, setPremisesType] = useState(defaultPremises || 'Shop / Showroom');
  const [solution, setSolution] = useState('CCTV & AI Surveillance Systems');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPremises) {
      setPremisesType(defaultPremises);
    }
  }, [defaultPremises]);

  const buildSummaryText = () =>
    [
      `New Enquiry for Baba Sales (${BUSINESS_INFO.domain})`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || 'Not provided'}`,
      `Premises / Sector: ${premisesType}`,
      `Solution Needed: ${solution}`,
      `Project Details: ${message || 'Requesting a free site visit in Agra/UP.'}`,
    ].join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    if (!name.trim()) {
      setError('Please enter your name or institution name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile or office phone number.');
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const mailtoHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Site Visit / Quote Request: ${solution} (${premisesType})`
  )}&body=${encodeURIComponent(buildSummaryText())}`;

  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    buildSummaryText()
  )}`;

  if (submitted) {
    return (
      <div className="bg-white border border-[#E6E1D8] rounded-xl p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#15803D] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-[#1A1917]">
              Enquiry Prepared for Baba Sales
            </h3>
            <p className="mt-1.5 text-sm text-[#5C5852] leading-relaxed">
              Thank you, <strong className="text-[#1A1917]">{name}</strong>. Choose your preferred
              dispatch channel below to send this structured survey request directly to{' '}
              <span className="font-medium text-[#1A1917]">{BUSINESS_INFO.ceo}</span> at{' '}
              <span className="font-mono text-xs">{BUSINESS_INFO.email}</span> or WhatsApp.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF8F5] border border-[#E6E1D8] rounded-lg p-4 text-xs font-mono text-[#3F3B36] whitespace-pre-wrap leading-relaxed">
          {buildSummaryText()}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send to {BUSINESS_INFO.email}</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F2557] hover:bg-[#1E3A8A] rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-4 py-2.5 text-sm font-medium text-[#5C5852] hover:text-[#1A1917] cursor-pointer"
          >
            Edit Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#E6E1D8] rounded-xl p-6 sm:p-8 space-y-5"
    >
      <div>
        <h3 className="font-serif-display text-2xl font-bold text-[#1A1917]">
          Request a Free Site Visit or Quote
        </h3>
        <p className="mt-1 text-sm text-[#5C5852]">
          Enquiries go directly to {BUSINESS_INFO.email} and our Agra engineering desk (Mon–Sun,
          8 AM – 10 PM).
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="px-4 py-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm text-[#991B1B]"
        >
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-name" className="block text-xs font-semibold text-[#1A1917] mb-1.5">
            Your Name / Institution *
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Rajesh Sharma / ABC College"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
          />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-[#1A1917] mb-1.5">
            Phone / WhatsApp Number *
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-email" className="block text-xs font-semibold text-[#1A1917] mb-1.5">
            Email Address
          </label>
          <input
            id="enquiry-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="procurement@institution.in"
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-premises"
            className="block text-xs font-semibold text-[#1A1917] mb-1.5"
          >
            Premises / Sector
          </label>
          <select
            id="enquiry-premises"
            value={premisesType}
            onChange={(e) => setPremisesType(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
          >
            <option>Home / Apartment</option>
            <option>Shop / Showroom</option>
            <option>School / University</option>
            <option>Office / Corporate</option>
            <option>Govt. Institution</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-solution" className="block text-xs font-semibold text-[#1A1917] mb-1.5">
          Solution Required
        </label>
        <select
          id="enquiry-solution"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
        >
          <option>CCTV &amp; AI Surveillance Systems</option>
          <option>Biometric Attendance &amp; Access Control</option>
          <option>Interactive Flat Panels &amp; Smart Classrooms</option>
          <option>Laptops, Desktops &amp; Enterprise IT Supply (GeM)</option>
          <option>Networking &amp; Server Infrastructure</option>
          <option>Fire Alarm &amp; Public Address Systems</option>
        </select>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="block text-xs font-semibold text-[#1A1917] mb-1.5">
          Site Location &amp; Requirements
        </label>
        <textarea
          id="enquiry-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us your Agra/UP location, approximate number of cameras/panels/terminals, or GeM tender timeline..."
          className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CFC3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#C2410C]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[#78716C]">
          Direct Helpline: <span className="font-mono">{BUSINESS_INFO.primaryPhone}</span>
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#C2410C] hover:bg-[#9A3412] rounded-lg transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Prepare &amp; Send Enquiry</span>
        </button>
      </div>
    </form>
  );
};
