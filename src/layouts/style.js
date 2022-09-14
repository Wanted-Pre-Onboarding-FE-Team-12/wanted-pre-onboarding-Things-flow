import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 10rem - 250px);
  margin: 10rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};
  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    max-width: 760px;
    margin-top: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0 ${({ theme }) => theme.sideSpace.small};
  }
`;
