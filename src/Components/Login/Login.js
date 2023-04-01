import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ProfileInfo from '../../images/login-page.jpg';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Row>
                <Col>
                    <img style={{height:'500px', width:'500px'}} src={ProfileInfo} alt="" />
                </Col>
                <Col style={{padding:'100px'}}>
                    <div className='login-area'>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Email: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">Password: </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Col>
                            </Form.Group>
                            <Button>Sign In</Button>
                        </Form>
                        <br />
                        <p><a href="#">Forgetten Passowrd ?</a></p>
                        <p><a href="/signup">Create Account</a></p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;