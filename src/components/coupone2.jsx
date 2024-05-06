import React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#eee',
});

const Card = styled('div')({
  width: '350px',
  padding: '10px',
  borderRadius: '20px',
  background: 'orange',
  border: 'none',
  color: '#fff',
  height: '350px',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
});

const Image = styled('div')({
  position: 'absolute',
  opacity: '0.1',
  left: '0',
  top: '0',
});

const Image2 = styled('div')({
  position: 'absolute',
  bottom: '0',
  right: '0',
  opacity: '0.1',
});

const Text = styled('div')({
  textAlign: 'center',
});

const H1 = styled('h1')({
  fontSize: '48px',
  marginBottom: '0',
});

const Span = styled('span')({
  fontSize: '28px',
});

const Small = styled('small')({
  display: 'block',
  marginTop: '4px',
});

const CouponCard2 = () => {
  return (
    <Container>
      <Card>
        <Image>
          <img src="https://i.imgur.com/DC94rZe.png" width="150" alt="" />
        </Image>
        <Image2>
          <img src="https://i.imgur.com/DC94rZe.png" width="150" alt="" />
        </Image2>
        <Text>
          <H1>50% OFF</H1>
          <Span>On Everything</Span>
          <Span>Today</Span>
          <div className="mt-4">
            <Small>With Code : bbbootstrap2020</Small>
          </div>
        </Text>
      </Card>
    </Container>
  );
};

export default CouponCard2;
