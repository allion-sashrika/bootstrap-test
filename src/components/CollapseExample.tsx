import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export const CollapseExample = () => {
    const [open , setOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls='collapse-text'
                aria-expanded={open}
            >
                {!open ? "Show" : "Hide"}
            </Button>
            <Collapse in={open}>
                <div id='collapse-text'>
                    This is the hidden text.
                </div>
            </Collapse>
        </>
    )
}