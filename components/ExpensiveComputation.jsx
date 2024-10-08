import { useMemo } from 'react';

export default function ExpensiveComputation({ number }) {
  // Hàm mô phỏng một phép tính phức tạp
  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  };

  // Sử dụng useMemo để ghi nhớ giá trị tính toán
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <h1>Input Number: {number}</h1>
      <h2>Computed Value: {memoizedValue}</h2>
    </div>
  );
}