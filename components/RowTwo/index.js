
import { Github } from '@styled-icons/boxicons-logos/Github'
import Icon from 'next/image'
import { 
    Container,
    Title,
    WrapperTechs,
    Tech,
    BorderGradient
} from './styles'



const RowTwo = () => {



   
    return(
        
        <Container id="home-techs">
            
            <Title>Techs</Title>
            <BorderGradient>            
                <WrapperTechs className="card">
                    <Tech hover>
                    <Icon src="/icon_react_js.svg" width="250px" height="250px" /> 
                    </Tech>
                    
                    <Tech>
                    <Icon src="/icon_next_js.svg" width="250px" height="250px" /> 
                    </Tech>
                    <Tech>
                    <Icon src="/icon_javascript.svg" width="250px" height="250px" /> 
                    </Tech>
                    <Tech>
                    <Icon src="/icon_typescript.svg" width="250px" height="250px" />                     
                    </Tech>
                </WrapperTechs>
            </BorderGradient>




        </Container>

        
    
        
    )
}

export default RowTwo