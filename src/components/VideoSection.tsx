import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, CheckCircle2 } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="presentacion" className="py-20 bg-[#0E0E12] border-t border-[#201F25]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            Presentación Oficial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F4ED]">
            Conoce el curso en menos de un minuto
          </h2>
          <p className="text-base text-[#ABA69B]">
            Descubre de primera mano qué aprenderás, cómo está estructurada la plataforma y por qué este método te ahorra meses de dar palos de ciego.
          </p>
        </div>

        {/* Video Card Container */}
        <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden bg-black border border-[#332F27] shadow-2xl">
          
          <div className="relative aspect-video group">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster="/poster-video.jpg"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/Metodo_MID_corregido.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>

            {/* Custom Play Button Overlay when paused */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#D4AF63]/90 hover:bg-[#E8CD91] text-[#14110B] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#D4AF63]/40"
                aria-label="Reproducir video de presentación"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            )}
          </div>

          {/* Quick takeaway summary strip under the video */}
          <div className="p-6 bg-[#16151A] border-t border-[#2A2722] grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF63] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#F7F4ED]">Ruta guiada de 8 módulos</p>
                <p className="text-xs text-[#9E9B93]">Desde cero hasta tus primeras ventas reales</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF63] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#F7F4ED]">Campañas reales en vivo</p>
                <p className="text-xs text-[#9E9B93]">Meta Ads y contenido orgánico en TikTok</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF63] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#F7F4ED]">Garantía 7 días Hotmart</p>
                <p className="text-xs text-[#9E9B93]">Prueba el curso sin ningún compromiso</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
