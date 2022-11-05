import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Ubuntu', sans-serif;
  }

  html,
  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #3d3c3c;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #3d3c3c;
  }
`;
