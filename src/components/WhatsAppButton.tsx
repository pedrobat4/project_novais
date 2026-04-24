import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5538984040697&text=Quero+falar+sobre+um+empreendimento.&type=phone_number&app_absent=0';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => { if (!dismissed) setTooltip(true); }, 4500);
    const t3 = setTimeout(() => setTooltip(false), 9500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [dismissed]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      {tooltip && !dismissed && (
        <div className="flex items-start gap-2 bg-white shadow-2xl px-4 py-3 max-w-xs border-l-2 border-[#25D366]">
          <p className="text-gray-700 text-sm leading-relaxed flex-1 font-light">
            Olá! Fale conosco pelo WhatsApp.
          </p>
          <button onClick={() => { setTooltip(false); setDismissed(true); }} className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-0.5" aria-label="Fechar">
            <X size={13} />
          </button>
        </div>
      )}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onClick={() => setTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bf5a] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
    </div>
  );
}
