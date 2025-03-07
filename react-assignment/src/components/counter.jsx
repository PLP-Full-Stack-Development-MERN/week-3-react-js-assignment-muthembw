import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-4">
      <p className="text-lg font-semibold">Count: {count}</p>
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
