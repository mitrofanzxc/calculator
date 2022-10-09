import { FC } from 'react';
import { useAppSelector } from '../../../store';
import { CalculatorForm, CalculatorInput } from '../styled';

const DisplayFC: FC = () => {
  const { inputValue } = useAppSelector(({ calculator }) => calculator);

  return (
    <CalculatorForm>
      <CalculatorInput type="text" value={inputValue} readOnly />
    </CalculatorForm>
  );
};

export { DisplayFC };
