export type Drawing = {
  name: string;
  src?: string;
};

export const THERMO_BRIDGES: Drawing[] = [
  { name: "31мм термомост", src: "https://bn-plast-drawings.vercel.app/termomost-31mmtermomost.png" },
  { name: "20х32 труба", src: "https://bn-plast-drawings.vercel.app/termomost-20x32truba.png" },
  { name: "17х25 труба", src: "https://bn-plast-drawings.vercel.app/termomost-17x25truba.png" },
  { name: "37 заглушка", src: "https://bn-plast-drawings.vercel.app/termomost-37zaglushka.png" },
  { name: "27 заглушка", src: "https://bn-plast-drawings.vercel.app/termomost-27zaglushka.png" },
  { name: "7мм удлинитель", src: "https://bn-plast-drawings.vercel.app/termomost-7mmudlinitel.png" },
  { name: "18мм термомост/4", src: "https://bn-plast-drawings.vercel.app/termomost-18mmtermomost-4.png" },
  { name: "18мм термомост/5", src: "https://bn-plast-drawings.vercel.app/termomost-18mmtermomost-5.png" },
  { name: "7,1мм термомост/4", src: "https://bn-plast-drawings.vercel.app/termomost-7-1mmtermomost-4.png" },
  { name: "7,1мм термомост/5", src: "https://bn-plast-drawings.vercel.app/termomost-7-1mmtermomost-5.png" },
  { name: "9мм термомост", src: "https://bn-plast-drawings.vercel.app/termomost-9mmtermomost.png" },
  { name: "24мм термомост/4", src: "https://bn-plast-drawings.vercel.app/termomost-24mmtermomost-4.png" },
  { name: "24мм термомост/5", src: "https://bn-plast-drawings.vercel.app/termomost-24mmtermomost-5.png" },
  { name: "18мм термомост адаптер", src: "https://bn-plast-drawings.vercel.app/termomost-18mmtermomostadapter.png" },
  { name: "14мм термомост/4", src: "https://bn-plast-drawings.vercel.app/termomost-14mmtermomost-4.png" },
  { name: "14мм термомост/5", src: "https://bn-plast-drawings.vercel.app/termomost-14mmtermomost-5.png" },
  { name: "36 заглушка" },
  { name: "42 заглушка" },
  { name: "32 заглушка" },
  { name: "41 заглушка" },
];

export const POLYAMIDE: Drawing[] = [
  { name: "/14-01", src: "https://bn-plast-drawings.vercel.app/poliamid-14-01.png" },
  { name: "/14-02", src: "https://bn-plast-drawings.vercel.app/poliamid-14-02.png" },
  { name: "/16-01", src: "https://bn-plast-drawings.vercel.app/poliamid-16-01.png" },
  { name: "/16-02", src: "https://bn-plast-drawings.vercel.app/poliamid-16-02.png" },
  { name: "/16-03", src: "https://bn-plast-drawings.vercel.app/poliamid-16-03.png" },
  { name: "/19-01", src: "https://bn-plast-drawings.vercel.app/poliamid-19-01.png" },
  { name: "/20-01", src: "https://bn-plast-drawings.vercel.app/poliamid-20-01.png" },
  { name: "/24-01", src: "https://bn-plast-drawings.vercel.app/poliamid-24-01.png" },
  { name: "/24-02", src: "https://bn-plast-drawings.vercel.app/poliamid-24-02.png" },
  { name: "/24-03", src: "https://bn-plast-drawings.vercel.app/poliamid-24-03.png" },
  { name: "/24-04", src: "https://bn-plast-drawings.vercel.app/poliamid-24-04.png" },
  { name: "/24-05", src: "https://bn-plast-drawings.vercel.app/poliamid-24-05.png" },
  { name: "/24-06", src: "https://bn-plast-drawings.vercel.app/poliamid-24-06.png" },
  { name: "/26-01", src: "https://bn-plast-drawings.vercel.app/poliamid-26-01.png" },
  { name: "/29-01", src: "https://bn-plast-drawings.vercel.app/poliamid-29-01.png" },
  { name: "/34-01", src: "https://bn-plast-drawings.vercel.app/poliamid-34-01.png" },
  { name: "/34-02", src: "https://bn-plast-drawings.vercel.app/poliamid-34-02.png" },
  { name: "/34-03", src: "https://bn-plast-drawings.vercel.app/poliamid-34-03.png" },
  { name: "/34-04", src: "https://bn-plast-drawings.vercel.app/poliamid-34-04.png" },
];

export const GASKET_SIZES = [
  "50х43 мм", "50х50 мм", "50х65 мм", "50х73 мм", "50х80 мм",
  "50х85 мм", "50х93 мм", "50х95 мм", "50х100 мм", "50х103 мм",
  "50х105 мм", "50х120 мм", "50х150 мм", "50х160 мм",
];

export const THERMOBREAK_SIZES = [
  "50х50 мм", "50х80 мм", "50х150 мм", "60х100 мм",
];

export const SPACER_ROWS = [
  { name: "Спейсер с бутилом 12мм (0,25)", unit: "п.м", size: "3-х метр.", pm: "1053", pcs: "351" },
  { name: "Спейсер с бутилом 14мм (0,25)", unit: "п.м", size: "3-х метр.", pm: "891", pcs: "297" },
  { name: "Спейсер с бутилом 16мм (0,25)", unit: "п.м", size: "3-х метр.", pm: "810", pcs: "270" },
  { name: "Спейсер с бутилом 22мм (0,30)", unit: "п.м", size: "3-х метр.", pm: "648", pcs: "216" },
  { name: "Спейсер с бутилом 24мм (0,30)", unit: "п.м", size: "3-х метр.", pm: "567", pcs: "189" },
];

export const SPACER_CORNERS = ["6", "9", "10", "12", "14", "16", "22", "24"];

export const SPACER_PHOTOS = [
  "https://bn-plast-assets.vercel.app/product-spacer-aluminum-light-bg.jpg",
  "https://bn-plast-assets.vercel.app/product-spacer-aluminum-dark-bg.jpg",
  "https://bn-plast-assets.vercel.app/product-spacer-crosssection-desiccant.jpg",
];

export const WA_PHONE_DISPLAY = "+7 708 123 3489";
export const WA_PHONE_TEL = "+77081233489";
export const WA_LINK = "https://wa.me/77081233489";
