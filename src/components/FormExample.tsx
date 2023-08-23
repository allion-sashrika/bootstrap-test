import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

export const FormExample = () => {
    const { Formik } = formik

    const schema = yup.object().shape({
        firstName : yup.string().required(),
        lastName : yup.string().required(),
        city : yup.string().required(),
        zip : yup.string().required(),
        terms : yup.bool().required().oneOf([true], 'You must agree to terms and conditions')
    })

    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                firstName:'',
                lastName:'',
                city:'',
                zip:'',
                terms:false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md='6'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder='Enter the first name'
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName} 
                            />
                            <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md='6'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='lastName'
                                placeholder='Enter the last name'
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md='6'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                name='city'
                                placeholder='Enter the city'
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city} 
                            />
                            <Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md='6'>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type='text'
                                name='zip'
                                placeholder='Enter the zip'
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip} 
                            />
                            <Form.Control.Feedback type='invalid'>{errors.zip}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name='terms'
                            label='Agree to terms and conditions'
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            feedbackType='invalid' 
                        />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            )}
        </Formik>
    )
}