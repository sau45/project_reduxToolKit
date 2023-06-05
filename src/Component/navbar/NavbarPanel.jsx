import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './navbar.css'

import { useSelector } from 'react-redux';

function BasicExample() {

  const cartProduct = useSelector(state=>state.cart)
 

  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">ReduxTooLkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/product' as={Link}>Home</Nav.Link>
            <Nav.Link className='my-cart' to='/cart' as={Link}>My Cart {cartProduct.length}</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



function NavbarPanel() {
  return (
   <>
   <BasicExample/>
   </>
  )
}

export default NavbarPanel
