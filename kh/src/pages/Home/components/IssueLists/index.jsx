import React from 'react';

import IssuePreview from '../IssuePreview';
import logo from '@assets/tf-logo.png';

// CSS
import * as S from './style';

const IssueLists = ({ issues }) => {
  return (
    <S.IssueListsWrapper>
      {issues
        ? issues.map((issue, idx) => (
            <>
              {idx === 4 && (
                <S.LogoContainer
                  onClick={() => window.open('https://thingsflow.com/ko/home', '_blank')}
                >
                  <img className="tf-logo" src={logo} alt="ad-img" />
                </S.LogoContainer>
              )}
              <IssuePreview key={idx} issue={issue} />
            </>
          ))
        : ''}
    </S.IssueListsWrapper>
  );
};

export default IssueLists;
