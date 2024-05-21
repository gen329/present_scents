import React from 'react';
import styled from 'styled-components';

import Section_1 from '../Components/Home/Section_1';

const Home = () => {
  return (
    <Container>
      <Section_1 />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

export default Home;
