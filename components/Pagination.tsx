import React from 'react';

import styles from '../styles/Pagination.module.css';

interface IPaginationProps {
  itemsPerPage: number;
  itemsCount: number;
  currentPage: number;
  changePage: (number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ itemsPerPage, itemsCount, currentPage, changePage }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.floor(itemsCount / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((number: number) => (
        <a
          href="#"
          key={number}
          className={`${styles.pageItem}  ${number === currentPage && styles.isActive}`}
          onClick={() => changePage(number)}
        >
          <li>{number}</li>
        </a>
      ))}
    </ul>
  );
};

export default Pagination;
