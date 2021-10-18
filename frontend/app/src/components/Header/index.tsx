import React from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-center h-20 fixed inset-0 z-30 py-2 bg-white header'>
      <img className='h-10 w-30' src='/static/logo.jpg' alt='Logo' />
    </header>
  );
};

export default Header;
