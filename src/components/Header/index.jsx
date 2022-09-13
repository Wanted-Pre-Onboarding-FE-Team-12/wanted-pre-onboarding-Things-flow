import React from 'react';
import * as S from './style';

const Header = ({ title, subTitle = 'angular-cli' }) => {
  return (
    <S.HeaderWrapper>
      <S.NavTitle>
        <p>{title}</p> / <p>{subTitle}</p>
      </S.NavTitle>
    </S.HeaderWrapper>
  );
};

export default Header;
