import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

html, body, #root {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #3d3c3c;
}`;
