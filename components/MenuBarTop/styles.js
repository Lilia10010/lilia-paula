import styled from 'styled-components'
import { iconSun } from '@styled-icons/typicons/WeatherSunny'
 
export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 10;
    width: 100%;

    height: 50px;
    align-items: center;

   background: #01010147;
 
`

export const MenuLinks = styled.div`
    /* width: 500px; */
     padding-right: 30px;

    ul{
        display: flex;
        justify-content: flex-end;
        list-style: none;
        font-weight: bold;
    } 

    ul li a{
        font-size: 1.3em;
    font-weight: 800;
    text-decoration: none;
    padding-right: 20px;
    color: var(--color-primary);
    transition: 1s;
    }
    ul li a:hover{
    color: var(--color-primary-hover);
    }

 
 
`