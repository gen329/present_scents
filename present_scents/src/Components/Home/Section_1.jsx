import React from 'react';
import styled from 'styled-components';

const Section_1 = () => {
  return (
    <Container>
      <Box_Img />
      <Box_Text >
        <H1>Our Brand Story</H1>
        <div>
          <p>Welcome to Present Scents, where we're all about flipping the script on self-criticism and embracing self-empowerment!</p>
          <p>Picture this: you know those moments when you slip up and suddenly you're in full-on self-critique mode? Yeah, we've been there. But here's the deal  we're all about changing that narrative.</p>
          <p>The thought dawned on us: why beat ourselves up, when we can lift ourselves up instead?</p>
          <p>Cue the positive affirmations! We're talking about mantras like "I am worthy", "I am enough", "I am strong".</p>
          <p>Sure, it feels a bit weird at first, like we're talking to ourselves in a foreign language. But guess what? These silly phrases brought life and power, to all of use here Present Scents.</p>
          <p>So, if you're tired of the negativity and ready to embrace some self-love, you're in the right place. Shop with us, and let's rewrite that inner dialogue together. Because seriously, you deserve all the love and kindness in the world, flaws and all.</p>
        </div>
      </Box_Text>
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
  border: 2px solid red;
  display: flex;
`;
const Box_Text = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
const Box_Img = styled(Box)`
`
const H1 = styled.h1`
  font-size: 2rem;
  margin: 0;
`;


export default Section_1;