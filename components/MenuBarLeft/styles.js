import styled, { css } from "styled-components";

import { Snapchat } from '@styled-icons/boxicons-logos/Snapchat'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'


export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;

    height: 100vh;
    max-width: var(--width-menu-left);
    padding: 20px 5px;
    background: #000;

`;
export const ProfileInfo = styled.div`


    img{
        width: 88px;
        border-radius: 50%;
    }
`;
export const ProfileLink = styled.div``;

export const WrapperGithub = styled.div``;

export const WrapperLinkedin = styled.div``;
export const IconInfo = styled.div``;

const iconCSS = css`
    width: 31px;
    height: 31px;
    color: var(--color-primary);
    transition: .5s;

    :hover{
        color: var(--color-primary-dark);
    }
`;



export const GithubIcon = styled(Github)`
    ${iconCSS}
`;
export const LinkedinIcon = styled(Linkedin)`
    ${iconCSS}
 `;
export const SnapchatIcon = styled(Snapchat)`
     ${iconCSS}
`;