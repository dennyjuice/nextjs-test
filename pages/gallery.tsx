import React from 'react';

import styles from '../styles/Gallery.module.css';
import MainContainer from '../components/MainContainer';

const Gallery: React.FC = () => {
  return (
    <MainContainer>
      <div className={styles.gallery}>Gallery</div>
    </MainContainer>
  );
};

export default Gallery;
