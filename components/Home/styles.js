import styled from "styled-components";


export const Container = styled.div`
    
    box-shadow: 3px 4px 10px #F110;
`

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
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

    > a{
        font-size: 25px;
        width: 247px;
        background: #d60077;
        padding: 15px;
        text-decoration: navajowhite;
        border-radius: 5px;
        text-align: center;
        color: var(--color-white-description);
        font-weight: bold;
        transition: .5s;
        
    }

    > a:hover{
        transform: translateY(-5px);
        background: var(--color-primary-dark);
    }

    @media screen and (max-width: 975px) {
        width: 100%;

        >h3{
            font-size: var(--font-title-mobile);
        }
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
        max-width: 50% !important;
    }
    >img{
        width: 35% !important;
       }
}
   
   
`



