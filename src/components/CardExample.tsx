import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car from './car.jpeg';

export const CardExample = () => {
    return (
        <Card style={{ width:'18rem' }}>
            <Card.Img src={Car} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some text</Card.Text>
            </Card.Body>
            <Button variant='outline-primary'>Button</Button>
        </Card>
    )
}