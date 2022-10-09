import styled from 'styled-components';

const CalculatorForm = styled.form`
  max-width: 100%;
  grid-column: 1/-1;
`;

const CalculatorInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  font-size: 45px;
  text-align: right;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

export { CalculatorForm, CalculatorInput };
