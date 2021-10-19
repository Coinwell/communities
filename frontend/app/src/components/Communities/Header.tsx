import React from 'react';

import Search from '../Search';
import TagListbox from './TagListbox';

const Header = () => {
  return (
    <div
      className='flex flex-col md:flex-row items-center justify-between my-10 py-4 px-6 md:px-0 bg-white'
      style={{ top: 80 }}
    >
      <div className='mb-4 md:mb-0 w-full md:w-3/6'>
        <Search />
      </div>

      <div className='w-full md:w-auto'>
        <TagListbox />
      </div>
    </div>
  );
};

export default Header;
