import React, { useContext } from 'react';
import * as S from '../style';
import { Issues } from '../../../App';
import add from '../../../assets/thingsflow.png';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const value = useContext(Issues);
  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.ListBox>
      <S.ListTitle>Angular / Angular-cli</S.ListTitle>
      {value?.map(
        (
          { title, created_at, number, id, user: { login }, comments },
          index
        ) => {
          let year = created_at.slice(0, 4);
          let month = created_at.slice(5, 7);
          let day = created_at.slice(8, 10);
          let date = `${year}년 ${month}월 ${day}일`;

          return (
            <S.ListWrap key={number}>
              {index === 4 ? (
                <S.AdAnchor href="http://thingsflow.com/ko/home">
                  <div>
                    <img src={add} />
                  </div>
                </S.AdAnchor>
              ) : (
                <>
                  <S.ListHeader onClick={() => goToDetail(number)}>
                    <S.ListIssues>
                      <span>#{number}</span> <span>{title}</span>
                    </S.ListIssues>
                    <div>
                      작성자: {login}, 작성일:{date}
                    </div>
                  </S.ListHeader>
                  <S.CommentBox>
                    <span>코멘트: {comments}</span>
                  </S.CommentBox>
                </>
              )}
            </S.ListWrap>
          );
        }
      )}
    </S.ListBox>
  );
};

export default List;
