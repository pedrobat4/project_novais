import { Building2, Clock, Star, Users, ChevronRight, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const clients = [
  { name: 'Prefeitura de Mirabela',         logo: '/img/mirabela.webp' },
  { name: 'CIMANS',                         logo: '/img/cimans.webp' },
  { name: 'Santa Casa de Montes Claros',    logo: '/img/santacasamontesclaros.webp' },
  { name: 'Prefeitura de Janaúba',          logo: '/img/janauba.webp' },
  { name: 'Prefeitura de Porteirinha',      logo: '/img/porteirinha.webp' },
  { name: 'Prefeitura de Jequitaí',         logo: '/img/jequitai.webp' },
  { name: 'Prefeitura de Capelinha',        logo: '/img/capelinha.webp' },
  { name: 'Prefeitura de Bocaíuva',         logo: '/img/bocaiuva.webp' },
  { name: 'Prefeitura de Luislândia',       logo: '/img/logo-prefeitura-luislandia.webp' },
  { name: 'Prefeitura de Ibiracatu',        logo: '/img/ibiracatu.webp' },
];

const stats = [
  { icon: Users,    value: '10+',  label: 'Municípios atendidos',  sub: 'Norte de Minas Gerais' },
  { icon: Clock,    value: '100%', label: 'Obras no prazo',        sub: 'Cumprimento total' },
  { icon: Star,     value: '5★',   label: 'Avaliação média',       sub: 'Índice de satisfação' },
  { icon: Building2,value: '15+',  label: 'Anos de experiência',   sub: 'No setor público' },
];

const values = [
  {
    icon: Award,
    title: 'Rigor Técnico',
    desc: 'Engenharia de alto nível em cada projeto público, com supervisão especializada em todas as etapas da obra.',
  },
  {
    icon: Clock,
    title: 'Transparência',
    desc: 'Processos claros, conformidade total com a legislação e relatórios de progresso acessíveis a todos os gestores.',
  },
  {
    icon: Users,
    title: 'Responsabilidade Social',
    desc: 'Desenvolvimento urbano que impacta positivamente a sociedade e melhora a qualidade de vida das comunidades.',
  },
];

export default function Licitacoes() {
  const { ref: heroRef,    visible: heroV }    = useInView(0.1);
  const { ref: statsRef,   visible: statsV }   = useInView(0.1);
  const { ref: contentRef, visible: contentV } = useInView(0.1);
  const { ref: clientsRef, visible: clientsV } = useInView(0.06);
  const { ref: valuesRef,  visible: valuesV }  = useInView(0.1);

  return (
    <section id="licitacoes">
      {/* Hero */}
      <div className="relative py-32 pt-44 hero-gradient">
        <div
          ref={heroRef}
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim ${heroV ? 'show' : ''}`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label text-gold-400">Setor Público</span>
              <span className="w-1 h-1 bg-gold-400/50 rounded-full" />
              <span className="section-label text-white/40">Norte de Minas Gerais</span>
            </div>
            <div className="divider mb-6" />
            <h2 className="font-display text-6xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Licitações
            </h2>
            <p className="text-white/65 text-xl font-light leading-relaxed max-w-lg">
              Referência em obras públicas com rigor técnico, transparência total e respeito absoluto aos prazos.
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`px-6 py-8 text-center anim ${statsV ? 'show' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-gold-500/15 flex items-center justify-center">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                  </div>
                  <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
                  <p className="text-white/70 text-xs font-medium mt-1 tracking-wide">{s.label}</p>
                  <p className="text-white/30 text-[10px] mt-0.5 font-light">{s.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={contentRef}
            className="grid lg:grid-cols-2 gap-16 items-start mb-20"
          >
            {/* Left: text */}
            <div className={`anim-l ${contentV ? 'show' : ''}`}>
              <p className="section-label text-primary-500 mb-4">Nossa atuação</p>
              <div className="divider mb-6" />
              <h2 className="section-title text-primary-950 mb-6">
                Obras Públicas de<br />
                <span className="text-gradient italic">Alto Impacto</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5 font-light">
                A Novais Empreendimentos e Incorporações atua de maneira expressiva no segmento de obras públicas, sendo responsável pela execução de projetos relevantes em todo o Norte de Minas.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 font-light">
                Ao atuar por meio de licitações, a Novais reforça seu papel social, promovendo desenvolvimento urbano, melhoria de infraestrutura e mais qualidade de vida para a população.
              </p>
              <div className="space-y-3">
                {[
                  'Experiência comprovada em obras municipais',
                  'Equipe técnica certificada e especializada',
                  'Gestão transparente com relatórios periódicos',
                  'Cumprimento rigoroso de cronogramas',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ChevronRight size={14} className="text-gold-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: clients */}
            <div
              className={`anim-r ${contentV ? 'show' : ''}`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="section-label text-primary-500 mb-1">Parceiros institucionais</p>
                  <h3 className="font-display text-2xl font-semibold text-primary-950">
                    Clientes de Confiança
                  </h3>
                </div>
                <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1.5 tracking-wide">
                  {clients.length} parceiros
                </span>
              </div>

              <div ref={clientsRef} className="grid grid-cols-2 gap-3">
                {clients.map((client, i) => (
                  <div
                    key={client.name}
                    className={`group bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg p-5 flex flex-col items-center gap-3 transition-all duration-300 anim ${clientsV ? 'show' : ''}`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="h-14 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-14 max-w-[110px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-400"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const d = document.createElement('div');
                            d.className = 'w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center';
                            d.innerHTML = '<span class="text-primary-600 text-lg font-bold">' + client.name[0] + '</span>';
                            parent.appendChild(d);
                          }
                        }}
                      />
                    </div>
                    <p className="text-gray-500 text-[11px] text-center font-light leading-snug group-hover:text-gray-700 transition-colors">
                      {client.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-primary-500 mb-4">Nossos Diferenciais</p>
            <div className="divider mx-auto mb-6" />
            <h2 className="section-title text-primary-950">
              O que nos torna<br />
              <span className="text-gradient italic">referência</span>
            </h2>
          </div>
          <div ref={valuesRef} className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className={`bg-white border border-gray-100 hover:border-primary-200 hover:shadow-xl p-8 transition-all duration-300 group anim ${valuesV ? 'show' : ''}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-50 group-hover:bg-primary-600 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={20} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="divider mb-4" />
                  <h3 className="font-display text-xl font-semibold text-primary-950 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-950 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="section-label text-gold-400 mb-4">Parceria com o setor público</p>
          <div className="divider mx-auto mb-6" />
          <h2 className="font-display text-5xl font-semibold text-white mb-4">
            Vamos construir<br />
            <span className="text-gradient-gold italic">juntos</span>
          </h2>
          <p className="text-white/45 font-light mb-10 leading-relaxed">
            Entre em contato para conhecer nossas soluções em obras públicas e licitações.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+saber+sobre+licitacoes.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gold-500 hover:bg-gold-600"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
