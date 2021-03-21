import styled from "styled-components";

export const Discover = styled.section`
  width: 100%;
  height: 70%;
  border-top: 4px solid #fff;
  padding: 0rem 0rem;
`;

export const DiscoverWrapper = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  height: 300px;
  background: #ef7422;

  @media screen and (max-width: 480px) {
  }
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #fff;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  h2 {
    background-color: #fff;
    padding: 0.5rem;
    color: #ef7422;
    margin-bottom: 2rem;
  }
`;

export const RightList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const RightListItem = styled.li`
  color: #fff;
  list-style: none;
  font-size: 18px;
  line-height: 40px;

  span {
    border: 3px solid #fff;
    padding: 5px;
    height: 15px;
    width: 15px;
    display: inline-block;
    margin: auto 10px auto auto;
  }
`;
