import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebtnWrap, SidebarRoute } from "./sidebarElement";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Homes </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='achivements' onClick={toggle}>Achivements</SidebarLink>
                    <SidebarLink to='coding' onClick={toggle}>Coding</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to='/thing'>Ex. Route</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar