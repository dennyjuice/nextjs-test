import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

import MainContainer from '../components/MainContainer';

import styles from '../styles/Home.module.css';

interface IProps {
  users: IUser[];
}

interface IUser {
  id: number;
  name: string;
}

const Home: React.FC<IProps> = ({ users }) => {
  return (
    <MainContainer title="JSON Data">
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          {user.name}
        </div>
      ))}
    </MainContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const users = response.data;

  return {
    props: { users },
  };
};
