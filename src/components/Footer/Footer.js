import React from 'react';
import { Button } from '../globalStyle';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaTypo3, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  SubHeading,
  SubText,
  InputAreas,
  FooterLinks,
  FooterLinkWrapper,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  SocialIcons
} from "./FooterStyle"

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <SubHeading>
          Join the Adventure newsletter to receive our best vacation deals
        </SubHeading>
        <SubText>
          You can unsubribe at any time.
        </SubText>
        <InputAreas>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button to="/">Subscribe</Button>
          </form>
        </InputAreas>
      </FooterSubscription>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </FooterLinkItems>
          <FooterLinkItems>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </FooterLinkItems>
          <FooterLinkItems>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo>
            <Link to='/' className='social-logo'>
              TRVL
              <FaTypo3 />
            </Link>
          </FooterLogo>
          <small>TRVL © 2020</small>
          <SocialIcons>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;