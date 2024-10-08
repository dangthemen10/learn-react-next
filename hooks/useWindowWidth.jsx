import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Kiểm tra nếu đang chạy trên client-side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Gọi ngay khi component mount
      handleResize();

      // Lắng nghe sự kiện resize
      window.addEventListener('resize', handleResize);

      // Cleanup khi component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Chạy 1 lần khi component mount

  return windowSize;
};

export default useWindowSize;
