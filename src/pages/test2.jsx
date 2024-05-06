import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background: #eee;
  user-none: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center the carousel vertically */
`;

const Title = styled.h1`
  font-family: monospace;
  text-align: center;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const RadioInput = styled.input`
  display: none;
`;

const SliderLabel = styled.label`
  margin: auto;
  width: 60%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;

  /* Apply styles for the active slide */
  ${(props) =>
    props.active &&
    css`
      width: 100%;
      transform: translate3d(0, 0, 0) scale(1.2); /* Make the active slide larger */
      z-index: 1; /* Bring the active slide to the front */
    `}
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CarouselSlider22 = () => {
  const [activeSlide, setActiveSlide] = useState(3);

  const handleSlideChange = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <Container>
      <Title>3D Carousel Slider</Title>

      <CarouselContainer>
        {[1, 2, 3, 4, 5].map((slide) => (
          <div key={`slider${slide}`}>
            <RadioInput
              type="radio"
              name="slider"
              id={`s${slide}`}
              checked={activeSlide === slide}
              onChange={() => handleSlideChange(slide)}
            />
            <SliderLabel htmlFor={`s${slide}`} active={activeSlide === slide}>
              <SliderImage
                src={`https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80`}
                alt=""
              />
            </SliderLabel>
          </div>
        ))}
      </CarouselContainer>
    </Container>
  );
};

export default CarouselSlider22;
