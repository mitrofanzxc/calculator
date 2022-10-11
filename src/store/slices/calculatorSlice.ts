import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

export interface ICalculatorState {
  inputValue: string;
  isOperationFinish: boolean;
  history: string[];
  isError: Error | null;
}

const initialState: ICalculatorState = {
  inputValue: '0',
  isOperationFinish: false,
  history: getLocalStorage('history') !== null ? getLocalStorage('history') : [],
  isError: null,
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
      state.history = [];
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.isError = action.payload;
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
  setError,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
