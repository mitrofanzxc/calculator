import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonTheme } from '..';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper } from './styled';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { main } = paths;

  return (
    <HeaderWrapper>
      <HeaderLogoWrapper to={main}>
        <HeaderLogo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </HeaderLogoWrapper>
      <NavWrapper>
        <NavLink to={main}>Home</NavLink>
        <NavLink to="/qwe">Settings</NavLink>
        <ButtonTheme />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export { Header };
