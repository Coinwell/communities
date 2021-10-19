import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import { useStores } from '../../store';
import { useFuse, useScroll } from '../../hooks';
import { Tribe } from '../../store/main';
import Loader from '../Loader';
import Communitiy from './Communitiy';
import Header from './Header';
import Hero from './Hero';

const getFuse = useFuse;
const getScroll = useScroll;

const Communities = () => {
  const { main, ui } = useStores();

  useEffect(() => {
    main.getTribes();
  }, []);

  return useObserver(() => {
    const loading = main.tribes.length === 0;

    const tagsFilter = ui.tags
      .filter(t => t.checked === 'on')
      .map(t => t.label);

    const tribes = main.tribes
      .map(t => {
        const matchCount = tagsFilter.reduce(
          (a, item) => (t.tags.includes(item) ? a + 1 : a),
          0
        );
        return { ...t, matchCount };
      })
      .filter(t => {
        if (tagsFilter.length === 0) return true;
        return t.matchCount && t.matchCount > 0;
      });

    let theTribes = getFuse(tribes, ['name', 'description']);

    const { n, loadingMore, handleScroll } = getScroll();
    const finalTribes = theTribes.slice(0, n);

    return (
      <div
        id='main'
        className='flex flex-col items-center	overflow-auto	w-full mb-6'
        onScroll={handleScroll}
        style={{
          height: 'calc(100vh - 80px)'
        }}
      >
        <div className='communities'>
          {loading && (
            <div className='flex justify-center mt-8'>
              <Loader />
            </div>
          )}
          {!loading && (
            <>
              <Hero />
              <Header />
              {finalTribes.length > 0 ? (
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                  {finalTribes.map((t: Tribe) => (
                    <Communitiy key={t.uuid} {...t} />
                  ))}
                </div>
              ) : (
                <p className='text-md text-gray-500 font-semibold text-center'>
                  Modify search and tags filter to find more communities.
                </p>
              )}
            </>
          )}

          {loadingMore && theTribes.length !== finalTribes.length && (
            <div className='flex justify-center my-8'>
              <Loader />
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default Communities;
