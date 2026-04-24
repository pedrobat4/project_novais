import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageType } from '../App';

const navItems: { label: string; page: Exclude<PageType, 'project-detail'> }[] = [
  { label: 'Sobre',            page: 'sobre' },
  { label: 'Projetos',         page: 'projetos' },
  { label: 'Tecnologia',       page: 'tecnologia' },
  { label: 'Compromisso',      page: 'compromisso' },
  { label: 'Sustentabilidade', page: 'sustentabilidade' },
  { label: 'Licitações',       page: 'licitacoes' },
  { label: 'Contato',          page: 'contato' },
];

interface Props {
  current: PageType;
  navigate: (page: PageType, id?: string) => void;
}

export default function Navigation({ current, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const heroPages: PageType[] = ['sobre', 'projetos', 'tecnologia', 'compromisso', 'sustentabilidade', 'licitacoes', 'contato'];
  const hasHero = heroPages.includes(current);

  useEffect(() => {
    setScrolled(false);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [current]);

  const isTransparent = hasHero && !scrolled;

  const go = (page: Exclude<PageType, 'project-detail'>) => {
    setOpen(false);
    navigate(page);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-primary-950/90 backdrop-blur-sm border-b border-white/10'
          : 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.10)] border-b border-gray-100'
      }`}
    >
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        {/* Logo */}
        <button onClick={() => go('sobre')} aria-label="Início" className="flex-shrink-0 flex items-center">
          <img
            src="/logo.png"
            alt="Novais Construtora"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-8' : 'h-9'
            } ${isTransparent ? 'brightness-0 invert' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const s = document.createElement('span');
              s.className = `font-display text-xl font-bold tracking-widest ${isTransparent ? 'text-white' : 'text-primary-950'}`;
              s.textContent = 'NOVAIS';
              e.currentTarget.parentElement?.appendChild(s);
            }}
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = current === item.page ||
              (current === 'project-detail' && item.page === 'projetos');
            return (
              <li key={item.page}>
                <button
                  onClick={() => go(item.page)}
                  className={`relative px-3 py-1.5 text-[10px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isTransparent
                      ? isActive
                        ? 'text-gold-400'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-primary-700'
                        : 'text-gray-500 hover:text-primary-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                      isTransparent ? 'bg-gold-400' : 'bg-primary-600'
                    }`} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden xl:block">
          <a
            href="https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+falar+sobre+um+empreendimento.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] font-semibold px-5 py-2.5 tracking-widest uppercase transition-all duration-300 ${
              isTransparent
                ? 'border border-white/50 text-white hover:bg-white hover:text-primary-950'
                : 'bg-primary-700 text-white hover:bg-primary-800'
            }`}
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`xl:hidden p-2 rounded ${isTransparent ? 'text-white' : 'text-gray-800'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`xl:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen shadow-xl' : 'max-h-0'
        }`}
      >
        {navItems.map((item) => {
          const isActive = current === item.page;
          return (
            <button
              key={item.page}
              onClick={() => go(item.page)}
              className={`block w-full text-left px-6 py-4 text-[11px] font-semibold tracking-widest uppercase border-b border-gray-50 transition-colors ${
                isActive
                  ? 'text-primary-700 bg-primary-50 border-l-2 border-l-primary-600 pl-5'
                  : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          );
        })}
        <a
          href="https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+falar+sobre+um+empreendimento.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-4 text-[11px] font-semibold bg-primary-700 text-white tracking-widest uppercase"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
