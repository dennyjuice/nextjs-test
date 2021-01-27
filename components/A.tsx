import React from 'react';
import Link from 'next/link';

import styles from '../styles/A.module.css';

interface ILink {
  text: string;
  href: string;
}

const A: React.FC<ILink> = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};

export default A;
