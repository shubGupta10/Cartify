import {useNavigate} from 'react-router-dom'
import React from 'react'
import {Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {useLogoutMutation} from '../slices/usersApiSlice'
import SearchBox from './SearchBox';
import {logout} from '../slices/authSlice'

const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  const {userInfo} = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall]= useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header>
      <Navbar bg='danger' variant="dark" expand="lg" collapseOnSelect justify-content-end>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand >Cartify</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox/>
              <LinkContainer to="/cart"><Nav.Link ><FaShoppingCart />Cart
              {
                cartItems.length > 0 && (
                  <Badge pill bg='success' style={{marginLeft:'5px'}}>
                    {cartItems.reduce((a,c) => a + c.qty , 0)}
                  </Badge>
                ) 
              }
              </Nav.Link></LinkContainer>
              { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                <Nav.Link href='/login'>
                  <FaUser/> Sign In
                </Nav.Link>
              </LinkContainer>
              ) }
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userList'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
