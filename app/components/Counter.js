'use client';
import React, { useState, useEffect } from 'react';

export default function Counter({ initialCount = 1, onQuantityChange }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onQuantityChange?.(newCount);
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange?.(newCount);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <button className="bg-orange-500 px-3 hover:bg-orange-800 text-white" onClick={decrement}>-</button>
      <span className="text-black bg-zinc-200 px-3 py-1">{count}</span>
      <button className="bg-orange-500 px-3 hover:bg-orange-800 text-white" onClick={increment}>+</button>
    </div>
  );
}
