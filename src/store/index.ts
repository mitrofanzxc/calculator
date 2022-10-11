import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import {
  setInputValue,
  addToHistory,
  clearHistory,
  deleteInputValue,
  equalInputValue,
  resetAllCalculator,
  resetInputValue,
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  switchLightTheme,
  switchDarkTheme,
  switchTheme,
  setError,
} from './slices';

export {
  store,
  useAppSelector,
  useAppDispatch,
  setInputValue,
  addToHistory,
  clearHistory,
  deleteInputValue,
  equalInputValue,
  resetAllCalculator,
  resetInputValue,
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  switchLightTheme,
  switchDarkTheme,
  switchTheme,
  setError,
};
