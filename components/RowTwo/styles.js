import styled, { css } from 'styled-components'

export const Container = styled.div`
    margin: auto -50px;
   
    /* height: 100vh; */
    position: relative;

    /* ::after
{
    content: '';
    position: absolute;
    
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(187deg, #01bdc6, #01bdc6 50%, transparent 50%, transparent);
   
} */
  
`

export const Title = styled.h1`
    padding: 0 50px 70px;
    font-size: var(--font-title);
`

const ContentRowCSS = css`
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 50px;
    justify-content: space-around;
    padding-bottom: var(--padding-container); 
    
`

export const ContentRowOne = styled.div`
    padding-top: var(--padding-container);    
    
    ${ContentRowCSS}
    background: linear-gradient(161deg, var(--color-background-dark), var(--color-background-dark) 50%, var(--color-primary) 50%, var(--color-primary));
    /* position: absolute; */
   
`
export const ContentRowTwo = styled.div`
    ${ContentRowCSS}
    background: linear-gradient(17.3deg, var(--color-background-dark), var(--color-background-dark) 50%, var(--color-primary) 50%, var(--color-primary));
`

export const WrapperCard = styled.div`
      /* width: 300px; */
      height: 360px;
    background: #ffffff3d;
    backdrop-filter: blur(21px);
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    
    box-shadow: -1px 15px 30px -12px black;
    transition: 1s;
   
 
  position: relative;
  /* -webkit-backface-visibility: hidden; */
  z-index: 1;

    ::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background: linear-gradient(158deg, var(--color-background-dark), var(--color-background-dark) 61%, #e91e63 50%, #e91e63);
        transition: opacity 0.5s ease-out;
        z-index: 2;
        opacity: 0;
    } 
    :hover:after {
  opacity: 1;
} 
    >div{
        z-index: 3;
    }

    >div img{
        border-radius: 7px;
    }
   
    >h3{
        padding: 19px 0 19px;
        color: var(--color-text-white);
        z-index: 3;
    }
    >p{
        opacity: 0;
        position: absolute;
        bottom: 70px;
        text-align: center;
        color: var(--color-text-white);
        transition: 1.5s;
    }
    >a{
        position: absolute;
        bottom: 10px;
        z-index: 3;
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
        height: 430px;
        transform: translateY(-20px);
        box-shadow: 3px 3px 30px -12px #ffffff57;
       
        >p{    
            
            opacity: 1;       
            z-index: 3;
        }
    }
`

export const ContentCard = styled.div`
    height: 430px;
`



