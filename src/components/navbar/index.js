import React from 'react';
import {Nav, NavContainer, NavLogo, NavSignin, NavBtnLink} from './navBarElement';
import NavButton from '../NavButton';

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="home">
                        <h1>Kaiden Jones</h1>
                    </NavLogo>
                    <NavButton toggle={toggle} />
                    <NavSignin>
                        <NavBtnLink to='/thing'>Ex. Route</NavBtnLink>
                    </NavSignin>
                </NavContainer>
            </Nav>
        </>
    );
};

export default NavBar;

