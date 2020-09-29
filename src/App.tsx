import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #dd9955
`;

const Title = styled.Text`
  font-size: 25px;
  color: #ffffff;
`;

const App: React.FC = () => (
  <Wrapper>
    <Title>Welcome to Sunset App</Title>
  </Wrapper>
);

export default App;
