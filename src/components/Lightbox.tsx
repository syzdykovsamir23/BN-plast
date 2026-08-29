import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: { src: string; caption?: string }[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onIndex }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndex]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Закрыть"
        className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <X className="w-6 h-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
            aria-label="Предыдущее"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % images.length);
            }}
            aria-label="Следующее"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div
        className="relative max-w-6xl max-h-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.caption || ""}
          className="max-w-full max-h-[80vh] object-contain bg-white rounded-lg"
        />
        {img.caption && (
          <div className="text-white/90 text-sm md:text-base font-medium tracking-wide">
            {img.caption}
            {images.length > 1 && (
              <span className="ml-3 text-white/50">
                {index + 1} / {images.length}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
