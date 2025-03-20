import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isopen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
        </>
    )
};

export default Home;