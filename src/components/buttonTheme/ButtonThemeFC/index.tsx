import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch, switchTheme } from '../../../store';
import { ButtonThemeWrapper, ButtonThemeLogo } from '../styled';
import dark from '../../../assets/dark.svg';
import light from '../../../assets/light.svg';

const ButtonThemeFC: FC = () => {
  const { isLightTheme } = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const switcher = () => {
    dispatch(switchTheme());
  };

  useEffect(() => {
    localStorage.setItem('isLightTheme', JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  return (
    <ButtonThemeWrapper onClick={switcher}>
      <span>Switch Theme</span>
      <ButtonThemeLogo src={isLightTheme ? light : dark} alt="theme-logo" />
    </ButtonThemeWrapper>
  );
};

export { ButtonThemeFC };
