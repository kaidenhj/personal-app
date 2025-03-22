import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne, homeObjTwo, homeObjFour } from "../components/tileSection/Data"
import Projects from "../components/Projects";

const Home = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     console.log("Sidebar toggle clicked! Before:", isOpen);
    //     setIsOpen(prevState => {
    //         console.log("Toggling to:", !prevState);
    //         return !prevState;
    //     });
    // };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // const toggle = () => {
    //     setIsOpen(prevState => !prevState);
    // };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection/>
            <TileSection {...homeObjOne}/>
            <TileSection {...homeObjTwo}/>
            <Projects/>
            {/* <TileSection {...homeObjThree}/> */}
            <TileSection {...homeObjFour}/>
        </>
    )
};
 
export default Home;