import calculatorReducer, {
  setInputValue,
  addToHistory,
  clearHistory,
  deleteInputValue,
  equalInputValue,
  resetAllCalculator,
  resetInputValue,
} from './calculatorSlice';
import mobileMenuReducer, {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
} from './mobileMenuSlice';
import themeReducer, { switchLightTheme, switchDarkTheme, switchTheme } from './themeSlice';

export {
  calculatorReducer,
  setInputValue,
  addToHistory,
  clearHistory,
  deleteInputValue,
  equalInputValue,
  resetAllCalculator,
  resetInputValue,
  mobileMenuReducer,
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  themeReducer,
  switchLightTheme,
  switchDarkTheme,
  switchTheme,
};
