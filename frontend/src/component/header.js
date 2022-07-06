import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container >
  <LinkContainer to={"/"}>

    <Navbar.Brand>E-commercel</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="ml-auto"
      >
        <LinkContainer to={"/"}>
        <Nav.Link href="#action1"><i className="fas fa-shopping-cart"></i>Card</Nav.Link>

        </LinkContainer>

        <LinkContainer to={"/"}>

        <Nav.Link href="#action2"><i className="fas fa-user"></i>Singin</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header