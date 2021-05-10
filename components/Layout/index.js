import MenuBarTop from  '../MenuBarTop'
import Home from '../Home'
import Project from '../Projects'
import Techs from '../Techs'
import Contact from '../Contact'

import { Container, WrapperContent } from './styles'

export const Layout = () => {
    
    return(
        <Container>
           
            <MenuBarTop/>
            <WrapperContent>
                <Home />
                <Project />
                <Techs />
                <Contact />            
            </WrapperContent> 
           
        </Container>
       
    )
}
