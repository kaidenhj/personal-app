import React from 'react';
import {MobileIcon, NavMenu, NavItem, NavLinks} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = ({toggle}) => {
    return (
        <>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="home">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="achievments">Achievments</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="coding">Coding</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>
            </NavMenu>
        </>
    );
};

export default NavButton;
