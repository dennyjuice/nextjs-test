import React from 'react';
import Head from 'next/head';

import A from './A';

import styles from '../styles/MainContainer.module.css';

interface IMainContainer {
  title: string;
}

const MainContainer: React.FC<IMainContainer> = ({ children, title }) => {
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
          <A text="Timer" href="/timer" />
        </nav>
      </header>

      <main className={styles.container}>
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
};

export default MainContainer;
