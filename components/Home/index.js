import AvatarImage from 'next/image'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'

import { 
    Container,
     Wrapper,
     Description,
     Avatar
     } from  './styles'

const Home = () => {

    return (
        <Container id="home-section">           
            <Wrapper>
                <Description>
                        <h3>Lília Paula</h3>
                        <div>Desenvolvedora Full Stack na Arkos Digital</div>
                        <p>Desenvolvedora Full Stack com foco em Front-End.</p>
                        <a href="https://api.whatsapp.com/send?phone=5585981326645&text=Ol%C3%A1%20L%C3%ADlia%2C%20gostaria%20de%20bater%20um%20papo%20com%20voc%C3%AA%20%3A)" target="_blank">
                            <span><Whatsapp width="17"/>WhatsApp</span>
                            <span><Whatsapp width="17"/>WhatsApp</span>
                        </a>
               </Description>

               <Avatar>
                <AvatarImage src="/home-perfil.svg" width="500px" height="500px" /> 
               </Avatar>
         

            </Wrapper>
        </Container>

           
        

    )
}

export default Home;