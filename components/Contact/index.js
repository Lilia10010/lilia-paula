
import { useState, useEffect, useCallback } from 'react'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'
import { Copy } from '@styled-icons/fa-regular/Copy'

import ContactImage from 'next/image'
import HoverEffect from '../HoverEffect'

import {
    Container,
    Title,
    ContainerBottom,
    IconsSocial,
    WrapperContact,
    WrapperImageContact,
    EmailCopy,
    Footer

} from './styles'

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState('Click para copiar 🙂') 


    const handleCopy = async (id) => {

        const div = document.getElementById(id)
        const text = div.innerText
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.append(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)

        setCopySuccess('Copiado 🙃')
        const resetMessageCopy = document.getElementById('wrapperCopy')               
        resetMessageCopy.onmouseover = () => {
            setCopySuccess('Click para copiar 🙂')
        }             
      }

    return(
       
        <Container id="home-contact"> 
          <Title>Contato</Title> 
          <ContainerBottom>

         <HoverEffect className="HoverEffect"/>       

            <WrapperContact>
                <WrapperImageContact>
                    <ContactImage src="/contact_image.svg" width="450px" height="450px" /> 
                </WrapperImageContact>
                  <IconsSocial>  
                    <div>
                        <a
                            aria-label="WhatsApp"
                            href="https://api.whatsapp.com/send?phone=5585981326645&text=Ol%C3%A1%20L%C3%ADlia%2C%20gostaria%20de%20bater%20um%20papo%20com%20voc%C3%AA%20%3A)" 
                            target="_blank"
                            rel="noopener noreferrer external"                            
                            >
                            <Whatsapp width="50"/>                
                        </a>

                        <a 
                            aria-label="Github"
                            href="https://github.com/lilia10010" 
                            target="_blank"
                            rel="noopener noreferrer external" 
                            >
                            <Github width="50"/>                
                        </a>
                        <a 
                            aria-label="Linkedin" 
                            href="https://www.linkedin.com/in/lilia-paula-neiva/" 
                            target="_blank"
                            rel="noopener noreferrer external" 
                            >              
                            <Linkedin width="50"/>
                        </a>           
                    </div>              
                    <EmailCopy onClick={() => handleCopy('wrapperCopy') }>
                        <div  id="wrapperCopy">liliaxtz2@gmail.com</div> 
                        <Copy width="24" />
                        <span>{copySuccess}</span>
                    </EmailCopy>
                </IconsSocial>
            </WrapperContact>

            <Footer>
               © 2021 developed by 🍄 Lília Paula
            </Footer>
        </ContainerBottom>
        </Container>
    )
}

export default Contact