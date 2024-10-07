import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? `Data: ${data}` : 'Loading...'}</div>;
}