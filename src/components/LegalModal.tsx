import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade' : 'Termos de Uso';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-black hover:border-cyan-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-cyan-700 mb-2">
          <ShieldCheck className="w-5 h-5 text-cyan-600" />
          <span className="text-xs font-mono uppercase tracking-wider font-bold">iDevices4You Santa Maria</span>
        </div>

        <h2 id="legal-modal-title" className="text-2xl font-bold text-slate-950 mb-4">
          {title}
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                A <strong>iDevices4You</strong>, estabelecida em Santa Maria - RS, valoriza profundamente a privacidade e a segurança dos dados de seus clientes.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">1. Coleta e Uso de Informações</h3>
              <p>
                Os dados fornecidos através dos nossos canais de atendimento (WhatsApp, formulário de contato e simulação de orçamento) são utilizados estritamente para o contato direto, elaboração de ordens de serviço, avaliação de dispositivos e esclarecimento de dúvidas técnicas.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">2. Preservação dos Dados nos Dispositivos</h3>
              <p>
                Nos procedimentos de assistência técnica, realizamos todos os esforços para preservar a integridade dos dados armazenados no iPhone do cliente. Recomendamos sempre a realização de backup no iCloud ou computador prévio ao atendimento.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">3. Não Compartilhamento</h3>
              <p>
                Não comercializamos, alugamos ou repassamos informações cadastrais de clientes a terceiros. Seus dados permanecem protegidos sob os preceitos da LGPD (Lei Geral de Proteção de Dados).
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao portal institucional da <strong>iDevices4You</strong>. Ao acessar nosso site e solicitar orçamentos, você concorda com as condições descritas abaixo.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">1. Natureza dos Serviços</h3>
              <p>
                A iDevices4You é uma empresa independente e especializada em assistência técnica, comercialização de novos e seminovos, programa de troca e consultoria técnica de dispositivos Apple em Santa Maria - RS.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">2. Orçamentos e Avaliação de Troca</h3>
              <p>
                As estimativas de valores geradas no simulador online têm caráter informativo preliminar. O valor final de reparo ou avaliação para Trade-In é confirmado após a inspeção presencial das condições físicas, eletrônicas e funcionais do aparelho em nosso laboratório técnico.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">3. Garantia Técnica</h3>
              <p>
                Todos os serviços executados e aparelhos comercializados contam com termo de garantia detalhado em nota/ordem de serviço, assegurando a cobertura contra defeitos de peças ou montagem.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 border-t border-slate-100 mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Entendido e fechar modal"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
