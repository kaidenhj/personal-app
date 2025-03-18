import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled.nav`
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    };
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: bold;
    };

    &:active {
        border-bottom: 3px solid #01bf71;
        font-weight: bold;
    };
`;




