import { FC } from 'react';
import {
  CalculatorWrapper,
  CalculatorButton,
  CalculatorButtonClean,
  CalculatorButtonDelete,
  CalculatorButtonEqual,
  CalculatorForm,
  CalculatorInput,
} from './styled';

const Calculator: FC = () => {
  return (
    <CalculatorWrapper>
      <CalculatorForm>
        <CalculatorInput type="text" readOnly />
      </CalculatorForm>
      <CalculatorButtonClean>C</CalculatorButtonClean>
      <CalculatorButton>&plusmn;</CalculatorButton>
      <CalculatorButtonDelete>&#8594;</CalculatorButtonDelete>
      <CalculatorButton>+</CalculatorButton>
      <CalculatorButton>-</CalculatorButton>
      <CalculatorButtonEqual>=</CalculatorButtonEqual>
      <CalculatorButton>&times;</CalculatorButton>
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
      <CalculatorButtonClean>0</CalculatorButtonClean>
      <CalculatorButton>&sdot;</CalculatorButton>
    </CalculatorWrapper>
  );
};

export { Calculator };
