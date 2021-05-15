import React from 'react';
import { Section } from '../components/globalStyle';
import ImgServices from "../images/img-2.jpg"

function Services() {
    return (
        <Section>
            <h2>SERVICES</h2>
            <img src={ImgServices} alt="Services" />
        </Section>
    )
}

export default Services;
