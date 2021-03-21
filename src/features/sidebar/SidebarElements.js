import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div``;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 70px);
  text-align: center;

  @media screen and(max-width:480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color:#fff;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  text-decoration:none;
  color:#fff;
  cursor:pointer;
  list-style:none;
  transition:0.2s ease-in-out;

    &:hover{
        color:#000d1a;
    }
`;
