import { FC } from 'react';
import { DisplayFC, KeypadFC } from '../..';
import { CalculatorWrapper } from '../styled';

const CalculatorFC: FC = () => {
  return (
    <CalculatorWrapper>
      <DisplayFC />
      <KeypadFC />
    </CalculatorWrapper>
  );
};

export { CalculatorFC };
