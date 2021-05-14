import styled from "styled-components"

export const FooterContainer = styled.div`
    background-color: #242424;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    }
`;
export const FooterSubscriptionHeading = styled.p`
    margin-bottom: 24px;
    font-size: 24px;
`;
export const FooterSubscriptionText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;
export const InputAreas = styled.div`

input {
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
    &::placeholder {
    color: #b1b1b1;
  }
  @media screen and (max-width: 820px) {
      width: 100%;
  }
}
`;
export const FooterLinks = styled.div`
   width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    
  @media screen and (max-width: 820px) {
      padding-top: 2rem;
  }

`;
export const FooterLinkWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
      flex-direction: column;
    }

`;
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
  
   h2 {
    color: #fff;
    margin-bottom: 16px;
  }
   a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    &:hover {
        color: #e9e9e9;
        transition: 0.3s ease-out;
    }
  }
`;
export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
`;
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
    small {
        color: #fff;
        margin-bottom: 16px;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
`;
export const FooterLogo = styled.div`
    .social-logo {
        color: #fff;
        justify-self: start;
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
`;
export const SocialIcons = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    
 .social-icon-link {
    color: #fff;
    font-size: 24px;
  }
`

  

