import AvatarImage from 'next/image'

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
                        <div>Desenvolvedora front-end na Arkos Digital</div>
                        <p>Desenvolvo aplicações responsivas, desenvolvo aplicações responsivas, desenvolvo aplicações responsivas.</p>
                        <button><span>Lorem ipsum</span><span>Lorem ipsum</span></button>
               </Description>

               <Avatar>
                <AvatarImage src="/home-perfil.svg" width="500px" height="500px" /> 
               </Avatar>
         

            </Wrapper>
        </Container>

           
        

    )
}

export default Home;