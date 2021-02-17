import styled from "styled-components";


export const Container = styled.div`
    
    box-shadow: 3px 4px 10px #F110;

    /* display: flex;
    justify-content: space-around;
    align-items: center; */
`

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;
    
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
`

export const Avatar = styled.div`
    /* max-width: 47vw; */
   
   
`



