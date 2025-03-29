import styled from "styled-components";
import colors from "../../colors";
import { Link as LinkRouter} from "react-router-dom";

export const ProjectContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.black};

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled(LinkRouter)`
    color: ${colors.black};
    text-decoration: none;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }`;

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 48px;
    color: ${colors.primary};
    margin-bottom: 64px;

        @media screen and (max-width: 480px) {
        font-size: 2rem;
    } 
`;

export const ProjectH2 = styled.h2`
    text-align: center;
    color: ${colors.black};
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
    
`;
