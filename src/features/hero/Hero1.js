import React, { useState, useRef, useEffect } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  HeroName,
  ContentBlock,
  ButtonSlide,
  SlideThumbnails,
  Thumnail,
  ImgWrapper
} from "./HeroElements";
import Button from "../button/Button";
import styled, { css } from "styled-components";
import ReactHtmlParser from "react-html-parser";

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: transparent;
  //border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  border: 1px solid #fff;
  user-select: none;
  transition: 0;
  opacity: 0.4;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NexArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const timeout = useRef(null);

  /*useEffect(() => {
    const nexSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nexSlide, 9000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);*/

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => (
            <HeroSlide >
              {index === current && (
                <HeroSlider key={index}>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <ContentBlock>
                      <HeroName>{ReactHtmlParser(slide.name)}</HeroName>
                      <h1>{ReactHtmlParser(slide.title)}</h1>
                      <p>{ReactHtmlParser(slide.description)}</p>
                      <ButtonSlide>
                        {slide.cta.map((__cta, __index) => (
                          <Button
                            primary="false"
                            bghover="false"
                            to={__cta.path}
                            key={__index}
                          >
                            {ReactHtmlParser(__cta.label)}
                            {/*<Arrow />*/}
                          </Button>
                        ))}
                      </ButtonSlide>
                    </ContentBlock>
                    
                    <SlideThumbnails>
                    <Thumnail>
                      {slides.map((thumb, index_) => (
                        <div>
                          {slides[index] !== thumb && (
                            <div 
                            key={index_}
                            onClick={() => setCurrent(index_)}
                            style={{backgroundImage: `url(${thumb.image})`}}>
                              <h4>{thumb.name}</h4>
                            </div>
                          )}
                        </div>
                      ))}
                    </Thumnail>
                  </SlideThumbnails>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          ))}

          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NexArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

export default Hero;
