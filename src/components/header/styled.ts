import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(9 30 66 / 25%) 0px 1px 1px, rgb(9 30 66 / 13%) 0px 0px 1px 1px;

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const HeaderLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  cursor: pointer;

  @media (max-width: 480px) {
    column-gap: 5px;
  }

  h1 {
    margin: 0;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

const HeaderLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const NavWrapper = styled.nav<{ isMobileMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  transition: all 0.2s linear;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '50%' : '100%')};
    z-index: 3;
    width: 50%;
    height: 100vh;
    padding: 80px 10px 10px 40px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 20px;
    background-color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 480px) {
    left: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '20%' : '100%')};
    width: 80%;
  }

  a {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

export { HeaderWrapper, HeaderLogoWrapper, HeaderLogo, NavWrapper };
