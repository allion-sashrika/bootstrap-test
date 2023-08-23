import ListGroup from 'react-bootstrap/ListGroup';

export const ListGroupExample = () => {
    return (
        <ListGroup>
            <ListGroup.Item variant='primary'>Item 1</ListGroup.Item>
            <ListGroup.Item variant='warning'>Item 2</ListGroup.Item>
            <ListGroup.Item variant='danger'>Item 3</ListGroup.Item>
            <ListGroup.Item variant='light'>Item 4</ListGroup.Item>
            <ListGroup.Item variant='dark'>Item 5</ListGroup.Item>
        </ListGroup>
    )
}