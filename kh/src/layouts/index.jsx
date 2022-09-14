import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import Header from '@components/Header';

// CSS
import * as S from './style';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <S.Wrapper>
        <main>{children}</main>
      </S.Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
