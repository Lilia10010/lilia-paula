import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'
import Image from 'next/image'

import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { Gatsby } from '@styled-icons/remix-line/Gatsby'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Sass } from '@styled-icons/fa-brands/Sass'
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss'
import { Html5 } from '@styled-icons/remix-line/Html5'
import { Css3 } from '@styled-icons/foundation/Css3'
import { Github } from '@styled-icons/boxicons-logos/Github'



import { 
    Container,
    Title,
    WrapperTechs,
    Tech,
    Row
} from './styles'




const Techs  = () => {
   
    return(
        
        <Container id="home-techs">


            
            <Title>Techs</Title>
            <WrapperTechs>
            <Row>
                <Tech>
                    <div>
                        <Javascript width={50} height={50} />
                        JavaScript
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <ReactLogo width={50} height={50} />
                        ReactJs
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <Image src="/nextjs.svg" width={50} height={50} />
                        NextsJS
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <Gatsby width={50} height={50} />
                        Gatsby
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <Typescript width={50} height={50} />
                        TypeScript
                    </div>
                </Tech>
            </Row>

            <Row>
                <Tech>
                    <div>
                        <Sass width={50} height={50} />
                        Sass
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <StyledComponents width={50} height={50} />
                       <span>Styled</span>
                       <span>Components</span>  
                    </div>
                </Tech>
                <Tech>
                    <div>
                        <Tailwindcss width={50} height={50} />
                        Tailwindcss
                    </div>
                </Tech>
                <Tech>
                    <div className="imageTech">
                        <Image src="/chakrauiicon.svg" width={50} height={50} marginBottom={10}/>
                        <span>Chakra ui</span>
                    </div>
                </Tech>
            </Row>


                <Row>
                    <Tech>
                        <div>
                            <Html5 width={50} height={50} />
                            HTML 5
                        </div>
                    </Tech>               
                    <Tech>
                        <div>
                            <Css3 width={50} height={50} />
                            CSS 3
                        </div>
                    </Tech>               
                    <Tech>
                        <div>
                            <Github width={50} height={50} />
                            GitHub
                        </div>
                    </Tech>               
                </Row>
             


             
               
            </WrapperTechs>   
        </Container>   
        
    )
}


export default Techs