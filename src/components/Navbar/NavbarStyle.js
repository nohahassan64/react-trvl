import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
`
export const NavbarLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    }
    span {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }
  
`
export const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
    span {
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 0;
      transition: all 0.5s ease;
    }
    &.active {
    @media screen and (max-width: 960px) {
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }
    }
`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
      
  @media screen and (max-width: 960px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    &:hover {
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    @media screen and (max-width: 960px) {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }
    }
    &.nav-links-mobile {
        display: none;
        @media screen and (max-width: 960px) {
            display: block;
            text-align: center;
            margin: 2rem auto;
            border-radius: 4px;
            width: 80%;
            text-decoration: none;
            font-size: 1.5rem;
            background-color: transparent;
            color: #fff;
            padding: 20px;
            border: 1px solid #fff;
            transition: all 0.3s ease-out;
            &:hover {
                background: #fff;
                color: #242424;
                transition: 250ms;
            }
        }
    }
`;