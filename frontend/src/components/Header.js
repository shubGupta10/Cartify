import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant="dark" expand="lg" collapseOnSelect justify-content-end>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand >Cartify</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login"><Nav.Link ><FaUser />Sign In</Nav.Link></LinkContainer>
              <LinkContainer to="/cart"><Nav.Link ><FaShoppingCart />Cart</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
