import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css'

const TextAnimationWrapper = styled.div`
  position: relative;
`;

const animate = keyframes`
  0%, 80% {
    transform: rotateY(360deg);
  }
`;

const AnimatedText = styled.span`
  position: relative;
  display: inline-block;
  font-size: 80px;
  color: #fff;
  text-transform: uppercase;
  animation: ${animate} 2s infinite;
  animation-delay: calc(0.2s * var(--i));
  font-family:'duhline';
`;

const Text4 = () => {
  return (
    <TextAnimationWrapper>
      <AnimatedText className='animatedTextSlider' style={{'--i': 1}}>F</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 2}}>U</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 3}}>R</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 4}}>N</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 5}}>I</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 6}}>T</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 7}}>U</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 8}}>R</AnimatedText>
      <AnimatedText className='animatedTextSlider' style={{'--i': 9}}>E</AnimatedText>
    </TextAnimationWrapper>
  );
};

export default Text4;
