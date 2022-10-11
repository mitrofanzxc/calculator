import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface IThemeState {
  isLightTheme: boolean;
}

const initialState: IThemeState = {
  isLightTheme: getLocalStorage('isLightTheme') !== null ? getLocalStorage('isLightTheme') : true,
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
    switchTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { switchLightTheme, switchDarkTheme, switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
