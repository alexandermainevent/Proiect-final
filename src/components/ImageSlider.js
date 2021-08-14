import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: fixed;
  width: 100%;
  left: -40px;
  margin-top: 50px;
`;
const Arrows = styled.div``;
const Slider = styled.div``;

const ImageSlider = (slides) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Container>
      <Slider>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel img" className="image" />
              )}
            </div>
          );
        })}
      </Slider>
      <Arrows>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </Arrows>
    </Container>
  );
};

export default ImageSlider;
