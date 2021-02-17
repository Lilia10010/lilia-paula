import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`
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

    :root{
        --color-background: #0d0c0e;
        --color-background-dark: #010101;
        --color-primary: #d60077;
        --color-primary-hover: #ff008e;
        --color-primary-dark: #9c0358;
        --color-white: #fff;   
        --color-white-description: #e8e8e8;   
        --color-gradient: linear-gradient(155.34deg,#ff018e -0.59%,#ffa17b 51.28%,#ffcd1e);
        --color-text-white: #f9f9f9;
        --color-text-black: #000;
        --color-text-black-fosco: #0f0f0f;

        --font-title: 4.5em;

        --width-menu-left: 0;

        --padding-container: 50px;

    }
    /* => F500BA, ,f500a7  F500A9*/
    body{
        background: var(--color-background);
        color: var(--color-primary);        
        -webkit-font-smoothing: antialiased;       
    }

    

    body, input, button{
        /* font-family: 'Roboto Mono', monospace; */
        font-family: 'Quicksand', sans-serif;
    } 
    span, p{
        font-family: 'Roboto', sans-serif;
    }
`