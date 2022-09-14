import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Layout from '@layouts/index';
import IssueLists from './components/IssueLists';
import IssueContext from '@store/issueStore';
import { useIntersect } from '@hooks/useIntersect';

const IndexPage = () => {
  const [pageCount, setPageCount] = useState(1);

  const { getIssueCount, getIssueList, issueList, issueCount, isLoading } =
    useContext(IssueContext);
  const isLast = issueCount === issueList.length;

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && !isLast) {
      loadMore();
    }
  });

  function loadMore() {
    setPageCount(prev => prev + 1);
  }

  useEffect(() => {
    getIssueCount();
    getIssueList({ page: pageCount });
  }, [pageCount]);

  return (
    <Layout>
      <Wrapper>
        <MainContet>
          <IssueLists issues={issueList} />
          <div ref={ref} />
        </MainContet>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  min-height: 85vh;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
    margin-top: 0;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;
const MainContet = styled.div`
  width: calc(100% - 30rem);
  margin: 0 auto;

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
    margin-top: 2em;
  }
`;

export default IndexPage;
