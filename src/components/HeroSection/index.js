import React from "react";
import Video from '../Videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from "./heroElements";

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted>
                    <source src={Video} type="video/mp4" />
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1><strong>Hi,</strong> my name is Kaiden. </HeroH1>
                <HeroP>
                I am a recent graduate of Ithaca College with a degree in Computer Science and a minor in Deaf Studies.
                I am a Full-Stack developer with experience using Python, JavaScript, SQL, and more.
                I am passionate about accessibility for all and environmental conservation.
                My goal is to use my technical skills to bridge these passions and make a meaningful impact in my career.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};
 
export default HeroSection;