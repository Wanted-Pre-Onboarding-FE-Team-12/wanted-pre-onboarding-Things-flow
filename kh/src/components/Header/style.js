import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 4rem;
  padding: 20px ${props => props.theme.sideSpace.large} 0;
  max-width: ${props => props.theme.sizes.maxWidth};
  max-height: 70px;

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    max-width: 76rem;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1rem 1.5rem 0 1rem;
  }
`;

export const NavTitle = styled.div`
  display: flex;
  color: var(--textColor);
  font-size: 4.5rem;

  p {
    margin: 0 1rem;
  }
  p::first-letter {
    text-transform: capitalize;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    margin-left: 0;
    font-size: 3rem;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`;
