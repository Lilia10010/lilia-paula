import { useState } from 'react'
import Modal from 'react-modal';
import { StarOutlined } from '@styled-icons/entypo/StarOutlined'
import ImageOne from 'next/image'
import { projectsList } from './projects'


import { 
    Container,
    Title,
    WrapperCard,
    Card,
    CardColumn,
    WrapperImg,
    WrapperImgProject,
    Content
 } from './styles'


const Project = () => {


    const[isModalOpen, setIsModalOpen] = useState(false)

    function handleOpenModal(){
        setIsModalOpen(true)
    }
  
    function handleCloseModal(){
        setIsModalOpen(false)
    }

    if (typeof(window) !== 'undefined') {
        Modal.setAppElement('body')
      }

    return(
        <Container id="home-projects">
            <Title>Projetos</Title>

            <WrapperCard>
                {projectsList.length >=1 ? (
                    
                    projectsList.map((e, index) => {
                       console.log('indexxx', index)
        
        return(
            <CardColumn key={index}>                
            <Card>
                <WrapperImg>
                    <img src={e.coverImage} alt={e.alt}/>
                </WrapperImg>
                <Content>
                    <h2>{e.coverTitle}</h2>
                    <p>{e.coverDescription}</p>
                </Content>
                    <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                    <Modal
                        key={index}
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        contentLabel="Example Modal"
                        overlayClassName="react-modal-overlay"
                        className="react-modal-content"
                        // ariaHideApp={false}
                    >
                        <button
                            type="button" 
                            onClick={handleCloseModal}
                            className="react-modal-close"
                        >
                            X
                        </button>
                        <WrapperImgProject>
                            {console.log('index', index)}
                            <h2>{e.coverTitle}</h2>
                            <h2>{index}</h2>
                            <a href={e.insideProjectLink}>x</a>
                            <p>{e.insideDescription}</p>
                            <img src={e.insideImage['insideImageOne']} alt={e.alt}/>
                            <img src={e.insideImage['insideImageTwo']} alt={e.alt}/>
                           
                            
                        </WrapperImgProject>
                </Modal>
            </Card>       
        </CardColumn>
        )
    })


                    
                ) : (null)}

             </WrapperCard>


        </Container>
    )
}

export default Project