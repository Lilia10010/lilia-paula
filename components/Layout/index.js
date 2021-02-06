import MenuBarLeft from '../MenuBarLeft'
import MenuBarTop from  '../MenuBarTop'
import Home from '../Home'
import RowOne from '../RowOne'
// import RowTwo from '../RowTwo'
import Contact from '../Contact'
import Footer from '../Footer'

import { Container, WrapperContent } from './styles'





export const Layout = () => {
    return(
        <Container>
            
            <MenuBarLeft />

            <WrapperContent>
                <MenuBarTop />
                <Home />
                <RowOne />
                {/* <RowTwo /> */}
                <Contact />

               
                <Footer />
            </WrapperContent>
        </Container>
       
    )
}
