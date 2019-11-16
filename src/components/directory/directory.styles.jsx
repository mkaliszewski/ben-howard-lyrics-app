import styled, { keyframes } from "styled-components";
import { slideInLeft } from 'react-animations'
//keyframes and css declarations


const slideInLeftAnimation = keyframes`
    ${slideInLeft}
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }

`;


export const DirectoryDiv = styled.div`
  animation: ${slideInLeftAnimation} 2.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-top: 56px;
  margin-bottom: 40px;
  width: 100%;
  will-change: auto;
  scroll-behavior: smooth;
  overflow: hidden;
`
