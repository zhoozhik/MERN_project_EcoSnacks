import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from '../logo.png'
import { logout } from '../actioins/userAction'


const Header = () => {
  const dispatch = useDispatch()
   const userLogin = useSelector((state) => state.userLogin)
   const { userInfo } = userLogin
   const logoutHandler = () => {
     dispatch(logout())
   }
  return (
    <header>
      <Navbar bg='warning' expand='lg' collapseOnSelect>
        <Container>
          <Nav.Link as={Link} to='/'>
            <img src={logo} alt='' height='60px' />
          </Nav.Link>

          <Navbar.Brand as={Link} to='/'>
            EcoSnacks
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item as={Link} to='/profile'>
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
