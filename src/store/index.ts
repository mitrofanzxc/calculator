import { store } from './store';
import { useAppSelector, useAppDispatch } from './hooks';
import {
  setInputValue,
  addToHistory,
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
} from './slices';

export {
  store,
  useAppSelector,
  useAppDispatch,
  setInputValue,
  addToHistory,
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
};
