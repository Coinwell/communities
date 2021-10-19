import React from 'react';

import './App.css';
import Header from './components/Header/index';
import Communities from './components/Communities';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='pt-20'>
        <Communities />
      </main>
    </div>
  );
};

export default App;
