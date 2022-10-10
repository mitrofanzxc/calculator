import { FC } from 'react';
import { useAppDispatch, clearHistory } from '../../../store';
import { ButtonThemeFC } from '../../../components';
import { SettingsWrapper, ButtonClearHistory } from '../styled';

const SettingsFC: FC = () => {
  const dispatch = useAppDispatch();

  const handleHistory = () => {
    localStorage.removeItem('history');
    dispatch(clearHistory());
  };

  return (
    <SettingsWrapper>
      <ButtonThemeFC />
      <ButtonClearHistory onClick={handleHistory}>Clear History</ButtonClearHistory>
    </SettingsWrapper>
  );
};

export { SettingsFC };
