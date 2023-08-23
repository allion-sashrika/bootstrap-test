import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export const ButtonGroupExample = () => {
    return (
        <ButtonToolbar>
            <ButtonGroup className='me-2' aria-label='First group'>
                <Button>1</Button> <Button>2</Button> <Button>3</Button>
            </ButtonGroup>
            <ButtonGroup  aria-label='Second group'>
                <Button>4</Button> <Button>5</Button> <Button>6</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}