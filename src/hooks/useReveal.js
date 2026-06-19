import { useEffect } from "react";

// Thêm class .is-visible cho mọi phần tử .reveal khi cuộn tới.
// Có MutationObserver để bắt cả những .reveal được thêm vào DOM sau
// (ví dụ danh sách sản phẩm/tính năng tải async).
export default function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const track = (el) => {
      // Nếu phần tử đã bị cuộn qua (nằm phía trên viewport) lúc được thêm vào,
      // IntersectionObserver sẽ không bao giờ bắn → hiện ngay để khỏi ẩn vĩnh viễn.
      if (el.getBoundingClientRect().bottom <= 0) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    };

    const scan = (root) => {
      if (root.nodeType !== 1) return;
      if (root.classList.contains("reveal")) track(root);
      root.querySelectorAll(".reveal").forEach(track);
    };

    scan(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(scan));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
