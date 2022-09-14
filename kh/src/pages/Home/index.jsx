import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Layout from '@layouts/index';
import IssueLists from './components/IssueLists';

import { useIntersect } from '@hooks/useIntersect';
import { getIssues, getRepo, useIssuesDispatch, useIssuesState } from 'context/IssueContext';

const IndexPage = () => {
  const params = useParams();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const [page, setPage] = useState(1);
  const [limitPage, setLimitPage] = useState(0);

  const { data: issues, loading, error } = state.issues;
  const { data: repo, loading: repoLoading, error: repoError } = state.repo;

  const fetchData = (owner, repo, page) => {
    getIssues(dispatch, owner, repo, page);
    getRepo(dispatch, owner, repo);
    setPage(cur => cur + 1);
  };

  useEffect(() => {
    fetchData(params.owner, params.repo, page);
  }, []);

  useEffect(() => {
    if (repo) setLimitPage(repo.open_issues_count);
  }, [repo]);

  const ref = useIntersect(async (entry, observer) => {
    const hasNextPage = Math.abs(limitPage / 30) > page;
    observer.unobserve(entry.target);
    if (hasNextPage && !loading && !repoLoading) {
      fetchData(params.owner, params.repo, page);
    }
  });

  if (loading || repoLoading) return <div>로딩중..</div>;
  if (error || repoError) return <div>에러가 발생했습니다</div>;

  return (
    <Layout>
      <Wrapper>
        <MainContet>
          <IssueLists issues={issues} />
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
