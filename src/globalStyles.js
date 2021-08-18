import { createGlobalStyle } from "styled-components";
import ImgBg from "./images/trees.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
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
`;
