import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import colors from "../../colors";

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

export const ProjectContainer = styled.div`
    color: #fff;
    background: ${({lightbg}) => (lightbg ? '#f9f9f9' : '#010606')};
`;

export const Icon = styled(LinkRouter)`
    position: absolute;
    top: 20px;
    left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    cursor: pointer;
    
    &:hover {
        color: ${colors.primary};
        transition: 0.3s ease-out;
    }

    @media screen and (max-width: 480px) {
        top: 10px;
        left: 16px;
    }
`;

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProjectH1 = styled.h1`
    color: ${colors.black};
    background: ${colors.primary};
    font-size: 2.5rem;
    text-align: center;
    margin-top: 80px;
    height: 110px;
`;

export const ProjectIcon = styled.img`
    align-self: center;
    justify-self: center;
    width: 60%;
    height: 90%;
    margin-bottom: 10px;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
    }
`;

export const ProjectSection = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const ProjectH2 = styled.h2`
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const ProjectText = styled.p`
    margin-bottom: 10px;
`;

export const ProjectLink = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 15px;
    padding: 0 15px;
`;

export const ProjectColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
        grid-template-columns: 1fr;
    }
`;

export const ProjectList = styled.ul`
    list-style-type: none;
`;

export const Item = styled.li`
    margin-bottom: 10px;
`;

export const ReturnButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 15px;
    text-align: center;
`

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    background: ${colors.primary};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${colors.black};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? colors.primary: '#fff')};
    }
`
