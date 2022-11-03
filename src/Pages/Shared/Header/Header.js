import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/services'>Services</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to='/'>More deets</Nav.Link>
                        {user ?
                            <Button variant="outline-danger" onClick={logout}>SignOut</Button> :
                            <Button as={NavLink} to='/login' variant="outline-primary">Login</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;