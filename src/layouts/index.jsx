import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from '@components/Header';
import siteData from '@constants/variables';

// CSS
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import * as S from './style';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header title={siteData.OWNER} />
      <S.Wrapper>
        <main>{children}</main>
      </S.Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
