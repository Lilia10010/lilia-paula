
import {
    Container,
    ProfileInfo,
    ProfileLink,
    WrapperGithub,
    GithubIcon,
    WrapperLinkedin,
    LinkedinIcon,
    IconInfo,
    SnapchatIcon
} from './styles'

const MenuBar = () => {
    return (
        <Container>
            <ProfileInfo>
                <img src="https://avatars.githubusercontent.com/u/25871372?s=460&u=38d81d3b472e2508948f3be4cf49f358a3f74582&v=4" alt="perfil" />            
            </ProfileInfo>

            <ProfileLink>
                <WrapperGithub>
                    <a href="https://github.com/lilia10010">
                        <GithubIcon />
                    </a>
                </WrapperGithub>

                <WrapperLinkedin>
                    <a href="https://www.linkedin.com/in/lilia-paula-neiva/">
                        <LinkedinIcon />
                    </a>                    
                </WrapperLinkedin>
            </ProfileLink>

            <IconInfo>
                <a href="#">
                    <SnapchatIcon />
                    </a>
            </IconInfo>
        </Container>
    )
}

export default MenuBar;