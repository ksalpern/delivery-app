import React from 'react'
import { Navbar, Nav,  NavDropdown, Container } from 'react-bootstrap';
import {MdShoppingBasket} from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import {Link} from  'react-router-dom';
import avatar from '../img/avatar.png';
import logo from '../img/reserved/RESERVED_logo.svg.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function Header() {

const login = () => {

}

  return (
    <AnimatePresence>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
   
    <Link to="/">
      <img src={logo} alt='logo' style={{ width: '110px'}} />
    </Link>
    <NavDropdown title=">" id="collasible-nav-dropdown" bg="light" variant="light">
          <NavDropdown.Item href="#action/3.1">Bershka</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Oodji</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">H&M</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="#shoppingCart">
          <MdShoppingBasket/>
        </Nav.Link>
        <Nav.Link eventKey={2} href="#customer">
         <motion.img  whileTap={{scale: 0.6}}
         src={avatar} alt='avatar' style={{ width: '30px'}}
         onClick={login} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </AnimatePresence>
  )
}

export default Header