import styled from 'styled-components';

export const BioWrapper = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: center;
  margin: 2rem 0 6rem;
  padding: 1.2rem;
  border-left: 4px solid;
  .bio-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border: 3px solid ${props => props.theme.colors.primary3};
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -webkit-transform: translateZ(0);
    -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
    overflow: hidden;
  }
  .author-image {
    width: 5rem;
    height: 5rem;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 4.2rem;
      outline: 2px solid ${props => props.theme.colors.primary3};
    }
  }
  .bio-content {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    height: 100%;
    font-size: 1.8rem;
    .user-info {
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      justify-content: space-around;
      font-size: 1.3rem;
    }
  }
  .author-name {
    color: ${props => props.theme.colors.primary4};
  }
  .date {
    color: ${props => props.theme.colors.primary3};
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 1rem 2rem;
    padding: 0.8rem;
  }
`;
