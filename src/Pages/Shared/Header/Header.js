import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                        <Nav.Link as={NavLink} to='/login'>More deets</Nav.Link>
                        <Button variant="outline-primary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;