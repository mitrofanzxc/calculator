import { configureStore } from '@reduxjs/toolkit';
import { themeReducer, calculatorReducer, mobileMenuReducer } from '../slices';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
