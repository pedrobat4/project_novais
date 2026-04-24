import { useEffect, useState } from 'react';
import { Leaf, Sun, Droplets, TreePine, Shield, Star, Infinity } from 'lucide-react';
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

const phases = [
  { title: 'Planejamento', num: 1, items: ['Análise de impacto ambiental', 'Seleção de materiais eco-friendly', 'Design bioclimático', 'Certificação LEED'] },
  { title: 'Construção',   num: 2, items: ['Gestão de resíduos', 'Uso racional de água', 'Energia renovável no canteiro', 'Controle de emissões'] },
  { title: 'Operação',     num: 3, items: ['Monitoramento energético', 'Manutenção preventiva verde', 'Educação ambiental', 'Melhoria contínua'] },
];

const insurances = [
  { icon: Shield,   period: 'Durante Construção', title: 'Seguro Obra',     items: ['Danos materiais', 'Responsabilidade civil', 'Atrasos de entrega', 'Fenômenos naturais'] },
  { icon: Star,     period: 'Após Entrega',        title: 'Seguro Pós-Obra', items: ['Garantia estrutural 5 anos', 'Vícios construtivos', 'Defeitos de fabricação', 'Assistência técnica'] },
  { icon: Infinity, period: 'Vida Toda',           title: 'Proteção Total',  items: ['Assistência 24h', 'Manutenção preventiva', 'Suporte técnico', 'Atualização tecnológica'] },
];

export default function Sustainability() {
  const { ref: heroRef,    visible: heroV }    = useInView(0.1);
  const { ref: pillarsRef, visible: pillarsV } = useInView(0.1);
  const { ref: phasesRef,  visible: phasesV }  = useInView(0.1);
  const { ref: insRef,     visible: insV }     = useInView(0.1);

  return (
    <section id="sustentabilidade">
      <div className="relative py-32 pt-44 hero-gradient">
        <div ref={heroRef} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim ${heroV ? 'show' : ''}`}>
          <div className="max-w-2xl mb-12">
            <p className="section-label text-gold-400 mb-5">Sustentabilidade</p>
            <div className="divider mb-6" />
            <h2 className="font-display text-6xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Construindo<br /><span className="text-gradient-gold italic">o Futuro</span>
            </h2>
            <p className="text-white/65 text-xl font-light leading-relaxed">
              Práticas sustentáveis que transformam empreendimentos em legados ambientais.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { target: 65, suffix: '%', label: 'Redução Energia' },
              { target: 50, suffix: '%', label: 'Economia Água' },
              { target: 80, suffix: '%', label: 'Mat. Certificados' },
              { target: 12, suffix: '+', label: 'Áreas Verdes' },
            ].map((m, i) => (
              <div
                key={m.label}
                className={`border border-white/10 p-5 text-center anim ${heroV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <p className="font-display text-3xl font-semibold text-gold-400">
                  <CountUp target={m.target} suffix={m.suffix} />
                </p>
                <p className="text-white/50 text-xs mt-1 tracking-wide font-light">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-primary-500 mb-4">Nossos Pilares Verdes</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="section-title text-primary-950">
              Legados<br /><span className="text-gradient italic">Ambientais</span>
            </h2>
          </div>

          <div ref={pillarsRef} className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className={`anim-l ${pillarsV ? 'show' : ''}`}>
              <div className="relative mb-8">
                <img
                  src="/img/materiais-sustentaveis.webp"
                  alt="Materiais Sustentáveis"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="bg-gold-500 text-white text-xs font-medium px-3 py-1 tracking-wide">Construção Consciente</span>
                </div>
              </div>
              <h3 className="font-display text-3xl font-semibold text-primary-950 mb-4">Materiais Sustentáveis</h3>
              <p className="text-gray-500 leading-relaxed mb-4 font-light">
                Seleção criteriosa de materiais com certificação ambiental, priorizando produtos reciclados e de baixo impacto no planeta.
              </p>
              <div className="inline-block bg-primary-500 text-white text-xs font-medium px-4 py-2 mb-6 tracking-wide">
                Impacto: 80% materiais certificados
              </div>
              <ul className="space-y-2">
                {['Fornecedores certificados', 'Materiais recicláveis', 'Baixa emissão de CO₂', 'Rastreabilidade total'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                    <Leaf size={12} className="text-primary-500" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`anim-r ${pillarsV ? 'show' : ''}`} style={{ transitionDelay: '150ms' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-950 text-white p-6 text-center">
                  <p className="font-display text-3xl font-semibold">100%</p>
                  <p className="text-white/60 text-sm mt-2 font-light">Ventilação Natural</p>
                  <p className="text-white/35 text-xs mt-1 font-light">Projetos com ventilação cruzada</p>
                </div>
                <div className="bg-primary-700 text-white p-6 text-center">
                  <p className="font-display text-3xl font-semibold">50%+</p>
                  <p className="text-white/60 text-sm mt-2 font-light">Áreas Verdes</p>
                  <p className="text-white/35 text-xs mt-1 font-light">Área permeável preservada</p>
                </div>
                <div className="col-span-2 bg-primary-50 border border-primary-100 p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Sun size={18} className="text-primary-600" />
                    <TreePine size={18} className="text-primary-600" />
                    <Droplets size={18} className="text-primary-600" />
                  </div>
                  <p className="font-display text-3xl font-semibold text-primary-700">A+</p>
                  <p className="text-primary-600 font-medium text-sm">Eficiência Energética</p>
                  <p className="text-primary-500 text-xs mt-1 font-light">Classificação máxima</p>
                </div>
              </div>

              {/* Phases */}
              <div className="mt-6 space-y-3" ref={phasesRef}>
                {phases.map((phase, i) => (
                  <div
                    key={phase.title}
                    className={`bg-gray-50 border border-gray-100 p-5 anim ${phasesV ? 'show' : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">{phase.num}</div>
                      <h4 className="font-semibold text-primary-950 text-sm">{phase.title}</h4>
                    </div>
                    <div className="pl-9 grid grid-cols-2 gap-1">
                      {phase.items.map((item) => (
                        <p key={item} className="text-gray-500 text-xs font-light">· {item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance */}
      <div className="bg-primary-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-gold-400 mb-4">Proteção Completa</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="font-display text-5xl font-semibold text-white">Seu investimento seguro em todas as fases</h2>
          </div>
          <div ref={insRef} className="grid md:grid-cols-3 gap-5">
            {insurances.map((ins, i) => {
              const Icon = ins.icon;
              return (
                <div
                  key={ins.title}
                  className={`border border-white/10 hover:border-gold-500/30 p-8 transition-all duration-300 anim ${insV ? 'show' : ''}`}
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wide font-light">{ins.period}</p>
                      <h3 className="text-white font-semibold">{ins.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {ins.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/50 font-light">
                        <span className="w-1 h-1 bg-gold-500 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
