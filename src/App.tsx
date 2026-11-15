import { useEffect, useState } from 'react';
import { PageRoute, ROUTE_SEO } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { VideosPage } from './pages/VideosPage';
import { ContactPage } from './pages/ContactPage';

const VALID_ROUTES: PageRoute[] = ['/', '/about', '/services', '/clients', '/videos', '/contact'];

function resolveRoute(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return VALID_ROUTES.includes(clean as PageRoute) ? (clean as PageRoute) : '/';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() =>
    typeof window !== 'undefined' ? resolveRoute(window.location.pathname) : '/'
  );
  const [prefillPremises, setPrefillPremises] = useState<string>('');

  useEffect(() => {
    const onPopState = () => {
      setRoute(resolveRoute(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const seo = ROUTE_SEO[route];
    document.title = seo.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', seo.description);
    }
  }, [route]);

  const handleNavigate = (nextRoute: PageRoute, prefill?: string) => {
    if (prefill) {
      setPrefillPremises(prefill.startsWith('Demo:') ? 'School / University' : prefill);
    }
    if (window.location.pathname !== nextRoute) {
      window.history.pushState({}, '', nextRoute);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1917]">
      <Navbar currentRoute={route} onNavigate={handleNavigate} />

      <main className="flex-1">
        {route === '/' && <HomePage onNavigate={handleNavigate} />}
        {route === '/about' && <AboutPage onNavigate={handleNavigate} />}
        {route === '/services' && <ServicesPage onNavigate={handleNavigate} />}
        {route === '/clients' && <ClientsPage onNavigate={handleNavigate} />}
        {route === '/videos' && <VideosPage onNavigate={handleNavigate} />}
        {route === '/contact' && <ContactPage defaultPremises={prefillPremises} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
