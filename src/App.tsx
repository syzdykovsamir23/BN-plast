import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Truck,
  Factory,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Menu,
  X,
  Clock,
  Award,
  Info,
  Package,
} from "lucide-react";
import ThermoBridgeModal from "./components/modals/ThermoBridgeModal";
import PVCProductsModal from "./components/modals/PVCProductsModal";
import SpacerModal from "./components/modals/SpacerModal";

const LOGO_URL = "https://bn-plast-assets.vercel.app/logo-bn-plast.png";
const TRUCK_URL = "https://bn-plast-assets.vercel.app/delivery-truck-bn-plast.png";
const PHONE_DISPLAY = "+7 708 123 3489";
const PHONE_TEL = "+77081233489";
const WA_LINK = `https://wa.me/${PHONE_TEL.replace("+", "")}`;

const NAV = [
  { id: "home", label: "Главная" },
  { id: "production", label: "Производство" },
  { id: "partners", label: "Сотрудничество" },
  { id: "catalog", label: "Каталог" },
  { id: "contacts", label: "Контакты" },
];

type ProductionKey = "thermo" | "pvc" | "spacer";

const PRODUCTION_ITEMS: {
  key: ProductionKey;
  icon: typeof Layers;
  title: string;
  desc: string;
  wide?: boolean;
}[] = [
  {
    key: "thermo",
    icon: Layers,
    title: "ПВХ термомосты",
    desc: "под любые стеклопакеты",
  },
  {
    key: "pvc",
    icon: Package,
    title: "ПВХ изделия",
    desc: "уплотнитель ригеля, терморазрыв, полиамидный профиль",
    wide: true,
  },
  {
    key: "spacer",
    icon: Factory,
    title: "Алюминиевая дистанционная рамка",
    desc: "СПЕЙСЕР, под любые стеклопакеты",
  },
];

const PARTNERS = [
  "BENKAM",
  "GOLD ALUMINIUM",
  "RUIT ALUGAL",
  "HOFFMAN",
  "SARAY",
  "SAPA",
  "CENTRAL ASIA",
  "ALUSTAR",
  "ALUSISTEM",
  "ALUFORM",
  "DORO",
];

type CatalogItem = {
  title: string;
  category: string;
  img?: string;
  placeholder?: "endcap" | "cord" | "gasket";
};

const CATALOG: CatalogItem[] = [
  {
    title: "Дистанционная рамка (спейсер)",
    category: "Алюминий · ракурс 1",
    img: "https://bn-plast-assets.vercel.app/product-spacer-aluminum-light-bg.jpg",
  },
  {
    title: "Дистанционная рамка (спейсер)",
    category: "Алюминий · ракурс 2",
    img: "https://bn-plast-assets.vercel.app/product-spacer-aluminum-dark-bg.jpg",
  },
  {
    title: "Рамка в разрезе стеклопакета",
    category: "Разрез · с осушителем",
    img: "https://bn-plast-assets.vercel.app/product-spacer-crosssection-desiccant.jpg",
  },
  {
    title: "ПВХ термомост",
    category: "Разрез профиля · вариант 1",
    img: "https://bn-plast-assets.vercel.app/illustration-thermal-break-profile-1.jpg",
  },
  {
    title: "ПВХ термомост",
    category: "Разрез профиля · вариант 2",
    img: "https://bn-plast-assets.vercel.app/illustration-thermal-break-profile-2.jpg",
  },
  {
    title: "ПВХ термомост",
    category: "Разрез профиля · вариант 3",
    img: "https://bn-plast-assets.vercel.app/illustration-thermal-break-profile-3.jpg",
  },
  {
    title: "ПВХ термомост",
    category: "Разрез профиля · вариант 4",
    img: "https://bn-plast-assets.vercel.app/illustration-thermal-break-profile-4.jpg",
  },
  {
    title: "Фасадный профиль",
    category: "Разрез · солнечная защита",
    img: "https://bn-plast-assets.vercel.app/illustration-facade-profile-solar.jpg",
  },
  {
    title: "ПВХ торцевые заглушки",
    category: "Все размеры",
    placeholder: "endcap",
  },
  {
    title: "ПВХ москитный шнур",
    category: "СТАНДАРТ",
    placeholder: "cord",
  },
  {
    title: "Уплотнитель ригеля",
    category: "EPDM · под витражные системы",
    placeholder: "gasket",
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* ---------------- NAV ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // active section
      let cur = "home";
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 120 <= 0) cur = item.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur nav-shadow" : "bg-white"
      }`}
    >
      <div className="border-b border-[color:var(--color-bn-line)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToId("home")}
            className="flex items-center gap-3 group"
            aria-label="BN Plast — на главную"
          >
            <img
              src={LOGO_URL}
              alt="BN Plast"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  active === item.id
                    ? "text-[color:var(--color-bn-blue)]"
                    : "text-[color:var(--color-bn-steel)] hover:text-[color:var(--color-bn-blue)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-[color:var(--color-bn-blue)] transition-all ${
                    active === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[color:var(--color-bn-blue)] border border-[color:var(--color-bn-blue)]/20 rounded-full hover:bg-[color:var(--color-bn-blue-soft)] transition"
            >
              <Phone className="w-4 h-4" strokeWidth={2.4} />
              {PHONE_DISPLAY}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[color:var(--color-bn-blue)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[color:var(--color-bn-line)] bg-white">
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                  className="text-left px-3 py-3 font-medium text-[color:var(--color-bn-ink)] border-b border-[color:var(--color-bn-line)]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[color:var(--color-bn-blue)] text-white font-semibold"
              >
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Blueprint backdrop */}
      <div className="absolute inset-0 grid-bp opacity-70 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[color:var(--color-bn-blue)]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm font-medium text-[color:var(--color-bn-steel)] mb-8">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-bn-blue)]" />
            EST. 2009
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[color:var(--color-bn-blue)]" />
            Алматы, Казахстан
          </span>
          <span className="inline-flex items-center gap-2">
            <Factory className="w-4 h-4 text-[color:var(--color-bn-blue)]" />
            Собственное производство
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-[color:var(--color-bn-blue)]" />
            15+ лет на рынке
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] font-black leading-[0.9] tracking-tight text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px]">
          <span className="bn-word-blue">BN</span>{" "}
          <span className="bn-word-metal" data-text="Plast">
            Plast
          </span>
        </h1>

        <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <p className="text-lg md:text-2xl leading-snug text-[color:var(--color-bn-ink)] max-w-3xl font-medium">
              Завод по изготовлению фурнитуры для алюминиевых витражных систем и стеклопакетов.
            </p>
            <p className="mt-5 text-2xl md:text-4xl leading-tight text-[color:var(--color-bn-steel)]">
              <span className="handwritten text-4xl md:text-6xl">
                Качество проверенное временем.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId("catalog")}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--color-bn-blue)] text-white font-semibold rounded-full hover:bg-[color:var(--color-bn-blue-2)] transition"
              >
                Смотреть каталог
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <button
                onClick={() => scrollToId("contacts")}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[color:var(--color-bn-blue)] text-[color:var(--color-bn-blue)] font-semibold rounded-full hover:bg-[color:var(--color-bn-blue-soft)] transition"
              >
                Связаться с отделом продаж
              </button>
            </div>
          </div>

          {/* Right side stat card */}
          <div className="md:col-span-4">
            <div className="relative border border-[color:var(--color-bn-line)] bg-white p-6 corner-ticks">
              <div className="sec-chip mb-4">Ключевые цифры</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-[family-name:var(--font-display)] font-black text-4xl text-[color:var(--color-bn-blue)]">
                    15+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-bn-mute)] mt-1">
                    лет на рынке
                  </div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] font-black text-4xl text-[color:var(--color-bn-blue)]">
                    №1
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-bn-mute)] mt-1">
                    завод в KZ
                  </div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] font-black text-4xl text-[color:var(--color-bn-blue)]">
                    11+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-bn-mute)] mt-1">
                    заводов-партнёров
                  </div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] font-black text-4xl text-[color:var(--color-bn-blue)]">
                    B2B
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-bn-mute)] mt-1">
                    оптовые поставки
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Truck block */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 relative bg-[color:var(--color-bn-bg)] border border-[color:var(--color-bn-line)] rounded-2xl overflow-hidden">
            <img
              src={TRUCK_URL}
              alt="Фирменный фургон доставки BN Plast"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[color:var(--color-bn-blue)] text-white flex items-center justify-center">
                <Truck className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <div>
                <div className="sec-chip mb-1">Логистика</div>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-[color:var(--color-bn-ink)]">
                  Бесплатная доставка нашего товара по городу{" "}
                  <span className="text-[color:var(--color-bn-blue)]">Алматы</span>.
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-bn-mute)]">
                  Собственный автопарк. Оперативная отгрузка партнёрам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTION ---------------- */
function Production() {
  const [openModal, setOpenModal] = useState<ProductionKey | null>(null);

  return (
    <section id="production" className="relative py-20 md:py-28 bg-[color:var(--color-bn-bg)] border-y border-[color:var(--color-bn-line)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="sec-chip mb-3">01 / Производство</div>
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl tracking-tight text-[color:var(--color-bn-ink)]">
              Наше <span className="text-[color:var(--color-bn-blue)]">производство</span>
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-bn-steel)]">
            Полный производственный цикл на территории Казахстана. Готовые изделия
            подходят под все распространённые типы витражных систем и стеклопакетов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PRODUCTION_ITEMS.map((it, idx) => {
            const Icon = it.icon;
            return (
              <button
                key={it.key}
                type="button"
                onClick={() => setOpenModal(it.key)}
                aria-label={`Подробнее — ${it.title}`}
                className={`group relative text-left bg-white border border-[color:var(--color-bn-line)] p-6 md:p-7 cursor-pointer transition-all duration-300 hover:border-[color:var(--color-bn-blue)] hover:shadow-[0_20px_40px_-20px_rgba(0,36,97,0.35)] hover:-translate-y-1 flex flex-col ${
                  it.wide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div className="absolute top-4 right-4 font-[family-name:var(--font-cond)] text-sm tracking-widest text-[color:var(--color-bn-mute)]">
                  0{idx + 1}
                </div>
                <div className="w-12 h-12 rounded-lg bg-[color:var(--color-bn-blue-soft)] text-[color:var(--color-bn-blue)] flex items-center justify-center mb-6 group-hover:bg-[color:var(--color-bn-blue)] group-hover:text-white transition">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <div className="font-[family-name:var(--font-display)] font-extrabold text-lg md:text-xl leading-tight text-[color:var(--color-bn-ink)]">
                  {it.title}
                </div>
                <div className="mt-1.5 text-sm md:text-base text-[color:var(--color-bn-steel)]">
                  {it.desc}
                </div>

                <div className="flex-1" />

                <div className="mt-6 pt-4 border-t border-dashed border-[color:var(--color-bn-line)] flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--color-bn-blue)] font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> В наличии
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-bn-ink)] group-hover:text-[color:var(--color-bn-blue)] transition">
                    <Info className="w-4 h-4" strokeWidth={2.4} />
                    Подробнее
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" strokeWidth={2.4} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <ThermoBridgeModal open={openModal === "thermo"} onClose={() => setOpenModal(null)} />
        <PVCProductsModal open={openModal === "pvc"} onClose={() => setOpenModal(null)} />
        <SpacerModal open={openModal === "spacer"} onClose={() => setOpenModal(null)} />

        {/* Trust bar */}
        <div className="mt-14 relative overflow-hidden rounded-2xl bg-[color:var(--color-bn-blue)] text-white">
          <div className="absolute inset-0 grid-bp opacity-10" />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 diag-stripes opacity-10" />
          <div className="relative p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="text-white/70 uppercase tracking-[0.24em] text-xs font-[family-name:var(--font-cond)] font-semibold mb-4">
                Почему нас выбирают
              </div>
              <p className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-4xl leading-tight">
                На рынке <span className="text-white bg-white/10 px-2 py-0.5 rounded">более 15 лет</span>, нас выбирают за
                качество, надёжность и производство в сроки.
              </p>
              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
                <b className="text-white">BN Plast</b> — первый и единственный завод такого профиля в Казахстане.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-4">
              {[
                { icon: Clock, label: "В сроки" },
                { icon: ShieldCheck, label: "Гарантия качества" },
                { icon: Factory, label: "Своё производство" },
              ].map((b, i) => {
                const I = b.icon;
                return (
                  <div key={i} className="flex items-center gap-3 border border-white/15 rounded-xl px-4 py-3 bg-white/5">
                    <I className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                    <span className="font-semibold text-sm md:text-base">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];
  return (
    <section id="partners" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="sec-chip mb-3">02 / Партнёры</div>
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl tracking-tight leading-[0.95]">
              Наши <br />
              <span className="text-[color:var(--color-bn-blue)]">сотрудничества</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="text-lg md:text-xl text-[color:var(--color-bn-steel)] leading-relaxed">
              Мы поставляем комплектующие ведущим производителям алюминиевых конструкций
              и монтажным компаниям Казахстана и Центральной Азии. С нами работают такие заводы как:
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-[color:var(--color-bn-line)] py-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-16 marquee-track whitespace-nowrap">
            {doubled.map((p, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-cond)] font-bold text-2xl md:text-3xl tracking-wider text-[color:var(--color-bn-ink)] hover:text-[color:var(--color-bn-blue)] transition"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Grid list */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="group relative border border-[color:var(--color-bn-line)] bg-white px-5 py-5 hover:border-[color:var(--color-bn-blue)] transition"
            >
              <span className="font-[family-name:var(--font-cond)] font-bold text-lg tracking-wider text-[color:var(--color-bn-ink)] group-hover:text-[color:var(--color-bn-blue)]">
                {p}
              </span>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-[color:var(--color-bn-mute)]">
                partner
              </span>
            </div>
          ))}
          <div className="border border-dashed border-[color:var(--color-bn-blue)]/40 bg-[color:var(--color-bn-blue-soft)] px-5 py-5 flex items-center">
            <span className="font-[family-name:var(--font-cond)] font-semibold text-lg text-[color:var(--color-bn-blue)]">
              и многие другие →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATALOG ---------------- */
function PlaceholderVisual({ kind }: { kind: "endcap" | "cord" | "gasket" }) {
  if (kind === "endcap") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="ec" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#eef2f8" />
            <stop offset="1" stopColor="#dde5f1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#ec)" />
        <g transform="translate(90 70)">
          <rect x="0" y="0" width="220" height="160" rx="18" fill="#0b1220" />
          <rect x="10" y="10" width="200" height="140" rx="12" fill="#1a2233" />
          <rect x="30" y="30" width="160" height="100" rx="6" fill="#002461" />
          <rect x="30" y="30" width="160" height="100" rx="6" fill="none" stroke="#4a6bd9" strokeWidth="2" strokeDasharray="4 4" />
        </g>
        <text x="200" y="260" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="14" fill="#6b7280" letterSpacing="4">END CAP · PVC</text>
      </svg>
    );
  }
  if (kind === "cord") {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#eef2f8" />
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} transform={`translate(0 ${60 + i * 40})`}>
            <path
              d={`M -20 15 Q 40 -20 100 15 T 220 15 T 340 15 T 460 15`}
              fill="none"
              stroke={i % 2 === 0 ? "#002461" : "#0a2f7a"}
              strokeWidth="14"
              strokeLinecap="round"
            />
          </g>
        ))}
        <text x="200" y="270" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="14" fill="#6b7280" letterSpacing="4">MOSQUITO CORD · STANDARD</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#eef2f8" />
      <g transform="translate(60 90)">
        <rect x="0" y="0" width="280" height="120" rx="8" fill="#0b1220" />
        <rect x="10" y="10" width="260" height="30" fill="#002461" />
        <rect x="10" y="80" width="260" height="30" fill="#002461" />
        <rect x="10" y="45" width="260" height="30" fill="#1a2233" />
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={20 + i * 18} y="12" width="10" height="26" fill="#0a2f7a" />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={20 + i * 18} y="82" width="10" height="26" fill="#0a2f7a" />
        ))}
      </g>
      <text x="200" y="260" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="14" fill="#6b7280" letterSpacing="4">EPDM · RIGEL GASKET</text>
    </svg>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="relative py-20 md:py-28 bg-[color:var(--color-bn-bg)] border-y border-[color:var(--color-bn-line)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="sec-chip mb-3">03 / Каталог</div>
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl tracking-tight text-[color:var(--color-bn-ink)]">
              Каталог
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-bn-steel)]">
            Изделия под любые распространённые системы. Возможно изготовление
            по индивидуальным размерам под запрос партнёра.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATALOG.map((item, i) => (
            <article
              key={i}
              className="cat-card group relative bg-white border border-[color:var(--color-bn-line)] overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-[color:var(--color-bn-bg)] overflow-hidden">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <PlaceholderVisual kind={item.placeholder!} />
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-widest text-[color:var(--color-bn-blue)] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-[color:var(--color-bn-mute)] font-semibold">
                  {item.category}
                </div>
                <div className="mt-1.5 font-[family-name:var(--font-display)] font-bold text-lg leading-snug text-[color:var(--color-bn-ink)] group-hover:text-[color:var(--color-bn-blue)] transition">
                  {item.title}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToId("contacts")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[color:var(--color-bn-blue)] text-white font-semibold rounded-full hover:bg-[color:var(--color-bn-blue-2)] transition"
          >
            Запросить прайс и условия
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACTS ---------------- */
function Contacts() {
  return (
    <section id="contacts" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="sec-chip mb-3">04 / Контакты</div>
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl tracking-tight leading-[0.95]">
              Свяжитесь <br />
              <span className="text-[color:var(--color-bn-blue)]">с нами</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-bn-steel)] leading-relaxed max-w-md">
              Отдел продаж работает с заводами-партнёрами и монтажными компаниями.
              Ответим по WhatsApp или телефону, обсудим объёмы и сроки.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[color:var(--color-bn-blue-soft)] text-[color:var(--color-bn-blue)] flex items-center justify-center">
                  <MapPin className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--color-bn-mute)] font-semibold">Адрес</div>
                  <div className="text-[color:var(--color-bn-ink)] font-medium">г. Алматы, Казахстан</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[color:var(--color-bn-blue-soft)] text-[color:var(--color-bn-blue)] flex items-center justify-center">
                  <Phone className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--color-bn-mute)] font-semibold">Телефон</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-[color:var(--color-bn-ink)] font-medium hover:text-[color:var(--color-bn-blue)]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[color:var(--color-bn-blue-soft)] text-[color:var(--color-bn-blue)] flex items-center justify-center">
                  <Clock className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--color-bn-mute)] font-semibold">График</div>
                  <div className="text-[color:var(--color-bn-ink)] font-medium">Пн–Сб · 09:00 — 18:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative bg-[color:var(--color-bn-blue)] rounded-2xl p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 grid-bp opacity-10" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5 blur-2xl" />

              <div className="relative">
                <div className="text-white/70 uppercase tracking-[0.24em] text-xs font-[family-name:var(--font-cond)] font-semibold mb-3">
                  Прямой контакт
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-black text-white text-3xl md:text-4xl leading-tight">
                  Свяжитесь с отделом продаж <br /> BN Plast
                </h3>
                <p className="mt-3 text-white/80">
                  Один номер — два удобных способа. Пишите или звоните.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between gap-6 bg-white text-[color:var(--color-bn-blue)] rounded-xl p-6 hover:bg-[color:var(--color-bn-blue-soft)] transition min-h-40"
                  >
                    <div className="flex items-center justify-between">
                      <MessageCircle className="w-8 h-8" strokeWidth={2.2} />
                      <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold opacity-70">WhatsApp</div>
                      <div className="font-[family-name:var(--font-display)] font-black text-2xl mt-1">
                        Написать в WhatsApp
                      </div>
                      <div className="mt-1 text-sm opacity-80">{PHONE_DISPLAY}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="group flex flex-col justify-between gap-6 bg-[color:var(--color-bn-ink)] text-white rounded-xl p-6 hover:bg-black transition min-h-40"
                  >
                    <div className="flex items-center justify-between">
                      <Phone className="w-8 h-8" strokeWidth={2.2} />
                      <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold opacity-70">Телефон</div>
                      <div className="font-[family-name:var(--font-display)] font-black text-2xl mt-1">
                        Позвонить
                      </div>
                      <div className="mt-1 text-sm opacity-80">{PHONE_DISPLAY}</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> B2B оптовые поставки
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Бесплатная доставка по Алматы
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Производство в сроки
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--color-bn-ink)] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <img src={LOGO_URL} alt="BN Plast" className="h-12 w-auto bg-white/95 rounded-md p-2" />
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              Завод по изготовлению фурнитуры для алюминиевых витражных систем
              и стеклопакетов. Первый и единственный завод такого профиля в Казахстане.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">Навигация</div>
            <ul className="grid grid-cols-2 gap-y-2">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-white/80 hover:text-white transition"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">Контакты</div>
            <a href={`tel:${PHONE_TEL}`} className="block text-lg font-semibold text-white hover:text-[color:var(--color-bn-blue-soft)]">
              {PHONE_DISPLAY}
            </a>
            <div className="mt-1 text-white/70">г. Алматы, Казахстан</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/50">
          <div>© {new Date().getFullYear()} BN Plast. Все права защищены.</div>
          <div className="font-[family-name:var(--font-cond)] tracking-widest uppercase">
            Made in Kazakhstan · Almaty
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-bn-ink)]">
      <Navbar />
      <main>
        <Hero />
        <Production />
        <Partners />
        <Catalog />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
