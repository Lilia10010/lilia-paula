import { useState } from 'react'
import Modal from 'react-modal';
import { StarOutlined } from '@styled-icons/entypo/StarOutlined'

import ImageOne from 'next/image'
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

    return(
        <Container id="home-projects">
            <Title>Projetos</Title>

            <WrapperCard>
                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>

                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>

                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>

                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>
                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>
                <CardColumn>                
                    <Card>
                        <WrapperImg>
                            <ImageOne src="/portal-de-noticiasEvoxNews.png" width="290px" height="330px"/>                       
                        </WrapperImg>
                        <Content>
                            <h2>evox News</h2>
                            <p>Lorem ipsum dolor,  facere ipsum alias tempore ad? Ducimus eos facere fuga quia autem eum ratione quos.</p>
                        </Content>
                            <button onClick={handleOpenModal}><span>Ver mais</span><span>Ver mais</span></button>

                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={handleCloseModal}
                                contentLabel="Example Modal"
                                overlayClassName="react-modal-overlay"
                                className="react-modal-content"
                            >
                                <button
                                    type="button" 
                                    onClick={handleCloseModal}
                                    className="react-modal-close"
                                >
                                    X
                                </button>
                                <WrapperImgProject>
                                    <p>Aplicativo de Notícias de Tecnologia</p>
                                    <ImageOne src="/portal-de-noticiasEvoxNews.png" width="1920px" height="2319px"/> 
                                    <StarOutlined size={13} />
                                    <ImageOne src="/portal-de-noticiasEvoxNews02.png" width="1913px" height="576px"/> 
                                </WrapperImgProject>
                        </Modal>
                    </Card>       
                </CardColumn>
               
             
                     
             </WrapperCard>


        </Container>
    )
}

export default Project