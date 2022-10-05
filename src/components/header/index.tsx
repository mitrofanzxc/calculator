import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderWrapper, NavWrapper } from './styled';
import { paths } from '../../constants';
import logo from '../../assets/calculator.svg';

const Header: FC = () => {
  const { main } = paths;

  return (
    <HeaderWrapper>
      <Link to={main}>
        <img src={logo} alt="logo" />
      </Link>
      <NavWrapper>
        <NavLink to={main}>Home</NavLink>
        <NavLink to="/qwe">Settings</NavLink>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export { Header };
