import React from 'react'
import { Button } from '../globalStyle'
import { FaRegPlayCircle } from "react-icons/fa"
import { HeroContainer , HeroButtons } from "./HeroSectionStyle"
import Video from "../../videos/01.mp4"

function HeroSection() {
    return (
        <HeroContainer>
            <video src={Video} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <HeroButtons>
                <Button to="/" large='true'>GET STARTED</Button>
                <Button to="/" primary='true'  large='true'>
                    WATCH TRAILER
                    <span>
                        <FaRegPlayCircle />
                    </span>
                </Button>
            </HeroButtons>  
        </HeroContainer>
    )
}

export default HeroSection
