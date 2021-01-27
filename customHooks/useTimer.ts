import { useEffect, useState } from 'react';

export default function useTimer(deadline: Date): boolean {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = startTimer(deadline);
    return () => clearInterval(timer);
  }, [deadline]);

  const startTimer = (deadline) => {
    let start = new Date();
    const end = new Date(deadline);

    const timer = setInterval(() => {
      start = new Date();
      if (start >= end) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return timer;
  };

  return isExpired;
}
