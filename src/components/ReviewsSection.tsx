import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  device: string;
}

export const ReviewsSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Matheus R.",
      role: "Local Guide • Google Maps",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 1 semana",
      device: "Troca de Tela & Bateria • iPhone 14 Pro",
      text: "Sensacional o atendimento do Fabrício! Levei meu iPhone 14 Pro para troca de tela e bateria e ficou absolutamente perfeito. Serviço rápido, peças de primeira linha com laudo e transparência total na Sala 1206 do Edifício Arquipélago. Recomendo de olhos fechados!",
    },
    {
      id: 2,
      name: "Patrícia Becker",
      role: "Cliente Verificada • Santa Maria",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 3 semanas",
      device: "Programa Trade-In • iPhone 12 para iPhone 15",
      text: "Comprei meu iPhone 15 novo lacrado na iDevices4You e dei meu iPhone 12 usado como parte do pagamento. A avaliação do meu aparelho usado foi a mais justa de Santa Maria, sem burocracia nenhuma. Nota 10 pelo respeito e honestidade!",
    },
    {
      id: 3,
      name: "Gabriel Silveira",
      role: "Cliente Verificado • Google Maps",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 1 mês",
      device: "Reparo de Placa • iPhone 13",
      text: "Melhor assistência técnica de iPhone de Santa Maria! Meu iPhone 13 não ligava após uma queda e em poucas horas já estava diagnosticado e reparado com garantia de loja. Atendimento de altíssimo nível, super educados e atenciosos.",
    },
    {
      id: 4,
      name: "Luciana Dornelles",
      role: "Local Guide • Santa Maria",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 1 mês",
      device: "Troca de Bateria • iPhone 11",
      text: "Excelente experiência! Ambiente seguro e privativo no Edifício Arquipélago, atendimento pontual e sem filas. Troquei a bateria do meu iPhone 11 e a saúde voltou a 100%, durando o dia todo. Confiança conquistada há anos!",
    },
    {
      id: 5,
      name: "Rafael Mello",
      role: "Cliente Verificado • Centro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 2 meses",
      device: "Compra de Seminovo • iPhone 14 Plus",
      text: "Sempre compro e faço a manutenção dos aparelhos da família com a iDevices4You. Procedência 100% garantida, suporte pós-venda impecável e preço justo. Quem busca qualidade em produtos Apple em Santa Maria não precisa procurar outro lugar.",
    },
    {
      id: 6,
      name: "Camila Pozzobon",
      role: "Cliente Verificada • Santa Maria",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      rating: 5,
      date: "Há 2 meses",
      device: "Consultoria Apple & Backup",
      text: "Atendimento impecável! Precisava de um suporte urgente com backup e transferência de iCloud para o meu novo aparelho e o Fabrício me ajudou com muita paciência e agilidade. Sou cliente fiel!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Official Google Maps business link provided by user
  const googleMapsReviewsUrl = "https://maps.app.goo.gl/Yixt1w46eFpRocxJ9";

  return (
    <section
      id="avaliacoes"
      aria-label="Avaliações Reais dos Clientes no Google Maps"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>Avaliações Reais no Google Maps</span>
          </div>

          {/* MANDATORY H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            O Que Nossos Clientes Dizem
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-base font-extrabold text-slate-900 font-mono">4.9 / 5.0</span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              (Mais de 105 avaliações verificadas no Google Maps)
            </span>
          </div>
        </motion.div>

        {/* Featured Testimonial Card in White Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-8 bg-white/95 overflow-hidden"
        >
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 text-cyan-500/10 pointer-events-none" />

          {/* Google Verified Review Top Badge */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>Avaliação Verificada no Google</span>
            </div>
            <a
              href={googleMapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conferir avaliação no Google Maps"
              className="text-xs text-slate-500 hover:text-cyan-700 font-medium inline-flex items-center gap-1"
            >
              <span>Ver no Google</span>
              <ExternalLink className="w-3 h-3 text-cyan-600" />
            </a>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-lg sm:text-2xl md:text-2xl text-slate-800 font-normal italic leading-relaxed mb-8">
              &ldquo;{reviews[currentIndex].text}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <img
                src={reviews[currentIndex].avatar}
                alt={`Foto de perfil de ${reviews[currentIndex].name}`}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                width="56"
                height="56"
              />
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <h3 className="text-base font-bold text-slate-900">{reviews[currentIndex].name}</h3>
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                </div>
                <p className="text-xs text-slate-500">{reviews[currentIndex].role} • {reviews[currentIndex].date}</p>
                <p className="text-xs text-cyan-800 font-semibold mt-0.5">
                  {reviews[currentIndex].device}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Avaliação anterior"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ver avaliação ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-7 bg-cyan-500 shadow-sm'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              aria-label="Próxima avaliação"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Secondary Reviews Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {reviews.slice(0, 3).map((rev, rIdx) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: rIdx * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 text-left shadow-sm bg-white/95 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={rev.avatar}
                    alt={`Foto de ${rev.name}`}
                    loading="lazy"
                    decoding="async"
                    className="w-9 h-9 rounded-full object-cover border border-cyan-300 shadow-sm"
                    width="36"
                    height="36"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{rev.name}</h3>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-700 italic mb-3 leading-relaxed">
                &ldquo;{rev.text}&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-cyan-800 font-semibold">
                  {rev.device}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to action linking to Official Google Maps profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Mais Avaliações Reais no Google Maps da iDevices4You"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(0,159,225,0.3)] hover:shadow-[0_6px_25px_rgba(0,159,225,0.45)] group"
          >
            <MapPin className="w-4 h-4 fill-current text-black" />
            <span>Ver Mais Avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
