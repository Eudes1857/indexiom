import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1200px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroSlide = styled.div`
  ${"" /*  z-index: 1; */}
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    bottom: 0;
    opacity: 0.8;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.65);
  }
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  width: 100%;
  padding-left: 12%;
  ${"" /* flex-direction: row; */}
  ${"" /*  max-width: 1600px;
  width: calc(100%-100px); */}
  grid-template-columns:1fr 1fr;
  color: #fff;
  top: 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-transform: none;
    text-shadow: 8px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 50px;
    font-family: GD sage !important;
  }

  p {
    margin-bottom: 50px;
    text-shadow: 8px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const ContentBlock = styled.div`
  top: 50px;
  position: relative;
`;

export const HeroName = styled.h4`
  color: #fff;
  opacity: 0.4;
  font-size: 36px;
  margin-bottom: 50px;

  ${"" /*  margin-top:5rem;
  margin-bottom:5rem; */}
  font-weight: bolder;
`;

export const Arrow = styled(MdNavigateNext)`
  color: #fff;
  margin-right: 0.5rem;
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 20px;
  ${"" /*  //right: 50px; */}
  display: flex;
  z-index: 10;
`;
export const ButtonSlide = styled.div`
  display: inline-block;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px 0 80px 0;
  @media screen and (max-width: 580px) {
    display: block !important;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    max-width: 100%;
  }
  max-width: 45%;
  a {
    opacity: 0.4;
    display: inline;
    margin: 0 20px auto auto;

    @media screen and (max-width: 580px) {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

export const ThumbnailsList = styled.div`
  z-index: 0;
  width: 100%;
  display: block;
  justify-content: center;
  flex-wrap: wrap;
  //border: 3px solid orange;
  position: relative;
  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThumbnailCard = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  position: absolute;
  bottom: 0;
`;

export const ThumbnailImgWrapper = styled.div`
  max-width: 240px !important;
  max-height: 400px !important;
  position: relative;
  @media screen and (min-width: 800px){
    height: 400px;
  }
  //border-radius: 40px;
  cursor: pointer;
  transition: 0.4s;
  margin: 0 10px;
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
  };

  
`;
export const ThumbnailImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  max-width: 100%;
  
`;

export const ThumbnailTitleWrapper = styled.div`
  text-align: left;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  position: absolute;
  bottom: 30px;
  padding: 0 20px;

  span{
    padding: 0px 20px;
    background: #f07321;
    height: 6px;
    display: inline-block;
    margin-bottom: 10px;
  }
  p {
    color: #fff;
    margin: 0;
  }

  
`;

export const ImgWrapper = styled.img`
  max-width: 100%;
  height: auto;
`;
