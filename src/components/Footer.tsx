import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer
      aria-label="Rodapé Institucional"
      className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/tJrfz8Yj/8cdd6855-725c-4f1b-ac24-148146953fca-removebg-preview.png"
                alt="Logo Oficial iDevices4You no rodapé"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,159,225,0.3)]"
                width="160"
                height="48"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Referência em tecnologia Apple, assistência técnica especializada, aparelhos novos e seminovos com garantia e procedência no coração de Santa Maria - RS.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/555533171138"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp da iDevices4You"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/idevices4you/?hl=pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir no Instagram iDevices4You"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+555533171138"
                aria-label="Ligar para a loja iDevices4You"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-700 flex items-center justify-center transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-cyan-800 transition-colors inline-block"
                    aria-label={`Ir para a seção ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Serviços Apple
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a href="#servicos" className="hover:text-cyan-800 transition-colors">
                  iPhones Novos &amp; Seminovos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-800 transition-colors">
                  Troca de Tela &amp; Bateria Original
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-800 transition-colors">
                  Programa Trade-In (Aceitamos Usado)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-800 transition-colors">
                  Reparo Avançado em Placa Lógica
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-800 transition-colors">
                  Consultoria &amp; Suporte iCloud
                </a>
              </li>
            </ul>
          </div>

          {/* Local and button back to top */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Santa Maria - RS
            </h3>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>Ed. Arquipélago, Sala 1206 / 12º Andar</span>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar para o topo da página"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 hover:border-cyan-400 transition-colors shadow-sm"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-600" />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </motion.div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* MANDATORY COPYRIGHT NOTICE */}
          <p>© 2026 iDevices4You. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={onOpenPrivacy}
              aria-label="Ver Política de Privacidade"
              className="hover:text-cyan-800 transition-colors focus:outline-none"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              aria-label="Ver Termos de Uso"
              className="hover:text-cyan-800 transition-colors focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-6 max-w-2xl mx-auto">
          iDevices4You é uma empresa independente especializada em suporte, reparo e comercialização de equipamentos Apple em Santa Maria - RS. Apple e iPhone são marcas registradas da Apple Inc.
        </p>
      </div>
    </footer>
  );
};
