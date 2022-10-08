import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonTheme } from '..';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper } from './styled';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { mainFC, mainCC, settings } = paths;

  return (
    <HeaderWrapper>
      <HeaderLogoWrapper to={mainFC}>
        <HeaderLogo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </HeaderLogoWrapper>
      <NavWrapper>
        <NavLink to={mainFC} end>
          Home (FC)
        </NavLink>
        <NavLink to={mainCC}>Home (CC)</NavLink>
        <NavLink to={settings}>Settings</NavLink>
        <ButtonTheme />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export { Header };
