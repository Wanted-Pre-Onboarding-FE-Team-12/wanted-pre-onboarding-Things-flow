import React from 'react';
import { useParams } from 'react-router-dom';

// CSS
import * as S from './style';

const Header = () => {
  const params = useParams();
  const title = `${params.owner} / ${params.repo}`;

  return (
    <S.HeaderWrapper>
      <S.NavTitle>{title}</S.NavTitle>
    </S.HeaderWrapper>
  );
};

export default Header;
