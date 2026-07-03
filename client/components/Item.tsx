"use client";

import { useEffect, useState } from "react";

interface ItemProps {
  name: string;
}

export default function Item({ name }: ItemProps) {
  const [count, setCount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const count = localStorage.getItem(name);
    console.log(count);
    if (count && !Number.isNaN(count)) setCount(Number.parseInt(count));
  }, []);

  useEffect(() => {
    localStorage.setItem(name, count.toString());
  }, [count]);

  return (
    <div className="flex gap-3 items-center">
      <button
        className="btn"
        disabled={isCompleted}
        onClick={() => {
          if (count === 29) setIsCompleted(true);
          if (!isCompleted) setCount((count) => count + 1);
        }}
      >
        {name}
      </button>
      <p>read {count} times.</p>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
