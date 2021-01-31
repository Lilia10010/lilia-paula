
import { 
    Container,
    CardOne,
    CardTwo,
    CardThree,
    Cards,
    LogoReactIcon
} from './styles'

const RowOne = () => {
    return(
        
        <Container>
            <Cards>
                <CardOne>
                    < LogoReactIcon /> 
                    <span>Lorem</span> 
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div>Footer</div>

                </CardOne>

                <CardTwo>
                < LogoReactIcon />
                    <span>Lorem</span> 
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div>Footer</div>
                </CardTwo>

                <CardThree>
                < LogoReactIcon />
                    <span>Lorem</span> 
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div>Footer</div>
                </CardThree>
            </Cards>

            
            

        </Container>

        
    
        
    )
}

export default RowOne