import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function IssueCard({ issue }) {
  return (
    <StyledLink to={`/issue/${issue}`} state={issue}>
      <Container>
        <Left>
          <Title>{`#${issue.number} ${issue.title}`}</Title>
          <span>{`작성자: ${issue.user.login} 작성일: ${convertDate(
            issue.updated_at
          )}`}</span>
        </Left>
        <Right>{`코멘트: ${issue.comments}`}</Right>
      </Container>
    </StyledLink>
  );
}

export default IssueCard;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.span`
  font-size: 1.25rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  width: 150px;
  min-width: 150px;
`;

const convertDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${year}년 ${month}월 ${day}일`;
};
