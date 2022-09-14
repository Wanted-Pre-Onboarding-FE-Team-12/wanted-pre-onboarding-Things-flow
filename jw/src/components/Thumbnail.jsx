import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ imgUrl }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt="user_avatar" className="" />
    </Wrapper>
  );
};

export default Thumbnail;

const Wrapper = styled.div`
  img {
    width: 100px;
    height: 100px;
    margin-right: 25px;
  }
`;
