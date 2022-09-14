import React from 'react';
import { Link } from 'react-router-dom';

import IssueThumbnail from '../IssueThumbnail';

// CSS
import * as S from './style';

const IssuePreview = ({ issue }) => {
  const { number, title, user, created_at, comments } = issue;

  return (
    <S.Wrapper>
      <Link to={`issue/${number}`} className="issue-container">
        <IssueThumbnail imgUrl={user.avatar_url} />
        <S.IssueInfo>
          <header>
            <h2 className="issue-title">#{number}</h2>
            <h2 className="issue-title">{title}</h2>
          </header>
          <footer>
            <span className="date">{new Date(created_at).toDateString()}</span>
            <span className="date">코멘트: {comments}</span>
          </footer>
        </S.IssueInfo>
      </Link>
    </S.Wrapper>
  );
};

export default IssuePreview;
