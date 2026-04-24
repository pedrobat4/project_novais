import { useState, useCallback, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Technology from './components/Technology';
import Commitment from './components/Commitment';
import Sustainability from './components/Sustainability';
import Licitacoes from './components/Licitacoes';
import Contact from './components/Contact';

export type PageType =
  | 'sobre'
  | 'projetos'
  | 'tecnologia'
  | 'compromisso'
  | 'sustentabilidade'
  | 'licitacoes'
  | 'contato'
  | 'project-detail';

export type AppRoute =
  | { page: Exclude<PageType, 'project-detail'> }
  | { page: 'project-detail'; id: string };

export default function App() {
  const [route, setRoute] = useState<AppRoute>({ page: 'sobre' });

  const navigate = useCallback((page: PageType, id?: string) => {
    if (page === 'project-detail' && id) {
      setRoute({ page: 'project-detail', id });
    } else if (page !== 'project-detail') {
      setRoute({ page });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [route]);

  const currentPage = route.page;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation current={currentPage} navigate={navigate} />

      <main>
        {currentPage === 'sobre' && (
          <HomePage navigate={navigate} />
        )}
        {currentPage === 'projetos' && (
          <ProjectsPage navigate={navigate} />
        )}
        {currentPage === 'tecnologia' && <Technology navigate={navigate} />}
        {currentPage === 'compromisso' && <Commitment />}
        {currentPage === 'sustentabilidade' && <Sustainability />}
        {currentPage === 'licitacoes' && <Licitacoes />}
        {currentPage === 'contato' && <Contact navigate={navigate} />}
        {currentPage === 'project-detail' && route.page === 'project-detail' && (
          <ProjectDetailPage id={route.id} navigate={navigate} />
        )}
      </main>

      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
