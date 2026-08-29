import { useState } from "react";
import Modal from "../Modal";
import OrderInfo from "../OrderInfo";
import DrawingCard from "../DrawingCard";
import Lightbox from "../Lightbox";
import { POLYAMIDE, GASKET_SIZES, THERMOBREAK_SIZES } from "../../data/products";
import { Clock } from "lucide-react";

function SizeTable({
  title,
  rows,
  unit,
}: {
  title: string;
  rows: string[];
  unit: string;
}) {
  return (
    <div>
      <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
        <table className="w-full min-w-[420px] border-collapse">
          <thead>
            <tr className="bg-[color:var(--color-bn-blue)] text-white">
              <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold">
                {title}
              </th>
              <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-40">
                Размер
              </th>
              <th className="text-left px-4 py-3 text-xs md:text-sm uppercase tracking-widest font-semibold w-32">
                Ед. изм.
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r}
                className={`border-b border-[color:var(--color-bn-line)] ${
                  i % 2 === 0 ? "bg-white" : "bg-[color:var(--color-bn-bg)]"
                }`}
              >
                <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-medium">
                  {title}
                </td>
                <td className="px-4 py-3 text-[color:var(--color-bn-ink)] font-mono">{r}</td>
                <td className="px-4 py-3 text-[color:var(--color-bn-steel)]">{unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BlockHeader({ n, title, subtitle }: { n: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[color:var(--color-bn-blue)] text-white font-[family-name:var(--font-cond)] font-bold text-sm">
          {n}
        </span>
        <h4 className="font-[family-name:var(--font-display)] font-black text-xl md:text-2xl text-[color:var(--color-bn-ink)]">
          {title}
        </h4>
      </div>
      {subtitle && <p className="text-sm text-[color:var(--color-bn-steel)] ml-11">{subtitle}</p>}
    </div>
  );
}

export default function PVCProductsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const withImages = POLYAMIDE.filter((d) => d.src);
  const images = withImages.map((d) => ({ src: d.src!, caption: d.name }));

  return (
    <Modal open={open} onClose={onClose} title="ПВХ изделия">
      <OrderInfo />

      {/* Block 1 */}
      <section className="mb-10">
        <BlockHeader n="01" title="ПВХ уплотнитель ригеля" />
        <SizeTable title="ПВХ уплотнитель ригеля" rows={GASKET_SIZES} unit="шт" />
      </section>

      {/* Block 2 */}
      <section className="mb-10">
        <BlockHeader n="02" title="Терморазрыв" />
        <SizeTable title="Терморазрыв" rows={THERMOBREAK_SIZES} unit="шт" />
      </section>

      {/* Block 3 */}
      <section className="mb-8">
        <BlockHeader n="03" title="Полиамидный профиль" subtitle="Вид профиля — полиамидный" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {POLYAMIDE.map((d) => {
            const imgIndex = withImages.findIndex((w) => w.name === d.name);
            return (
              <DrawingCard
                key={d.name}
                name={d.name}
                src={d.src}
                onOpen={() => imgIndex >= 0 && setLbIndex(imgIndex)}
              />
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-3 text-sm text-[color:var(--color-bn-steel)]">
          <Clock className="w-5 h-5 shrink-0 text-[color:var(--color-bn-blue)]" strokeWidth={2.2} />
          <p>
            Все изделия производятся от <b className="text-[color:var(--color-bn-ink)]">7 календарных дней</b>{" "}
            (в зависимости от объёма заказа).
          </p>
        </div>
      </section>

      {/* Footnote */}
      <div className="mt-8 pt-5 border-t border-[color:var(--color-bn-line)] text-xs md:text-sm text-[color:var(--color-bn-mute)] leading-relaxed">
        ПВХ торцевые заглушки представлены в разделе «ПВХ термомосты». ПВХ москитный шнур
        СТАНДАРТ — изготавливается под заказ, уточняйте наличие.
      </div>

      {lbIndex !== null && (
        <Lightbox
          images={images}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onIndex={setLbIndex}
        />
      )}
    </Modal>
  );
}
