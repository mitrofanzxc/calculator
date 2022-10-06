import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils';

interface IInitialState {
  inputValue: string;
  firstNumber: string;
  secondNumber: string;
  sign: string;
  isOperationFinish: boolean;
  history: string[];
}

const initialState: IInitialState = {
  inputValue: '0',
  firstNumber: '',
  secondNumber: '',
  sign: '',
  isOperationFinish: false,
  history: getLocalStorage('history') ? getLocalStorage('history') : [],
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
      state.firstNumber = '';
      state.secondNumber = '';
      state.sign = '';
      state.isOperationFinish = false;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
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
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
