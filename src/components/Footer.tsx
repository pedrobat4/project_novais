import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import type { PageType } from '../App';

const LOGO = '/logo.png';

const navLinks: { label: string; page: Exclude<PageType, 'project-detail'> }[] = [
  { label: 'Sobre',            page: 'sobre' },
  { label: 'Projetos',         page: 'projetos' },
  { label: 'Tecnologia',       page: 'tecnologia' },
  { label: 'Compromisso',      page: 'compromisso' },
  { label: 'Sustentabilidade', page: 'sustentabilidade' },
  { label: 'Licitações',       page: 'licitacoes' },
  { label: 'Contato',          page: 'contato' },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/novaisempreendimentos/', label: 'Instagram' },
  { icon: Youtube,   href: 'https://www.youtube.com/@novaisempreendimentos',   label: 'YouTube' },
];

interface Props {
  navigate: (page: PageType, id?: string) => void;
}

export default function Footer({ navigate }: Props) {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Top bar */}
      <div className="border-b border-white/8 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => navigate('sobre')} className="flex items-center">
            <img
              src={LOGO}
              alt="Novais"
              className="h-9 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const s = document.createElement('span');
                s.className = 'font-display text-2xl font-bold text-white';
                s.textContent = 'NOVAIS';
                e.currentTarget.parentElement?.appendChild(s);
              }}
            />
          </button>
          <p className="text-white/35 text-xs tracking-widest uppercase font-light text-center md:text-right">
            Construindo o futuro com excelência e sofisticação
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Há mais de uma década criando empreendimentos únicos que combinam arquitetura contemporânea e tecnologia inteligente em Montes Claros, MG.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 hover:border-gold-500/60 hover:bg-gold-500/10 flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} className="text-white/55" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium text-white/25 tracking-widest uppercase mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-white/50 hover:text-white text-sm font-light transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium text-white/25 tracking-widest uppercase mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+5538984040697" className="text-white/50 hover:text-white text-sm font-light transition-colors">
                  (38) 98404-0697
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:novais@novaisempreendimentos.com.br"
                  className="text-white/50 hover:text-white text-sm font-light transition-colors break-all"
                >
                  novais@novaisempreendimentos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="text-white/35 text-xs font-light leading-relaxed">
                  Av. Mestra Fininha, 1930 - sala 01<br />
                  Uniton - Jardim São Luiz<br />
                  Montes Claros - MG, 39401-858
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-light">
            © 2026 Novais Empreendimentos. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/20 hover:text-white/50 text-xs font-light transition-colors">
              Política de Privacidade
            </button>
            <button className="text-white/20 hover:text-white/50 text-xs font-light transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
