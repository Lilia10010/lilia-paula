import AvatarImage from 'next/image'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'

import SVGHome from '../SVGHome'


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
                        <p>Hey, eu sou a</p>
                        <h3>Lília Paula</h3>
                        <div>Desenvolvedora Front-End</div>
                        <a 
                            href="https://www.linkedin.com/in/lilia-paula-neiva/" 
                            target="_blank"
                            rel="noopener noreferrer external"  
                        >
                            <span><Linkedin width="17"/>Linkedin</span>
                            <span><Linkedin width="17"/>Linkedin</span>
                        </a>
               </Description>

               <Avatar>
                   <SVGHome />
               </Avatar>
    

            </Wrapper>
        </Container>

    )
}

export default Home;