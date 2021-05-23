import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`
  #__next{
    padding: 0 20px;
  }
    @font-face {
        font-family: 'Quicksand', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    
    ::-moz-selection {
    background: #d60077;
    }

    ::selection {
    background: #d60077;
    }

    :root{
        --color-background: #0d0c0e;
        --color-background-dark: #010101;
        --color-primary: #d60077;
        --color-primary-hover: #ff008e;
        --color-primary-dark: #9c0358;
        --color-white: #fff;   
        --color-white-description: #e8e8e8;   
        --color-gradient: linear-gradient(155.34deg,#ff018e -0.59%,#ffa17b 51.28%,#ffcd1e);
        --color-text-black: #000;
        --color-text-black-fosco: #0f0f0f;

        --color-text-white: #ddd;
        --color-text-gray-300: #ddd;
        --color-text-gray-500: #a1a1a1;
        --color-text-gray-700: #717171;
        --color-text-gray-800: #7e7e7e;
        
        --color-gray-900: #585858;

        --font-title: 4.5em;
        --font-title-mobile: 2.5em;

        --width-menu-left: 0;

        --padding-container: 50px;

        @media screen and (max-width: 975px) {
          --font-title: 2.5em;
        }

    }
  

    body, input, button{
        /* font-family: 'Roboto Mono', monospace; */
        font-family: 'Quicksand', sans-serif;
    } 
    span, p{
        font-family: 'Roboto', sans-serif;
    }

body, html
{
    scroll-behavior: smooth;
    

    background: var(--color-background);
   
        color: var(--color-text-gray-300);        
        -webkit-font-smoothing: antialiased; 
    height: 100%;

    ::-webkit-scrollbar-track {
      background-color: transparent;
      position: absolute;
      opacity: 0.7;
      
    }

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #ff018e;
      //background-color: rgb(61, 60, 66);
      
    }

  }



  .react-modal-overlay
    {
        background: #93939347;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 10; 
    }
    .react-modal-content
    {
      top: 85px;
      left: 20%;
      right: 20%;
      bottom: 85px;
        
      background: #000;
      padding: 3rem;
      position: absolute;
      overflow: auto;
      border-radius: 0.24rem;

      border-bottom: 3px solid #000;
      border-top: 3px solid #000;

      ::-webkit-scrollbar-track {
      background-color: transparent;
      position: absolute;
      opacity: 0.5;      
     }

      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #fff;
        
      }

      
    }

    .react-modal-close
    {
        position: fixed; 
        top: 7rem;
        right: 22%;
        font-weight: 800;
        font-size: 1rem;
        border: 0;
        background: transparent;
        transition: 0.2s;
        color: #fff;
        cursor: pointer;

        &:hover
        {
            filter: brightness(0.7);
        }
    }

    @media screen and (max-width: 575px){
      .react-modal-content
    {
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
        
     
      padding: 1rem;
     
    }

    .react-modal-close
    {
        right: 2rem;
        top: 2rem;
        
    }

    }

  
 
`