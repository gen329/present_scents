import React from 'react';
import styled from 'styled-components';

const Section_1 = () => {
  return (
    <Container>
      <Box_Text />
      <Box_Img />
      <Box_Text />
      <Box_Img />
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid black;
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const Box = styled.div`
  height: 50%;
  width: 50%;
`;
const Box_Text = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box_Img = styled(Box)`
`


export default Section_1;