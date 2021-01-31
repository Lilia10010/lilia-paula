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
    justify-content: space-around;
    align-items: center;
    padding-top: 100px;
    
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    max-width: 450px;

   > h3{
    padding: 50px 0 15px;
    font-size: 30px;
    }

    > div{
        color: var(--color-white-description);
    }

    > p{
        padding: 50px 0 24px;
        color: var(--color-white-description);
    }

    > a{
        width: 147px;
    background: #d60077;
    padding: 10px;
    text-decoration: navajowhite;
    border-radius: 5px;
    text-align: center;
    color: var(--color-white-description);
    font-weight: bold;
    transition: .5s;
    }

    > a:hover{
        background: var(--color-primary-dark);
    }
`

export const Avatar = styled.div`
    /* max-width: 47vw; */
   
   
`



