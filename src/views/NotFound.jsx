import {Container} from 'react-bootstrap';

const NotFound = ( ) => {
    return(
        <Container className='text-center'>
            <h1 className='pt-5'>404: Página no encontrada</h1>
            <p>Lo sentimos, pero la página que buscabas no se encuentra.</p>
        </Container>

    )
}

export default NotFound;