import { useState } from "react";
import Modal from "../Modal";
import OrderInfo from "../OrderInfo";
import DrawingCard from "../DrawingCard";
import Lightbox from "../Lightbox";
import { THERMO_BRIDGES } from "../../data/products";
import { Clock } from "lucide-react";

export default function ThermoBridgeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const withImages = THERMO_BRIDGES.filter((d) => d.src);
  const images = withImages.map((d) => ({ src: d.src!, caption: d.name }));

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="ПВХ термомосты"
      subtitle="Вид профиля — термомост"
    >
      <OrderInfo />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {THERMO_BRIDGES.map((d) => {
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

      <div className="mt-8 pt-6 border-t border-dashed border-[color:var(--color-bn-line)] flex items-start gap-3 text-sm text-[color:var(--color-bn-steel)]">
        <Clock className="w-5 h-5 shrink-0 text-[color:var(--color-bn-blue)]" strokeWidth={2.2} />
        <p>
          Все изделия производятся от <b className="text-[color:var(--color-bn-ink)]">7 календарных дней</b>{" "}
          (в зависимости от объёма заказа).
        </p>
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
