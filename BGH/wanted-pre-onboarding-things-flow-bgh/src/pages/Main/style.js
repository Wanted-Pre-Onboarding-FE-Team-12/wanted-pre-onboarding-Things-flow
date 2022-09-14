import styled from 'styled-components';

export const MainBox = styled.div`
  width: 1000px;
  height: 800px;
  margin: auto;
`;

export const ListBox = styled.div`
  width: 500px;
  height: 800px;
  margin: 200px auto;
  border: 5px solid black;
  overflow: auto;
`;

export const ListTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 20px 0 50px 0;
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 80px;
  margin: 0 10px 0 10px;
  border-bottom: 3px solid lightgrey;
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  div:nth-child(2) {
    font-size: 13px;
    margin: 0 5px;
  }
`;

export const ListIssues = styled.div`
  display: flex;

  span {
    font-size: 16px;
    margin: 5px 5px;
  }
`;

export const CommentBox = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const AdAnchor = styled.a`
  width: 100px;
  margin: 0 auto;
  cursor: pointer;

  img {
    width: 100px;
    height: 80px;
  }
`;
