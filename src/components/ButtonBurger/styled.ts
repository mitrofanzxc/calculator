import styled from 'styled-components';

const Burger = styled.button`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerBar = styled.div<{ isMobileMenuOpen: boolean }>`
  width: 25px;
  height: 2px;
  margin: $base 0 0 0;
  border-radius: 25px;
  transition: all 0.2s linear;
  background-color: rgba(0, 0, 0, 1);

  &:nth-child(1) {
    margin-top: 0;
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? 'translate(0px, 4px) rotate(45deg)' : 'translate(0px, 0px) rotate(0deg)'};
  }

  &:nth-child(2) {
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen
        ? 'translate(0px, -3px) rotate(-45deg)'
        : 'translate(0px, 0px) rotate(0deg)'};
  }
`;

const Shadow = styled.div<{ isMobileMenuOpen: boolean }>`
  display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export { Burger, BurgerBar, Shadow };
