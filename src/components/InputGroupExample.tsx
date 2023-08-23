import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const InputGroupExample = () => {
    return (
        <div>
            <InputGroup className='mb-3'>
                <InputGroup.Text id='inputgroup1'>@</InputGroup.Text>
                <Form.Control
                    placeholder='Username'
                    aria-label='Username'
                    aria-describedby='inputgroup1'
                />
            </InputGroup>
            <InputGroup className='mb-3'>
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby='inputgroup2' 
                />
                <InputGroup.Text id='inputgroup2'>@example.com</InputGroup.Text>
            </InputGroup>
        </div>
    )
}