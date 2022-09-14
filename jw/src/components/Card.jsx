import React, { useEffect } from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

function Card({ data, thumbnail }) {
  const date = new Date(data.created_at);

  const formatedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  return (
    <S.Wrapper>
      {thumbnail ? <Thumbnail imgUrl={thumbnail} alt="avatar_url" /> : ''}
      <S.TitleWrapper>
        <div>
          <h3>
            #{data.number} {data.title}
          </h3>
        </div>
        <div>
          <S.CardInfo>
            <div>{data.user.login}</div>
            <div>{formatedDate}</div>
          </S.CardInfo>
        </div>
      </S.TitleWrapper>
      <S.CommentWrapper>comments:{data.comments}</S.CommentWrapper>
    </S.Wrapper>
  );
}

const S = {
  CardInfo: styled.div`
    display: flex;
    align-items: center;
    div {
      margin-right: 10px;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  TitleWrapper: styled.div`
    width: 100%;
  `,
  CommentWrapper: styled.div`
    margin-left: 50px;
  `,
};

export default Card;
