import React from 'react'
// import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import '../Navbar/Navbar.scss'

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar className='navbar'>
        <Navbar.Brand href="#home">KRYPTO</Navbar.Brand>
        <Nav className="nav-item">
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#pricing">pricing</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
          <Nav.Link href="#buynfts">buy nfts</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  )
}

export default NavBar