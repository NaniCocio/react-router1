import {Container} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
    return (
        <Container className='text-center'> 
            <h1 className='pt-5 titulo'>Cuentanos, ¿en qué te podemos ayudar?</h1>
            <p className='form'>Correo:</p>
            <FloatingLabel
                controlId="floatingInput"
                className="mb-3 input"
                >
                <Form.Control type="email" placeholder="name@example.com"/>
            </FloatingLabel>
            
            <p className='form'>Descripción:</p>
            <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}/>
            </FloatingLabel>
            
            <Button className='boton' variant='danger'>Enviar</Button>
        </Container>
    );
};

export default Contacto;