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
        <SidebarLink >Mie Kocok Pante Pirak</SidebarLink>
        <SidebarLink >Mie Aceh + Daging (Pending)</SidebarLink>
        <SidebarLink >Mie Aceh + Telur (Pending)</SidebarLink>
        <SidebarLink >Mie Aceh + Ayam (Pending)</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute href='https://gofood.link/u/gxB1b'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
