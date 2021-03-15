import { useContext } from 'react'
import { StyledThemeContext } from '../../contexts/themeContext'
import { Moon } from '@styled-icons/boxicons-regular/Moon' 

import { 
    Container,
    MenuLinks 
} from './styles'


const MenuBarTop = () => {
   const {theme, toggleTheme} = useContext(StyledThemeContext)
   console.log('no menu', theme.bg) 
  
    
    return(
        <Container>
            <MenuLinks>                
                <ul>
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#home-projects">Projetos</a></li>
                    <li><a href="#home-techs">Techs</a></li>
                    <li><a href="#home-contact">Contato</a></li>
                    {/* <label
                onClick={toggleTheme}
                checked={theme.title === 'dark' }
                >
                    {theme.title === 'dark' ? (
                        <Moon color="#fbce32" size={24} />
                    ) : (
                        <Moon color="#d9a1a1" size={24} />
                        )}
                </label>    */}
                </ul>               

                          
            </MenuLinks>

        </Container>
    )
}

export default MenuBarTop