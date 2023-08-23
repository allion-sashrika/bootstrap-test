import { useState } from "react"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export const AlertExample = () => {
    const [show , setShow] = useState(true)

    return (
        <div>
            <Alert show={show} variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>An error occured !</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        Dismiss
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </div>
    )
}