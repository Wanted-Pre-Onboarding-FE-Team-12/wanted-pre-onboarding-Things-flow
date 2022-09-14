import React from 'react';
import ReactMarkdown from 'react-markdown';

// CSS
import * as S from './style';

const myH1 = ({ children }) => {
  return (
    <S.HeadingOne>
      <h1>{children}</h1>
      <div className="underline" />
    </S.HeadingOne>
  );
};

const myH2 = ({ children }) => {
  return (
    <S.HeadingTwo>
      <h2>{children}</h2>
      <div className="underline" />
    </S.HeadingTwo>
  );
};

const myH3 = ({ children }) => {
  return (
    <S.HeadingThree>
      <h3>{children}</h3>
    </S.HeadingThree>
  );
};

const Codeblock = ({ children }) => {
  return <S.CodeBlockWrapper>{children}</S.CodeBlockWrapper>;
};

const Markdown = ({ body }) => {
  return (
    <S.MDWrapper>
      <ReactMarkdown components={{ code: Codeblock, h1: myH1, h2: myH2, h3: myH3 }}>
        {body}
      </ReactMarkdown>
    </S.MDWrapper>
  );
};

export default Markdown;
