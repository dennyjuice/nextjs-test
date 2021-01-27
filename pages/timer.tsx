import React from 'react';

import styles from '../styles/Timer.module.css';
import MainContainer from '../components/MainContainer';

const Timer: React.FC = () => {
  return (
    <MainContainer>
      <div className={styles.timer}>Timer</div>
    </MainContainer>
  );
};

export default Timer;
