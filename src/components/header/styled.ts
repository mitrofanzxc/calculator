import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const HeaderLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  cursor: pointer;

  h1 {
    margin: 0;
    text-transform: uppercase;

    // @media (max-width: 768px) {
    //   display: none;
    // }
  }
`;

const HeaderLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;

  a {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

export { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper };
