import { useEffect, useState } from "react";

// Hook chung: chạy một hàm async và trả về { data, loading, error }.
// Dùng cho mọi lời gọi service, sẵn sàng cho API thật (loading/lỗi đã có sẵn).
export default function useAsync(fn) {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    let active = true;
    setState({ data: null, loading: true, error: null });
    fn().then(
      (data) => active && setState({ data, loading: false, error: null }),
      (error) => active && setState({ data: null, loading: false, error })
    );
    return () => {
      active = false;
    };
  }, [fn]);

  return state;
}
