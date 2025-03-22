import React from "react";
import { ProjectContainer, ProjectsH1, ProjectsWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP } from "./projectElements";
import Icon1 from "../../images/img-1.svg";
import Icon2 from "../../images/img-2.svg"; 
import Icon3 from "../../images/img-5.svg";

const Projects = () => {
    return (
        <ProjectContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1} />
                    <ProjectH2>Project 1</ProjectH2>
                    <ProjectP>Project Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>Project 2</ProjectH2>
                    <ProjectP>Project Description</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>Project 3</ProjectH2>
                    <ProjectP>Project Description</ProjectP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectContainer>
    );
}

export default Projects;