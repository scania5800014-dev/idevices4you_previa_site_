import React, { useState } from 'react';
import { X, Smartphone, Wrench, RefreshCw, Send, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = "Assistência Técnica Especializada",
}) => {
  const [selectedDevice, setSelectedDevice] = useState("iPhone 15 Pro");
  const [selectedService, setSelectedService] = useState(initialService);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const devices = [
    "iPhone 16 Pro Max",
    "iPhone 16 Pro",
    "iPhone 16 / 16 Plus",
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 / 15 Plus",
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 / 14 Plus",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13 / 13 mini",
    "iPhone 12 / 12 Pro",
    "iPhone 11 / 11 Pro",
    "Outro Modelo Apple",
  ];

  const services = [
    {
      title: "Assistência Técnica Especializada",
      eta: "Express (muitos reparos no mesmo dia)",
      warranty: "Garantia de até 1 ano",
    },
    {
      title: "iPhones Novos & Seminovos",
      eta: "Pronta entrega em Santa Maria",
      warranty: "Aparelhos 100% inspecionados com garantia",
    },
    {
      title: "Aceitamos seu iPhone na Troca",
      eta: "Avaliação imediata na loja",
      warranty: "Melhor valorização do seu usado",
    },
    {
      title: "Consultoria Personalizada",
      eta: "Horário exclusivo agendado",
      warranty: "Suporte pós-atendimento",
    },
  ];

  const currentServiceInfo = services.find((s) => s.title === selectedService) || services[0];

  const handleSendProposal = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Simulação de Orçamento iDevices4You*\n\n` +
      `*Aparelho:* ${selectedDevice}\n` +
      `*Serviço:* ${selectedService}\n` +
      `*Cliente:* ${clientName || 'Não informado'}\n` +
      `*Telefone:* ${clientPhone || 'Não informado'}\n` +
      (notes ? `*Observações:* ${notes}\n` : '') +
      `\nGostaria de confirmar a disponibilidade e valores para Santa Maria.`;

    const url = `https://wa.me/555533171138?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de simulação de orçamento"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-black hover:border-cyan-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Laboratório Santa Maria</span>
          </div>
          <h2 id="modal-quote-title" className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Simulador de Orçamento &amp; Upgrade
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Escolha seu modelo e serviço para receber um orçamento transparente da nossa equipe técnica.
          </p>
        </div>

        <form onSubmit={handleSendProposal} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              1. Selecione o modelo do iPhone:
            </label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            >
              {devices.map((dev) => (
                <option key={dev} value={dev}>
                  {dev}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              2. Escolha o serviço de interesse:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((serv) => (
                <button
                  key={serv.title}
                  type="button"
                  onClick={() => setSelectedService(serv.title)}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    selectedService === serv.title
                      ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-slate-900 mb-0.5">{serv.title}</div>
                  <div className="text-[11px] text-cyan-800 font-semibold">{serv.eta}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Perks box */}
          <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-cyan-700 shrink-0" />
              <span>Prazo estimado: <strong className="text-slate-900">{currentServiceInfo.eta}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
              <span><strong className="text-slate-900">{currentServiceInfo.warranty}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Seu Nome (Opcional):
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: João"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">
                Seu Telefone (Opcional):
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="(55) 99999-9999"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              Observações adicionais:
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Tela trincada, saúde da bateria em 74%, etc."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              aria-label="Confirmar e enviar simulação de orçamento para o WhatsApp"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-sm active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Simulação para WhatsApp da iDevices4You</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
