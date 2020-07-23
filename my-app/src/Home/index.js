import React,{Component, useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Carousel  } from 'react-bootstrap';
import FormComp from '../components/FomComp'
import style from '../style.css'
import Img2 from '../img/75.jpg'
import Img3 from '../img/73.jpg'
import Img4 from '../img/67.jpg'

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="row">
      <div className="col">
          

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
            <FormComp/>
            <br></br>
          </div>

         
          <div className="row">
        <div className="col-md-6" align="center">
        <br></br>
        <h2> <p>Me chamo </p> <p> Keila Fricks Pacheco </p></h2><h3><p>Sou desenvolvedora WEB</p></h3>
        <div className="col text-center align-self-bottom pt-2">
            <Link to="/apresentacao" className="btn btn-black">
            Click aqui para me conhecer mais
            </Link>
       <br></br>
       <br></br>
</div>
</div>

<div className="col-md-6" align="center">
<div className="imgs">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
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

export default Home;