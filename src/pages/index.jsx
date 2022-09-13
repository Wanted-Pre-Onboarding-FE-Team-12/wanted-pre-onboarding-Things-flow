import React from 'react';
import styled from 'styled-components';

import Layout from '@layouts/index';

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <MainContet></MainContet>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: row-reverse;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
    margin-top: 0;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;
const MainContet = styled.div`
  width: calc(100% - 230px - 7rem);
  margin-right: 7rem;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
    margin-top: 2em;
  }
`;

export default IndexPage;
