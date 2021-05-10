// import { useRef } from 'react'
// import Input from '../Form/input'
// import { Form } from '@unform/web'
// import * as Yup from 'yup'
import { useState, useEffect, useCallback } from 'react'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'
import { Copy } from '@styled-icons/fa-regular/Copy'

import ContactImage from 'next/image'
import HoverEffect from '../HoverEffect'

import {
    Container,
    IconsSocial,
    WrapperContact,
    EmailCopy,
    Footer

} from './styles'

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState('Click para copiar 🙂') 
    const [documentt, setDocument] = useState('') 
    // const formRef = useRef(null)

    // async function handleSubmit(data, { reset }) {
    //     // if(data.name === ''){
    //     //    // formRef.current.setFieldError('name', 'O nome é obrigatório!')
    //     //     formRef.current.setErrors({
    //     //         name: 'O nome é obrigatório!',
    //     //         email: 'O e-mail é obrigatório'
    //     //     })
    //     // }
    //         try{        
    //             const schema = Yup.object().shape({
    //                 name: Yup.string().required('O nome é obrigatório'),
    //                 email: Yup.string().email().required('O E-mail é obrigatório')
    //             })

    //             await schema.validate(data, {
    //                 abortEarly: false,
    //             })
    //             console.log(data);
    //             // { email: 'test@example.com', password: '123456' }
    //             formRef.current.setErrors({});
    //             reset()
    //         } catch (err){
    //            const validationErrors = {};
    //             if (err instanceof Yup.ValidationError) {
    //                 err.inner.forEach(error => {
    //                 validationErrors[error.path] = error.message;
    //                 });
    //                 formRef.current.setErrors(validationErrors);
    //             }
    //         }
    //     }   


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
         <HoverEffect />       

            <WrapperContact>
                <ContactImage src="/contact_image.svg" width="350px" height="350px" /> 
                  <IconsSocial>  
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=5585981326645&text=Ol%C3%A1%20L%C3%ADlia%2C%20gostaria%20de%20bater%20um%20papo%20com%20voc%C3%AA%20%3A)" target="_blank">
                            <Whatsapp width="50"/>                
                        </a>
                        <a href="https://github.com/lilia10010" target="_blank">
                            <Github width="50"/>                
                        </a>
                        <a href="https://www.linkedin.com/in/lilia-paula-neiva/" target="_blank">              
                            <Linkedin width="50"/>
                        </a>           
                    </div>              
                    <EmailCopy onClick={() => handleCopy('wrapperCopy') }>
                        <div  id="wrapperCopy">contato@liliapaula.com</div> 
                        <Copy width="24" />
                        <span>{copySuccess}</span>
                    </EmailCopy>
                </IconsSocial>
            </WrapperContact>
            



            <Footer>
               © 2021 developed by 🍄 Lília Paula
            </Footer>


            {/* <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" type="text" />
                <Input name="email" type="email" />
                <button type="submit">Enviar</button>
            </Form> */}
        </Container>
    )
}

export default Contact