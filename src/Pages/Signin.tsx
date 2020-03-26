import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

// interface ISignin {
// }

export function Signin(): ReactElement {
  return (
    <div>
      <Title>Sign In</Title>
    </div>
  );
}
