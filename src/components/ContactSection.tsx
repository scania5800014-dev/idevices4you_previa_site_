import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  Compass,
  CheckCircle,
  Navigation,
  Share2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    modelo: 'iPhone 15 Pro',
    servico: 'Assistência Técnica (Troca de Tela/Bateria)',
    mensagem: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const phoneRaw = "+555533171138";
  const phoneDisplay = "+55 55 3317-1138";
  const instagramUrl = "https://www.instagram.com/idevices4you/?hl=pt";
  const addressText = "Edifício Arquipélago - R. Dr. Alberto Pasqualini, 111 - Sala 1206 / 12º Andar - Centro, Santa Maria - RS, 97015-010";
  const hoursText = "Segunda a Sexta: 9h às 19h | Sábado: 9h às 16h (Sem fechar ao meio-dia)";
  const googleMapsUrl = "https://maps.app.goo.gl/Yixt1w46eFpRocxJ9";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=-29.6874181,-53.8079238";
  const mapsEmbedUrl = "https://maps.google.com/maps?q=iDevices4You%2C%20R.%20Dr.%20Alberto%20Pasqualini%2C%20111%20-%20Centro%2C%20Santa%20Maria%20-%20RS%2C%2097015-010&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Contato via Landing Page iDevices4You*\n\n*Nome:* ${formData.nome || 'Cliente'}\n*Telefone:* ${formData.telefone || 'Não informado'}\n*Modelo do iPhone:* ${formData.modelo}\n*Serviço de Interesse:* ${formData.servico}\n*Mensagem:* ${formData.mensagem || 'Gostaria de atendimento e orçamento.'}`;
    const url = `https://wa.me/555533171138?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const handleShareLocation = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${addressText} - ${googleMapsUrl}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section
      id="contato"
      aria-label="Contato e Localização da iDevices4You"
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
            <span>Atendimento Personalizado</span>
          </div>

          {/* MANDATORY H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Fale Conosco
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Estamos prontos para atender você com exclusividade em Santa Maria. Tire suas dúvidas, solicite um orçamento ou agende uma visita ao nosso laboratório técnico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 shadow-sm bg-white/95"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700 shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-current text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp &amp; Telefone</h3>
                  <p className="text-xs text-slate-500 mb-3">Atendimento ágil com consultores especializados</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`https://wa.me/555533171138?text=${encodeURIComponent("Olá! Gostaria de um atendimento para meu iPhone na iDevices4You.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Conversar pelo WhatsApp no número +55 55 3317-1138"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>{phoneDisplay}</span>
                    </a>
                    <a
                      href={`tel:${phoneRaw}`}
                      aria-label="Ligar para o telefone +55 55 3317-1138"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan-700" />
                      <span>Ligar</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 shadow-sm bg-white/95"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Instagram Oficial</h3>
                  <p className="text-xs text-slate-500 mb-3">Acompanhe novidades, estoques diários e dicas Apple</p>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Acessar o perfil da iDevices4You no Instagram"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-900 transition-colors"
                  >
                    <span>@idevices4you</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 shadow-sm bg-white/95"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700 shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Endereço</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {addressText}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Como chegar na iDevices4You pelo Google Maps"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-950 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Ver no Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Horários Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/90 hover:border-cyan-400 transition-all duration-300 shadow-sm bg-white/95"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700 shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">Horário de Funcionamento</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {hoursText}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono text-cyan-900 font-bold bg-cyan-50 border border-cyan-300 px-3 py-0.5 rounded-full">
                    Atendimento contínuo sem fechar ao meio-dia
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-md h-full flex flex-col justify-between bg-white/95"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Mensagem Rápida para o Laboratório
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Preencha os dados abaixo para receber uma estimativa personalizada direto no seu WhatsApp.
                </p>

                <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Seu Nome Completo
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Gabriel Silva"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Seu WhatsApp / Telefone
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(55) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modelo" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Modelo do seu iPhone
                      </label>
                      <select
                        id="modelo"
                        value={formData.modelo}
                        onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="iPhone 16 Pro Max">iPhone 16 Pro Max</option>
                        <option value="iPhone 16 Pro">iPhone 16 Pro</option>
                        <option value="iPhone 16 / 16 Plus">iPhone 16 / 16 Plus</option>
                        <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                        <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                        <option value="iPhone 15 / 15 Plus">iPhone 15 / 15 Plus</option>
                        <option value="iPhone 14 Pro / Pro Max">iPhone 14 Pro / Pro Max</option>
                        <option value="iPhone 14 / 14 Plus">iPhone 14 / 14 Plus</option>
                        <option value="iPhone 13 Pro / Pro Max">iPhone 13 Pro / Pro Max</option>
                        <option value="iPhone 13 / 13 mini">iPhone 13 / 13 mini</option>
                        <option value="iPhone 12 / 12 Pro">iPhone 12 / 12 Pro</option>
                        <option value="iPhone 11 / 11 Pro">iPhone 11 / 11 Pro</option>
                        <option value="Outro Modelo Apple">Outro Modelo Apple</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="servico" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Serviço Desejado
                      </label>
                      <select
                        id="servico"
                        value={formData.servico}
                        onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="Assistência Técnica (Troca de Tela/Bateria)">
                          Assistência Técnica (Troca de Tela / Bateria)
                        </option>
                        <option value="Reparo Avançado de Placa Lógica">
                          Reparo Avançado de Placa Lógica
                        </option>
                        <option value="Compra de iPhone Novo ou Seminovo">
                          Compra de iPhone Novo ou Seminovo
                        </option>
                        <option value="Avaliação para Troca / Trade-In">
                          Avaliação para Troca / Trade-In
                        </option>
                        <option value="Consultoria Apple & Backup">
                          Consultoria Apple &amp; Backup
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Detalhes do Problema ou Dúvida (Opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva se o aparelho quebrou a tela, descarrega rápido, caiu na água ou qual modelo procura..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    aria-label="Enviar mensagem de contato para o WhatsApp"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_4px_20px_rgba(0,159,225,0.3)] hover:shadow-[0_6px_25px_rgba(0,159,225,0.45)] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Iniciar Atendimento no WhatsApp</span>
                  </button>

                  {formSubmitted && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs">
                      <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>Mensagem gerada com sucesso! Você será redirecionado para o WhatsApp da equipe.</span>
                    </div>
                  )}
                </form>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>Atendimento confidencial e seguro</span>
                <span className="text-cyan-800 font-mono font-bold">Resposta em poucos minutos</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* INTERACTIVE GOOGLE MAPS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-md relative overflow-hidden bg-white/95"
        >
          <div className="text-center sm:text-left mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                <MapPin className="w-4 h-4 text-cyan-600" />
                <span>Google Maps Interativo</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-950 tracking-tight">
                Nossa Localização em Santa Maria
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Edifício Arquipélago • R. Dr. Alberto Pasqualini, 111 - Sala 1206 / 12º Andar - Centro, Santa Maria - RS.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleShareLocation}
                aria-label="Copiar e compartilhar endereço da iDevices4You"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-cyan-700" />
                <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
              </button>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Traçar rota no GPS para iDevices4You"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Traçar Rota no GPS</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no aplicativo Google Maps"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 transition-all shadow-sm"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-700" />
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Iframe */}
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
            <iframe
              title="Mapa de Localização iDevices4You Santa Maria"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>Ponto de referência: Próximo à praça central, no coração comercial de Santa Maria.</span>
            <span className="text-cyan-900 font-mono font-bold text-[11px]">Estacionamentos conveniados e facilidade de acesso</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
