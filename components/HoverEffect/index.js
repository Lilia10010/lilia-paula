
import {
    Teste
} from './styles'
const HoverEffect = () =>{

    const span = []

    for(let i = 0; i < 1500; i++){
        span.push(<span></span>)
    }

   // console.log(span)

    return(
        <Teste>
           
               {span}
           
            </Teste>
    )
}

export default HoverEffect