import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export default function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Sochori</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Productos</Nav.Link>
          <Nav.Link href="#features">Envios</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
        </div>
    )
}
