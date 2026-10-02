/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { BackgroundVideo } from './components/BackgroundVideo.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { CatalogSection } from './components/CatalogSection.tsx';
import { MetricsSection } from './components/MetricsSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Assistência Técnica Especializada");
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuoteService(serviceName);
    }
    setIsQuoteOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-200 selection:text-black">
      {/* Skip to Main Content Link for Screen Readers (a11y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-black focus:font-bold focus:rounded-lg focus:shadow-xl"
      >
        Pular para o conteúdo principal
      </a>

      {/* Global Background Video with Ambient Layer */}
      <BackgroundVideo />

      {/* Sticky Glassmorphism Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1 w-full focus:outline-none">
        {/* 1. Hero Section (Home) - Contains the ONLY <h1> */}
        <HeroSection onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Sobre Nós / Manifesto da Marca */}
        <AboutSection />

        {/* 3. Nossos Serviços Exclusivos */}
        <ServicesSection onSelectService={(service) => handleOpenQuote(service)} />

        {/* Catálogo em Estoque (Destaques Oficiais do Instagram) - Diretamente em cima de "Resultados Comprovados" */}
        <CatalogSection onSelectProduct={(product) => handleOpenQuote(product)} />

        {/* 4. Métricas de Sucesso Animadas (Resultados Comprovados) */}
        <MetricsSection />

        {/* 5. Avaliações dos Clientes */}
        <ReviewsSection />

        {/* 6. Contato e Localização com Google Maps Interativo */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating WhatsApp Quick Action Button for Mobile & Desktop */}
      <aside aria-label="Ações Rápidas Flutuantes">
        <a
          href="https://wa.me/555533171138?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20para%20meu%20iPhone%20na%20iDevices4You."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar diretamente no WhatsApp com a equipe da iDevices4You"
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-current text-black" />
          <span className="hidden sm:inline">WhatsApp Online</span>
        </a>
      </aside>

      {/* Interactive Quotation & Trade-In Simulator Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={quoteService}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

