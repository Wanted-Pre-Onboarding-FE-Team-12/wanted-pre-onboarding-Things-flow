import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import useIntersect from '../hooks/useIntersect';

import Ads from '../components/Ads';
import Card from '../components/Card';

import { getIssues, useIssuesDispatch, useIssuesState, getRepo } from '../context/IssueContext';
import Layout from '../layout';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const params = useParams();
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
    observer.unobserve(entry.target);
    const hasNextPage = Math.abs(limitPage / 30) > page;
    if (hasNextPage && !loading && !repoLoading) {
      fetchData(params.owner, params.repo, page);
    }
  });

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <Layout>
      <S.Wrapper>
        {issues
          ? issues.map((issue, i) => (
              <React.Fragment key={i}>
                <Link to={`issue/${issue.number}`}>
                  <Card data={issue} thumbnail={issue.user.avatar_url} key={issue.id} />
                </Link>
                {i === 3 ? <Ads /> : ''}
              </React.Fragment>
            ))
          : ''}
        {loading || (repoLoading && <div>loading...</div>)}
        <S.Target ref={ref} />
      </S.Wrapper>
    </Layout>
  );
};

const S = {
  Target: styled.div`
    height: 1px;
  `,
  Wrapper: styled.div`
    margin: 10px;

    a {
      text-decoration: none;
      color: black;
    }
  `,
};

export default IssueList;
