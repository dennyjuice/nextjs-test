import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/Timer.module.css';
import MainContainer from '../components/MainContainer';
import useTimer from '../customHooks/useTimer';
import Countdown from '../components/Countdown';

const Timer: React.FC = () => {
  const defaultDate = new Date(Date.now() + 60 * 1000);
  const [endDate, setEndDate] = useState(defaultDate);
  const [gmtNumber, setGmtNumber] = useState(new Date().getTimezoneOffset() / -60);
  const timer = useTimer(endDate, gmtNumber);

  return (
    <MainContainer title="Timer">
      <section className={styles.timer}>
        <label>
          Play Video at:
          <DatePicker
            className={styles.picker}
            selected={timer.countTo}
            onChange={(date) => setEndDate(() => date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy HH:mm"
          />
        </label>

        <label>
          GMT:
          <input
            type="number"
            min="-11"
            max="12"
            defaultValue={gmtNumber}
            onChange={(e) => setGmtNumber(+e.target.value)}
          />
        </label>

        {timer.isExpired ? (
          <div className={styles.ytBlock}>
            <ReactPlayer url="https://www.youtube.com/watch?v=wO02uW15_WU" playing={true} volume={0} muted={true} />
          </div>
        ) : (
          <Countdown countTo={endDate} gmt={gmtNumber} />
        )}
      </section>
    </MainContainer>
  );
};

export default Timer;
