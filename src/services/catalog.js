import { PRODUCTS_SEED, FEATURES_SEED } from "./seed";

// ===== Lớp truy xuất dữ liệu (data service) =====
// Hiện trả về dữ liệu tĩnh nhưng viết theo kiểu async. Khi có API thật,
// chỉ cần thay phần thân hàm bằng fetch — các component không phải sửa.
//
// Ví dụ sau này:
//   const API_URL = import.meta.env.VITE_API_URL;
//   export async function getProducts() {
//     const res = await fetch(`${API_URL}/products`);
//     if (!res.ok) throw new Error("Không tải được sản phẩm");
//     return res.json();
//   }

export async function getProducts() {
  return PRODUCTS_SEED;
}

export async function getFeatures() {
  return FEATURES_SEED;
}
