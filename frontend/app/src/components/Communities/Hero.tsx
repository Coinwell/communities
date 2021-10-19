import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { useStores } from '../../store';

const Hero = () => {
  const { main } = useStores();

  return useObserver(() => {
    const tribes = main.tribes;

    return (
      <div className='flex flex-col items-center my-1 bg-white mt-10 mb-6'>
        <div className='mx-10 xl:mx-26 text-center xl:text-left'>
          <h1 className='text-5xl font-bold'>Zion Communities</h1>
        </div>
        <h2 className='text-3xl font-bold text-gray-400 text-center mt-4'>
          Join our <span className='text-gray-800'> {tribes.length} </span>{' '}
          communities.
        </h2>
      </div>
    );
  });
};

export default Hero;
