import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export const ToastExample = () => {
    const [show , setShow] = useState(false)

    const toggleShow = () => setShow(!show)

    return (
        <Col>
            <Button onClick={toggleShow} className='mb-2'>
                Toggle Toast
            </Button>
            <Toast show={show} onClose={toggleShow}>
                <Toast.Header>
                    <strong className='me-auto'>Car</strong>
                    <small>8 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                    This the body of the Toast
                </Toast.Body>
            </Toast>
        </Col>
    )
}