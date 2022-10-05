import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isLightTheme: boolean;
}

const initialState: IInitialState = {
  isLightTheme: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action: PayloadAction<boolean>) => {
      state.isLightTheme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
