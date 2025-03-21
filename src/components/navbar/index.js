import React from 'react';
import {Nav, NavContainer, NavLogo} from './navBarElement';
import NavButton from '../NavButton';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="home">
                        <h1>Kaiden Jones</h1>
                    </NavLogo>
                    <NavButton />
                </NavContainer>
            </Nav>
        </>
    );
};

export default NavBar;



