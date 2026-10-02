import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Wrench, RefreshCw, MessageSquare, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: "novos-seminovos",
      title: "iPhones Novos & Seminovos",
      description:
        "Descubra a linha completa de iPhones, com garantia e procedência. Modelos novos e seminovos cuidadosamente selecionados.",
      icon: Smartphone,
      badge: "Garantia Total",
      features: [
        "Aparelhos 100% originais com laudo",
        "Saúde de bateria selecionada",
        "Acessórios homologados inclusos",
        "Pronta entrega em Santa Maria",
      ],
      whatsappMsg: "Olá! Gostaria de consultar o estoque e valores de iPhones Novos e Seminovos na iDevices4You.",
    },
    {
      id: "assistencia-tecnica",
      title: "Assistência Técnica Especializada",
      description:
        "Diagnóstico preciso e reparos de alta qualidade para seu iPhone. Técnicos certificados e peças originais.",
      icon: Wrench,
      badge: "Reparo Express",
      features: [
        "Troca de tela e bateria premium",
        "Reparo avançado em placa lógica",
        "Câmeras, conectores e áudio",
        "Garantia estendida no serviço",
      ],
      whatsappMsg: "Olá! Preciso de um diagnóstico ou reparo para meu iPhone na iDevices4You.",
    },
    {
      id: "troca-upgrade",
      title: "Aceitamos seu iPhone na Troca",
      description:
        "Upgrade facilitado! Avaliamos seu iPhone usado e oferecemos as melhores condições para você ter o modelo dos seus sonhos.",
      icon: RefreshCw,
      badge: "Upgrade Fácil",
      features: [
        "Avaliação justa e transparente",
        "Transição de dados segura",
        "Diferença parcelada no cartão",
        "Receba seu novo aparelho na hora",
      ],
      whatsappMsg: "Olá! Gostaria de avaliar meu iPhone usado para troca e upgrade na iDevices4You.",
    },
    {
      id: "consultoria-personalizada",
      title: "Consultoria Personalizada",
      description:
        "Atendimento exclusivo para entender suas necessidades e recomendar as melhores soluções Apple para você.",
      icon: MessageSquare,
      badge: "VIP Apple Care",
      features: [
        "Configuração de ecossistema Apple",
        "Recuperação de ID Apple e iCloud",
        "Otimização para trabalho e criatividade",
        "Suporte técnico pós-venda dedicado",
      ],
      whatsappMsg: "Olá! Gostaria de uma consultoria personalizada Apple com a equipe da iDevices4You.",
    },
  ];

  return (
    <section
      id="servicos"
      aria-label="Nossos Serviços Apple Exclusivos"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Soluções Completas</span>
          </div>
          {/* MANDATORY H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Nossos Serviços Apple Exclusivos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Qualidade, rigor técnico e procedência em cada atendimento em Santa Maria.
          </p>
        </motion.div>

        {/* 4 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/555533171138?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,159,225,0.18)] flex flex-col justify-between group shadow-sm bg-white/95"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700 group-hover:scale-110 group-hover:bg-cyan-100 group-hover:text-cyan-800 transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar atendimento para ${service.title} no WhatsApp`}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm group-hover:shadow-[0_4px_15px_rgba(0,159,225,0.35)]"
                  >
                    <span>Solicitar no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      aria-label={`Ver detalhes e simulação de ${service.title}`}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold text-slate-800 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                    >
                      Simular Orçamento
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

