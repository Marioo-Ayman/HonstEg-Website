import React, { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  start: boolean;
  duration?: number; // ms
}

const Counter: React.FC<CounterProps> = ({
  target,
  start,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const interval = 20;
    const steps = duration / interval;
    const increment = target / steps;

    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return (
    <h2 className="text-white md:text-6xl text-2xl font-bold">
      {count}+
    </h2>
  );
};

export default Counter;