import styled from 'styled-components'
 
export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    z-index: 10;
    width: calc(100% - var(--width-menu-left));

    height: 50px;
    align-items: center;

    background: #f2f2f24a;
`

export const MenuLinks = styled.div`
    width: 500px;
    padding-right: 30px;

    ul{
        display: flex;
        justify-content: flex-end;
        list-style: none;
        font-weight: bold;
    }
`