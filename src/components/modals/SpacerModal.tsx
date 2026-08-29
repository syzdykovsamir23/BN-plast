import { useState } from "react";
import Modal from "../Modal";
import OrderInfo from "../OrderInfo";
import Lightbox from "../Lightbox";
import { SPACER_PHOTOS, SPACER_ROWS, SPACER_CORNERS } from "../../data/products";
import { ZoomIn } from "lucide-react";

function BlockHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[color:var(--color-bn-blue)] text-white font-[family-name:var(--font-cond)] font-bold text-sm">
        {n}
      </span>
      <h4 className="font-[family-name:var(--font-display)] font-black text-xl md:text-2xl text-[color:var(--color-bn-ink)]">
        {title}
      </h4>
    </div>
  );
}

export default function SpacerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const gallery = SPACER_PHOTOS.map((src, i) => ({
    src,
    caption: `Дистанционная рамка (спейсер) — фото ${i + 1}`,
  }));

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Алюминиевая дистанционная рамка (СПЕЙСЕР)"
    >
      <OrderInfo />

      {/* Gallery */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {SPACER_PHOTOS.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setLbIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden border border-[color:var(--color-bn-line)] bg-[color:var(--color-bn-bg)] cursor-zoom-in hover:border-[color:var(--color-bn-blue)] transition"
          >
            <img
              src={src}
              alt={`Спейсер — ракурс ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 text-[color:var(--color-bn-blue)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ZoomIn className="w-4 h-4" strokeWidth={2.4} />
            </div>
          </button>
        ))}
      </div>

      {/* Block 1 — Spacer with butyl */}
      <section className="mb-10">
        <BlockHeader n="01" title="Спейсер с бутилом" />

        <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="bg-[color:var(--color-bn-blue)] text-white">
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold">
                  Наименование
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-24">
                  Ед. изм.
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-32">
                  Размер
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-40">
                  Норма упаковки (п.м)
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-40">
                  Норма упаковки (шт)
                </th>
              </tr>
            </thead>
            <tbody>
              {SPACER_ROWS.map((row, i) => (
                <tr
                  key={row.name}
                  className={`border-b border-[color:var(--color-bn-line)] ${
                    i % 2 === 0 ? "bg-white" : "bg-[color:var(--color-bn-bg)]"
                  }`}
                >
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-medium">
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-steel)]">{row.unit}</td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-mono">{row.size}</td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-mono">{row.pm}</td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-mono">{row.pcs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-[color:var(--color-bn-steel)]">
          <b className="text-[color:var(--color-bn-ink)]">Все изделия производятся длиной 3 метра.</b>{" "}
          В скобках после размера — толщина металла в мм.
        </p>
      </section>

      {/* Block 2 — Corners */}
      <section className="mb-4">
        <BlockHeader n="02" title="Уголки для спейсера" />

        <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
          <table className="w-full min-w-[420px] border-collapse">
            <thead>
              <tr className="bg-[color:var(--color-bn-blue)] text-white">
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold">
                  Наименование
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-32">
                  Ед. изм.
                </th>
                <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-32">
                  Размер
                </th>
              </tr>
            </thead>
            <tbody>
              {SPACER_CORNERS.map((s, i) => (
                <tr
                  key={s}
                  className={`border-b border-[color:var(--color-bn-line)] ${
                    i % 2 === 0 ? "bg-white" : "bg-[color:var(--color-bn-bg)]"
                  }`}
                >
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-medium">
                    Уголки для спейсера
                  </td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-steel)]">мм</td>
                  <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-mono">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {lbIndex !== null && (
        <Lightbox
          images={gallery}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onIndex={setLbIndex}
        />
      )}
    </Modal>
  );
}
