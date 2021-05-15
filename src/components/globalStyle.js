import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
}
`;
export const Section = styled.h1`
  position: relative;
h2 {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  font-size: 5rem;
  transform: translate(-50% , -50%);
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
}
img {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
export const Button = styled(Link)`
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  background: ${({primary}) => primary ? "#fff" : "transparent"};
  color: ${({primary}) => primary ? "#242424" : "#fff"};
  border: ${({primary}) => primary ? "1px solid #fff" : "1px solid #fff"};
  transition: all .3s ease-in-out;
  padding: ${({large}) => large ? "12px 26px" : "8px 20px"};
  font-size: 20px;
  flex-wrap: nowrap;
  margin: .5rem;
  &:hover {
    background-color: #fff;
    color: #242424;
    transition: all .3s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

`;
