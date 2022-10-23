import { createGlobalStyle } from 'styled-components';

interface IGlobalStyles {
  isMobileMenuOpen: boolean;
}

const GlobalStyles = createGlobalStyle<IGlobalStyles>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.color};
    overflow: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'hidden' : '	visible')};
    transition: all 0.1s linear;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
    transition: all 0.1s linear;

    &:hover {
      color: #f44336;
    }
  }

  main {
    margin-top: 20px;
    padding: 0 20px;

    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }

  .active {
    position: relative;
    color: #f44336;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #f44336;
    }
  }

  button {
    transition: all 0.1s linear;

    &:active {
      transform: translate(2px, 2px);
    }
  }
`;

export { GlobalStyles };
