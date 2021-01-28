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
  const [gmtNumber, setGmtNumber] = useState('3');
  const isExpired: boolean = useTimer(endDate, `${gmtNumber.length > 1 ? '-' : '+'}0${gmtNumber}:00`);

  return (
    <MainContainer title="Timer">
      <section className={styles.timer}>
        <label>
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
        </label>

        <label>
          GMT:
          <input
            type="number"
            min="-7"
            max="7"
            defaultValue={gmtNumber}
            onChange={(e) => setGmtNumber(e.target.value)}
          />
        </label>

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
