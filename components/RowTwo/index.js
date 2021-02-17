
import Project from 'next/image'
import { 
    Container,
    Title,
    ContentRowOne,
    WrapperCard,
    ContentCard
} from './styles'

const RowTwo = () => {
    return(
        
        <Container>
            
            <Title>Techs</Title>
            <ContentRowOne>

                <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="310" height="237px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Projeto de Ui clone:
                        Interface do witter
                        Responsivo
                              </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>
                
                <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="310" height="237px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>

                <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="310" height="237px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>
            </ContentRowOne>

        </Container>

        
    
        
    )
}

export default RowTwo