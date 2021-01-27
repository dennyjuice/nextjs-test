import React from 'react';

import useTimer from '../customHooks/useTimer';

import styles from '../styles/Timer.module.css';
import MainContainer from '../components/MainContainer';

const Timer: React.FC = () => {
  const isExpired: boolean = useTimer(new Date(Date.now() + 60 * 1000));

  return (
    <MainContainer title="Timer">
      <section className={styles.timer}>{isExpired && <p>Time expired</p>}</section>
    </MainContainer>
  );
};

export default Timer;
