import AvatarImage from 'next/image'

import { 
    Container,
     Wrapper,
     Description,
     Avatar
     } from  './styles'

const Home = () => {

    return (
        <Container>
            <Wrapper>
                <Description>
                        <h3>Lília Paula</h3>
                        <div>Descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas sed provident 
                            pariatur nostrum quo labore nisi. </p>
                        <a href="#">Lília</a>
               </Description>

               <Avatar>
                <AvatarImage src="/home-perfil.svg" width="500px" height="500px" /> 
               </Avatar>
         

            </Wrapper>
        </Container>

           
        

    )
}

export default Home;