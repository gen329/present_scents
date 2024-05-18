import React from 'react';
import styled from 'styled-components';

const Section_1 = () => {
  return (
    <Container>
      <Box_Img>
        <img src="" alt="img" />
      </Box_Img>
      <Box_Text color="#e9ff70" >
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
      <Box_Text color="#ff9770">
        <Present_Scents />
        <Button_Wrap>
          <H1_Yellow>Speak kindly to yourself.</H1_Yellow>
          <Button>SHOP NOW</Button>
        </Button_Wrap>
      </Box_Text>
      <Box_Img>
        <img src="" alt="img" />
      </Box_Img>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const Box = styled.div`
  display: flex;
`;
const Box_Text = styled(Box)`
  background: ${props => props.color} ;
  display: flex;
  font-family: Garbata;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  color: #a6603a;
  font-weight: 100;
`;
const Box_Img = styled(Box)`
`;
const Button_Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 70%;
`;
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 100;
  margin: 0;
`;
const H1_Yellow = styled(H1)`
  color: yellow;
  font-weight: 100;
  font-size: 2.5rem;
`;
const Button = styled.button`
  width: 40%;
  padding: 10px 30px 10px 30px;
  background: none;
  border: 1px solid rgb(255,255,255,0.3);
  color: #e9ff70;
  text-wrap: nowrap;
  &:hover {
    box-shadow: 0 0 5px 5px #e9ff70;
    transform: scale(1.03);
    transition: all 0.1s linear;
  }
`;
const Present_Scents = styled.h2`
font-size: 1rem;
color: #e9ff70;
height: 5%;
width: 50%;

&:before{
  content: "PRESENT SCENTS";
}
`;



export default Section_1;