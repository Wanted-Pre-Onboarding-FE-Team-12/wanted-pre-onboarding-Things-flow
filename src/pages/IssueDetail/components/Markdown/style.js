import styled from 'styled-components';

export const MDWrapper = styled.div` 
ul {
  list-style-type: circle;
}
ul,
ol {
  margin: 1.2rem 0 2rem;
  padding: 0 4rem;
  font-size: 1.7rem;
  line-height: 1.7;
  font-weight: 300;
}
/* paragraph */
p {
  font-size: 1.7rem;
  line-height: 1.7;
  font-weight: var(--regularFontWeight)
  margin: 1.2rem 0;
  a {
    color: rgb(32, 168, 234);
    font-weight: var(--boldFontWeight)
  }
}
em {
  background-color: ${props => props.theme.colors.lightOrange};
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  color: rgb(125, 107, 113);
}
/* 반응형 */
@media screen and (max-width: ${props => props.theme.responsive.small}) {
  padding: 2rem ${props => props.theme.sideSpace.contentSmall};
  p {
    font-size: 1.4rem;
    line-height: 1.4;
  }
  ul,
  ol {
    margin: 1rem 0 2rem;
    padding: 0 2rem;
    font-size: 1.4rem;
    line-height: 1.4;
  }
}
`;

export const CodeBlockWrapper = styled.code`
  margin: 0 0.1rem;
  padding: 0.1rem 0.35rem;
  background-color: ${props => props.theme.colors.lightGreen};
  color: rgb(85, 117, 113);
  font-size: 1.7rem;
  line-height: 1.7;
  border-radius: 4px;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 1.4rem;
    line-height: 1.4;
  }
`;
export const HeadingOne = styled.div`
  margin: 7rem 0 2rem;
  color: ${props => props.theme.colors.headingColor};
  h1 {
    font-size: 4rem;
  }
  .underline {
    width: 40%;
    height: 2px;
    border-radius: 4px;
    background: ${props => props.theme.colors.primary4};
    margin-top: -5px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 4rem 0 2rem;
    h1 {
      font-size: 3rem;
    }
  }
`;
export const HeadingTwo = styled.div`
  margin: 5rem 0 2rem;
  padding-left: 1rem;
  color: ${props => props.theme.colors.headingColor};
  border-left: 4px solid ${props => props.theme.colors.primary4};
  h2 {
    font-size: 2.7rem;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 4rem 0 2rem;
    h2 {
      font-size: 2.2rem;
    }
  }
`;
export const HeadingThree = styled.div`
  margin: 5rem 0 2rem;
  padding-left: 1rem;
  color: ${props => props.theme.colors.headingColor};
  h3 {
    font-size: 2.3rem;
  }
`;
