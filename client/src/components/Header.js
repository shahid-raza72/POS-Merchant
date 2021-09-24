import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

export const Header = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Sale Dashboard</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      
      </Nav>
      </Container>
    </Navbar>
    )
}
