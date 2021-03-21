import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({menuData, isOpen, toggle}) => {
    return (
        <>
           <SidebarContainer isOpen={isOpen} onClick={toggle}>
               <Icon onClick={toggle}>
                   <CloseIcon/>
               </Icon>
               <SidebarWrapper>
                   <SidebarMenu>
                       {menuData.map((item, index) =>(
                           <SidebarLink to={item.link} key={index}>
                            {item.title}
                           </SidebarLink>
                       ))}
                   </SidebarMenu>
               </SidebarWrapper>
           </SidebarContainer>
        </>
    )
}

export default Sidebar
