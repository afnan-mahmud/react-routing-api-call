import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ProfileInfo from '../../images/login-page.jpg';
import './Signup.css';

const Signup = () => {
    const {name, setName} = useState('');
    const {userName, setUserName} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');

    function SignUP(){
        console.log(name, userName, email, password);
    }
    return (
        <div>
            <Row>
                <Col>
                    <img style={{height:'500px', width:'500px'}} src={ProfileInfo} alt="" />
                </Col>
                <Col style={{padding:'100px'}}>
                    <div className='signup-area'>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Name: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="name" placeholder="Enter your Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Username: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="username" placeholder="Enter your username" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Email: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Password: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Enter your email" />
                                </Col>
                            </Form.Group>
                            <Button onClick={SignUP}>Sign Up</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;