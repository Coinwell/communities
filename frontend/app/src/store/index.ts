import React from 'react';
import { create } from 'mobx-persist';

import { uiStore } from './ui';
import { mainStore } from './main';

const hydrate = create({ storage: localStorage });

// const hydrate = create({ storage: localStorage });

Promise.all([
  // hydrate('main', mainStore), hydrate('ui', uiStore)
]).then(() => {
  uiStore.setReady(true);
});

const ctx = React.createContext({
  ui: uiStore,
  main: mainStore
});

export const useStores = () => React.useContext(ctx);
