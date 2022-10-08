import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface IMobileMenuState {
  isMobileMenuOpen: boolean;
}

const initialState: IMobileMenuState = {
  isMobileMenuOpen: getLocalStorage('isMobileMenuOpen')
    ? getLocalStorage('isMobileMenuOpen')
    : false,
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
    toggleMobileMenu: (state, action: PayloadAction<boolean>) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { openMobileMenu, closeMobileMenu, toggleMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
