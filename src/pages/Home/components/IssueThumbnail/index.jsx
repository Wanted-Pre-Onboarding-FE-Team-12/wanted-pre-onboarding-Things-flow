import React from 'react';

import * as S from './style';

const IssueThumbnail = ({ imgUrl }) => {
  return (
    <S.ThumbnailWrapper>
      <img src={imgUrl} alt="user_avatar" className="" />
    </S.ThumbnailWrapper>
  );
};

export default IssueThumbnail;
