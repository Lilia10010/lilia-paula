import styled from 'styled-components';

export const Container = styled.div`
margin: auto -50px;
padding-top: 50px;

    
    background: linear-gradient(172deg, var(--color-background-dark), var(--color-background-dark) 59%, var(--color-primary) 50%, var(--color-primary)); 
`;


export const Title = styled.h1`
    color: var(--color-text-white);
    padding: 0 50px 70px;
    font-size: var(--font-title);
`

export const WrapperCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    /* background: linear-gradient(172deg, var(--color-background-dark), var(--color-background-dark) 59%, var(--color-primary) 50%, var(--color-primary)); */

`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 5px;
 
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

    >a{
        position: absolute;
        bottom: 10px;
      
        width: 147px;
        background: #d60077;
        box-shadow: -1px 15px 30px -12px black;
        padding: 10px;
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
export const Content = styled.div`
    position: relative;
    text-align: center;
    color: rgb(17, 17, 17);
  


 
`
