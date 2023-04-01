import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ProfileCheck from '../../images/check-profile.jpg';
import ProfileInfo from '../../images/profile-info.jpg';
import Profile from '../../images/profile.jpg';
import UserDetail from './UserDetail';
import './Home.css';


const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [data , setData] = useState([]);
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <Row>
                        <Col style={{padding:'100px'}}>
                            <h1 style={{color:'#1d248e'}}><b>Designer and illustrator <br /><span style={{color:'#ee857d'}}>Jey Austen</span> uses a color</b></h1><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem perferendis omnis aspernatur veritatis aliquam suscipit expedita sunt dolores libero, nesciunt dignissimos consequuntur vero aliquid, voluptate maxime commodi. Fuga, tenetur?0</p> <br />
                            <Button>See more...</Button>
                        </Col>
                        <Col>
                            <img style={{height:'500px', width:'500px'}} src={ProfileCheck} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col>
                            <img style={{height:'500px', width:'500px'}} src={ProfileInfo} alt="" />
                        </Col>
                        <Col style={{padding:'100px'}}>
                            <h1 style={{color:'#2c444e'}}><b>Designer and illustrator <br /><span style={{color:'#93488f'}}>Jey Austen</span> uses a color</b></h1><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem perferendis omnis aspernatur veritatis aliquam suscipit expedita sunt dolores libero, nesciunt dignissimos consequuntur vero aliquid, voluptate maxime commodi. Fuga, tenetur?0</p> <br />
                            <Button>See more...</Button>
                        </Col>
                    </Row>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Row style={{backgroundColor:'#f6f6f8'}}>
                        <Col style={{padding:'100px'}}>
                            <h1 style={{color:'#1a4b7c'}}><b>Designer and illustrator <br /><span style={{color:'#3b3b3b'}}>Jey Austen</span> uses a color</b></h1> <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem perferendis omnis aspernatur veritatis aliquam suscipit expedita sunt dolores libero, nesciunt dignissimos consequuntur vero aliquid, voluptate maxime commodi. Fuga, tenetur?0</p> <br />
                            <Button>See more...</Button>
                        </Col>
                        <Col>
                            <img style={{height:'500px', width:'500px'}} src={Profile} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            <div style={{marginTop:'20px'}}>
                <h1><b>Our popular client information</b></h1>
                <div className='grid'>
                    {
                        data.map(user => <UserDetail user={user}></UserDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;