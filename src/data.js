// ===== Thông tin thương hiệu — chỉnh sửa tại đây =====
export const BRAND = {
  name: "Nhất Nguyệt",
  tagline: "Hải Sản Tươi Sống",
  slogan: "Tươi rói mỗi ngày · Từ biển khơi đến bàn ăn",
  phone: "0962112492",
  phoneDisplay: "0962.112.492",
  phone2: "0358890978",
  phone2Display: "0358.890.978",
  address: "Hưng Phú, Hưng Yên",
  addressDetail: "Cạnh Bệnh viện Đa khoa Nam Tiền Hải",
  hours: "Mở cửa 5:00 – 20:00 hằng ngày",
  // Liên kết ảnh — đặt file vào thư mục public/images/
  logo: "/images/logo.jpg",
  banner: "/images/banner.png",
};

// Đường dẫn gọi điện / bản đồ
export const TEL_HREF = `tel:${BRAND.phone}`;
export const TEL2_HREF = `tel:${BRAND.phone2}`;
export const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Bệnh viện Đa khoa Nam Tiền Hải, Hưng Yên");

// ===== Danh mục sản phẩm =====
export const PRODUCTS = [
  {
    name: "Tôm",
    desc: "Tôm sú, tôm he tươi sống, thịt chắc ngọt.",
    emoji: "🦐",
    tint: "from-rose-100 to-rose-50",
  },
  {
    name: "Cua",
    desc: "Cua biển gạch chắc, càng to, bơi khỏe.",
    emoji: "🦀",
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
    tint: "from-amber-100 to-yellow-50",
  },
];

// ===== Cam kết / lý do chọn =====
export const FEATURES = [
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
