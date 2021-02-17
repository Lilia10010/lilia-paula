import styled from 'styled-components'
 
export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 10;
    width: 100%;

    height: 50px;
    align-items: center;

    background: #01010114;
`

export const MenuLinks = styled.div`
    /* width: 500px; */
    padding-right: 30px;

    ul{
        display: flex;
        justify-content: flex-end;
        list-style: none;
        font-weight: bold;
    }
`