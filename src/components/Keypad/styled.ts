import styled from 'styled-components';

const CalculatorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  -moz-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
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
  -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  -moz-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
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
  -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  -moz-box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  background-color: #f2f2f2;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
`;

export { CalculatorButton, CalculatorButtonClean, CalculatorButtonEqual };
