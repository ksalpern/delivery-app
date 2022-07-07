import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

import avatar from '../img/avatar.png';
import logo from '../img/reserved/RESERVED_logo.svg.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config';
//import ShoppingCart from '../ShoppingCart/ShoppingCart';
//import localStorage from 'redux-persist/es/storage';



function Header() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  //LOGIN
  const login = async () => {
    if (!user) {
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
          {/* LOGO goes to homepage */}
          <Link to="/">
            <img src={logo} alt='logo' style={{ width: '110px' }} />
          </Link>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ display: 'flex', 'justify-content': 'flex-end' }} >

            <Nav >
              {/* LOGIN */}
              <Nav.Link eventKey={2} href="#customer">
                <motion.img whileTap={{ scale: 0.6 }}
                  src={user ? user.photoURL : avatar} alt='avatar' style={{ width: '30px' }}
                  onClick={login} />
              </Nav.Link>
              {/* LOGOUT AND ADD NEW ITEM */}
              {
                isMenu && (
                  <NavDropdown title="" id="collasible-nav-dropdown" bg="light" variant="light">
                    {
                      user && user.email === 'ksiushapodoprigora@gmail.com' && (
                        <Link to={'/createItem'}>
                          <NavDropdown.Item href="/createItem">New Item <MdAdd /></NavDropdown.Item>
                        </Link>
                      )
                    }
                    <NavDropdown.Item
                      onClick={logout}
                      href="#action/logout">Logout <MdLogout /></NavDropdown.Item>
                  </NavDropdown>
                )
              }

              {/* BASKET */}
              <Link to={'/shoppingCart'} style={{ color: 'white' }}  >
                <MdShoppingBasket />
              </Link>
              {cartItems && cartItems.length > 0 && (
              <div >
                <p style={{backgroundColor: 'white', borderRadius: '50px'}}>{cartItems.length}</p>
              </div>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </AnimatePresence>
  )
}

export default Header