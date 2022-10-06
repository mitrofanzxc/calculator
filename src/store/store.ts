import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeSlice';
import calculatorReducer from './reducers/calculatorSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
