import { useContext } from 'react'
import { StyledThemeContext } from '../../contexts/themeContext'
import { Moon } from '@styled-icons/boxicons-regular/Moon' 
import { Menu2 } from '@styled-icons/evaicons-solid/Menu2'  

import { 
    Container,
    MenuLinks 
} from './styles'


const MenuBarTop = () => {
   const {theme, toggleTheme} = useContext(StyledThemeContext)
   //console.log('no menu', theme.bg) 

   function menuToggle(){
    const toggleMenu = document.querySelector('.menu')
    const backgroundMenu = document.querySelector('.container')
    toggleMenu.classList.toggle('active')
}
  
    
    return(
        <Container className="container">
            <MenuLinks className="action-menu-mobile">   
                <div className="profile" onClick={() => menuToggle()}>
                    <Menu2 />
                </div> 

                <nav className="menu">   
                    <ul>
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#home-projects">Projetos</a></li>
                        <li><a href="#home-techs">Techs</a></li>
                        <li><a href="#home-contact">Contato</a></li>
                    </ul> 
                </nav>              

                          
            </MenuLinks>

        </Container>
    )
}

export default MenuBarTop