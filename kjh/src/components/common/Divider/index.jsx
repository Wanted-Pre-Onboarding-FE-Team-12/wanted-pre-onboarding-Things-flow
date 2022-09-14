import React from 'react';
import styled from 'styled-components';

function Divider() {
  return <Line />;
}

export default Divider;

const Line = styled.div`
  border-top: 1px solid black;
  margin: 5px 0px;
`;
