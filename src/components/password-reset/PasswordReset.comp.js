import React from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ResetPassword = ({handleOnchange,formSwitcher,handleOnResetSubmit,email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info  text-center'>Client Login</h1> <hr/>
            <Form onSubmit={handleOnResetSubmit}>
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
                
                <Button type='submit'>Reset Password</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!' onClick={()=>formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
}