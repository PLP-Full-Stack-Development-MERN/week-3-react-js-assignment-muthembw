import React, {useState} from 'react';

const Counter = () => {
  const[count, setCount]= useState(0);

  return (
    <div className="text-red-500 p-3">
      <p> count: {count}</p>
      <button onClick ={() =>setCount(count +1)}>Increment</button>
    </div>
  )
}

export default Counter;
