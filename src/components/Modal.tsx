import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, subtitle, children }: ModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // reset internal scroll
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-6 animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative w-full md:max-w-6xl bg-white md:rounded-2xl shadow-2xl flex flex-col h-full md:h-auto md:max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative shrink-0 bg-white border-b border-[color:var(--color-bn-line)] px-5 md:px-8 py-5 md:py-6">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[color:var(--color-bn-blue)]" />
          <div className="pr-12">
            <h3 className="font-[family-name:var(--font-display)] font-black text-2xl md:text-4xl leading-tight tracking-tight text-[color:var(--color-bn-ink)]">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1.5 text-sm md:text-base text-[color:var(--color-bn-steel)]">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute top-4 right-4 md:top-5 md:right-5 w-10 h-10 rounded-full bg-[color:var(--color-bn-bg)] hover:bg-[color:var(--color-bn-blue)] hover:text-white text-[color:var(--color-bn-ink)] flex items-center justify-center transition"
          >
            <X className="w-5 h-5" strokeWidth={2.4} />
          </button>
        </div>

        {/* Scrollable body */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 md:px-8 py-6 md:py-8"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
