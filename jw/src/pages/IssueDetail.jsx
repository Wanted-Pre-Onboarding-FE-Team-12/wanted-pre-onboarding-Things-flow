import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import IssueDetailContent from '../components/IssueDetailContent';
import { getIssue, useIssuesDispatch, useIssuesState } from '../context/IssueContext';
import Layout from '../layout';

const IssueDetail = () => {
  const [userId, setUserId] = useState(null);
  const params = useParams();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issue, loading, error } = state.issue;

  const fetchData = (owner, repo, issue_number) => {
    getIssue(dispatch, owner, repo, issue_number);
  };

  useEffect(() => {
    fetchData(params.owner, params.repo, params.number);
  }, []);

  if (loading || !issue) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <Layout>
      <Card data={issue} thumbnail={issue.user.avatar_url} key={issue.id} />
      <IssueDetailContent body={issue.body} />
    </Layout>
  );
};

export default IssueDetail;
