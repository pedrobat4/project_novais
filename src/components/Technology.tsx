import { Smartphone, Shield, Zap, Lightbulb, Thermometer, Lock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import type { PageType } from '../App';

const solutions = [
  {
    icon: Smartphone,
    tag: 'Smart Home Premium',
    title: 'Automação Completa',
    desc: 'Controle total da sua residência através de um único aplicativo. Iluminação, climatização, segurança e entretenimento integrados.',
    features: ['Controle por voz', 'Cenários personalizados', 'Gestão energética', 'Integração total'],
    image: '/img/automacao-completa.webp',
  },
  {
    icon: Shield,
    tag: 'Proteção 24/7',
    title: 'Segurança Inteligente',
    desc: 'Sistema de segurança com IA, reconhecimento facial e monitoramento em tempo real para máxima tranquilidade.',
    features: ['Câmeras 4K', 'Reconhecimento facial', 'Alertas instantâneos', 'Backup em nuvem'],
    image: '/img/seguranca-inteligente.webp',
  },
  {
    icon: Zap,
    tag: 'Eficiência Máxima',
    title: 'Energia Sustentável',
    desc: 'Painéis solares de última geração e gestão inteligente de consumo para economia de até 95% na conta de luz.',
    features: ['Painéis fotovoltaicos', 'Armazenamento bateria', 'Monitoramento real-time', 'ROI garantido'],
    image: '/img/energia-sustentavel.webp',
  },
];

const smartFeatures = [
  { icon: Lightbulb, label: 'Iluminação', desc: 'Controle automático de intensidade e cor' },
  { icon: Thermometer, label: 'Climatização', desc: 'Temperatura ideal automaticamente' },
  { icon: Lock, label: 'Acesso', desc: 'Fechaduras digitais biométricas' },
];

const metrics = [
  { value: '22%', label: 'Economia Energia' },
  { value: '75%', label: 'Conectividade' },
  { value: '18/7', label: 'Monitoramento' },
  { value: '37+', label: 'Dispositivos IoT' },
];

export default function Technology({ navigate }: { navigate: (page: PageType) => void }) {
  const { ref: heroRef, visible: heroVisible } = useInView(0.1);
  const { ref: solRef, visible: solVisible } = useInView(0.08);
  const { ref: featRef, visible: featVisible } = useInView(0.15);

  return (
    <section id="tecnologia">
      <div className="relative py-32 pt-44 hero-gradient">
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-2xl anim ${heroVisible ? 'show' : ''}`}>
            <p className="section-label text-gold-400 mb-5">Tecnologia</p>
            <div className="divider mb-6" />
            <h2 className="font-display text-6xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Inovação em<br /><span className="text-gradient-gold italic">Cada Detalhe</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Soluções integradas de tecnologia que transformam a forma de viver.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`border border-white/10 p-5 text-center anim ${heroVisible ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <p className="font-display text-3xl font-semibold text-gold-400">{m.value}</p>
                <p className="text-white/50 text-xs mt-1 tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-primary-500 mb-4">Soluções Integradas</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="section-title text-primary-950">
              Tecnologias que transformam<br /><span className="text-gradient italic">a forma de viver</span>
            </h2>
          </div>
          <div ref={solRef} className="space-y-16">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              const flip = i % 2 === 1;
              return (
                <div
                  key={sol.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center anim ${solVisible ? 'show' : ''}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className={flip ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1.5 mb-4 tracking-wide">
                      <Icon size={13} />{sol.tag}
                    </div>
                    <h3 className="font-display text-4xl font-semibold text-primary-950 mb-4">{sol.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-light">{sol.desc}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                          <span className="w-1 h-1 bg-gold-500 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={flip ? 'lg:order-1' : ''}>
                    <img src={sol.image} alt={sol.title} loading="lazy" decoding="async" className="w-full h-auto object-contain shadow-2xl" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-display text-4xl font-semibold text-white">Recursos Smart Home</h3>
          </div>
          <div ref={featRef} className="grid md:grid-cols-3 gap-5">
            {smartFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className={`flex items-start gap-4 border border-white/10 p-6 anim ${featVisible ? 'show' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">{f.label}</p>
                    <p className="text-white/45 text-sm font-light">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-primary-900 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-5xl font-semibold text-white mb-4">Viva o Futuro Hoje</h2>
          <p className="text-white/45 font-light mb-10">Conheça nossos empreendimentos inteligentes</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('projetos')} className="btn-primary bg-gold-500 hover:bg-gold-600">
              Ver Projetos Inteligentes
            </button>
            <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline-white">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
