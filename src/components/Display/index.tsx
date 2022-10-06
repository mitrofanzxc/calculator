import { FC } from 'react';
import { CalculatorForm, CalculatorInput } from './styled';
import { useAppSelector } from '../../store/hooks';

const Display: FC = () => {
  const { inputValue } = useAppSelector(({ calculator }) => calculator);

  return (
    <CalculatorForm>
      <CalculatorInput type="text" value={inputValue} readOnly />
    </CalculatorForm>
  );
};

export { Display };
