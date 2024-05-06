import React, { useRef, useState } from 'react';
import { ForkLeft } from '@mui/icons-material/ForkLeft';
import { ForkRight } from '@mui/icons-material/ForkRight';

const Testing11 = () => {
  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);
  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  let positionDiff = 0;

  const showHideIcons = () => {
    const carousel = carouselRef.current;
    const arrowIcons = document.querySelectorAll('.wrapper i');

    if (carousel) {
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      arrowIcons[0].style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
      arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
    }
  };

  const handleArrowClick = (direction) => {
    const firstImgWidth = firstImgRef.current.clientWidth + 14;
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.scrollLeft += direction === 'left' ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);
    }
  };

  const autoSlide = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft - scrollWidth > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    const firstImgWidth = firstImgRef.current.clientWidth + 14;
    const valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
      carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } else {
      carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
  };

  const handleDragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    setIsDragging(true);

    const carousel = carouselRef.current;
    if (!carousel) return;

    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const handleDragStop = () => {
    setIsDragStart(false);
    setIsDragging(false);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.classList.remove('dragging');
      if (!isDragging) return;
      autoSlide();
    }
  };

  return (
    <div className="wrapper">
      {/* < ForkLeft
        className="abc"
        onClick={() => handleArrowClick('left')}
      /> */}
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragging}
        onTouchMove={handleDragging}
        onMouseUp={handleDragStop}
        onTouchEnd={handleDragStop}
      >
        <img src="images/img-1.jpghttps://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" ref={firstImgRef} />
        <img src="https://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" />
        <img src="images/img-1.jpghttps://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" ref={firstImgRef} />
        <img src="https://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" />
        <img src="images/img-1.jpghttps://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" ref={firstImgRef} />
        <img src="https://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" />
        <img src="images/img-1.jpghttps://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" ref={firstImgRef} />
        <img src="https://images.unsplash.com/photo-1573201106611-1de49dfada5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="img" draggable="false" />
      </div>
      {/* <ForkRight
        className="abc"
        onClick={() => handleArrowClick('right')}
      /> */}
    </div>
  );
};

export default Testing11;
