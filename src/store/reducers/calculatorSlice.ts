import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  inputValue: string;
  firstNumber: string;
  secondNumber: string;
  sign: string;
  isOperationFinish: boolean;
}

const initialState: IInitialState = {
  inputValue: '0',
  firstNumber: '',
  secondNumber: '',
  sign: '',
  isOperationFinish: false,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    resetAllCalculator: (state) => {
      state.inputValue = '0';
      state.firstNumber = '';
      state.secondNumber = '';
      state.sign = '';
      state.isOperationFinish = false;
    },
  },
});

export const { setInputValue, resetAllCalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;
