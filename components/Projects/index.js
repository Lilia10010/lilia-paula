import ImageOne from 'next/image'
import { 
    Container,
    Title,
    WrapperCard,
    Card,
    WrapperImg,
    Content
 } from './styles'

const Project = () => {

    return(
        <Container id="home-projects">
            <Title>Projetos</Title>

            <WrapperCard>
                <Card>
                    <WrapperImg>
                        <ImageOne src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                    </WrapperImg>
                    <Content>
                        <h2>UI Clone Twiiter</h2>
                        <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                    </Content>
                        <a href="#">Ver mais</a>
                </Card>       
             
                <Card>
                    <WrapperImg>
                        <ImageOne src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                    </WrapperImg>
                    <Content>
                        <h2>UI Clone Twiiter</h2>
                        <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                    </Content>
                        <a href="#">Ver mais</a>
                </Card>       
           
                <Card>
                    <WrapperImg>
                        <ImageOne src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                    </WrapperImg>
                    <Content>
                        <h2>UI Clone Twiiter</h2>
                        <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                    </Content>
                        <a href="#">Ver mais</a>
                </Card>       
             </WrapperCard>


        </Container>
    )
}

export default Project