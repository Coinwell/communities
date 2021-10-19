import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Fuse from 'fuse.js';

import { useStores } from '../../store';
import Loader from '../Loader';
import Communitiy from './Communitiy';
import Header from './Header';

const fuseOptions = {
  keys: ['name', 'description'],
  shouldSort: true,
  // matchAllTokens: true,
  includeMatches: true,
  threshold: 0.35,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1
};

const Communities = () => {
  const { main, ui } = useStores();

  return useObserver(() => {
    const tagsFilter = ui.tags
      .filter((t: any) => t.checked === 'on')
      .map((t: any) => t.label);
    const tribes = main.tribes
      .map(t => {
        const matchCount = tagsFilter.reduce(
          (a, item: any) => (t.tags.includes(item) ? a + 1 : a),
          0
        );
        return { ...t, matchCount };
      })
      .filter((t: any) => {
        if (tagsFilter.length === 0) return true;
        return t.matchCount && t.matchCount > 0;
      });

    let theTribes = tribes;
    if (ui.searchText) {
      var fuse = new Fuse(tribes, fuseOptions);
      const res = fuse.search(ui.searchText);
      theTribes = res.map(r => r.item);
    }

    return (
      <>
        <Header />
        {theTribes.length > 0 ? (
          <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {theTribes.map(t => (
              <Communitiy {...t} key={t.uuid} />
            ))}
          </div>
        ) : (
          <p className='text-md text-gray-500 font-semibold text-center'>
            Modify search and tags filter to find more communities.
          </p>
        )}
      </>
    );
  });
};

export default Communities;
