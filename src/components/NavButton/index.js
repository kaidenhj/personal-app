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
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
                    <NavLinks onClick={() => scrollToSection('home')}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => scrollToSection('about')}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => scrollToSection('achievments')}>Achievments</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => scrollToSection('projects')}>Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick={() => scrollToSection('contact')}>Contact</NavLinks>
                </NavItem>
            </NavMenu>
        </>
    );
};

export default NavButton;
