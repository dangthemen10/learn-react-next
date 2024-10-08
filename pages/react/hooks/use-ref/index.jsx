
import { useRef, useEffect } from 'react';

/**
 * 
 * Truy cập DOM element
 * 
 */
export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

/**
 * 
 * Lưu giá trị không gây render lại
 * 
 */

// export default function Timer() {
//   const count = useRef(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       count.current += 1;
//       console.log(count.current);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <div>Open the console to see the timer</div>;
// }