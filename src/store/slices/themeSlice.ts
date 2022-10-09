import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface IThemeState {
  isLightTheme: boolean;
}

const initialState: IThemeState = {
  isLightTheme: getLocalStorage('isLightTheme') ? getLocalStorage('isLightTheme') : true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchLightTheme: (state) => {
      state.isLightTheme = true;
    },
    switchDarkTheme: (state) => {
      state.isLightTheme = false;
    },
    switchTheme: (state, action: PayloadAction<boolean>) => {
      state.isLightTheme = action.payload;
    },
  },
});

export const { switchLightTheme, switchDarkTheme, switchTheme } = themeSlice.actions;
export default themeSlice.reducer;