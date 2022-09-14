import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import IssueContext from '@store/issueStore';
import Layout from '@layouts/index';
import Markdown from './components/Markdown';
import Bio from './components/Bio';

const IssuePage = () => {
  const { getIssueData, issueData } = useContext(IssueContext);
  const { issue_number } = useParams();

  useEffect(() => {
    getIssueData(issue_number);
  }, []);

  const { number, title, comments, user, created_at, body } = issueData;
  return (
    <Layout>
      <Wrapper>
        <div className="issue-info">
          <h2>#{number}</h2>
          <h2>{title}</h2>
        </div>
        <Bio user={user} date={created_at} comments={comments} />
        <div className="issue-contents">
          <Markdown body={body} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default IssuePage;

export const Wrapper = styled.section`
  max-width: 1000px;
  margin: 6rem auto 4rem auto;
  color: var(--contentTextColor);

  .issue-info {
    padding: 4rem 0 1rem;
    h2 {
      margin: 1.5rem 0;
      font-weight: 700;
      font-size: 5.5rem;
      color: var(--textColor);
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin-left: 1rem;
      h2 {
        font-size: 3.5rem;
      }
    }
  }

  .issue-contents {
    background-color: var(--contentBgColor);
    padding: 2rem ${props => props.theme.sideSpace.contentLarge};
    border-radius: 1rem;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      padding: 2rem ${props => props.theme.sideSpace.contentSmall};
      p {
        font-size: 1.4rem;
        line-height: 1.4;
      }
    }
  }
`;
