import styled, { css } from 'styled-components'

import { LogoReact } from '@styled-icons/ionicons-solid/LogoReact'

export const Container = styled.div`
   
    height: 100vh;
    position: relative;

    ::after
{
    content: '';
    position: absolute;
    
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(187deg, #01bdc6, #01bdc6 50%, transparent 50%, transparent);

    
    
   
}

background: linear-gradient(158deg, #e91e63, #e91e63 61%, #ffc107 50%, #ffc107);
  
`

export const Cards = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    padding-top: var(--padding-top-of-container);    

`

const cardCSS = css`
    width: 300px;
    background: #ffffff3d;
    backdrop-filter: blur(21px);
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
    margin: 5px 15px;
    box-shadow: -1px 15px 30px -12px black;
    transition: 1s;
   
 
  position: relative;
  /* -webkit-backface-visibility: hidden; */
  z-index: 1;

    ::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background: linear-gradient(158deg, #ffc107, #ffc107 61%, #e91e63 50%, #e91e63);
        transition: opacity 0.5s ease-out;
        z-index: 2;
        opacity: 0;
    } 
    :hover:after {
  opacity: 1;
}

    >svg{
        z-index: 3;  
        transition: color .5s;      
    }
    >span{
        z-index: 3;
    }
   
    >h3{
        padding: 5px 0 25px;
        color: var(--color-text-black);
        z-index: 3;
    }
    >p{
        color: var(--color-text-black-fosco);
        text-align: center;
        z-index: 3;
    }

    :hover{
        transform: translateY(-20px);
    }

`

export const CardOne = styled.div`
    ${cardCSS}
`
export const CardTwo = styled.div`
     ${cardCSS}
`
export const CardThree = styled.div`
     ${cardCSS}
`

export const LogoReactIcon = styled(LogoReact)`

`

