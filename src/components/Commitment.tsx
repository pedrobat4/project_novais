import { CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pillars = [
  {
    title: 'Garantia Total',
    tag: 'Sua Segurança é Prioridade',
    desc: 'Oferecemos cobertura completa com seguro obra e 5 anos de garantia estrutural.',
    items: ['Seguro obra completo', '5 anos garantia estrutural', 'Assistência técnica dedicada', 'Manutenção preventiva'],
    image: '/img/garantia-total.webp',
  },
  {
    title: 'Excelência Premium',
    tag: 'Padrão Incomparável',
    desc: 'Trabalhamos apenas com fornecedores certificados e materiais de primeira linha.',
    items: ['Fornecedores certificados', 'Materiais premium', 'Fiscalização rigorosa', 'Controle de qualidade total'],
    image: '/img/excelencia-premium.webp',
  },
  {
    title: 'Equipe Especializada',
    tag: 'Profissionais de Elite',
    desc: 'Engenheiros experientes, arquitetos renomados e mão de obra altamente qualificada.',
    items: ['Engenheiros experientes', 'Arquitetos renomados', 'Mão de obra certificada', 'Treinamento contínuo'],
    image: '/img/equipe-especializada.webp',
  },
  {
    title: 'Gestão Novais',
    tag: 'Organização e cuidado',
    desc: 'Planejamento sólido, comunicação clara e execução cuidadosa em cada obra.',
    items: ['Organização e limpeza', 'Materiais Premium', 'Cronograma que funciona', 'Cuidado aos detalhes'],
    image: '/img/gestao-novais.webp',
  },
];

const stats = [
  { value: '100%', label: 'Satisfação Clientes', sub: 'Índice de aprovação total' },
  { value: '15+',  label: 'Prêmios',             sub: 'Reconhecimento do setor' },
  { value: '0',    label: 'Acidentes',            sub: 'Segurança impecável' },
  { value: '98%',  label: 'Recomendação',         sub: 'Clientes que indicam' },
];

const process = [
  { step: '01', title: 'Planejamento', items: ['Análise detalhada do projeto', 'Seleção de fornecedores', 'Aprovação de materiais', 'Cronograma executivo'] },
  { step: '02', title: 'Execução',     items: ['Supervisão constante', 'Fiscalização técnica', 'Testes de qualidade', 'Relatórios semanais'] },
  { step: '03', title: 'Entrega',      items: ['Vistoria completa', 'Checklist de acabamentos', 'Treinamento smart home', 'Garantia ativada'] },
];

export default function Commitment() {
  const { ref: heroRef,    visible: heroV }    = useInView(0.1);
  const { ref: pillarsRef, visible: pillarsV } = useInView(0.06);
  const { ref: statsRef,   visible: statsV }   = useInView(0.15);
  const { ref: processRef, visible: processV } = useInView(0.1);

  return (
    <section id="compromisso">
      <div className="relative py-32 pt-44 hero-gradient">
        <div ref={heroRef} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim ${heroV ? 'show' : ''}`}>
          <div className="max-w-2xl">
            <p className="section-label text-gold-400 mb-5">Compromisso</p>
            <div className="divider mb-6" />
            <h2 className="font-display text-6xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Excelência em<br /><span className="text-gradient-gold italic">Cada Detalhe</span>
            </h2>
            <p className="text-white/65 text-xl font-light leading-relaxed">
              Nossa dedicação vai além da construção. É um compromisso com sua felicidade e tranquilidade.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars with images */}
      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label text-primary-500 mb-4">Nossos Pilares</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="section-title text-primary-950">O que nos define</h2>
          </div>
          <div ref={pillarsRef} className="grid md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-400 anim ${pillarsV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden bg-gray-50">
                  <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="px-8 py-3 bg-primary-50 border-b border-primary-100">
                  <p className="text-primary-600 text-[10px] font-semibold tracking-widest uppercase">{p.tag}</p>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-primary-950 mb-3">{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-5 font-light text-sm">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-white">Números que comprovam nossa excelência</h2>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center anim ${statsV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-display text-5xl font-semibold text-white mb-2">{s.value}</p>
                <p className="text-gold-400 font-medium text-sm mb-1">{s.label}</p>
                <p className="text-white/30 text-xs font-light">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-primary-500 mb-4">Controle de Qualidade</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="section-title text-primary-950">Perfeição em cada etapa</h2>
          </div>
          <div ref={processRef} className="grid md:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <div
                key={step.step}
                className={`bg-white shadow-md p-8 hover:shadow-xl transition-shadow anim ${processV ? 'show' : ''}`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary-950 flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-950 mb-4">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500 font-light">
                      <span className="w-1 h-1 bg-gold-500 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary-950 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-5xl font-semibold text-white mb-2">Construímos Mais Que Imóveis</h2>
          <p className="font-display text-3xl text-gold-400 mb-6 italic">Construímos Sonhos</p>
          <p className="text-white/45 font-light mb-10">Descubra como nosso compromisso pode transformar seu projeto em realidade</p>
          <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary bg-gold-500 hover:bg-gold-600">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}
