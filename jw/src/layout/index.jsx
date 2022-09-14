import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/Header';
import theme from '../styles/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <Header />
        <main>{children}</main>
      </S.Wrapper>
    </ThemeProvider>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
};
export default Layout;
