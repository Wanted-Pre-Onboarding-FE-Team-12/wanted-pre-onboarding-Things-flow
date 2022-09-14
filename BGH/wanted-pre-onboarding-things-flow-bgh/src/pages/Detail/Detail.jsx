import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Issues } from '../../App';
import * as D from '../Main/style';
import * as S from './style';

const Detail = () => {
  const value = useContext(Issues);
  const params = useParams();

  const detailData = value?.filter((el) => el.number == params.id)[0];

  const {
    number,
    title,
    user: { login, avatar_url },
    created_at,
    body,
    comments,
  } = detailData;

  let year = created_at.slice(0, 4);
  let month = created_at.slice(5, 7);
  let day = created_at.slice(8, 10);
  let date = `${year}년 ${month}월 ${day}일`;

  return (
    <D.ListBox>
      <D.ListTitle>Angular / Angular-cli</D.ListTitle>
      <S.HeaderBox>
        <S.UserImg>
          <img src={avatar_url} />
        </S.UserImg>
        <S.HeaderTitle>
          <S.TitleSpan>
            <span>#{number}</span> <span>{title}</span>
          </S.TitleSpan>
          <S.TitleInfo>
            작성자: {login}, 작성일: {date}
          </S.TitleInfo>
        </S.HeaderTitle>
        <S.TitleComment>
          <span>코멘트: {comments}</span>
        </S.TitleComment>
      </S.HeaderBox>
      <S.BodyWrap>{body}</S.BodyWrap>
    </D.ListBox>
  );
};

export default Detail;
