// ===== Cấu hình nội dung trang — chỉnh sửa tại đây =====
// Đây là thông tin tĩnh của thương hiệu (không lấy từ API).
export const BRAND = {
  name: "Nhất Nguyệt",
  tagline: "Hải Sản Tươi Sống",
  slogan: "Tươi rói mỗi ngày · Từ biển khơi đến bàn ăn",
  phone: "0962112492",
  phoneDisplay: "0962.112.492",
  phone2: "0358890978",
  phone2Display: "0358.890.978",
  address: "Hưng Phú, Hưng Yên",
  addressDetail: "Cách ngã tư Nam Trung 50m, hướng đi Cồn vành",
  hours: "Mở cửa 5:00 – 20:00 hằng ngày",
  // Liên kết ảnh — đặt file vào thư mục public/images/
  logo: "/images/logo.jpg",
  banner: "/images/banner.png",
  bannerMobile: "/images/banner2.jpg",
};

// Đường dẫn gọi điện / bản đồ
export const TEL_HREF = `tel:${BRAND.phone}`;
export const TEL2_HREF = `tel:${BRAND.phone2}`;
export const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Bệnh viện Đa khoa Nam Tiền Hải, Hưng Yên");

// Menu điều hướng
export const NAV_LINKS = [
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#cam-ket", label: "Cam kết" },
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#lien-he", label: "Liên hệ" },
];

// Chip nổi bật ở khối Hero
export const HIGHLIGHTS = ["Tôm", "Cua", "Cá", "Mực", "Ghẹ", "Bề bề"];

// Số liệu nhanh
export const STATS = [
  { value: "5:00", label: "Mở cửa từ sáng sớm" },
  { value: "100%", label: "Hải sản tươi sống" },
  { value: "16+", label: "Loại hải sản chính" },
  { value: "Tận nơi", label: "Thu mua & giao hàng" },
];

// Gạch đầu dòng ở khối Giới thiệu
export const ABOUT_POINTS = [
  "Nguồn hàng nhập trực tiếp, tươi mới mỗi ngày",
  "Phục vụ tận tâm cho cả khách buôn và khách lẻ",
  "Hỗ trợ thu mua & giao hàng trong khu vực",
];
