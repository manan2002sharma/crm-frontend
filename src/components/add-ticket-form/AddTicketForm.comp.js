import React from 'react'
import {Jumbotron,Form,Row,Col,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';
import './add-ticket-form.style.css'



export const AddTicketForm = ({handleOnSubmit,handleOnchange,frmDt}) => {
  
  console.log(frmDt);

  return (
    <div className='Jumbotron mt-3 add-new-ticket p-5'>
      <h1 className='text-info text-center mb-5'>
        Add New Ticket
      </h1>
      
      <Form onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    
                    name='subject'
                    value={frmDt.subject}
                    onChange={handleOnchange}
                    placeholder='Enter email'
                    required
                    />
                    </Col>
                </Form.Group >
                <Form.Group className='mt-4' as={Row}>
                    <Form.Label column sm={3}>Issue Found </Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    type='date'
                    name='issueDate'
                    value={frmDt.issueDate}
                    onChange={handleOnchange}
                    required
                    />
                    </Col>
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                    as='textarea'
                    name='detail'
                    rows='5'
                    value={frmDt.detail}
                    onChange={handleOnchange}
                    required
                    />
                </Form.Group>
                <Button type='submit' variant='info' className="btn btn-primary gap-2">Login</Button>
            </Form>
    </div>
  )
}

AddTicketForm.propTypes = {
   handleOnSubmit: PropTypes.func.isRequired,
   handleOnchange: PropTypes.func.isRequired,
   frmDt: PropTypes.object.isRequired,
//   frmDataErro: PropTypes.object.isRequired,
 };
