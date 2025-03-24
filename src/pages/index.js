import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne, homeObjFour } from "../components/tileSection/data"
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection id='home' />
            <TileSection id='about' {...homeObjOne}/>
            <Projects id='projects' />
            <TileSection id='contact' {...homeObjFour}/>
            <Footer/>
        </>
    )
};
 
export default Home;