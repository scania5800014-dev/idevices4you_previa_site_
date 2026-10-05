import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Instagram,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Battery,
  Sparkles,
  ArrowUpRight,
  Info,
  X,
  Laptop,
  Smartphone
} from 'lucide-react';

export interface CatalogItem {
  id: string;
  name: string;
  category: 'iphone-pro' | 'iphone' | 'macbook';
  tag: string;
  badge: string;
  priceCash: string;
  installment: string;
  batteryHealth?: string;
  condition: string;
  warranty: string;
  image: string;
  instagramUrl: string;
  captionFull: string;
  highlights: string[];
}

interface CatalogSectionProps {
  onSelectProduct?: (productTitle: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'iphone-pro' | 'iphone' | 'macbook'>('all');
  const [activeModalItem, setActiveModalItem] = useState<CatalogItem | null>(null);

  const catalogItems: CatalogItem[] = [
    {
      id: "iphone-15-pro-max-azul",
      name: "iPhone 15 Pro Max 256GB Azul",
      category: "iphone-pro",
      tag: "Destaque da Semana",
      badge: "Bateria 100%",
      priceCash: "R$ 4.999,00",
      installment: "em até 18x no cartão",
      batteryHealth: "100%",
      condition: "Seminovo, em ótimo estado",
      warranty: "Garantia de 3 meses pela loja",
      image: "/catalog/iphone-15-pro-max-azul.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/Dc1Q4b_ROQk/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "Capacidade 256GB na cor Azul Titânio",
        "Saúde de bateria impecável em 100%",
        "Acompanha todos os acessórios de brinde",
        "Garantia de 3 meses com laudo técnico"
      ],
      captionFull: `👉 iPhone 15 Pro Max 256GB Azul\nAparelho seminovo, em ótimo estado\nSaúde de bateria em 100% 😍\nCom garantia de 3 meses pela loja\nAcompanha todos os acessórios de brinde\n👉 Apenas 4.999,00 à vista\nOu em até 18x no cartão (consulte condições).\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    },
    {
      id: "iphone-17-256gb",
      name: "iPhone 17 256GB",
      category: "iphone",
      tag: "Oportunidade Rara",
      badge: "20 Dias de Uso",
      priceCash: "R$ 5.499,00",
      installment: "em até 18x no cartão",
      batteryHealth: "100%",
      condition: "Estado de NOVO (20 dias de uso)",
      warranty: "Garantia Apple até Agosto/2027",
      image: "/catalog/iphone-17-256gb.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/DcwXuddu51f/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "256GB com apenas 20 dias de uso",
        "Garantia oficial Apple até Agosto/2027",
        "100% de saúde de bateria",
        "Completo na caixa original"
      ],
      captionFull: `💫 iPhone 17 256GB 💫\nGarantia Apple até Agosto/2027\nAparelho seminovo, em estado de NOVO\nCom apenas 20 dias de uso 🤩\nCom 100% de saúde de bateria 🔋\nCompleto na caixa ✔️\n👉 Apenas 5.499,00 à vista\nOu em até 18x no cartão (consulte condições).\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    },
    {
      id: "iphone-16-128gb-azul",
      name: "iPhone 16 128GB Azul 💙",
      category: "iphone",
      tag: "Seminovo Premium",
      badge: "Estado de Novo",
      priceCash: "R$ 4.599,00",
      installment: "em até 18x no cartão",
      batteryHealth: "88%",
      condition: "Seminovo, em estado de NOVO",
      warranty: "Garantia de 3 meses pela loja",
      image: "/catalog/iphone-16-128gb-azul.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/DcgTDhCxE4U/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "Cor Azul estilosa e acabamento impecável",
        "Bateria em 88% com excelente autonomia",
        "Garantia de 3 meses pela loja",
        "Completo com todos os acessórios"
      ],
      captionFull: `iPhone 16 128GB Azul 💙\nAparelho seminovo, em estado de NOVO\nGarantia de 3 meses pela loja\nCom 88% de saúde de bateria 🔋\nCompleto com todos os acessórios\n👉 Apenas 4.599,00 à vista\nOu em até 18x no cartão (consulte condições).\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    },
    {
      id: "macbook-pro-2019",
      name: "Apple MacBook Pro 13\" (2019) 💫",
      category: "macbook",
      tag: "Alta Performance",
      badge: "TouchBar & Touch ID",
      priceCash: "R$ 4.999,00",
      installment: "em até 18x no cartão",
      condition: "Excelente estado para edição e código",
      warranty: "Garantia técnica e procedência",
      image: "/catalog/macbook-pro-2019.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/Dcd0SUnxdDH/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "Processador Intel Core i5 2.4GHz • 8GB RAM",
        "Armazenamento de 256GB SSD ultrarrápido",
        "Tela Retina de altíssima definição com TouchBar",
        "Ideal para vídeo 4K/8K, programação e design"
      ],
      captionFull: `Apple MacBook Pro (2019) 💫\nProjetado para lidar com tarefas exigentes, como edição de vídeo em 4K/8K, programação avançada, design gráfico, produção musical e multitarefa pesada (sem engasgos). Tela retina de altíssima qualidade e com ecossistema apple integrado.\nCom TouchBar & Touch ID\nTela de 13 polegadas\nProcessador i5-2.4GHZ\nMemória de 8GB\nArmazenamento de 256SSD\n👉 Apenas 4.999,00 à vista\nParcelamos em até 18x no cartão (consulte condições)\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    },
    {
      id: "iphone-16-pro-max-natural",
      name: "iPhone 16 Pro Max 256GB Natural 🩶",
      category: "iphone-pro",
      tag: "Topo de Linha",
      badge: "Titânio Natural",
      priceCash: "R$ 6.999,00",
      installment: "em até 18x no cartão",
      batteryHealth: "92%",
      condition: "Seminovo, em excelente estado",
      warranty: "Garantia de 3 meses pela loja",
      image: "/catalog/iphone-16-pro-max-natural.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/DcbMs45xnhi/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "Titânio Natural com capacidade de 256GB",
        "Câmeras profissionais e chip de máxima potência",
        "Saúde de bateria em 92%",
        "Completo com todos os acessórios"
      ],
      captionFull: `iPhone 16 Pro Max 256GB Natural 🩶\nAo adquirir o iPhone 16 Pro Max, você tem acesso a tecnologia de ponta, câmeras profissionais e máximo desempenho por um preço muito mais competitivo do que o de fábrica.\nAparelho seminovo, em excelente estado\nGarantia de 3 meses pela loja\nCom 92% de saúde de bateria 🔋\nCompleto com todos os acessórios\n👉 Apenas 6.999,00 à vista\nOu em até 18x no cartão (consulte condições).\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    },
    {
      id: "iphone-12-pro-azul-pacifico",
      name: "iPhone 12 Pro 128GB Azul Pacífico 💙",
      category: "iphone-pro",
      tag: "Custo-Benefício Pro",
      badge: "Bateria 100%",
      priceCash: "R$ 2.299,00",
      installment: "em até 18x no cartão",
      batteryHealth: "100%",
      condition: "Usado, em ótimo estado",
      warranty: "Garantia de 3 meses pela loja",
      image: "/catalog/iphone-12-pro-azul-pacifico.jpg?v=3",
      instagramUrl: "https://www.instagram.com/p/DcTtzEHRBK8/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      highlights: [
        "Cor Azul Pacífico exclusiva e acabamento fosco",
        "100% de saúde de bateria impecável",
        "Garantia de 3 meses pela loja",
        "Completo com todos os acessórios"
      ],
      captionFull: `iPhone 12 Pro 128GB Azul Pacífico 💙\nAparelho usado, em ótimo estado\nGarantia de 3 meses pela loja\nCom 100% de saúde de bateria 🔋\nCompleto com todos os acessórios\n👉 Apenas 2.299,00 à vista\nOu em até 18x no cartão (consulte condições).\n☎️ Dúvidas estamos no WhatsApp: (55) 3317-1138\n📍 Estamos localizados na Rua Alberto Pasqualini, 111, Sala 1206, 12º Andar. Centro Comercial Arquipélago. Santa Maria/RS.`
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? catalogItems
    : catalogItems.filter(item => item.category === selectedCategory);

  const getWhatsAppMessageUrl = (item: CatalogItem) => {
    const text = `Olá! Vi o anúncio do *${item.name}* no catálogo do site por *${item.priceCash}* e gostaria de confirmar a disponibilidade e forma de pagamento na iDevices4You.`;
    return `https://wa.me/555533171138?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="catalogo"
      aria-label="Catálogo de Aparelhos em Estoque"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-cyan-600" />
            <span>Destaques Oficiais do Instagram</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Catálogo em Estoque
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Confira as últimas publicações da nossa vitrine em Santa Maria. Aparelhos selecionados, revisados, com laudo de procedência e garantia total.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-black shadow-[0_4px_15px_rgba(0,159,225,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Todos ({catalogItems.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('iphone-pro')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'iphone-pro'
                  ? 'bg-cyan-500 text-black shadow-[0_4px_15px_rgba(0,159,225,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Linha Pro &amp; Pro Max</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('iphone')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'iphone'
                  ? 'bg-cyan-500 text-black shadow-[0_4px_15px_rgba(0,159,225,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>iPhones</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('macbook')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'macbook'
                  ? 'bg-cyan-500 text-black shadow-[0_4px_15px_rgba(0,159,225,0.35)]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>MacBooks</span>
            </button>
          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {filteredItems.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,159,225,0.2)] flex flex-col justify-between overflow-hidden group bg-white/95"
            >
              <div>
                {/* Image Container: Original 1080x1350 (4:5) Format */}
                <div className="relative aspect-[1080/1350] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={`Foto de ${item.name} da iDevices4You`}
                    loading="lazy"
                    decoding="async"
                    onClick={() => setActiveModalItem(item)}
                    className="w-full h-full object-cover object-center cursor-pointer transition-opacity duration-300 hover:opacity-95"
                    width="1080"
                    height="1350"
                  />

                  {/* Soft top gradient only for badges readability without darkening the device */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-sm">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-400 text-black shadow-sm flex items-center gap-1 font-mono">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Instagram quick badge */}
                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver post de ${item.name} no Instagram`}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-black/75 hover:bg-black text-white hover:text-cyan-300 backdrop-blur-md border border-white/20 transition-all shadow-md group/ig"
                  >
                    <Instagram className="w-4 h-4 transition-transform" />
                  </a>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 text-left">
                  {/* Price & Installments Row */}
                  <div className="flex items-baseline justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Valor à vista
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-slate-950">
                        {item.priceCash}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium text-right">
                      {item.installment}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 leading-snug group-hover:text-cyan-800 transition-colors">
                    {item.name}
                  </h3>

                  {/* Condition & Battery row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{item.condition}</span>
                    </span>
                    {item.batteryHealth && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                        <Battery className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Saúde: {item.batteryHealth}</span>
                      </span>
                    )}
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                    {item.highlights.slice(0, 3).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 space-y-2.5">
                <a
                  href={getWhatsAppMessageUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Comprar ou consultar ${item.name} no WhatsApp`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-sm hover:shadow-[0_4px_15px_rgba(0,159,225,0.35)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Garantir no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    aria-label={`Ver legenda completa do Instagram para ${item.name}`}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Ver Legenda Oficial</span>
                  </button>

                  <a
                    href={item.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir post de ${item.name} no aplicativo Instagram`}
                    className="py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-pink-600 bg-slate-100 hover:bg-pink-50 border border-slate-200 transition-colors flex items-center justify-center gap-1"
                    title="Ver no Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Post</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner linking to full Instagram Profile */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Nosso estoque é atualizado diariamente no Instagram
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Siga @idevices4you para conferir novos aparelhos, stories em tempo real e promoções exclusivas.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/idevices4you/?hl=pt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir perfil da iDevices4You no Instagram"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 transition-all hover:scale-105 shadow-sm shrink-0"
          >
            <span>Acessar @idevices4you</span>
            <ExternalLink className="w-4 h-4 text-cyan-600" />
          </a>
        </motion.div>
      </div>

      {/* MODAL: Full Instagram Post Caption & Details */}
      <AnimatePresence>
        {activeModalItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="caption-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Fechar legenda"
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-800 font-bold uppercase tracking-wider block">
                    Publicação Oficial iDevices4You
                  </span>
                  <h3 id="caption-modal-title" className="text-lg font-bold text-slate-950">
                    {activeModalItem.name}
                  </h3>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.name}
                  className="w-16 h-20 aspect-[1080/1350] rounded-xl object-cover object-center border border-slate-200 shrink-0"
                  width="1080"
                  height="1350"
                />
                <div>
                  <div className="text-xl font-extrabold text-slate-950 font-mono">
                    {activeModalItem.priceCash}
                  </div>
                  <div className="text-xs text-slate-500">
                    {activeModalItem.installment} • {activeModalItem.condition}
                  </div>
                </div>
              </div>

              {/* Exact Instagram Caption */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Legenda Original do Post:
                </label>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-line max-h-60 overflow-y-auto">
                  {activeModalItem.captionFull}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-100">
                <a
                  href={getWhatsAppMessageUrl(activeModalItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp Sobre Este Modelo</span>
                </a>

                <a
                  href={activeModalItem.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Abrir no Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
