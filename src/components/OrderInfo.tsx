import { Info, MessageCircle } from "lucide-react";
import { WA_LINK, WA_PHONE_DISPLAY } from "../data/products";

export default function OrderInfo() {
  return (
    <div className="mb-8 rounded-xl border border-[color:var(--color-bn-blue)]/20 bg-[color:var(--color-bn-blue-soft)] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
      <div className="flex items-start gap-3 flex-1">
        <div className="shrink-0 w-10 h-10 rounded-full bg-white text-[color:var(--color-bn-blue)] flex items-center justify-center">
          <Info className="w-5 h-5" strokeWidth={2.4} />
        </div>
        <p className="text-sm md:text-base leading-relaxed text-[color:var(--color-bn-ink)]">
          <b>Вся продукция изготавливается под заказ.</b> Стоимость рассчитывается
          индивидуально в зависимости от объёма — свяжитесь с нами для расчёта.
        </p>
      </div>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[color:var(--color-bn-blue)] text-white font-semibold hover:bg-[color:var(--color-bn-blue-2)] transition whitespace-nowrap"
        title={WA_PHONE_DISPLAY}
      >
        <MessageCircle className="w-4 h-4" strokeWidth={2.4} />
        Запросить расчёт
      </a>
    </div>
  );
}
