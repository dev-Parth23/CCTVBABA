import ClientsFilterList from '../../components/ClientsFilterList';

export const metadata = {
  title: 'Institutional Clients & Testimonials – Agra Air Force, AMU, IIIT Lucknow',
  description:
    'Case studies and testimonials from Agra Air Force Station, Agra University, Khandari Campus(Agra), Raja Mahendra Pratap Singh University(Aligarh) & IIIT Lucknow.',
};

export default function ClientsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <header className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-wider text-[#9A3412] font-semibold mb-3">
          Clients &amp; Testimonials
        </p>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1A1917] leading-tight tracking-tight">
          The institutions India trusts, trust us.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5C5852] leading-relaxed">
          Defence stations, central universities, and institutes of national importance choose Baba
          Sales for deployments where uptime, compliance, and rapid local support are non-negotiable.
        </p>
      </header>

      <ClientsFilterList />
    </div>
  );
}
