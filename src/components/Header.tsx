import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuote?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = "https://wa.me/555533171138?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20iDevices4You%20e%20gostaria%20de%20um%20atendimento%20para%20meu%20iPhone.";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2.5'
          : 'bg-white/70 backdrop-blur-md border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Transparent Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl p-1"
            aria-label="iDevices4You - Início"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://i.postimg.cc/tJrfz8Yj/8cdd6855-725c-4f1b-ac24-148146953fca-removebg-preview.png"
                alt="Logo iDevices4You"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,159,225,0.3)]"
                width="160"
                height="48"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs uppercase tracking-widest text-cyan-600 font-bold font-mono">
                Santa Maria • RS
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider">
                Assistência Especializada Apple
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-lg shadow-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-black hover:bg-white px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
                aria-label={`Ir para a seção ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenQuote && (
              <button
                type="button"
                onClick={onOpenQuote}
                aria-label="Abrir simulador de orçamento"
                className="text-xs font-semibold px-4 py-2 rounded-full border border-cyan-500/40 text-cyan-800 bg-cyan-50/70 hover:bg-cyan-100/70 hover:border-cyan-500 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Simular Orçamento</span>
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com a iDevices4You pelo número +55 55 3317-1138"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_4px_18px_rgba(0,159,225,0.35)] hover:shadow-[0_6px_25px_rgba(0,159,225,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current text-black" />
              <span>WhatsApp</span>
              <span className="hidden xl:inline text-[11px] font-mono opacity-80 border-l border-black/20 pl-2">
                (55) 3317-1138
              </span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da loja"
              className="p-2 rounded-full bg-cyan-400 text-black shadow-md hover:bg-cyan-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-4 pt-3 pb-6 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2 pt-2" aria-label="Menu móvel">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-cyan-600 px-4 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label={`Ir para a seção ${link.name}`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                {onOpenQuote && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuote();
                    }}
                    aria-label="Abrir simulador de orçamento no celular"
                    className="w-full text-sm font-semibold px-4 py-3 rounded-xl border border-cyan-400 text-cyan-900 bg-cyan-50 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-600" />
                    <span>Simular Orçamento / Troca</span>
                  </button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Falar no WhatsApp com a iDevices4You"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Falar no WhatsApp: (55) 3317-1138</span>
                </a>

                <a
                  href="tel:+555533171138"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200"
                  aria-label="Ligar para +55 55 3317-1138"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Ligar Diretamente</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

