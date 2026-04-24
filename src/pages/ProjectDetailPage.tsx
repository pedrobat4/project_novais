import { useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, Maximize2, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { projects, type ProjectStatus } from '../data/projects';
import type { PageType } from '../App';

interface Props {
  id: string;
  navigate: (page: PageType, id?: string) => void;
}

const STATUS_STYLES: Record<ProjectStatus, { bg: string; text: string; label: string }> = {
  'Lançamento': { bg: 'bg-primary-500', text: 'text-white', label: 'Lançamento' },
  'Residencial': { bg: 'bg-gray-800',   text: 'text-white', label: 'Residencial' },
  'VENDIDA':    { bg: 'bg-red-700',     text: 'text-white', label: 'Vendida' },
};

export default function ProjectDetailPage({ id, navigate }: Props) {
  const project = projects.find((p) => p.id === id);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24">
        <p className="text-gray-500 font-display text-2xl">Projeto não encontrado</p>
        <button onClick={() => navigate('projetos')} className="btn-primary">
          <ArrowLeft size={16} /> Ver Projetos
        </button>
      </div>
    );
  }

  const status = STATUS_STYLES[project.status];
  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse no projeto ${project.name} — ${project.location}. Gostaria de mais informações.`
  );

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={project.image} alt={project.name} fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/50 to-primary-950/20" />

        <button
          onClick={() => navigate('projetos')}
          className="absolute top-28 left-4 sm:left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-light"
        >
          <ArrowLeft size={16} /> Voltar aos Projetos
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className={`inline-block text-xs font-medium px-3 py-1 tracking-widest mb-4 ${status.bg} ${status.text}`}>
            {status.label}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-3">
            {project.name}
          </h1>
          <p className="text-white/60 text-lg font-light flex items-center gap-2">
            <MapPin size={16} className="text-gold-400" />{project.location}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Description + Features */}
            <div className="lg:col-span-2">
              <p className="section-label text-primary-500 mb-4">Sobre o Projeto</p>
              <div className="divider mb-6" />
              <h2 className="font-display text-4xl font-semibold text-primary-950 mb-6">
                Informações do Projeto
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-12">
                {project.description}
              </p>

              {project.detail && (
                <div className="bg-primary-50 border-l-2 border-primary-500 px-6 py-4 mb-10">
                  <p className="text-primary-700 text-sm font-medium">{project.detail}</p>
                </div>
              )}

              <h3 className="font-display text-2xl font-semibold text-primary-950 mb-6">Características</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 bg-white p-4 shadow-sm">
                    <CheckCircle size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary-950 text-white p-8 mb-6 sticky top-28">
                <p className="section-label text-gold-400 mb-5">Ficha Técnica</p>

                <div className="space-y-5">
                  {[
                    { icon: MapPin,     label: 'Localização',     value: project.location },
                    { icon: Calendar,   label: 'Ano',             value: String(project.year) },
                    { icon: Maximize2,  label: 'Área Construída', value: `${project.area.toFixed(2).replace('.', ',')} m²` },
                    { icon: CheckCircle,label: 'Tipo',            value: project.type },
                  ].map(({ icon: Icon, label, value }, i) => (
                    <div key={label} className={`flex items-center gap-4 ${i < 3 ? 'pb-5 border-b border-white/10' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-gold-400" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                        <p className="text-white text-sm font-medium leading-snug">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {project.status !== 'VENDIDA' && (
                    <a
                      href={`https://api.whatsapp.com/send/?phone=5538984040697&text=${whatsappMsg}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-medium py-3.5 tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} /> Tenho Interesse
                    </a>
                  )}
                  <button
                    onClick={() => navigate('projetos')}
                    className="w-full border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-xs font-medium py-3.5 tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={13} /> Ver Todos os Projetos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="section-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="section-label text-primary-500 mb-3">Outros Projetos</p>
              <div className="divider mb-4" />
              <h2 className="font-display text-3xl font-semibold text-primary-950">Você também pode gostar</h2>
            </div>
            <button onClick={() => navigate('projetos')} className="btn-outline-dark text-xs">
              Ver Todos <ArrowRight size={13} />
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {relatedProjects.map((p) => {
              const s = STATUS_STYLES[p.status];
              return (
                <div
                  key={p.id}
                  className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
                  onClick={() => navigate('project-detail', p.id)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 ${s.bg} ${s.text}`}>{p.status}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-primary-500 text-[10px] font-medium tracking-wider uppercase mb-1">{p.location}</p>
                    <h3 className="font-display text-lg font-semibold text-primary-950 mb-2">{p.name}</h3>
                    <p className="text-gray-400 text-xs font-light">{p.area.toFixed(2).replace('.', ',')} m² · {p.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
