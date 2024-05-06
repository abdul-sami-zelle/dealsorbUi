import React from 'react';
import styled, { keyframes } from 'styled-components';

const popWord = keyframes`
  to {
    transform: rotateX(0);
  }
`;

const show = keyframes`
  to {
    opacity: 1;
  }
`;

const shimmer = keyframes`
  to {
    text-shadow: 0 0 8px red;
  }
`;

const sparkle = keyframes`
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1) translate(4px, 1px) rotate(8deg);
  }

  100% {
    transform: scale(0) translate(4px, 1px) rotate(8deg);
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: "Playfair Display", Vidaloka, serif;
  font-size: 3rem;
  line-height: 0.85;
  perspective: 500px;
`;

const Word = styled.span`
  display: block;
  opacity: 0;
  transform: rotateX(120deg);
  transform-origin: 50% 100%;

  &:nth-of-type(1) {
    animation: ${show} 0.01s forwards, ${popWord} 1.5s forwards;
    animation-timing-function: cubic-bezier(0.14, 1.23, 0.33, 1.16);
  }

  &:nth-of-type(2) {
    padding: 0 2rem;
    animation: ${show} 0.01s forwards, ${popWord} 1.5s forwards;
    animation-timing-function: cubic-bezier(0.14, 1.23, 0.33, 1.16);
    animation-delay: 1.5s;
    color: gold;
  }

  /* shimmer animation (optional) */
  &:hover {
    animation: ${shimmer} 1s infinite;
  }

  /* Ensure animation runs only once */
  animation-fill-mode: forwards;
`;

const AnimatedText = () => {
  return (
    <Heading>
      <Word>OUR SERVICE</Word>
      <Word>PROVIDERS</Word>
    </Heading>
  );
};

export default AnimatedText;
