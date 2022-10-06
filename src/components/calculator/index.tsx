import { FC } from 'react';
import { CalculatorWrapper } from './styled';
import { Display, Keypad } from '..';

const Calculator: FC = () => {
  return (
    <CalculatorWrapper>
      <Display />
      <Keypad />
    </CalculatorWrapper>
  );
};

export { Calculator };
