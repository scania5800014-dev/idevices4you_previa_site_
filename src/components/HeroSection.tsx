import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const whatsappUrl = "https://wa.me/555533171138?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20iPhone%20na%20iDevices4You.";
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [needsUserGestureForSound, setNeedsUserGestureForSound] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.1;
    video.muted = false;

    // Attempt autoplay with sound
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setNeedsUserGestureForSound(false);
        })
        .catch(() => {
          // Autoplay with sound blocked by browser policy: play muted initially and ask user to unmute
          video.muted = true;
          setIsMuted(true);
          setNeedsUserGestureForSound(true);
          video.play().catch(() => {});
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      const targetVol = volume > 0 ? volume : 0.1;
      video.volume = targetVol;
      setVolume(targetVol);
      setIsMuted(false);
      setNeedsUserGestureForSound(false);
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const video = videoRef.current;
    if (video) {
      video.volume = newVol;
      if (newVol > 0 && isMuted) {
        video.muted = false;
        setIsMuted(false);
      } else if (newVol === 0) {
        video.muted = true;
        setIsMuted(true);
      }
    }
    setNeedsUserGestureForSound(false);
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleEnableSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 0.1;
      setVolume(0.1);
      setIsMuted(false);
      setNeedsUserGestureForSound(false);
      video.play().catch(() => {});
    }
  };

  return (
    <section
      id="home"
      aria-label="Início - iDevices4You Universo Apple"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, H1, Subtitle, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Transparent Brand Logo (Sem Fundo) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="relative group inline-block">
                <div className="absolute inset-0 bg-cyan-500/25 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                <img
                  src="https://i.postimg.cc/tJrfz8Yj/8cdd6855-725c-4f1b-ac24-148146953fca-removebg-preview.png"
                  alt="Logo Oficial iDevices4You"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain relative drop-shadow-[0_0_20px_rgba(0,159,225,0.6)]"
                  width="260"
                  height="90"
                />
              </div>
            </motion.div>

            {/* Subtle pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-semibold tracking-wide mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span>Santa Maria &amp; Região Central</span>
              <span className="text-black font-mono text-[10px] bg-cyan-300 px-2 py-0.5 rounded-full font-bold">10+ Anos</span>
            </motion.div>

            {/* MANDATORY SINGLE H1 FOR THE PAGE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 leading-[1.1]"
            >
              iDevices4You: <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-black via-slate-800 to-cyan-700 bg-clip-text text-transparent">
                Seu Universo Apple em Santa Maria.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 font-normal mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Assistência Técnica Especializada, iPhones Novos &amp; Seminovos e a Melhor Consultoria. Mais de uma década de confiança e qualidade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 max-w-md mx-auto lg:mx-0"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale Conosco no WhatsApp pelo número +55 55 3317-1138"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_4px_25px_rgba(0,159,225,0.35)] hover:shadow-[0_6px_30px_rgba(0,159,225,0.5)] hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 fill-current text-black group-hover:rotate-12 transition-transform" />
                <span>Fale Conosco no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                aria-label="Conheça Nossos Serviços de assistência técnica e venda"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-300 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 group shadow-sm"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Quick Trust Cards */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="glass-panel p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-slate-900">Procedência Garantida</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Aparelhos com laudo e garantia real em Santa Maria.
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-slate-900">Agilidade no Reparo</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Diagnóstico rápido e reparos express no mesmo dia.
                </p>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-700">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-slate-900">Troca &amp; Upgrade</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Avaliação justa do seu iPhone usado como pagamento.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Original Format Video Player with Sound, Pause, Volume & Loop */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[340px] sm:max-w-[360px]"
            >
              {/* Neon Glow backdrop behind original video container */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/40 via-blue-500/30 to-cyan-400/40 rounded-[36px] blur-2xl opacity-75" />

              {/* Video Device Shell with 9:16 Original Format */}
              <div className="relative rounded-[32px] overflow-hidden border-2 border-cyan-400/50 bg-black shadow-[0_0_50px_rgba(0,159,225,0.4)] aspect-[9/16] flex flex-col justify-between group">
                
                {/* Top status bar inside player */}
                <div className="relative z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-white font-mono text-[11px] font-bold tracking-wider">
                      iDevices4You • Ed. Arquipélago
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded-full border border-white/10 text-[10px] text-cyan-300 font-mono">
                    <RotateCcw className="w-3 h-3" />
                    <span>Loop Ativo</span>
                  </div>
                </div>

                {/* Video Tag */}
                <div className="absolute inset-0 z-10 cursor-pointer" onClick={togglePlay}>
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    onEnded={handleVideoEnded}
                    className="w-full h-full object-cover"
                  >
                    <source src="/store-background.mp4" type="video/mp4" />
                    <source src="https://drive.google.com/uc?export=download&id=1bLWrim7q1fCmxTaMPtzgjxBX5ElCla6F" type="video/mp4" />
                  </video>
                </div>

                {/* Big play button overlay when paused */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,159,225,0.8)] scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  </div>
                )}

                {/* Unmute notification banner if browser blocked audio initially */}
                {needsUserGestureForSound && (
                  <div
                    onClick={handleEnableSound}
                    className="absolute top-16 left-4 right-4 z-30 p-2.5 rounded-xl bg-cyan-500/90 text-black text-xs font-bold text-center cursor-pointer shadow-lg animate-bounce flex items-center justify-center gap-2"
                  >
                    <Volume2 className="w-4 h-4 fill-current" />
                    <span>Toque aqui para ouvir com som!</span>
                  </div>
                )}

                {/* Bottom Control Bar */}
                <div className="relative z-20 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8">
                  <div className="flex items-center justify-between gap-3 bg-black/70 backdrop-blur-md p-2.5 rounded-2xl border border-white/15">
                    {/* Play / Pause button */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                      className="w-9 h-9 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center transition-colors shadow-[0_0_12px_rgba(0,159,225,0.5)] shrink-0"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                    </button>

                    {/* Volume Mute Toggle */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Ativar som do vídeo" : "Silenciar áudio do vídeo"}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-cyan-300 transition-colors shrink-0"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                    </button>

                    {/* Volume slider */}
                    <div className="flex-1 flex items-center gap-1.5">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        aria-label="Ajustar volume do vídeo"
                        className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                      />
                      <span className="text-[10px] font-mono text-cyan-300 min-w-[28px] text-right">
                        {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


