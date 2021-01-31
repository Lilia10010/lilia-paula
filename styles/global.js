import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --color-background: #0d0c0e;
        --color-primary: #d60077;
        --color-primary-hover: #ff008e;
        --color-primary-dark: #9c0358;
        --color-white: #fff;   
        --color-white-description: #e8e8e8;   
        --color-gradient: linear-gradient(155.34deg,#ff018e -0.59%,#ffa17b 51.28%,#ffcd1e);
        --color-text-black: #000;
        --color-text-black-fosco: #0f0f0f;

        --width-menu-left: 99px;

        --padding-top-of-container: 50px;

    }

    body{
        background: var(--color-background);
        color: var(--color-primary);        
        -webkit-font-smoothing: antialiased;       
    }

    

    body, input, button{
        font-family: 'Roboto Mono', monospace;        
    } 
    span, p{
        font-family: 'Roboto', sans-serif;
    }
`