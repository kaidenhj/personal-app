import React from 'react';
import {Nav, NavContainer, NavLogo} from './navBarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        <h1>Kaidrouen Jones</h1>
                    </NavLogo>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;



