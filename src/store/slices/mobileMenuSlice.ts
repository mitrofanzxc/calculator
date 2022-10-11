import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface IMobileMenuState {
  isMobileMenuOpen: boolean;
}

const initialState: IMobileMenuState = {
  isMobileMenuOpen:
    getLocalStorage('isMobileMenuOpen') !== null ? getLocalStorage('isMobileMenuOpen') : false,
};

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.isMobileMenuOpen = true;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const { openMobileMenu, closeMobileMenu, toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
