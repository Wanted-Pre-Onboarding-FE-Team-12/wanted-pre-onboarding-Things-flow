import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../../store/common';

function Loading() {
  const { state } = useContext(Context);

  return (
    <>
      {state.loading && (
        <Container>
          <Spinner />
        </Container>
      )}
    </>
  );
}

export default Loading;

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
  z-index: 9999;
`;

const Spinner = styled.span`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  border: 5px solid white;
  border-radius: 50%;
  border-top: 5px solid blue;
  width: 50px;
  height: 50px;
  animation: spin 1s infinite linear;
`;
