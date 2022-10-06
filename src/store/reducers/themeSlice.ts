import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isLightTheme: boolean;
}

const localStorageIsLightTheme = localStorage.getItem('isLightTheme') || null;

const initialState: IInitialState = {
  isLightTheme: localStorageIsLightTheme ? JSON.parse(localStorageIsLightTheme) : true,
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
