import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { switchTheme } from '../../store/reducers/themeSlice';
import { ButtonThemeWrapper } from './styled';
import dark from '../../assets/dark.svg';
import light from '../../assets/light.svg';

const ButtonTheme: FC = () => {
  const isLightTheme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();
  console.log('isLightTheme', isLightTheme);

  return (
    <ButtonThemeWrapper onClick={() => dispatch(switchTheme(!isLightTheme))}>
      <img src={isLightTheme ? light : dark} alt="theme-logo" />
    </ButtonThemeWrapper>
  );
};

export { ButtonTheme };
