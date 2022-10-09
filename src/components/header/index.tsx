import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeMobileMenu } from '../../store/slices/mobileMenuSlice';
import { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper } from './styled';
import { ButtonBurgerFC } from '..';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { mainFC, mainCC, settingsFC, settingsCC } = paths;
  const { isMobileMenuOpen } = useAppSelector(({ mobileMenu }) => mobileMenu);
  const dispatch = useAppDispatch();

  const handleMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <HeaderWrapper>
      <HeaderLogoWrapper to={mainFC}>
        <HeaderLogo src={logo} alt="logo" />
        <h1>Calculator</h1>
      </HeaderLogoWrapper>
      <NavWrapper isMobileMenuOpen={isMobileMenuOpen}>
        <NavLink to={mainFC} end onClick={handleMobileMenu}>
          Home (FC)
        </NavLink>
        <NavLink to={mainCC} onClick={handleMobileMenu}>
          Home (CC)
        </NavLink>
        <NavLink to={settingsFC} onClick={handleMobileMenu}>
          Settings (FC)
        </NavLink>
        <NavLink to={settingsCC} onClick={handleMobileMenu}>
          Settings (CC)
        </NavLink>
      </NavWrapper>
      <ButtonBurgerFC />
    </HeaderWrapper>
  );
};

export { Header };
