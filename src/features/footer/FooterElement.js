import styled from "styled-components";
import {Link} from 'react-router-dom';

export const InfoSection = styled.footer`
  width: 100%;
  padding: 0rem 0rem;
  background: #ededed;
`;

export const Container = styled.div`
  width: calc(100% - 4rem);
  margin: 0 auto;
  @media screen and(max-width: 1280px){
      width: calc(100% - 19rem);
  }
  @media screen and (max-width: 1920px){
      width: calc(100% - 19rem);
  }
`;
export const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 100px 0;
`;

export const RowBottom = styled.div`
  border-top: 1px solid #2b2b2b;
  padding: 50px 0;
  text-align: center;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
`;

export const Logo = styled.img`
  width:100%
`;
export const LogoLink = styled(Link)``;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: inline-block;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
   
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const IconLink = styled(Link)``;

export const IconSvg = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin: 0 15px;
`;

export const Texth = styled.h4`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 20px;
`;
