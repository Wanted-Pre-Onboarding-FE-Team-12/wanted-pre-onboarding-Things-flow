import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

function IssueDetail() {
  const issue = useLocation().state;
  return (
    <div>
      <img
        src={`${issue.user.avatar_url}`}
        alt="issue.user.login"
        width={100}
        height={100}
      />
      <Card>
        <p>{`#${issue.number} ${issue.title}`}</p>
        <p>{`작성자: ${issue.user.login} 작성일: ${convertDate(
          issue.updated_at
        )} 코멘트: ${issue.comments}`}</p>
      </Card>
      <hr />
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </div>
  );
}

export default IssueDetail;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const convertDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${year}년 ${month}월 ${day}일`;
};
