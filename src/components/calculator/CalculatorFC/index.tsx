import { FC } from 'react';
import { CalculatorWrapper } from '../styled';
import { DisplayFC, KeypadFC } from '../..';

const CalculatorFC: FC = () => {
  return (
    <CalculatorWrapper>
      <DisplayFC />
      <KeypadFC />
    </CalculatorWrapper>
  );
};

export { CalculatorFC };
