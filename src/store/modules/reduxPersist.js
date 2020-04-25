import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persitedReducers = persistReducer(
    {
      // app name
      key: 'react-base',
      storage,
      whitelist: ['example'],
    },
    reducers
  );
  return persitedReducers;
};
