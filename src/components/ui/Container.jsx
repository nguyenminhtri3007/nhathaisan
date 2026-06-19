// Khung canh giữa dùng chung cho các mục (max-w-6xl + padding ngang).
export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</Tag>
  );
}
