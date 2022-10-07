import { FC } from 'react';
import { CalculatorForm, CalculatorInput } from '../styled';
import { useAppSelector } from '../../../store/hooks';

const DisplayFC: FC = () => {
  const { inputValue } = useAppSelector(({ calculator }) => calculator);

  return (
    <CalculatorForm>
      <CalculatorInput type="text" value={inputValue} readOnly />
    </CalculatorForm>
  );
};

export { DisplayFC };
