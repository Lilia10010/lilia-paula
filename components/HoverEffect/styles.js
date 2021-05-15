import styled from "styled-components";

export const Teste = styled.div`

    position: relative;
    width: 100%;
    height: 90%;
   
    
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    position: absolute;
    z-index: 1;

    span{
    position: relative;
    width: 20px;
    height: 20px;
    display: block;
    color: #0000;
    
    }
    span::before
    {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000;
    /* transform: scale(0.5); */

    /* border-radius: 50%; */
    pointer-events: none;
    transition: 1.3s;
    }

    span:hover:before
    {
       
        
        transform: scale(.5);
        transition: 0s;
        background: var(--color-primary);
        box-shadow: 0 0 10px var(--color-primary),
                0 0 20px var(--color-primary),
                0 0 40px var(--color-primary),
                0 0 60px var(--color-primary),
                0 0 80px var(--color-primary),
                0 0 100px var(--color-primary);
        
    }

    @media screen and (max-width: 575px){       
        display:none;
    }
`