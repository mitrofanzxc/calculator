import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper } from './styled';
import { ButtonBurgerFC } from '..';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { mainFC, mainCC, settingsFC, settingsCC } = paths;

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
        <NavLink to={settingsFC}>Settings (FC)</NavLink>
        <NavLink to={settingsCC}>Settings (CC)</NavLink>
        <ButtonBurgerFC />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export { Header };
