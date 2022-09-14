import styled from 'styled-components';

export const Wrapper = styled.article`
  .issue-container {
    display: flex;
    padding: 1.3rem 0;
    border-bottom: 1px solid var(--contentBgColor);
    transition: 0.2s linear;
    &:hover {
      background-color: var(--contentBgColor);
    }
  }
`;

export const IssueInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 9rem);
  margin-left: 2rem;
  padding: 0.4rem 0 0.2rem;
  header {
    .issue-title {
      font-size: 2.2rem;
      line-height: 2.8rem;
      font-weight: 500;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    .date {
      margin-right: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: calc(100% - 7rem);
    margin-left: 1.3rem;
    header {
      .issue-title {
        font-size: 2rem;
        line-height: 2rem;
      }
    }
    footer {
      .date {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0.6rem 0;
    header {
      .issue-title {
        font-size: 1.5rem;
        line-height: 1.7rem;
      }
    }
  }
`;
