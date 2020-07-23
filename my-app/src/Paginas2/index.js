import React from 'react';
import { Link } from 'react-router-dom';
// import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Page2() {
  return (
    <div className="row">
      <div className="col">
          <div className="col text-center align-self-bottom pt-2">
            <Link to="/page1" className="btn btn-primary">
              Ir para primeira pagina
            </Link>
            <h1>keila 2</h1>
{/* 
            <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
</> */}




      <Navbar bg="dark" variant="dark" expand='lg'>
          <Navbar.Brand href="#home">Menu Principal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="page1">Home</Nav.Link>
              <Nav.Link href="page2">Link</Nav.Link>
              <NavDropdown title="Minhas paginas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
              {/* <Button variant="outline-success">Search</Button> */}
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

          </div>
      </div>
    </div>
  );
}

export default Page2;