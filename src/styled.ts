import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    transition: all 0.1s linear;
  }

  main {
    padding: 0 20px;
  }

  .active {
    color: red;
  }
`;

export { GlobalStyles };
