import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  input, button {
    border: none;
  }
`;

export default GlobalStyle;
