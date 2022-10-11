import { FC, useEffect, MouseEvent } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  setInputValue,
  deleteInputValue,
  equalInputValue,
  resetInputValue,
  addToHistory,
  setError,
} from '../../../store';
import { calcTotalMiddleware } from '../../../utils';
import { CalculatorButton, CalculatorButtonClean, CalculatorButtonEqual } from '../styled';

const KeypadFC: FC = () => {
  const { inputValue, history } = useAppSelector(({ calculator }) => calculator);
  const dispatch = useAppDispatch();

  const handleSetInputValue = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const value = target.textContent as string;
    dispatch(setInputValue(value));
  };

  const handleDeleteInputValue = () => {
    dispatch(deleteInputValue());
  };

  const handleEqualTotalValue = () => {
    try {
      dispatch(equalInputValue(calcTotalMiddleware(inputValue).toString()));
      dispatch(addToHistory(inputValue));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error));
      }
    }
  };

  const handleClearInputValue = () => {
    dispatch(resetInputValue());
  };

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  return (
    <>
      <CalculatorButton onClick={handleClearInputValue}>C</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>%</CalculatorButton>
      <CalculatorButton>&plusmn;</CalculatorButton>
      <CalculatorButton onClick={handleDeleteInputValue}>&#8594;</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>+</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>-</CalculatorButton>
      <CalculatorButtonEqual onClick={handleEqualTotalValue}>=</CalculatorButtonEqual>
      <CalculatorButton onClick={handleSetInputValue}>*</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>/</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>7</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>8</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>9</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>&#40;</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>4</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>5</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>6</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>&#41;</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>1</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>2</CalculatorButton>
      <CalculatorButton onClick={handleSetInputValue}>3</CalculatorButton>
      <CalculatorButtonClean onClick={handleSetInputValue}>0</CalculatorButtonClean>
      <CalculatorButton onClick={handleSetInputValue}>.</CalculatorButton>
    </>
  );
};

export { KeypadFC };
