import styled from 'styled-components';

export const Container = styled.div`
//margin: auto -50px;
//padding-top: 50px;
padding: 50px 0px 0 ;

    
    /* background: linear-gradient(172deg, var(--color-background-dark), var(--color-background-dark) 59%, var(--color-primary) 50%, var(--color-primary));  */

    @media screen and (max-width: 975px) {
        background: unset;  
    }

`;


export const Title = styled.h1`
    color: var(--color-text-white);
    padding: 0 0px 70px;
    font-size: var(--font-title);
`

export const WrapperCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
   
    /* background: linear-gradient(172deg, var(--color-primary), var(--color-primary) 59%, var(--color-background-dark) 50%, var(--color-background-dark)); */

`
export const CardColumn = styled.div`
    display: flex;
    justify-content: center;
    min-width: 30%;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 5px;
    margin-bottom: 65px !important;

    
 
    max-width: 300px;
    height: 420px;
    /* background: #fff; */
    margin: 30px 10px;
    /* padding: 20px 15px; */
    box-shadow: 0 5px 202px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;

    background: #ffffff3d;
    backdrop-filter: blur(5px);
    box-shadow: -1px 15px 30px -12px black;

    button
    {  
        cursor: pointer;
        font-weight: 800; 
        border: none;
        position: relative;
        display: inline-block;
        width: 160px;
        height: 37px;
        box-shadow: 3px 3px 4px -3px #ff009e;
        margin-top: 20px;
    }

    button span
    {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: var(--color-background-dark);
        background: var(--color-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
    }

    button span:nth-child(2)
    {
        color: var(--color-primary);
        background: var(--color-background-dark);
        overflow: hidden;
        z-index: 2;
        transition: 0.5s;
        clip-path: polygon(60% 0, 100% 0%, 100% 100%, 60% 100%, 40% 53%);
    }

    button span:nth-child(2):hover
    {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0% 50%);

    }
    button span:nth-child(1):hover ~ span:nth-child(2)
    {
        clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 45%);


    }

    :hover{
        background: #ffffff57;
        transform: translateY(-20px);
        box-shadow: 3px 3px 30px -12px #ffffff57;
    }

   

   
`
export const WrapperImg = styled.div`

    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
 
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
`

export const WrapperImgProject = styled.div`

    > p
    {
        color: #fff;
        padding-bottom: 20px;
    }    

    > svg
    {
        text-align: center;
        width: 100%;
        margin: 15px 0;
    }
`
export const Content = styled.div`
    position: relative;
    text-align: center;
    color: rgb(17, 17, 17);
  


 
`
