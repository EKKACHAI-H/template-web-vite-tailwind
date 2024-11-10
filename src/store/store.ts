import { configureStore } from '@reduxjs/toolkit';
import utilsReducer from './feature/utils/utilsSlice'

export const store = configureStore({
  reducer: {
    common: utilsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;