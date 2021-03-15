import { useState } from 'react'

const test = () =>{   
    const [copySuccess, setCopySuccess] = useState('Click para copiar 🙂')  
    setCopySuccess('Copiado 🙃')
        const resetMessageCopy = document.getElementById('wrapperCopy')               
        resetMessageCopy.onmouseover = () => {
            setCopySuccess('Click para copiar 🙂')
        }     
}


  //setCopySuccess('Copiado 🙃')
        // const resetMessageCopy = document.getElementById('wrapperCopy')               
        // resetMessageCopy.onmouseover = () => {
        //     setCopySuccess('Click para copiar 🙂')
        // }
// const resetMessageCopy = window.document.getElementById('wrapperCopy')   
// window.addEventListener("scroll", test);

document.getElementById("wrapperCopy").addEventListener("click", test);


      
      export default function Scroll() {
        return null;
      }