import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface ICalculatorState {
  inputValue: string;
  isOperationFinish: boolean;
  history: string[];
}

const initialState: ICalculatorState = {
  inputValue: '0',
  isOperationFinish: false,
  history: getLocalStorage('history') !== null ? getLocalStorage('history') : [],
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      if (state.inputValue === '0') {
        state.inputValue = '';
        state.inputValue += action.payload;
      } else {
        state.inputValue += action.payload;
      }
    },
    deleteInputValue: (state) => {
      if (!state.inputValue || state.inputValue.length === 1 || state.inputValue === '0') {
        state.inputValue = '0';
      } else {
        state.inputValue = state.inputValue.substring(0, state.inputValue.length - 1);
      }
    },
    equalInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    resetInputValue: (state) => {
      state.inputValue = '0';
    },
    resetAllCalculator: (state) => {
      state.inputValue = '0';
      state.isOperationFinish = false;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const {
  setInputValue,
  deleteInputValue,
  resetInputValue,
  equalInputValue,
  resetAllCalculator,
  addToHistory,
  clearHistory,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
