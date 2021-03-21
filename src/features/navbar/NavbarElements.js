import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 130px;
  background:transparent;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  top:0;
  z-index:999;

  &.active{
    background:rgba(0, 0, 0, 0.8);
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
 
 img{
   width:80%;
 }
`;

export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 35px;
    cursor: pointer;
    width: 35px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-58%, 58%);
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  position: relative;
  ${'' /* top: 40px; */}
  border-bottom: 0.5px solid #fff;
  //padding-bottom: 5px;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  position: relative;
  font-size: 15px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: lighter;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &::active{
    color: red;
  }

  span.basket__count{
    position: absolute;
    top: -15px;
    right: 18px;
    //color: #ef7422;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
