import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.color};
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
    padding: 0 20px;
  }

  .active {
    color: #f44336;

    &::after {
      content: '';
      position: relative;
      top: 3px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: #f44336;
    }
  }

  .overflow_hidden {
    overflow: hidden;
  }

  button {
    transition: all 0.1s linear;

    &:active {
      transform: translate(2px, 2px);
    }
  }
`;

export { GlobalStyles };
