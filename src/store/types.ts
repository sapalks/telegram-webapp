import { AppInitialState } from 'store/app/types';

import { store } from './index';

export type Store = {
  app: AppInitialState;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
