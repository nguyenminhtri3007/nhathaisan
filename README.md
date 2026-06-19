# Nhất Nguyệt — Hải Sản Tươi Sống 🦐

Website nhận diện thương hiệu cho cửa hàng hải sản **Nhất Nguyệt**.
Xây dựng bằng **React 19 + Vite 6 + Tailwind CSS v4**. Nhẹ, nhanh, responsive, deploy thẳng lên Vercel.

---

## 1. Chạy thử trên máy

```bash
npm install      # cài thư viện (chỉ cần lần đầu)
npm run dev      # chạy bản dev, mở http://localhost:5173
```

Lệnh khác:

```bash
npm run build    # đóng gói production vào thư mục dist/
npm run preview  # xem thử bản đã build
```

---

## 2. ⭐ Thêm ảnh thật (logo & banner)

Web đang dùng **ảnh nền dự phòng** vì chưa có ảnh thật. Để hiển thị ảnh của bạn:

1. Mở thư mục `public/images/`
2. Copy 2 ảnh của bạn vào đó, **đặt tên đúng**:
   - `logo.jpg`   → ảnh chân dung / logo (ảnh người mặc vest)
   - `banner.jpg` → ảnh cửa hàng + xe tải (ảnh biển hiệu HẢI SẢN TƯƠI SỐNG)

> Tên file phải đúng chữ thường: `logo.jpg`, `banner.jpg`.
> Nếu ảnh là `.png`, sửa đường dẫn trong [`src/data.js`](src/data.js) (trường `logo` và `banner`).

Xong! Refresh trang là thấy ảnh hiện ra ngay.

---

## 3. Sửa thông tin liên hệ / sản phẩm

Tất cả nội dung nằm gọn trong **một file**: [`src/data.js`](src/data.js)

- Số điện thoại, địa chỉ, giờ mở cửa → object `BRAND`
- Danh sách sản phẩm → mảng `PRODUCTS`
- Các cam kết "Vì sao chọn chúng tôi" → mảng `FEATURES`

Sửa xong lưu lại là web tự cập nhật (khi đang chạy `npm run dev`).

---

## 4. 🚀 Deploy lên Vercel

### Cách A — Qua GitHub (khuyến nghị)

1. Đẩy code lên một repo GitHub.
2. Vào [vercel.com](https://vercel.com) → **Add New → Project** → chọn repo.
3. Vercel tự nhận diện Vite. Cứ để mặc định và bấm **Deploy**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Vài chục giây sau là có link `https://...vercel.app`. Mỗi lần push code, Vercel tự deploy lại.

### Cách B — Qua Vercel CLI (không cần GitHub)

```bash
npm i -g vercel     # cài CLI (một lần)
vercel              # lần đầu: đăng nhập + trả lời vài câu hỏi
vercel --prod       # deploy bản chính thức
```

File [`vercel.json`](vercel.json) đã cấu hình sẵn, không cần chỉnh gì thêm.

---

## 5. Cấu trúc dự án

```
public/
  favicon.svg            # icon tab trình duyệt
  images/                # 👈 ĐẶT logo.jpg & banner.jpg vào đây
src/
  data.js                # 👈 toàn bộ nội dung (SĐT, địa chỉ, sản phẩm)
  App.jsx                # ghép các phần lại
  index.css              # màu thương hiệu, font, hiệu ứng
  components/            # Navbar, Hero, Products, Features, About, CTA, Footer...
```

Made with 🦐 tại Hưng Yên.
