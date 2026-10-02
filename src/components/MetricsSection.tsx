import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Users, Wrench } from 'lucide-react';

interface MetricItem {
  id: string;
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}

export const MetricsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const metrics: MetricItem[] = [
    {
      id: 'anos',
      icon: Calendar,
      value: 10,
      suffix: '+',
      label: '10+ Anos de Experiência',
      sublabel: 'Consolidação e liderança em Santa Maria',
    },
    {
      id: 'avaliacoes',
      icon: Star,
      value: 130,
      suffix: '+',
      label: '130+ Avaliações Positivas',
      sublabel: 'Com nota máxima no Google Maps',
    },
    {
      id: 'clientes',
      icon: Users,
      value: 15000,
      prefix: '',
      suffix: '+',
      label: 'Milhares de Clientes Satisfeitos',
      sublabel: 'Usuários Apple fidelizados e atendidos',
    },
    {
      id: 'dispositivos',
      icon: Wrench,
      value: 8500,
      prefix: '',
      suffix: '+',
      label: 'Centenas de Dispositivos Reparados',
      sublabel: 'Equipamentos restaurados com peças homologadas',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metricas"
      aria-label="Métricas de Sucesso da iDevices4You"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>Resultados Comprovados</span>
          </div>
          {/* MANDATORY H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
            Nossa Trajetória de Sucesso
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Números que refletem a dedicação técnica, confiabilidade e satisfação contínua de nossos clientes.
          </p>
        </motion.div>

        {/* Counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <CounterCard
              key={metric.id}
              metric={metric}
              startCounting={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterCardProps {
  metric: MetricItem;
  startCounting: boolean;
  index: number;
}

const CounterCard: React.FC<CounterCardProps> = ({ metric, startCounting, index }) => {
  const [count, setCount] = useState(0);
  const Icon = metric.icon;

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * metric.value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(metric.value);
      }
    };

    const animId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animId);
  }, [startCounting, metric.value]);

  const formattedDisplay = () => {
    if (metric.value >= 1000) {
      return count.toLocaleString('pt-BR');
    }
    return count.toString();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,159,225,0.18)] flex flex-col justify-between group shadow-sm bg-white/95"
    >
      <div>
        <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all shadow-sm">
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex items-baseline gap-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-2 font-mono tracking-tight group-hover:text-cyan-800 transition-colors">
          <span>{metric.prefix}</span>
          <span>{formattedDisplay()}</span>
          <span className="text-cyan-600">{metric.suffix}</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
          {metric.label}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
          {metric.sublabel}
        </p>
      </div>

      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-1000"
          style={{ width: startCounting ? '100%' : '0%' }}
        />
      </div>
    </motion.article>
  );
};

