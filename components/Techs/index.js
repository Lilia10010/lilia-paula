import Icon from 'next/image'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { 
    Container,
    Title,
    WrapperSlider,
    Tech,
    BorderGradient
} from './styles'




const Techs  = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }

    if (process.browser) {
        if (window.matchMedia("(max-width: 500px)").matches) {
           
        } 
      }

   
    return(
        
        <Container id="home-techs">


            
            <Title>Techs</Title>

            <BorderGradient>

                     
                <WrapperSlider>
                   { process.browser && settings ? (
                       <Slider {...settings}>
                        <Tech>
                            <Icon src="/icon_html_css.svg" width="200px" height="200px" /> 
                        </Tech>
                        <Tech>
                            <Icon src="/icon_react_js.svg" width="200px" height="200px" /> 
                        </Tech>                    
                        <Tech>
                            <Icon src="/icon_next_js.svg" width="200px" height="200px" /> 
                        </Tech>
                        <Tech>
                            <Icon src="/icon_javascript.svg" width="200px" height="200px" />                     
                        </Tech>         
                        <Tech>
                            <Icon src="/icon_typescript.svg" width="200px" height="200px" />                     
                        </Tech>         
                        <Tech>
                            <Icon src="/icon_sass.svg" width="200px" height="200px" />                     
                        </Tech>         
                        <Tech>
                            <Icon src="/icon_styled_components.svg" width="200px" height="200px" />                     
                        </Tech>         
                        <Tech>
                            <Icon src="/icon_tailwindcss.svg" width="200px" height="200px" />                     
                        </Tech>         
                        <Tech>
                            <Icon src="/icon_gastby.svg" width="200px" height="200px" />                     
                        </Tech>         
                    </Slider>

): null}
                   
                   
                </WrapperSlider>
</BorderGradient>
           




        </Container>

        
    
        
    )
}


export default Techs