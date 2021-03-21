import React, {useState} from "react";
import {
  Logo,
  MenuBars,
  Nav,
  NavMenu,
  NavMenuLinks,
  Container,
  LogoWrapper,
} from "./NavbarElements";
import Logo_ from '../../images/logo.png'
import LogoWhite from '../../images/logo_white.png';
import IBasket from '../../images/imarketWhite.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectBasketData } from "../reducers/BasketSlice"

const Navbar = ({ menuData, toggle }) => {

  const data = useSelector(selectBasketData)

  const [navbar, setNavbar] = useState(false);

  const [active, setActive] = useState(false)

  const handleClick = e =>{
    const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
    }
  }

  const changeNavBg  = () =>{
    if(window.scrollY >=80){
      setNavbar(true);
    }else{
       setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavBg);
  return (
    <>

      <Nav className={navbar ? "navbar active" : "navbar"}>
        <Container>
          <LogoWrapper>
            <Logo to="/">
              <img src={navbar ? LogoWhite : Logo_} alt="" />
            </Logo>
          </LogoWrapper>
          <MenuBars onClick={toggle} />
          <NavMenu>
            {menuData.map((item, index) => (
              <NavMenuLinks
                to={item.link}
                key={index}
                onClick={handleClick}
                className={active ? 'active' : 'notActive'}
              >
                {item.title}
              </NavMenuLinks>
            ))}
            <NavMenuLinks to={`/panier`}>
            <img src={IBasket} width="16" height="16"/>
            <span className="basket__count">{data.length}</span>
            </NavMenuLinks>
          </NavMenu>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
