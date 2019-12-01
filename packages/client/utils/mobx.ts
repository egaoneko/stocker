import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import RootStore from '../stores/RootStore';

export interface Stores {
  rootStore: RootStore;
}

function useStores(): Stores {
  return React.useContext(MobXProviderContext);
}

export default useStores;