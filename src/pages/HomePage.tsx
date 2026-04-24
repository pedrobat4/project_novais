import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, ChevronDown, Award, Home, Shield, Leaf,
  Cpu, Maximize2, CheckCircle,
} from 'lucide-react';
import { projects } from '../data/projects';
import type { PageType } from '../App';

interface Props { navigate: (page: PageType, id?: string) => void }

/* ── animation hook ── */
function useInView(t = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return { ref, visible: v };
}

const pillars = [
  { icon: Award, title: 'Excelência', desc: '12 anos de história e mais de 50 projetos entregues com padrão incomparável' },
  { icon: Shield, title: 'Segurança', desc: 'Garantia total com seguro obra e 5 anos de cobertura estrutural' },
  { icon: Cpu, title: 'Tecnologia', desc: 'Automação residencial e smart home em todos os empreendimentos' },
  { icon: Leaf, title: 'Sustentabilidade', desc: 'Projetos com foco em sustentabilidade e integração urbana' },
];

const innovations = [
  { icon: Home, label: 'Smart Home' },
  { icon: Award, label: 'Atendimento personalizado' },
  { icon: Shield, label: 'Garantia 5 Anos' },
  { icon: CheckCircle, label: 'Humanização' },
];

const STATUS_STYLES: Record<string, string> = {
  'Lançamento': 'bg-primary-500 text-white',
  'Residencial': 'bg-gray-800 text-white',
  'VENDIDA':    'bg-red-700 text-white',
};

export default function HomePage({ navigate }: Props) {
  const { ref: aboutRef, visible: aboutV } = useInView();
  const { ref: pillarsRef, visible: pillarsV } = useInView(0.08);
  const { ref: portfolioRef, visible: portfolioV } = useInView(0.06);
  const { ref: innovRef, visible: innovV } = useInView(0.1);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section id="sobre" className="relative h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: 'rgb(81,100,71)' }}>
        {/* Background image */}
        <img
          src="/img/hero-novais.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Green overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(81,100,71,0.72) 0%, rgba(91,116,88,0.55) 50%, rgba(81,100,71,0.90) 100%)' }}
        />
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label text-gold-400 mb-5 tracking-[0.25em]">Novais Incorporações</p>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-semibold text-white leading-[0.9] mb-6">
              Alto Padrão<br />
              <span className="text-gradient-gold italic">Redefinido</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              Onde arquitetura excepcional, tecnologia de ponta e design sofisticado convergem para criar empreendimentos únicos em Montes Claros
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary bg-gold-500 hover:bg-gold-600"
              >
                Explorar Projetos <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-white"
              >
                Conheça a Novais
              </button>
            </div>
            <p className="text-white/50 text-sm">Tecnologia inteligente, automação e atendimento personalizado em todos os projetos.</p>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 right-8 text-white/40 hover:text-white/80 transition-colors hidden md:block"
          aria-label="scroll"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </section>

      {/* ── QUEM SOMOS ── */}
      <section id="quem-somos" className="section-green py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`anim-l ${aboutV ? 'show' : ''}`}>
              <div className="relative">
                <img
                  src="/img/novais-42.jpg"
                  alt="Quem Somos"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[560px] object-cover object-top"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-950 text-white px-8 py-6 hidden md:block">
                  <p className="font-display text-4xl font-semibold">12+</p>
                  <p className="text-white/60 text-sm mt-1">Anos construindo<br />legados em MG</p>
                </div>
                <div className="absolute top-6 left-6 bg-gold-500 text-white px-4 py-2 text-xs font-medium tracking-widest uppercase">
                  Desde 2013
                </div>
              </div>
            </div>

            {/* Text */}
            <div className={`anim-r ${aboutV ? 'show' : ''}`} style={{ transitionDelay: '150ms' }}>
              <p className="section-label text-primary-500 mb-4">Quem Somos</p>
              <div className="divider mb-6" />
              <h2 className="section-title text-primary-950 mb-6">
                Construindo<br /><span className="text-gradient italic">Legados</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5 font-light">
                A Novais Incorporações & Empreendimentos é uma empresa sólida de Montes Claros, fundada por Gustavo Novais, que une tradição e inovação para transformar o mercado da construção civil.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 font-light">
                Com foco em qualidade, transparência e tecnologia, a Novais entrega mais do que imóveis: oferece projetos que valorizam o patrimônio e promovem a qualidade de vida de seus clientes.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-6 py-2 mb-8">
                <p className="font-display text-xl text-primary-700 italic font-medium leading-snug">
                  "Uma empresa inovadora no mercado, com um legado no nome e na força."
                </p>
              </blockquote>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-dark"
              >
                Nossa História <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILARES ── */}
      <section id="pilares" className="hero-gradient py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-gold-500 mb-4">Por Que Escolher a Novais</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-white mb-4">
              Nossos Pilares
            </h2>
            <p className="text-white/50 font-light max-w-lg mx-auto">
              Compromissos que nos tornam referência em alto padrão
            </p>
          </div>

          <div ref={pillarsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`group border border-white/10 hover:border-gold-500/50 p-8 transition-all duration-400 cursor-default anim ${pillarsV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-gold-500/50 flex items-center justify-center mb-6 transition-colors">
                  <Icon size={20} className="text-white/50 group-hover:text-gold-400 transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="section-green py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={portfolioRef} className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div className={`anim-l ${portfolioV ? 'show' : ''}`}>
              <p className="section-label text-primary-500 mb-4">Portfólio</p>
              <div className="divider mb-6" />
              <h2 className="section-title text-primary-950">
                Projetos em<br /><span className="text-gradient italic">Destaque</span>
              </h2>
            </div>
            <div className={`anim-r ${portfolioV ? 'show' : ''}`} style={{ transitionDelay: '100ms' }}>
              <button
                onClick={() => navigate('projetos')}
                className="btn-outline-dark text-sm"
              >
                Ver Todos <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`card-project anim ${portfolioV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 tracking-wider ${STATUS_STYLES[p.status]}`}>
                    {p.status}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="section-label text-primary-500 text-[10px] mb-1">{p.location}</p>
                  <h3 className="font-display text-lg font-semibold text-primary-950 mb-3 leading-snug">{p.name}</h3>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Home size={11} />{p.units} unidade
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 size={11} />{p.area.toFixed(2).replace('.', ',')} m²
                    </span>
                  </div>

                  <button
                    onClick={() => navigate('project-detail', p.id)}
                    className="w-full border border-primary-200 hover:bg-primary-600 hover:border-primary-600 hover:text-white text-primary-700 text-xs font-medium py-2.5 transition-all duration-300 tracking-wider"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INOVAÇÃO ── */}
      <section id="inovacao" className="relative py-32 overflow-hidden hero-gradient">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={innovRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`anim-l ${innovV ? 'show' : ''}`}>
              <p className="section-label text-gold-400 mb-5">Inovação que Transforma Vidas</p>
              <div className="divider mb-6" />
              <h2 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
                Inovação que<br />
                <span className="text-gradient-gold italic">Transforma Vidas</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-light mb-10">
                Descubra como a Novais une humanização, tecnologia de ponta, sustentabilidade e design excepcional para criar empreendimentos que superam expectativas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {innovations.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 border border-white/10 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-gold-400" />
                    </div>
                    <span className="text-white/70 text-sm font-light">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`anim-r ${innovV ? 'show' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/5 border border-white/10 p-10">
                <p className="section-label text-gold-400 mb-4">Transforme Seus Sonhos</p>
                <h3 className="font-display text-4xl font-semibold text-white mb-4 leading-tight">
                  Transforme Seus Sonhos<br />em Realidade
                </h3>
                <p className="text-white/55 font-light leading-relaxed mb-8 text-sm">
                  Descubra o empreendimento perfeito para você e sua família. Qualidade, localização e sofisticação em cada detalhe.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+falar+sobre+um+empreendimento.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-gold-500 hover:bg-gold-600 justify-center text-center"
                  >
                    Fale Conosco Agora <ArrowRight size={15} />
                  </a>
                  <button
                    onClick={() => navigate('projetos')}
                    className="btn-outline-white justify-center text-center"
                  >
                    Ver Todos os Projetos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
