import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonTheme } from '..';
import { HeaderWrapper, HeaderLogo, NavWrapper } from './styled';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { main } = paths;

  return (
    <HeaderWrapper>
      <HeaderLogo to={main}>
        <img src={logo} alt="logo" />
      </HeaderLogo>
      <h1>Calculator</h1>
      <NavWrapper>
        <NavLink to={main}>Home</NavLink>
        <NavLink to="/qwe">Settings</NavLink>
        <ButtonTheme />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export { Header };
