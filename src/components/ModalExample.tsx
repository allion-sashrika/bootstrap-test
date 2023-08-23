import { useState } from 'react';
import { ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalExample = () => {
    const [show , setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant='success' onClick={handleShow}>
                Launch Modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is the content of the modal.</Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-dark' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='outline-primary' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}