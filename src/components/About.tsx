import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Building2, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function CountUp({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let v = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [visible, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 12, suffix: '+', label: 'Anos de Excelência', icon: Award },
  { value: 500, suffix: '+', label: 'Famílias Atendidas', icon: Users },
  { value: 50, suffix: '+', label: 'Projetos Entregues', icon: Building2 },
];

const pillars = [
  { title: 'Qualidade', desc: 'Processos certificados e materiais premium em cada detalhe' },
  { title: 'Inovação', desc: 'Tecnologia de ponta e design contemporâneo' },
  { title: 'Sustentabilidade', desc: 'Compromisso com o futuro e meio ambiente' },
  { title: 'Excelência', desc: 'Superamos expectativas em cada entrega' },
  { title: 'Sofisticação', desc: 'Alto padrão em acabamentos e localização' },
  { title: 'Transparência', desc: 'Ética e clareza em todas as relações' },
];

const identity = {
  missao: 'Entregar empreendimentos que agreguem valor real aos clientes, inovando com sustentabilidade e responsabilidade social.',
  visao: 'Ser a incorporadora referência em Minas Gerais, reconhecida pela excelência, inovação e compromisso com a qualidade de vida das pessoas.',
  valores: 'Ética, transparência, inovação, qualidade, sustentabilidade e respeito ao cliente guiam cada decisão e cada obra da Novais.',
};

export default function About() {
  const [tab, setTab] = useState<'missao' | 'visao' | 'valores'>('missao');
  const { ref: legacyRef, visible: legacyVisible } = useInView();
  const { ref: pillarsRef, visible: pillarsVisible } = useInView(0.08);
  const { ref: idRef, visible: idVisible } = useInView();

  return (
    <section id="sobre">
      {/* Hero */}
      <div className="relative min-h-screen flex flex-col justify-center hero-gradient">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <p className="text-primary-200 text-sm font-medium tracking-widest uppercase mb-4">A Novais</p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-8">
              Excelência em<br /><span className="text-primary-300">Alto Padrão</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Uma empresa sólida de Montes Claros, fundada por Gustavo Novais, que une tradição e inovação para transformar o mercado da construção civil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.novaisempreendimentos.com.br/projetos" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                Conheça Nossos Projetos <ArrowRight size={18} />
              </a>
              <button onClick={() => document.getElementById('legado')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                Nossa História
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-4 md:gap-8">
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-white">
                  <CountUp target={value} suffix={suffix} />
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <Icon size={13} className="text-primary-300" />
                  <p className="text-white/70 text-xs md:text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => document.getElementById('legado')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll"
        >
          <ChevronDown size={28} />
        </button>
      </div>

      {/* O Legado */}
      <div id="legado" className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={legacyRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`anim-l ${legacyVisible ? 'show' : ''}`}>
              <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3">O Legado</p>
              <h2 className="section-title text-gray-900 mb-6">
                Tradição e Inovação<br /><span className="text-primary-600">em Cada Obra</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A Novais Incorporações & Empreendimentos é uma empresa sólida de Montes Claros, fundada por Gustavo Novais, que une tradição e inovação para transformar o mercado da construção civil.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Com foco em qualidade, transparência e tecnologia, a Novais entrega mais do que imóveis: oferece projetos que valorizam o patrimônio e promovem a qualidade de vida de seus clientes.
              </p>
              <blockquote className="border-l-4 border-primary-500 pl-6 py-2">
                <p className="text-primary-700 font-display text-lg italic font-medium">
                  "Uma empresa inovadora no mercado, com um legado no nome e na força."
                </p>
              </blockquote>
            </div>

            <div className={`anim-r ${legacyVisible ? 'show' : ''}`} style={{ transitionDelay: '150ms' }}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Empreendimento Novais"
                  className="rounded-sm shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-sm shadow-xl">
                  <p className="font-display text-3xl font-bold">12+</p>
                  <p className="text-primary-100 text-sm mt-1">Anos transformando<br />vidas em Minas Gerais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pilares */}
      <div className="bg-primary-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-200 text-sm font-medium tracking-widest uppercase mb-3">Nossa Essência</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">Nossos Pilares</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              A Novais tem como premissas a ética, o profissionalismo e o compromisso com o cliente.
            </p>
          </div>
          <div ref={pillarsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-6 hover:bg-white/20 transition-all duration-300 anim ${pillarsVisible ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-10 h-1 bg-primary-300 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Identidade */}
      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={idRef} className={`anim ${idVisible ? 'show' : ''}`}>
            <div className="text-center mb-12">
              <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3">Nossa Identidade</p>
              <h2 className="section-title text-gray-900">Quem Somos</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex border-b border-gray-200 mb-8">
                {(['missao', 'visao', 'valores'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-4 text-sm font-medium tracking-wide transition-all duration-200 border-b-2 -mb-px ${
                      tab === t ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {t === 'missao' ? 'Missão' : t === 'visao' ? 'Visão' : 'Valores'}
                  </button>
                ))}
              </div>
              <div className="bg-gray-50 rounded-sm p-8 border-l-4 border-primary-500">
                <p className="text-gray-700 text-lg leading-relaxed">{identity[tab]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-24 hero-gradient">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            Pronto para Transformar<br />Seu Sonho em Realidade?
          </h2>
          <p className="text-primary-100 text-lg mb-10">
            Entre em contato conosco e descubra como podemos criar o lar perfeito para você
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Entre em Contato
            </button>
            <a href="https://www.novaisempreendimentos.com.br/projetos" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
