import React,{Component, useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import FormComp from '../components/FomComp'
import style from '../style.css'
import Img7 from '../img/80.jpg'
import Img8 from '../img/83.jpg'
import Img9 from '../img/88.jpg'

function Profissao() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="row">
      <div className="col">
        <div className="cold-md-12 menu">
            
         
      <Navbar bg="light" expand='lg'>
          <Navbar.Brand className="menus" href="/">Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="apresentacao">Apresentação</Nav.Link>
              <Nav.Link href="formacao">Minha formação academica</Nav.Link>
              <Nav.Link href="profissao">Minha formação profissional</Nav.Link>
              <NavDropdown title="Minhas paginas" id="basic-nav-dropdown">
              <NavDropdown.Item href="apresentacao">Apresentação</NavDropdown.Item>
                <NavDropdown.Item href="formacao">Minha formação</NavDropdown.Item>
                <NavDropdown.Item href="profissao">Minha formação profissional</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </div>

          <div className = "cold-md-12" align = "center"> 
            <br></br>
              <h1> Currículo </h1>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>

<a className="github-link" href="https://github.com/keilafricks" target="_blank">
<i className="fa fa-github"></i>
</a>

<a className="instagram-link" href="https://www.instagram.com/keyllafricks17/" target="_blank">
<i className="fa fa-instagram"></i>
</a>

<a className="facebook-link" href="https://www.facebook.com/keylla.fricks" target="_blank">
<i className="fa fa-facebook"></i>
</a>

<a className="twitter-link" href="https://twitter.com/KeilaFricks" target="_blank">
<i className="fa fa-twitter"></i>
</a>

<a className="whatsapp-link" href="https://web.whatsapp.com/send?phone=27998904708" target="_blank">
<i className="fa fa-whatsapp"></i>
</a>

<a className="linkedin-link" href="https://www.linkedin.com/in/keila-fricks-pacheco-39bbb66b/" target="_blank">
<i className="fa fa-linkedin"></i>
</a>

            <br></br>
            <br></br>
          </div>

         <div className="total">
        

	<div className="row">
        <div className="col-md-6" align="center">
       <br></br>
       <h3> <p> No momento ainda estou adquirindo experiência.</p><p> Mas sou adepta a aprender coisas novas, para assim somar junto a organização.</p><p>Ajudando no crescimento da mesma.</p> </h3>
        </div>

        <div className="col-md-6" align = "center">
        <div className="imgs">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img7}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img8}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img9}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>

      </div>

      </div>
      </div> 
  
      <br></br>
    <br></br>
    <br></br>
      </div>
    </div>
  );
}

export default Profissao;