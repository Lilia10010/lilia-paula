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
    padding: 50px 0 15px;
    font-size: var(--font-title);
    }

    > div{
        color: var(--color-white-description);
        font-size: 2.5em;
    }

    > p{
        padding: 50px 0 24px;
        color: var(--color-white-description);
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
        box-shadow: 3px 3px 8px -3px #ff009e85;
        margin-top: 20px;
    }

    a span
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
        letter-spacing: 2px;
        font-size: 1.11rem;

        svg
        {
            margin-right: 11px;
        }
    }

    a span:nth-child(2)
    {
        color: var(--color-primary);
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
        color: var(--color-white-description);
        font-size: 1.5em;
    }
}
`

export const Avatar = styled.div`
    text-align: center;


@media screen and (max-width: 975px) {
    >div{
        max-height: 261px;
    }
    >img{
        width: 35% !important;
       }
}
@media screen and (max-width: 575px) {
    >div{
        max-height: 157px;
    }
}
   
   
`



