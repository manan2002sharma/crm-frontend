import React,{useState,useEffect} from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-ticket.json'

export const TicketLIsts = () => {
    const [str, setstr] = useState('')
    useEffect(() => {}, [str]);
    
    const handleOnChange=e=>{
        setstr(e.target.value);
        console.log(e.target)
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <Button variant='info'>Add New Ticket</Button>
            </Col >
            <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}
