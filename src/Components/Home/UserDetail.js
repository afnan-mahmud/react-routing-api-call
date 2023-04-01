import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './UserDetail.css'

const UserDetail = (props) => {
    const {name, username, email, phone, company} = props.user;

    return (
            <Card className='infobox'>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Username: {username}</Card.Text>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>Phone: {phone}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
};

export default UserDetail;