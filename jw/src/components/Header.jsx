import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const params = useParams();

  const title = `${params.owner}/${params.repo}`;

  return <S.Wrapper>{title}</S.Wrapper>;
};

const S = {
  Wrapper: styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 2rem;
  `,
};

export default Header;
