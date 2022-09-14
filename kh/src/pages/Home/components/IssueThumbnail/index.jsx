import React from 'react';

// CSS
import * as S from './style';

const IssueThumbnail = ({ imgUrl }) => {
  return (
    <S.ThumbnailWrapper>
      <img src={imgUrl} alt="user_avatar" className="ads-img" />
    </S.ThumbnailWrapper>
  );
};

export default IssueThumbnail;
