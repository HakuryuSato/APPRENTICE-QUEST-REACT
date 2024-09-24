import { useState } from 'react';

export default function CounterApp() {
  const [number, setNumber] = useState(0);

  function incrementByTwo() {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <div>
      <h2>カウンターアプリ</h2>
      <h1>カウンター: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>増加</button>
      <button onClick={() => setNumber(number - 1)}>減少</button>
      <button onClick={incrementByTwo}>+2</button>
    </div>
  );
}
