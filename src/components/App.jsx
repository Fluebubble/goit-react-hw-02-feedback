import styled, { ThemeProvider } from 'styled-components';
import Feedback from './Feedback/Feedback';
import React from 'react';

const Text = styled.p`
  color: red;
`;

export const App = () => {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, placeat!
      </Text>
      <Feedback />
    </>
  );
};
