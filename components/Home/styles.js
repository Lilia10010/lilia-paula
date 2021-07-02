import styled from "styled-components";


export const Container = styled.div`
    
    box-shadow: 3px 4px 10px #F110;
    /* padding: 0 50px; */

    @media screen and (max-width: 575px){
        padding: 0 10px;
    }
`

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 100px;

    @media screen and (max-width: 975px) {
        height:  auto;
        flex-direction: column-reverse;
    }
    
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    width: 50%;

   > h3{
    font-size: var(--font-title);
    }

    > div{
        color: var(--color-text-gray-500);
        font-size: 2.5em;
    }

    > p{
        padding: 50px 0 6px;
        color: var(--color-text-gray-700);
    }

    a
    {  
        cursor: pointer;
        font-weight: 800; 
        border: none;
        position: relative;
        display: inline-block;
        width: 218px;
        height: 54px;
        /* box-shadow: 3px 3px 8px -3px #ff009e85; */
        margin-top: 20px;
        transition: 1s;

        :hover{
            box-shadow: 4px 4px 14px -3px #b8b8b891;
        }
    }

    a span
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: var(--color-background-dark);
        background: var(--color-text-gray-800);
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        font-size: 1.11rem;

        svg
        {
            margin-right: 11px;
        }
    }

    a span:nth-child(2)
    {
        color: var(--color-text-gray-800);
        background: var(--color-background-dark);
        overflow: hidden;
        z-index: 2;
        transition: 0.5s;
        clip-path: polygon(60% 0, 100% 0%, 100% 100%, 60% 100%, 40% 53%);
    }

    a span:nth-child(2):hover
    {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0% 50%);

    }
    a span:nth-child(1):hover ~ span:nth-child(2)
    {
        clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 45%);

    }
   

    @media screen and (max-width: 975px) {
        width: 100%;
        padding: unset;
        
        > div{
        color: var(--color-text-gray-700);
        font-size: 1.5em;

        
    }
}
`

export const Avatar = styled.div`

    
    svg{
        padding: 10px 0;
        width: auto;
        max-width: 500px;

        #woman{
            animation: woman 3s ease-in-out infinite;
        }
        @keyframes woman
        {
            0%, 100%
            {
                transform: translateY(3px);
            }
            50%
            {
                transform: translateY(-1px)
            }
        }

        #Vector_6, #Vector_7, #Vector_8, #Vector_15{
            animation: cabelo 4s ease-in-out infinite;
        }
        @keyframes cabelo
        {
            0%, 100%
            {
                transform: translateY(3px);
            }
            50%
            {
                transform: translateY(-3px)
            }
        }

        #Vector_31{
            fill: #d60077;
            opacity: 0.5;
            animation: vector 6s ease-in-out infinite;
        }
        #Vector_32{
            fill: #d60077;
            opacity: 0.5;
            animation: vector 7s ease-in-out infinite;
        }
        #Vector_33{
            fill: #d60077;
            opacity: 0.5;
            animation: vector33 8s ease-in-out infinite;
        }
        @keyframes vector
        {
            0%, 100%
            {
                transform: translateX(80px);
            }
            50%
            {
                transform: translateX(0px)
            }
        }
        @keyframes vector33
        {
            0%, 100%
            {
                transform: translateX(50px);
            }
            50%
            {
                transform: translateX(0px)
            }
        }

        #folha-circulo{
            animation: folha-circulo 3s ease-in-out infinite;

        }
        @keyframes folha-circulo
        {
            0%, 100%
            {
                transform: translateY(10px);
            }
            50%
            {
                transform: translateY(-50px)
            }
        }

        #folha{
            animation: folha 5s ease-in-out infinite;
        }
        #folha3{
            animation: folha 5s ease-in-out infinite;

        }
        @keyframes folha
        {
            0%, 100%
            {
                transform: translateX(2px);
            }
            50%
            {
                transform: translateX(-2px)
            }
        }
        #folha2{
            animation: folha3 3s ease-in-out infinite;

        }
        @keyframes folha3
        {
            0%, 100%
            {
                transform: translateX(5px);
            }
            50%
            {
                transform: translateX(-5px)
            }
        }

        #vapor1{
            animation: vapor 3s ease-in-out infinite;
            
        }
        #vapor2{
            animation: vapor2 3s ease-in-out infinite;            
        }
        #vapor3{
            animation: vapor3 5s ease-in-out infinite;            
        }
        #vapor4{
            animation: vapor4 5s ease-in-out infinite;            
        }
        @keyframes vapor
        {
            0%, 100%
            {
                transform: translateY(5px);
            }
            50%
            {
                transform: translateY(-5px)
            }
        }
        @keyframes vapor2
        {
            0%, 100%
            {
                transform: translateY(5px);
            }
            50%
            {
                transform: translateY(-5px)
            }
        }
        @keyframes vapor3
        {
            0%, 100%
            {
                transform: translateY(25px);
            }
            50%
            {
                transform: translateY(-7px)
            }
        }
        @keyframes vapor4
        {
            0%, 100%
            {
                transform: translateY(25px);
            }
            50%
            {
                transform: translateY(-7px)
            }
        }
      
       
    }


@media screen and (max-width: 975px) {
    >svg{
        max-height: 261px;
    }
    /* >img{
        width: 35% !important;
       }  */
}
@media screen and (max-width: 575px) {
    >svg{
        max-height: 157px;
    }
}
   
   
`



