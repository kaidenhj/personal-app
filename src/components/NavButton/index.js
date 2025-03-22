import React from 'react';
import {MobileIcon, NavMenu, NavItem, NavLinks} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = ({toggle}) => {

    const handleToggle = () => {
        console.log("Sidebar toggle clicked!");
        console.log("before toggle");
        
        if (toggle) {
            console.log("Calling toggle function");
            toggle();
        } else {
            console.log("Toggle function is not defined");
        }
        
        console.log("after toggle");
    };

    return (
        <>
            <MobileIcon onClick={() => { 
                console.log("MobileIcon clicked!");
                handleToggle();
            }}>
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
