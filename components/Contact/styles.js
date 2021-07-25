import styled from "styled-components";

export const Container = styled.footer`

      
    position: relative;
    padding-top: var(--padding-container);

    @media screen and (max-width: 975px) {
    
  }

  @media screen and (max-width: 575px){
        padding: 50px 0 10px;

       .teste{display:none;}
    }
`
export const ContainerBottom = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
`


export const Title = styled.h1`
    color: var(--color-text-gray-300);
    padding-bottom: 50px;    
    font-size: var(--font-title);
`

export const IconsSocial = styled.div`
  z-index: 2;
    

    >div{
      display: flex;
      justify-content: space-between;  
      padding-bottom: 50px;
     
    }

    div  svg{
        color: var(--color-text-white);
        opacity: 0.9;
        transition: 1s;
        -webkit-box-reflect: below -5px linear-gradient(transparent, #0001, #0003);
    }

    div svg:hover{
        transform: translateY(-5px);
        color: var(--color-primary-dark);        
    }

    a{
      font-size: 1rem;
      font-weight: 700;
      transition: 1s;      
    }
    a:hover{
      color: var(--color-primary-dark);  
      
    }

    @media screen and (max-width: 575px){
        padding: 55px 0;
    }
` 

export const EmailCopy = styled.a`
  display: flex;
  justify-content: center;
  position: relative;  
  font-weight: 700;
  transition: 1s;  
  cursor: grab;
  color: var(--color-text-white);
        opacity: 0.9;

      >svg{
        padding-left: 5px;
      }    
  
    :hover{
      color: var(--color-primary-dark);        
    }
    :hover span{
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      color: #000;       
    }


    >span{
      position: absolute;
      top: 0;
      font-size: 14px;
      background-color: #ffffff;
      color: #ffffff;
      padding: 5px 8px;
      border-radius: 5px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      box-shadow: 0px 1px 6px 0px #ff008e;
    }

    span::before {              
      position: absolute;
      content: '';
      height: 8px;
      width: 8px;
      background-color: #ffffff;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}


`

export const WrapperContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  align-items: center;
`
export const Footer = styled.div`
  color: var(--color-text-white);
   padding: 15px 0;  
   position: absolute;
    bottom: -65px;

   @media screen and (max-width: 575px){
        
    }
`
export const WrapperImageContact = styled.div`

/* img{
  max-width: 90% !important;
} */
 @media screen and (max-width: 575px){
        display: none;
    }


 
`
