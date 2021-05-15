import React from 'react'
import { Button } from '../globalStyle'
import { FaRegPlayCircle } from "react-icons/fa"
import { HeroContainer , HeroButtons } from "./HeroSectionStyle"

function HeroSection() {
    return (
        <HeroContainer>
            <h2>Adventure Awaits</h2>
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
