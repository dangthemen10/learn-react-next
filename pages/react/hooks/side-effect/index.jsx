import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  // const [isCheck, setIsCheck] = useState(false)

  // const handleClick = () => {
  //   setIsCheck(!isCheck)
  // }

  console.log("DataFetcher Rendering....");
  
  useEffect(() => {
    fetch('https://dummy-json.mock.beeceptor.com/continents')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
            { data 
            ? 
                <ul>
                    { data.map((element) => {
                        return <li key={element.areaSqKm}>{element.name} - {element.oceans}</li>
                    })}
                </ul> 
            : 
                "Loading..."
            }
            {/* <button onClick={handleClick}>Click Me!</button> */}
    </div>
  )
}

// export default function WindowResizeTracker() {
//   const [windowWidth, setWindowWidth] = useState(0);

//   console.log("WindowResizeTracker Rendering....");

//   useEffect(() => {
//     // Kiểm tra nếu code đang chạy trên client (trình duyệt)
    
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);

//       const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//       };

//       // Lắng nghe sự kiện thay đổi kích thước cửa sổ
//       window.addEventListener('resize', handleResize);

//       // Cleanup để gỡ bỏ sự kiện khi component bị unmount
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   });

//   return (
//     <div>
//       <h1>Current window width: {windowWidth}px</h1>
//     </div>
//   );
// }



// useEffect cần Cleanup 

// export default function TimerComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Cleanup: Dọn dẹp timer khi component unmount
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []); // Chỉ chạy một lần khi component mount

//   return <div>Timer: {count}</div>;
// }