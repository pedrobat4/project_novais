import { useState, useRef, useEffect } from 'react';
import { Home, Maximize2, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { projects, type ProjectStatus } from '../data/projects';
import type { PageType } from '../App';

interface Props {
  navigate: (page: PageType, id?: string) => void;
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'Lançamento': 'bg-primary-500 text-white',
  'Residencial': 'bg-gray-800 text-white',
  'VENDIDA':    'bg-red-700 text-white',
};

const FILTERS: { label: string; value: ProjectStatus | 'todos' }[] = [
  { label: 'Todos',       value: 'todos' },
  { label: 'Lançamento',  value: 'Lançamento' },
  { label: 'Residencial', value: 'Residencial' },
  { label: 'Vendidos',    value: 'VENDIDA' },
];

function useInView(t = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: t }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return { ref, visible: v };
}

export default function ProjectsPage({ navigate }: Props) {
  const [filter, setFilter] = useState<ProjectStatus | 'todos'>('todos');
  const { ref: gridRef, visible: gridVisible } = useInView();

  const filtered = filter === 'todos'
    ? projects
    : projects.filter((p) => p.status === filter);

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="relative pt-40 pb-24 hero-gradient">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-gold-400 mb-5">Portfólio</p>
          <div className="divider mb-6" />
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-white leading-tight mb-6">
            Nossos<br />
            <span className="text-gradient-gold italic">Projetos</span>
          </h1>
          <p className="text-white/60 text-xl font-light max-w-xl leading-relaxed">
            Empreendimentos que aliam arquitetura contemporânea, tecnologia inteligente e sofisticação em cada detalhe.
          </p>
        </div>
      </div>

      {/* Projects section */}
      <div className="section-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter bar */}
          <div className="flex items-center gap-3 flex-wrap mb-12">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mr-2">
              <SlidersHorizontal size={14} />
              Filtrar por
            </div>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
                  filter === f.value
                    ? 'bg-primary-950 text-white'
                    : 'border border-gray-300 text-gray-500 hover:border-primary-400 hover:text-primary-600'
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400 font-light">
              {filtered.length} projeto{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                className={`group bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer anim ${gridVisible ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 55}ms` }}
                onClick={() => navigate('project-detail', p.id)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 tracking-wider ${STATUS_STYLES[p.status]}`}>
                    {p.status}
                  </span>
                  <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary-950 text-xs font-medium px-4 py-2 tracking-widest uppercase flex items-center gap-1.5">
                      Ver Projeto <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[10px] font-medium text-primary-500 tracking-widest uppercase mb-1 truncate">
                    {p.location}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-primary-950 mb-3 leading-snug">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-light mb-4">
                    <span className="flex items-center gap-1">
                      <Home size={11} />{p.units} unidade
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 size={11} />
                      {p.area.toFixed(2).replace('.', ',')} m²
                    </span>
                    <span className="ml-auto">{p.year}</span>
                  </div>
                  <div className="h-px w-full bg-gray-100 mb-4" />
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('project-detail', p.id); }}
                    className="w-full border border-primary-200 hover:bg-primary-950 hover:border-primary-950 hover:text-white text-primary-700 text-xs font-medium py-2.5 transition-all duration-300 tracking-widest uppercase flex items-center justify-center gap-1.5"
                  >
                    Ver Detalhes <ArrowRight size={11} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-display text-2xl mb-2">Nenhum projeto encontrado</p>
              <button onClick={() => setFilter('todos')} className="text-primary-500 text-sm underline mt-2">
                Ver todos os projetos
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-950 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="section-label text-gold-400 mb-4">Tem interesse?</p>
          <div className="divider mx-auto mb-6" />
          <h2 className="font-display text-5xl font-semibold text-white mb-4">
            Encontre o Projeto<br />
            <span className="text-gradient-gold italic">Ideal para Você</span>
          </h2>
          <p className="text-white/45 font-light mb-10 leading-relaxed">
            Nossa equipe está pronta para apresentar cada empreendimento em detalhes e encontrar a melhor opção para você.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+falar+sobre+um+empreendimento.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gold-500 hover:bg-gold-600"
            >
              Fale Conosco <ArrowRight size={15} />
            </a>
            <button
              onClick={() => navigate('contato')}
              className="btn-outline-white"
            >
              Formulário de Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
