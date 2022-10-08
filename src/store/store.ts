import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import calculatorReducer from './slices/calculatorSlice';
import mobileMenuReducer from './slices/mobileMenuSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
