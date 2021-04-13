import styled, { css } from 'styled-components'

export const Container = styled.div`
position: relative;
padding: 50px 50px 0 50px;
  
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
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    /* background: #fff; */
    z-index: -1;
    }

    ::after{
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
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

export const WrapperTechs = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    background: var(--color-white);

    @media screen and (max-width: 575px) {
        flex-direction: column;
        align-items: center; 
    }
    
`

export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    max-width: 200px;

    @media screen and (max-width: 575px) {
        max-width: 100px;
    }

    
`
