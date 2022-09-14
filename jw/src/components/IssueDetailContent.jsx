import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const IssueDetailContent = ({ body }) => {
  return (
    <Wrapper>
      <ReactMarkdown>{body}</ReactMarkdown>
    </Wrapper>
  );
};

export default IssueDetailContent;

const Wrapper = styled.div`
  border-top: 1px solid;
  margin-top: 2rem;
  img {
    width: 100px;
    height: 100px;
    margin-right: 25px;
  }
`;
