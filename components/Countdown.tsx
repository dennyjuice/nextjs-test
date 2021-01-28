import React, { useEffect, useState } from 'react';

import styles from '../styles/Countdown.module.css';

interface ICountdownProps {
  countTo: Date;
  gmt: number;
}

interface ICount {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const Countdown: React.FC<ICountdownProps> = ({ countTo, gmt }) => {
  const initialCount: ICount = { days: 0, hours: 0, mins: 0, secs: 0 };
  const [countValues, setCountValues] = useState(initialCount);

  useEffect(() => {
    const countTimer = setInterval(() => {
      const now = new Date().getTime();

      const distance = countTo.getTime() - now;

      setCountValues(() => {
        if (distance <= 0) {
          clearInterval(countTimer);
          return initialCount;
        }
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        };
      });

      if (distance <= 0) {
        clearInterval(countTimer);
      }
    }, 1000);

    return () => {
      clearInterval(countTimer);
    };
  }, [countTo, gmt]);

  return (
    <p
      className={styles.countDown}
    >{`${countValues.days} : ${countValues.hours} : ${countValues.mins} : ${countValues.secs}`}</p>
  );
};

export default Countdown;
