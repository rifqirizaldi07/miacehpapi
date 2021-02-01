import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink >Mie Aceh + Ayam</SidebarLink>
        <SidebarLink >Mie Aceh + Daging</SidebarLink>
        <SidebarLink >Mie Aceh + Udang</SidebarLink>
        <SidebarLink >Mie Aceh + Ikan</SidebarLink>
        <SidebarLink >Mie Aceh + Cumi Cumi</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute href='https://gofood.link/u/gxB1b'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
