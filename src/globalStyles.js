import { createGlobalStyle } from "styled-components";
import ImgBg from "./images/GreenGrowth.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Courier', monospace;
    text-decoration: none;
  }
  body{
    background: linear-gradient(to right, 
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.1)),  
        url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
  }
  p{
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    line-height: 50px;
    font-weight: 700;
  }
`;
