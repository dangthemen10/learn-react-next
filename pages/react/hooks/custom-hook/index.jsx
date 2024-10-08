import useWindowSize from "@/hooks/useWindowWidth"

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  // Hiển thị thông báo khi windowSize chưa được cập nhật (SSR)
  if (width === undefined || height === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowSizeComponent;
