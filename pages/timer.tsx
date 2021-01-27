import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/Timer.module.css';
import MainContainer from '../components/MainContainer';
import useTimer from '../customHooks/useTimer';

const Timer: React.FC = () => {
  const defaultDate = new Date(Date.now() + 60 * 1000);
  const [endDate, setEndDate] = useState(defaultDate);
  const isExpired: boolean = useTimer(endDate, '+03:00');

  return (
    <MainContainer title="Timer">
      <section className={styles.timer}>
        Play Video at:
        <DatePicker
          className={styles.picker}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy HH:mm"
        />
        {isExpired && (
          <div className={styles.ytBlock}>
            <ReactPlayer url="https://www.youtube.com/watch?v=wO02uW15_WU" playing={true} volume={0} muted={true} />
          </div>
        )}
      </section>
    </MainContainer>
  );
};

export default Timer;
