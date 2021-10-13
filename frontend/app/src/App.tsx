import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import './App.css';
import { useStores } from './store';
import Header from './components/Header/index';
import Communities from './components/Communities';

const App = () => {
  const { main } = useStores();
  useEffect(() => {
    main.getTribes();
  }, []);
  return useObserver(() => (
    <div className='app'>
      <Header />
      <Communities />
    </div>
  ));
};

export default App;
