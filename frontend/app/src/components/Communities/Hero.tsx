import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { useStores } from '../../store';

const Hero = () => {
  const { main, ui } = useStores();

  return useObserver(() => {
    const tribes = main.tribes;
    const zion = tribes.find(t => t.name === 'Zion');

    return (
      <div className='flex flex-wrap lg items-center my-10 bg-white '>
        <div className='bg-white w-full xl:w-1/2  order-2	xl:order-1'>
          <div className='mx-10 xl:mx-26 text-center xl:text-left'>
            <h1 className='text-6xl font-bold mt-16'>Zion Communities</h1>

            <div className='w-full sm: xl:w-2/3 mt-16'>
              <h2 className=' text-4xl font-bold text-gray-400 tracking-wide'>
                Join our{' '}
                <span className='text-gray-800'> {tribes.length} </span>{' '}
                communities.
              </h2>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-full xl:w-1/2 order-1 xl:order-2'>
          <img
            src={
              zion?.img ||
              'https://memes.getzion.com/public/92N2A86OaoocWD6t7cv40wKG1HYF8rGs8nYnqKrYcDE='
            }
            className='w-60 h-60'
            alt=''
          />
        </div>
      </div>
    );
  });
};

export default Hero;
