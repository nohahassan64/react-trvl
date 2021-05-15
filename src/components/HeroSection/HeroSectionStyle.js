import styled from "styled-components"
import ImgHome from "../../images/img-home.jpg"

export const HeroContainer = styled.div`
    background: url(${ImgHome}) center center no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;

    h1 {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
    @media screen and (max-width: 960px) {
      font-size: 70px;
      margin-top: -150px;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 50px;
        margin-top: -100px;
    }
  
  }
  
     p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`
export const HeroButtons = styled.div`
    margin-top: 32px;
    .btn {
        margin: 6px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    span {
        margin-left: 4px;
    }

`
