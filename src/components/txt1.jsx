import React from 'react';
import { styled } from '@mui/material/styles';

const GlowText = styled('h1')({
  fontSize: '80px',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  top: '10pc',
  animationName: 'glowText',
  animationDuration: '1s',
  animationIterationCount: 'infinite',

  '@keyframes glowText': {
    from: {
      textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #01ffff, 0 0 60px #ff0000, 0 0 70px #e60073',
      animationDuration: '1s',
    },
    to: {
      textShadow: '0 0 20px #fff, 0 0 30px #00ff9d, 0 0 40px #00ffdd, 0 0 50px #1100ff, 0 0 60px #c8ff00, 0 0 70px #66ff00, 0 0 80px #ff0080',
      animationDuration: '1s',
    },
  },
});

const GlowingText = ({ text }) => {
  return (
    <GlowText className="glow">
      {text}
    </GlowText>
  );
};

export default GlowingText;
