import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export { HeaderWrapper, HeaderLogo, NavWrapper };
