import styled, { css } from 'styled-components'

export const Container = styled.div`
position: relative;
padding: 50px 10px 0 10px;
  
`

export const Title = styled.h1`
    color: var(--color-text-white);
    padding-bottom: 50px;    
    font-size: var(--font-title);
`

export const BorderGradient = styled.div`
    position: relative;
    background: #f10;
    z-index: 1;

    ::before{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    /* background: #fff; */
    z-index: -1;
    }

    ::after{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    /* background: #fff; */
    z-index: -1;
    /* filter:  blur(40px); */
    }

    
    ::before{
    background: linear-gradient(235deg, #772aff, #010615, #2196f3);
    }
    ::after{
    background: linear-gradient(235deg, var(--color-primary), #010615, var(--color-primary));
    }
`


// const ContentRowCSS = css``

export const WrapperSlider = styled.div`
    background: #fff;
    cursor: pointer; 

    .slick-slide{
        text-align: center;
    }

    .slick-dots{
        li button::before{
            color: #fff !important;
           
        }
    }
`

export const Tech = styled.div`
div{

    display: flex;
    align-items: center;
    position: relative;

    max-width: 200px;
    text-align: center;

     

  
}

    @media screen and (max-width: 575px) {
        max-width: 100px;
    }

    
`

