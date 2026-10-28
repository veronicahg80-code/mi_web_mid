import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full rounded-2xl bg-[#141418] border border-[#3A3528] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 px-6 border-b border-[#25242D] flex items-center justify-between bg-[#18181D]">
          <h3 className="font-display font-bold text-sm sm:text-base text-[#F7F4ED]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E9B93] hover:text-white hover:bg-[#25242D] transition-colors"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content */}
        <div className="p-4 overflow-auto flex items-center justify-center bg-[#0B0B0C] min-h-[300px]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[75vh] w-auto object-contain rounded-lg"
          />
        </div>

        {/* Footer */}
        <div className="p-3 px-6 border-t border-[#25242D] bg-[#141418] flex items-center justify-between text-xs text-[#8A867E]">
          <span>Material oficial Método MID</span>
          <a 
            href={imageSrc} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#D4AF63] hover:underline flex items-center gap-1"
          >
            <span>Abrir imagen completa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
