import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardsSection = styled.div`
    padding: 4rem;
    background: #fff;
    h2 {
    text-align: center;
  }
`;
export const CardsContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    @media screen and (min-width: 1200px) {
      width: 84%;
  }
`;
export const CardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`;
export const CardsItems = styled.ul`
    margin-bottom: 24px;
    @media screen and (min-width: 1024px) {
      display: flex;
  }

`;
export const CardItem = styled.li`
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 2rem;
  }
    figure {
        position: relative;
        width: 100%;
        padding-top: 67%;
        overflow: hidden;
        &::after {
            content: attr(data-category);
            position: absolute;
            bottom: 0;
            margin-left: 10px;
            padding: 6px 8px;
            max-width: calc((100%) - 60px);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            background-color: #1f98f4;
            box-sizing: border-box;
        }
    }
    img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        object-fit: cover;
        transition: all 0.2s linear;
        &:hover {
            transform: scale(1.1);
        }
    }
    .info {
        padding: 20px 30px 30px;
    }
  
    h5 {
        color: #252e48;
        font-size: 18px;
        line-height: 24px;
    }
`;
export const CardLink = styled(Link)`
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
`;