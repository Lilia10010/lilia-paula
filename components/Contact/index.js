import { useRef } from 'react'
import Input from '../Form/input'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import ContactImage from 'next/image'

import {
    Container
} from './styles'

const Contact = () => {
    const formRef = useRef(null)

    async function handleSubmit(data, { reset }) {
        // if(data.name === ''){
        //    // formRef.current.setFieldError('name', 'O nome é obrigatório!')
        //     formRef.current.setErrors({
        //         name: 'O nome é obrigatório!',
        //         email: 'O e-mail é obrigatório'
        //     })
        // }
            try{        
                const schema = Yup.object().shape({
                    name: Yup.string().required('O nome é obrigatório'),
                    email: Yup.string().email().required('O E-mail é obrigatório')
                })

                await schema.validate(data, {
                    abortEarly: false,
                })
                console.log(data);
                // { email: 'test@example.com', password: '123456' }
                formRef.current.setErrors({});
                reset()
            } catch (err){
               const validationErrors = {};
                if (err instanceof Yup.ValidationError) {
                    err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                    });
                    formRef.current.setErrors(validationErrors);
                }
            }
        }

    return(
        <Container>

            <ContactImage src="/contact_image.svg" width="500px" height="500px" /> 


            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" type="text" />
                <Input name="email" type="email" />
                <button type="submit">Enviar</button>
            </Form>
        </Container>
    )
}

export default Contact