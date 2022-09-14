import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../../store/common';

function Error() {
  const { state } = useContext(Context);

  return <Container>{state.errorMessage}</Container>;
}

export default Error;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
