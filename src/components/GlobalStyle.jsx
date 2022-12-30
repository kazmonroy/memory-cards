import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;

  color-scheme: light dark;
  color: #242424;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


h1, h2, h3, h4, h5 {
  font-weight: 400;
}

h1 {
  font-size: 2.488rem;
}

h2 {font-size: 2.074rem;}

h3 {font-size: 1.728rem;}

h4 {font-size: 1.44rem;}

h5 {font-size: 1.2rem;}

small, .text_small {font-size: 0.833rem;}

`;

export default GlobalStyle;
