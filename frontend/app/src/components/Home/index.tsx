import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { useStores } from '../../store';
import Communities from '../Communities';
import Hero from '../Communities/Hero';
import Loader from '../Loader';

const Home = () => {
  const { main } = useStores();

  return useObserver(() => {
    const loading = main.tribes.length === 0;

    return (
      <div className='home'>
        {loading && (
          <div className='flex justify-center mt-8'>
            <Loader />
          </div>
        )}
        {!loading && (
          <div className='communities'>
            <Hero />
            <Communities />
          </div>
        )}
      </div>
    );
  });
};

export default Home;
