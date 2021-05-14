import React from 'react';
import { Section } from '../components/globalStyle';
import ImgSignUp from "../images/img-8.jpg"

function SignUp() {
    return (
        <Section className="sign-up">
            <h1>SIGN UP</h1>
            <img src={ImgSignUp} alt="Sign Up" />
        </Section>
    )
}

export default SignUp;
