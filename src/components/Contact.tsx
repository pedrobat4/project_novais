import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  { icon: Phone, label: 'Telefone',  value: '(38) 98404-0697',                       href: 'tel:+5538984040697' },
  { icon: Mail,  label: 'E-mail',    value: 'novais@novaisempreendimentos.com.br',    href: 'mailto:novais@novaisempreendimentos.com.br' },
  { icon: MapPin,label: 'Endereço',  value: 'Av. Mestra Fininha, 1930 - sala 01\nUniton - Jardim São Luiz\nMontes Claros - MG', href: null },
  { icon: Clock, label: 'Horário',   value: 'Segunda a Sexta: 8h às 18h',             href: null },
];

const subjects = ['Empreendimento residencial', 'Obra comercial', 'Licitação pública', 'Parceria', 'Outros'];

export default function Contact() {
  const { ref: heroRef, visible: heroV } = useInView(0.1);
  const { ref: formRef, visible: formV } = useInView(0.1);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contato">
      <div className="relative py-32 hero-gradient">
        <div ref={heroRef} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 anim ${heroV ? 'show' : ''}`}>
          <div className="max-w-2xl">
            <p className="section-label text-gold-400 mb-5">Contato</p>
            <div className="divider mb-6" />
            <h2 className="font-display text-6xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Vamos<br /><span className="text-gradient-gold italic">Conversar</span>
            </h2>
            <p className="text-white/65 text-xl font-light">Estamos prontos para transformar seus sonhos em realidade</p>
          </div>
        </div>
      </div>

      <div className="section-green py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={formRef} className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className={`lg:col-span-2 anim-l ${formV ? 'show' : ''}`}>
              <p className="section-label text-primary-500 mb-4">Entre em Contato</p>
              <div className="divider mb-6" />
              <h2 className="font-display text-3xl font-semibold text-primary-950 mb-8">Fale com Nossa Equipe</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-950 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-700 hover:text-primary-600 transition-colors text-sm font-light leading-relaxed">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm font-light leading-relaxed whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Localização"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0!2d-43.8700!3d-16.7350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ0JzA2LjAiUyA0M8KwNTInMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%" height="200" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className={`lg:col-span-3 anim-r ${formV ? 'show' : ''}`} style={{ transitionDelay: '150ms' }}>
              <div className="bg-white shadow-lg p-8 md:p-10">
                <h3 className="font-display text-3xl font-semibold text-primary-950 mb-2">Envie sua Mensagem</h3>
                <p className="text-gray-400 text-sm mb-8 font-light">Preencha o formulário e retornaremos em breve</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary-50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-primary-600" />
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-primary-950 mb-2">Mensagem enviada!</h4>
                    <p className="text-gray-500 text-sm font-light">Nossa equipe entrará em contato em breve.</p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 text-primary-600 hover:text-primary-700 text-sm font-medium tracking-wide"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Nome Completo <span className="text-red-400">*</span></label>
                        <input type="text" name="name" required value={form.name} onChange={onChange}
                          placeholder="Seu nome"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-primary-500 transition-colors font-light" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Telefone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={onChange}
                          placeholder="(00) 00000-0000"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-primary-500 transition-colors font-light" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">E-mail <span className="text-red-400">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={onChange}
                        placeholder="seu@email.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-primary-500 transition-colors font-light" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Assunto</label>
                      <select name="subject" value={form.subject} onChange={onChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-primary-500 transition-colors bg-white font-light">
                        <option value="">Selecione um assunto</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Mensagem <span className="text-red-400">*</span></label>
                      <textarea name="message" required rows={5} value={form.message} onChange={onChange}
                        placeholder="Como podemos ajudá-lo?"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-primary-500 transition-colors resize-none font-light" />
                    </div>
                    <button type="submit" disabled={sending}
                      className="w-full bg-primary-950 hover:bg-primary-800 disabled:bg-primary-400 text-white font-medium py-4 transition-all duration-300 flex items-center justify-center gap-2 tracking-widest text-xs uppercase">
                      {sending ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>
                      ) : (
                        <><Send size={14} />Enviar Mensagem</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-950 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-semibold text-white mb-4">Pronto Para Começar?</h2>
          <p className="text-white/45 font-light mb-8">Nossa equipe está pronta para atender você</p>
          <a href="https://www.novaisempreendimentos.com.br/projetos" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            Ver Nossos Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
