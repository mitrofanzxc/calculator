import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

const CalculatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
`;

const CalculatorButtonClean = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/3;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
`;

const CalculatorButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 3/-1;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
`;

const CalculatorButtonEqual = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 4;
  grid-row: 6/8;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
`;

const CalculatorForm = styled.form`
  max-width: 100%;
`;

const CalculatorInputWrapper = styled.div`
  grid-column: 1/-1;
`;

const CalculatorInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0;
  font-size: 30px;
  text-align: right;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

export {
  CalculatorWrapper,
  CalculatorButton,
  CalculatorButtonClean,
  CalculatorButtonDelete,
  CalculatorButtonEqual,
  CalculatorForm,
  CalculatorInputWrapper,
  CalculatorInput,
};
