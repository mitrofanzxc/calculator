import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import calculatorReducer from './slices/calculatorSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
