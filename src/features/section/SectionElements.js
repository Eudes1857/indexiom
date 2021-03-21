import styled from "styled-components";

export const InfoSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 0rem;
  border-top: 3px solid #fff;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  height: 600px;
  background-image: url(${(props) => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width:100%;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1:first-child {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: rgba(204, 204, 204, 0.5);
    position: relative;
    text-transform: uppercase;
  }

  h1:nth-child(2) {
    color: #fff;
    font-size: clamp(2.6rem, 6vw, 2rem);
    margin-bottom: 2rem;
    border-bottom: 2px solid #e5e5e5;

    &::after {
      content: "";
      display: block;
      border-bottom: 4px solid #ef7422;
      margin-bottom: -3px;
      max-width: 50px;
    }
  }

  p {
    margin-bottom: 2rem;
    color: #fff;
    font-size: clamp(1rem, 8vw, 1.5rem);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    h1:first-child {
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    h1:nth-child(2) {
      font-size: 30px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
