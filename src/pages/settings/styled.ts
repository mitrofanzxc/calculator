import styled from 'styled-components';
import { CalculatorButton } from '../../components/Keypad/styled';

const SettingsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const ButtonClearHistory = styled(CalculatorButton)``;

export { SettingsWrapper, ButtonClearHistory };
