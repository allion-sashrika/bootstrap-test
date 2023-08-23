import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export const PopoverExample = () => {
    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement='right'
                overlay={
                    <Popover>
                        <Popover.Header as='h3'>
                            Popover
                        </Popover.Header>
                        <Popover.Body>
                            Popover content
                        </Popover.Body>
                    </Popover>
                }>
                <Button variant='success'>Show Popover</Button> 
            </OverlayTrigger>
        </>
    )
}