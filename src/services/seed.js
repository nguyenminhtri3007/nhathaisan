// ===== Dữ liệu mẫu (seed) =====
// Tạm thời nằm trong code. Khi có API, lớp service (catalog.js) sẽ fetch
// từ server thay vì đọc các mảng này.

export const PRODUCTS_SEED = [
  {
    name: "Tôm",
    desc: "Tôm sú, tôm he tươi sống, thịt chắc ngọt.",
    emoji: "🦐",
    img: "/images/tom.png",
    tint: "from-rose-100 to-rose-50",
  },
  {
    name: "Cua",
    desc: "Cua biển gạch chắc, càng to, bơi khỏe.",
    emoji: "🦀",
    img: "/images/cua.png",
    tint: "from-orange-100 to-amber-50",
  },
  {
    name: "Cá",
    desc: "Cá biển tươi, đa dạng loại theo mùa.",
    emoji: "🐟",
    img: "/images/ca.jpg",
    tint: "from-sky-100 to-cyan-50",
  },
  {
    name: "Mực",
    desc: "Mực ống, mực lá tươi rói, trong veo.",
    emoji: "🦑",
    img: "/images/muc.jpg",
    tint: "from-violet-100 to-fuchsia-50",
  },
  {
    name: "Ghẹ",
    desc: "Ghẹ xanh, ghẹ đỏ nhiều thịt, chắc nịch.",
    emoji: "🦀",
    img: "/images/ghe1.jpg",
    tint: "from-teal-100 to-emerald-50",
  },
  {
    name: "Bề bề",
    desc: "Bề bề (tôm tít) to, thịt dày, tươi sống.",
    emoji: "🦞",
    img: "/images/bebe.jpg",
    tint: "from-amber-100 to-yellow-50",
  },
];

export const FEATURES_SEED = [
  {
    title: "Tươi sống 100%",
    desc: "Nhập trực tiếp từ tàu, giữ sống trong bể sục oxy đến tận tay khách.",
    icon: "wave",
  },
  {
    title: "Bán buôn & bán lẻ",
    desc: "Phục vụ cả nhà hàng, quán ăn lẫn khách lẻ với giá tận gốc.",
    icon: "tag",
  },
  {
    title: "Thu mua tận nơi",
    desc: "Đội xe đông lạnh thu mua & giao hàng nhanh trong khu vực.",
    icon: "truck",
  },
  {
    title: "Cân đủ, giá thật",
    desc: "Cam kết cân đúng, niêm yết giá rõ ràng, không phụ phí ẩn.",
    icon: "scale",
  },
];
