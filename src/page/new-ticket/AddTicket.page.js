import React,{useState,useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation';

const initialFrmDt={
    subject:"daf",
    issueDate:"",
    detail:"",
  }

export const AddTicket= () => {
    const [frmData, setFrmData] = useState(initialFrmDt)
    useEffect(()=>{},[frmData]);
  
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFrmData({
            ...frmData,
            [name]: value,
        });
  };

  const handleOnSubmit= async(e)=>{
    e.preventDefault()
    const isValid=shortText(frmData.subject)
    console.log("form submint")
  }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"></PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}/>
            </Col>
        </Row>
    </Container>
  )
}
