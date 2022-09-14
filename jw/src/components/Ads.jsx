import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ads from '../assets/images/ads.png';

const Ads = ({ imgUrl }) => {
  const handleClick = () => {
    window.location.href = 'https://thingsflow.com/ko/home';
    return null;
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.ImgWrapper>
        <img src={ads} alt="user_avatar" className="" />
      </S.ImgWrapper>
      <S.ContentWrapper>
        <h2>The future of the creator economy with technology </h2>
        <h3>우리는 창조의 즐거움을 누리는 세상을 만듭니다.</h3>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Ads;

const S = {
  ImgWrapper: styled.div`
    img {
      width: 100px;
      height: 100px;
      margin-right: 25px;
    }
  `,
  Wrapper: styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    background: rgb(223, 223, 223);
  `,
  ContentWrapper: styled.div``,
};
