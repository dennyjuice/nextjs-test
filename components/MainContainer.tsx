import React, { useState } from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player/youtube';

import A from './A';

import styles from '../styles/MainContainer.module.css';
import useTimer from '../customHooks/useTimer';

interface IMainContainer {
  title: string;
}

const MainContainer: React.FC<IMainContainer> = ({ children, title }) => {
  const isExpired: boolean = useTimer(new Date(Date.now() + 60 * 1000));
  const [hidden, setHidden] = useState(isExpired);

  return (
    <>
      <Head>
        <title>NextJS Test TypeScript App - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.menu}>
          <A text="JSON Data" href="/" />
          <A text="Gallery" href="/gallery" />
        </nav>
      </header>

      <main className={styles.container}>
        <h1>{title}</h1>
        {children}
      </main>

      {isExpired && (
        <div className={`${styles.ytBlock} ${hidden ? styles.hidden : ''}`} onClick={() => setHidden(true)}>
          <ReactPlayer url="https://www.youtube.com/watch?v=wO02uW15_WU" playing={true} volume={0} muted={true} />
        </div>
      )}
    </>
  );
};

export default MainContainer;
