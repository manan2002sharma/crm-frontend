import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import logo from '../../assets/img/vlcsnap-2023-10-12-15h15m22s061.png'

export const Header = () => {
  return (
    <Navbar
    collapseOnSelect variant='dark' bg='info' expand='md'
    >
        <Navbar.Brand>
            <img src={logo} alt="logo" width="50px"></img>
        </Navbar.Brand>
        <Navbar.Toggle 
        aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                <Nav.Link href='/dashboard'>Ticket</Nav.Link>
                <Nav.Link href='/dashboard'>Loutout</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
