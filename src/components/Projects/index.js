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
                <ProjectCard to='/utilitiesProject'>
                    <ProjectIcon src={Icon1} />
                    <ProjectH2>Utilities Database</ProjectH2>
                    <ProjectP>Ithaca College Utilities Database System and Google Drive UI</ProjectP>
                </ProjectCard>
                <ProjectCard to='/tameProject'>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>TAME</ProjectH2>
                    <ProjectP>Time Assessment and Managment Evaluation</ProjectP>
                </ProjectCard>
                <ProjectCard to='/sataliteProject'>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>SAM Habitat Distruction Model</ProjectH2>
                    <ProjectP>Tracking Suburban Habitat Loss: An ML Approach to Satellite Image Analysis</ProjectP>
                </ProjectCard>
            </ProjectsWrapper>
        </ProjectContainer>
    );
}

export default Projects;