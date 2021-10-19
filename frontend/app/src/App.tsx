import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import './App.css';
import { useStores } from './store';
import Header from './components/Header/index';
import Home from './components/Home';

const App = () => {
  const { main } = useStores();

  useEffect(() => {
    main.getTribes();
  }, []);

  return useObserver(() => (
    <div className='app'>
      <Header />
      <main className='pt-20'>
        <Home />
      </main>
    </div>
  ));
};

export default App;
