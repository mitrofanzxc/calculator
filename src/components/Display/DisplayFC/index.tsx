import { FC } from 'react';
import { useAppSelector } from '../../../store';
import { CalculatorForm, CalculatorInput, ErrorInput } from '../styled';

const DisplayFC: FC = () => {
  const { inputValue, isError } = useAppSelector(({ calculator }) => calculator);

  return (
    <CalculatorForm>
      <CalculatorInput type="text" value={inputValue} readOnly />
      {isError && <ErrorInput type="text" value={isError.toString()} readOnly />}
    </CalculatorForm>
  );
};

export { DisplayFC };
