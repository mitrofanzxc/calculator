import { FC } from 'react';
import { CalculatorWrapper } from './styled';
import { useAppSelector } from '../../store/hooks';
import { digits, signs } from '../../constants';
import { Display, Keypad } from '..';

const Calculator: FC = () => {
  const { inputValue, firstNumber, secondNumber, sign, isOperationFinish } = useAppSelector(
    ({ calculator }) => calculator,
  );

  return (
    <CalculatorWrapper>
      <Display />
      <Keypad />
    </CalculatorWrapper>
  );
};

export { Calculator };
