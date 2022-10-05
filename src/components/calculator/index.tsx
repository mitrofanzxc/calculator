import { FC } from 'react';
import {
  CalculatorWrapper,
  CalculatorButton,
  CalculatorButtonClean,
  CalculatorButtonDelete,
  CalculatorButtonEqual,
  CalculatorForm,
  CalculatorInputWrapper,
  CalculatorInput,
} from './styled';

const Calculator: FC = () => {
  return (
    <CalculatorWrapper>
      <CalculatorInputWrapper>
        <CalculatorForm>
          <CalculatorInput type="text" readOnly />
        </CalculatorForm>
      </CalculatorInputWrapper>
      <CalculatorButtonClean>C</CalculatorButtonClean>
      <CalculatorButtonDelete>&larr;</CalculatorButtonDelete>
      <CalculatorButton>+</CalculatorButton>
      <CalculatorButton>-</CalculatorButton>
      <CalculatorButtonEqual>&times;</CalculatorButtonEqual>
      <CalculatorButton>&divide;</CalculatorButton>
      <CalculatorButton>7</CalculatorButton>
      <CalculatorButton>8</CalculatorButton>
      <CalculatorButton>9</CalculatorButton>
      <CalculatorButton>&#40;</CalculatorButton>
      <CalculatorButton>4</CalculatorButton>
      <CalculatorButton>5</CalculatorButton>
      <CalculatorButton>6</CalculatorButton>
      <CalculatorButton>&#41;</CalculatorButton>
      <CalculatorButton>1</CalculatorButton>
      <CalculatorButton>2</CalculatorButton>
      <CalculatorButton>3</CalculatorButton>
      <CalculatorButton>=</CalculatorButton>
      <CalculatorButtonClean>0</CalculatorButtonClean>
      <CalculatorButton>&sdot;</CalculatorButton>
    </CalculatorWrapper>
  );
};

export { Calculator };
