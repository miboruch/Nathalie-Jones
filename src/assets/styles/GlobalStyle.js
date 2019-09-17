import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('/raleway-regular.woff') format('woff'),
        url('/raleway-regular.woff2') format('woff2');
  }
  html{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Raleway';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    background: #fcf0ec;
  }
  
  a{
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyle;
