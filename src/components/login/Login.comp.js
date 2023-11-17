import React from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginForm = ({handleOnchange,formSwitcher,handleOnSubmit,email,pass}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info  text-center'>Client Login</h1> <hr/>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnchange}
                    placeholder='Enter email'
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                    type='password'
                    name='password'
                    value={pass}
                    onChange={handleOnchange}
                    placeholder='password'
                    required
                    />
                </Form.Group>
                <Button type='submit'>Login</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!' onClick={()=>formSwitcher('rest')}>Forget password?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
}