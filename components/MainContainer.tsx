import React from 'react';
import Head from 'next/head';

import A from './A';

import styles from '../styles/MainContainer.module.css';

const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS Test TypeScript App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.menu}>
        <A text="JSON Data" href="/" />
        <A text="Gallery" href="/gallery" />
        <A text="Countdown Timer" href="/timer" />
      </nav>

      <main className={styles.container}>{children}</main>
    </>
  );
};

export default MainContainer;
