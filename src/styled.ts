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
  }
`;

export { GlobalStyles };
