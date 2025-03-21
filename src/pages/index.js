import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TileSection from "../components/tileSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../components/tileSection/Data"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection/>
            <TileSection {...homeObjOne}/>
            <TileSection {...homeObjTwo}/>
            <TileSection {...homeObjThree}/>
            <TileSection {...homeObjFour}/>
        </>
    )
};
 
export default Home;