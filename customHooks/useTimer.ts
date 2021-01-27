import { useEffect, useState } from 'react';

export default function useTimer(deadline: Date, gmt = '+00:00'): boolean {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = startTimer(deadline);
    return () => clearInterval(timer);
  }, [deadline]);

  const formatDate = (date, gmt) => {
    return `${date.toISOString().slice(0, -5)}${gmt}`;
  };

  const startTimer = (deadline) => {
    let start = new Date(formatDate(new Date(), gmt));
    const end = new Date(formatDate(deadline, gmt));
    console.log(start, end);

    const timer = setInterval(() => {
      start = new Date(formatDate(new Date(), gmt));
      if (start >= end) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return timer;
  };

  return isExpired;
}
