import styled, { css } from 'styled-components'

export const Container = styled.section`
position: relative;
padding: 50px 10px 0 10px;
  
`

export const Title = styled.h1`
    color: var(--color-text-gray-300);
    padding-bottom: 50px;    
    font-size: var(--font-title);
`

export const WrapperTechs = styled.div`
`

export const Tech = styled.div`    
    width: 20%;
    min-width: 125px;
    padding-bottom: 23px;
    
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        width: 124px;
        height: 111px;
        box-shadow: 0px 0px 13px 2px #000;
        padding: 15px 13px;
        border: solid 1px #494949;
        border-radius: 10px;
        
        transition: 0.5s;

       svg{
          margin-bottom: 10px;
       }

       :hover{           
           border-color: #ff008e;           
        }
    }
    .imageTech span{
       margin-top: 10px !important;
    }

   

    @media screen and (max-width: 800px) {
       margin-right: 10px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

