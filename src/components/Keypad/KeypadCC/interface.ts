import { ICalculatorState } from '../../../store/slices/calculatorSlice';

export interface IKeypadCC {
  calculator: ICalculatorState;
  setInputValue: any;
  deleteInputValue: any;
  addToHistory: any;
  equalInputValue: any;
  resetInputValue: any;
  changeSign: any;
}
