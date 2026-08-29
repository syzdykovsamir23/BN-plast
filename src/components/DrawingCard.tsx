import { FileImage, ZoomIn } from "lucide-react";

type Props = {
  name: string;
  src?: string;
  onOpen?: () => void;
};

export default function DrawingCard({ name, src, onOpen }: Props) {
  const hasSrc = !!src;
  return (
    <button
      type="button"
      onClick={hasSrc ? onOpen : undefined}
      className={`group relative flex flex-col overflow-hidden border border-[color:var(--color-bn-line)] bg-white text-left transition ${
        hasSrc ? "cursor-zoom-in hover:border-[color:var(--color-bn-blue)] hover:shadow-lg hover:-translate-y-0.5" : "cursor-default"
      }`}
    >
      <div className="relative aspect-square bg-white border-b border-[color:var(--color-bn-line)] flex items-center justify-center p-3 overflow-hidden">
        {hasSrc ? (
          <>
            <img
              src={src}
              alt={name}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[color:var(--color-bn-blue)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ZoomIn className="w-4 h-4" strokeWidth={2.4} />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center gap-2 text-[color:var(--color-bn-mute)] p-4">
            <div className="w-14 h-14 rounded-full bg-[color:var(--color-bn-bg)] flex items-center justify-center">
              <FileImage className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold">
              Чертёж уточняется
            </div>
          </div>
        )}
      </div>
      <div className="px-3 py-3 bg-[color:var(--color-bn-bg)]">
        <div className="font-[family-name:var(--font-display)] font-bold text-sm md:text-base text-[color:var(--color-bn-ink)] leading-tight">
          {name}
        </div>
      </div>
    </button>
  );
}
