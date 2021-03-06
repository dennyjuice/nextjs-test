import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from '../styles/Gallery.module.css';
import MainContainer from '../components/MainContainer';
import Pagination from '../components/Pagination';
import { GetStaticProps } from 'next';

interface IProps {
  images: string[];
}

const Gallery: React.FC<IProps> = ({ images }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getImgsOffset(images, 10 * currentPage);
  }, [images, currentPage]);

  const getImgsOffset = (arr: string[], offset: number): void => {
    setPhotos(() => {
      return arr.slice(offset - 10, offset);
    });
  };

  const changePage = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <MainContainer title="Gallery">
      <section className={styles.gallery}>
        {photos.map((photo) => {
          return (
            <figure key={photo}>
              <img className={styles.image} src={photo} alt="" />
            </figure>
          );
        })}
      </section>
      <Pagination itemsPerPage={10} itemsCount={images.length} currentPage={currentPage} changePage={changePage} />
    </MainContainer>
  );
};

export default Gallery;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(`https://dog.ceo/api/breed/hound/afghan/images`);
  const images = response.data.message;

  return {
    props: { images },
  };
};
