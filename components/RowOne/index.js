
import Project from 'next/image'
import { 
    Container,
    Title,
    ContentRowOne,
    ContentRowTwo,
    WrapperCard,
    ContentCard
} from './styles'

const RowOne = () => {
    return(
        
        <Container>
            
            <Title>Meus Projetos</Title>
            <ContentRowOne>

                <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
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
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>

                <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>
            </ContentRowOne>


            <ContentRowTwo>
            <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>

                 <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>

                 <ContentCard>
                    <WrapperCard>
                        <Project src="/witter_ui_clone.png" width="290px" height="330px"/>                     
                        <h3>UI Clone Twiiter</h3>  
                        <p>Ui clone responsivo Ui clone responsivo Ui clone 
                            responsivo Ui clone responsivo Ui clone responsivo  </p>                  
                        <a href="#">Ver mais</a>
                    </WrapperCard>
                </ContentCard>              
            </ContentRowTwo>

            
            

        </Container>

        
    
        
    )
}

export default RowOne