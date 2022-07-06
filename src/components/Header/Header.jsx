import React, { useState } from 'react'
import { Navbar, Nav,  NavDropdown, Container } from 'react-bootstrap';
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import {Link} from  'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

import avatar from '../img/avatar.png';
import logo from '../img/reserved/RESERVED_logo.svg.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config';
//import localStorage from 'redux-persist/es/storage';



function Header() {

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const [{ user }, dispatch] = useStateValue();

const [isMenu, setIsMenu] = useState(false);

//LOGIN
const login = async () => {
 if(!user) {
  const {
    user: { refreshToken, providerData },
     } = await signInWithPopup(firebaseAuth, provider);
     dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
     });
     localStorage.setItem('user', JSON.stringify(providerData[0])); //pushes user's data to local store    
 } else {
  setIsMenu(!isMenu)
 }
};

//LOGOUT
const logout = () => {
  setIsMenu(false);
  localStorage.clear();

  dispatch({
    type: actionType.SET_USER,
    user: null,
  });
};

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
         src={user ? user.photoURL : avatar} alt='avatar' style={{ width: '30px'}}
         onClick={login} />
        </Nav.Link>
     
{
  isMenu && (
    <NavDropdown title="" id="collasible-nav-dropdown" bg="light" variant="light">
    {
    user && user.email === 'ksiushapodoprigora@gmail.com' && (
     <Link to={'/createItem'}>
      <NavDropdown.Item href="/createItem">New Item <MdAdd/></NavDropdown.Item>
      </Link>
    )
    }
      <NavDropdown.Item 
      onClick={logout}
      href="#action/3.2">Logout <MdLogout/></NavDropdown.Item>
     </NavDropdown>
  )
}

      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </AnimatePresence>
  )
}

export default Header