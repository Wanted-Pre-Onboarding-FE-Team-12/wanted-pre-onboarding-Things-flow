import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
  font-size: 62.5%;
}
body {
  --bgColor: ${props => props.theme.colors.primary8};
  --textColor: ${props => props.theme.colors.primary2};
  --contentBgColor: ${props => props.theme.colors.primary9};
  --contentTextColor: ${props => props.theme.colors.primary3};
  --headingColor: ${props => props.theme.colors.primary2};
  --linkColor: ${props => props.theme.colors.primary5};
  --categoryBordewrColor: ${props => props.theme.colors.primary5};
  --regularFontWeight: ${props => props.theme.text.fontWeight3};
  --boldFontWeight: ${props => props.theme.text.fontWeight4};
  background: var(--bgColor);
  font-family: "Noto Sans KR";
  color: var(--textColor);
  margin: 0;
}
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: .2s;
    :focus{
      outline: none;
    }
  }
  a:active,
  a:hover {
    outline: 0;
  }
  img {
    border: 0;
  }
  figure {
    margin: 1rem 40px;
  }
  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-size: 1rem;
  }
  pre {
    overflow: auto;
  }
  button,
  input,
  optgroup,
  select {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  html input[type="button"], /* 1 */
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
  }
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  
  ul{
    list-style:none;
  }
`;
