import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">ROUTING</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/user">User</Nav.Link>
                    <Nav.Link href="/about">About Routing</Nav.Link>
                    <Nav.Link href="/contact">User Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button className='mx-2' variant="success"><Link style={{color:'white'}} to={'/signin'}>Sign In</Link></Button>
                    <Button className='mx-2'><Link style={{color:'white'}} to={'/signup'}>Sign Up</Link></Button>
                </Form>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
};

export default Header;