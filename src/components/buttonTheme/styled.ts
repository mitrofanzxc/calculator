import styled from 'styled-components';
import { CalculatorButton } from '../Keypad/styled';

const ButtonThemeWrapper = styled(CalculatorButton)`
  font-size: 22px;
  font-weight: 600;
`;

const ButtonThemeLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export { ButtonThemeWrapper, ButtonThemeLogo };
