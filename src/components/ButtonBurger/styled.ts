import styled from 'styled-components';

const Burger = styled.button`
  position: relative;
  display: none;
  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerBar = styled.div`
  width: 16px;
  height: 2px;
  margin: $base 0 0 0;
  border-radius: 16px;
  transition: all 0.2s linear;
  background-color: black;

  &:first-child {
    margin-top: 0;
  }
`;

const Shadow = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

export { Burger, BurgerBar, Shadow };
