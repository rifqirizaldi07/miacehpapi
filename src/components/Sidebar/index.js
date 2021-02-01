import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Mie Aceh</SidebarLink>
        <SidebarLink to="/">Drinks</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
