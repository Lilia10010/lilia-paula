import { useState } from 'react'
import Modal from 'react-modal';
// import { StarOutlined } from '@styled-icons/entypo/StarOutlined'
import ImageOne from 'next/image'
import { projectsList } from './projects'
import { Github } from '@styled-icons/boxicons-logos/Github'


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

    const [modalCoverTitle, setModalCoverTitle] = useState('')
    const [modalDescription, setModalDescription] = useState('')
    const [modalInsideProjectLink, setModalInsideProjectLink] = useState('')
    const [modalInsideImage, setModalInsideImage] = useState('')
    const [modalInsideImageAlt, setModalInsideImageAlt] = useState('')

 

    const handleOpenModal = (idModal) =>  {
         const projetcId = projectsList[idModal] 

         setModalCoverTitle(projetcId['coverTitle'])
         setModalInsideProjectLink(projetcId['insideProjectLink'])
         setModalDescription(projetcId['description'])
         setModalInsideImage(projetcId['insideImage'])
         setModalInsideImageAlt(projetcId['alt'])        
        
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
                        return(
                            <CardColumn key={index}>                
                                <Card>
                                    <WrapperImg>
                                        <img src={e.coverImage} alt={e.alt}/>
                                    </WrapperImg>
                                    <Content>
                                        <h2>{e.coverTitle}</h2>
                                        <p>{e.description}</p>
                                    </Content>
                                        <button onClick={() => {handleOpenModal(e.id)} }><span>Ver mais</span><span>Ver mais</span></button>                   
                                </Card>       
                            </CardColumn>
                            )
                        })                    
                         ) : (null)}
            </WrapperCard>

             <Modal
                        
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
                    <h2>{modalCoverTitle}</h2>
                    {modalInsideProjectLink &&                     
                    <a href={modalInsideProjectLink} target="_blank" rel="noopener noreferrer external">
                        Click aqui para ver o protótipo do projeto <Github width="20"/> 
                    </a> }
                    <p>{modalDescription}</p>
                    <img src={modalInsideImage} alt={modalInsideImageAlt}/>
                </WrapperImgProject>
            </Modal>

        </Container>
    )
}

export default Project