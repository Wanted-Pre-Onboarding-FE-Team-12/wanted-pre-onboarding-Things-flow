import React, { Fragment, useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Divider from '../../components/common/Divider';
import IssueCard from '../../components/IssueCard';

import issue from '../../hooks/useGetIssue';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Context } from '../../store/common';

function Issue() {
  const { setLoading } = useContext(Context);

  const { data, fetchingNext } = useInfiniteScroll(
    'https://api.github.com/repos/angular/angular-cli/issues'
  );

  const handleScroll = useCallback((e) => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    const isScrollOver = Math.round(scrollTop + innerHeight) >= scrollHeight;

    if (isScrollOver) {
      fetchingNext();
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    fetchingNext();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {data.map((page, pageIndex) => {
        return page.data.map((item, index) => {
          return (
            <Fragment key={index}>
              {pageIndex === 0 && index === 4 && (
                <>
                  <AD>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://thingsflow.com/ko/home"
                    >
                      <img src="ad.png" alt="ad" width={200} height={200}></img>
                    </a>
                  </AD>
                  <Divider />
                </>
              )}
              <IssueCard issue={item} />
              {index !== issue.length - 1 && <Divider />}
            </Fragment>
          );
        });
      })}
    </div>
  );
}

export default Issue;

const AD = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
