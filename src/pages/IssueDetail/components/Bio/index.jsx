import React from 'react';

// CSS
import * as S from './style';

const Bio = ({ user, date, comments }) => {
  return (
    <S.BioWrapper>
      <div className="bio-image">
        <img src={user?.avatar_url} alt="author" class="author-image" />
      </div>
      <div className="bio-content">
        <div className="user-info">
          <span className="author-name">{user?.login}</span>
          <span className="date">{new Date(date).toDateString()}</span>
        </div>
        <div>
          <span className="comments">코멘트 수: {comments}</span>
        </div>
      </div>
    </S.BioWrapper>
  );
};

export default Bio;
