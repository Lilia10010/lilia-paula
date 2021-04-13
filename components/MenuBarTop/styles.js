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

   @media screen and (max-width: 342px){
    background: unset;       
   }
 
`

export const MenuLinks = styled.div`
    /* width: 500px; */
     padding-right: 30px;

   
    .profile
    {
        display: none;
    }

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


    @media screen and (max-width: 975px){
        padding-right: unset;   
        position: fixed;
        top: 0px;
        right: 6px;   

        .profile
        {
            display: block;
        }

        
        .profile
        {
            position: relative;
            width: 39px;
            height: 39px;
            /* overflow: hidden; */
            cursor: pointer;
        }

        .profile svg
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .menu
        {
            position: absolute;
            top: 0px;
            right: 30px;
            //padding: 10px 20px;
            /* background: #fff; */
           // width: 200px;
            box-sizing: 0 50px 25px rgba(0,0,0, 0.1);
           // border-radius: 15px;
            transition: 0.5s;
            visibility: hidden;
            opacity: 0;
        }
        .menu.active
        {
            visibility: visible;
            opacity: 1;
        }

        /* .menu::before
        {
            content: '';
            position: absolute;
            top: -5px;
            right: 28px;
            width: 20px;
            height: 20px;
            background: #fff;
            transform: rotate(45deg);
        } */
/*         
        h3
        {
            width: 100%;
            text-align: center;
            font-size: 18px;
            padding: 20px 0;
            font-weight: 500;
            font-size: 18px;
            color: #555;
            line-height: 1.2rem;
        }

        .menu span
        {
            font-size: 14px;
            color: #cecece;
            font-weight: 400;
        } */

        .menu ul li
        {
            list-style: none;
            padding: 10px 0;
            border-top: 1px solid rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .menu ul li svg 
        {
            max-width: 20px;
            margin-right: 10px;
            opacity: 0.5;
            transition: 0.5s;
        }

        .menu ul li:hover svg 
        {
            opacity: 1;
        }

        .menu ul li a
        {   
            font-size: 1.1rem;
            display: inline-block;
            text-decoration: none;
            color: #555;
            font-weight: 500;
            transition: 0.5s;
        }

        .menu ul li:hover a
        {
            color: #ff5d94;
        }
    }

    @media screen and (max-width: 342px){

        .menu ul li a
        {   
            font-size: 0.9rem;
        }


    }
 
`