import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
`;

export const UserImg = styled.div`
  margin: 10px 10px 0 0;
  img {
    height: 50px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleSpan = styled.div`
  display: flex;

  span {
    margin: 10px 5px 0 0;
  }
`;

export const TitleInfo = styled.div`
  margin: 5px;
  font-size: 14px;
`;

export const TitleComment = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`;

export const BodyWrap = styled.div`
  width: 95%;
  margin: 30px auto;
`;
