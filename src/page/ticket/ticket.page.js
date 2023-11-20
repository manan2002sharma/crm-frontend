import React ,{useEffect, useState} from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from'../../assets/data/dummy-ticket.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'

const ticket=tickets[0]

export const Ticket = () => {
    const [message,setMessage]= useState('')
    useEffect(()=>{},[message]);

    const handleOnChange=(e)=>{
        setMessage(e.target.value);
    };
    const handleOnSubmit=(e)=>{
        alert('submitted')
    };
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page='Ticket'/>
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            <div className='subject'>
                subject:{ticket.subject}
            </div>
            <div className='date'>Addedat:{ticket.addedAt}</div>
            <div className='status'>id:{ticket.id}</div>
            </Col>
            <Col className='text-right'>
            <Button variant='outline-info'>Close Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col>
            <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <UpdateTicket msg={message} handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            />
            </Col>
        </Row>
    </Container>
  )
}
