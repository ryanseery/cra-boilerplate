import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

// interface IHome{
// }

export function Home(): ReactElement {
  return (
    <div>
      <Title>Home</Title>
    </div>
  );
}
