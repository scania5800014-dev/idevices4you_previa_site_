import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, HeartHandshake, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "Mais de uma Década",
      desc: "Tradição e excelência técnica consolidada no coração de Santa Maria desde 2012.",
    },
    {
      icon: ShieldCheck,
      title: "Procedência Garantida",
      desc: "Rigoroso controle de qualidade, peças de primeira linha e garantia transparente.",
    },
    {
      icon: Compass,
      title: "Consultoria Consultiva",
      desc: "Orientação sob medida para que você invista no equipamento ideal para sua rotina.",
    },
    {
      icon: HeartHandshake,
      title: "Confiança Incomparável",
      desc: "Relações duradouras construídas com integridade técnica e foco no cliente.",
    },
  ];

  return (
    <section
      id="sobre"
      aria-label="Sobre Nós e Manifesto da Marca"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>Manifesto da Marca</span>
          </div>
          {/* MANDATORY H2 */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight max-w-3xl mx-auto">
            Conectando Você ao Melhor da Tecnologia Apple
          </h2>
        </motion.div>

        {/* Central Manifesto Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-12 overflow-hidden bg-white/90"
        >
          {/* Ambient cyan glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-cyan-700 mb-6">
              <Cpu className="w-6 h-6 text-cyan-600" />
              <span className="text-sm font-bold tracking-wide uppercase">
                Propósito &amp; Excelência iDevices4You
              </span>
            </div>

            {/* MANDATORY EXACT MANIFESTO TEXT */}
            <blockquote className="text-base sm:text-xl md:text-2xl text-slate-800 font-normal leading-relaxed tracking-normal mb-8 border-l-3 border-cyan-500 pl-4 sm:pl-6">
              &ldquo;Na iDevices4you, conectamos você ao que existe de mais avançado no universo Apple. Com uma trajetória consolidada de mais de uma década em Santa Maria e região, somos referência em tecnologia de procedência garantida. Nosso compromisso vai além do produto: entregamos uma consultoria personalizada, pensada para elevar a sua experiência digital. Mais do que dispositivos, construímos relações baseadas na confiança e na qualidade incomparável de cada entrega.&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-900 font-bold text-base shadow-sm">
                  i
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">iDevices4You Santa Maria</h3>
                  <p className="text-xs text-slate-500">Ed. Arquipélago • Sala 1206 / 12º Andar</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-cyan-800 font-semibold bg-cyan-50 px-3 py-1.5 rounded-full border border-cyan-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Atendimento humanizado e especializado</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 rounded-2xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 group shadow-sm bg-white/95"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 group-hover:scale-110 group-hover:bg-cyan-100 transition-all shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

